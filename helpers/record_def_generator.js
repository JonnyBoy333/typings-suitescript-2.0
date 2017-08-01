const jsdom = require('node-jsdom');
const Type = require('./types');
const fs = require('fs');

//Get all the NetSuite record URLs
let urls = [];
let completed = {};
for (let record in Type) {
    urls.push(`https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2016_2/script/record/${record}.html`)
}

function createDefinitionFile (url, cb) {
    //Load the dom for the url
    jsdom.env(
        url,
        [],
        function (errors, window) {
            if (errors) {
                console.error('[ERROR] loading page', errors);
                return;
            }

            // Load jQuery and all the table nodes
            let jQuery = require('jquery')(window);
            let allTables = jQuery('tbody');
            if (allTables.length === 0) {
                console.error('[ERROR] Page Did Not Load Correctly', url);
                cb();
                return;
            }

            // Initialize variables
            let mainFields = '';
            let sublistFields = [];
            let sublists = '';
            const internalId = jQuery('h3:first').text().substring(13);
            const recordType = Type[internalId];
            //console.log('Internal ID', internalId);
            //console.log('All tables', allTables);

            // Function to sort the fields object by type
            function groupArray(fields) {
                var group_to_values = fields.reduce(function (obj, item) {
                    obj[item.fieldType] = obj[item.fieldType] || [];
                    obj[item.fieldType].push(item.fieldId);
                    return obj;
                }, {});

                //console.log('Group to values', group_to_values);
                return Object.keys(group_to_values).map(function (key) {
                    return { field_type: key, id: group_to_values[key] };
                });
            }

            // Loop through each table and extract ids
            for (let j = 0; j < allTables.length; j++) {
                let names = [];
                let listHeader = allTables.eq(j).parent().prev('h4').text().trim();
                let listName = listHeader ? listHeader.substring(0, listHeader.indexOf(' ')): 'main';
                let rows = allTables.eq(j).children('[id*="field"]');

                // Loop through each row in the table and get the field ID and type
                for (let i = 0; i < rows.length; i++) {
                    let id = rows.eq(i).attr('id');
                    //console.log('ID', id);
                    let name = rows.eq(i).children().eq(0).text();
                    let fieldType = rows.eq(i).children().eq(1).text();
                    names.push({
                        fieldId: name,
                        fieldType: fieldType
                    })
                }
                if (names.length > 0) {
                    if (listName === 'main') {
                        // Group all the main fields and sort them
                        mainFields = groupArray(names);
                        //console.log(mainFields);
                    }
                    else {
                        // Group the sublist fields as well
                        sublistFields.push({
                            sublist: listName,
                            fields: groupArray(names)
                        });
                        //console.log('sublists', sublists);
                        sublists += sublists ? ` | '${listName}'` : `'${listName}'`;
                    }
                    // console.log(listName);
                    // console.log(names);
                }
            }
            //console.log('Main Fields', mainFields);
            if (!mainFields) {
                console.log('No Main Fields', url);
                cb();
                return;
            }
            //console.log('Sublists', sublists)eeeef
            //console.log('Sublist Fields', sublistFields);

            // Function to group all the main field text together
            let mainFieldsTxt = mainFields.length === 1 ? 
                `main_${mainFields[0].field_type}` : 
                mainFields.reduce((txt, val, i, arr) => {
                    if (i === arr.length - 1) return `${txt}main_${val.field_type}`;
                    else return i === 1 ? `main_${txt.field_type} | main_${val.field_type} | ` : `${txt}main_${val.field_type} | `;
                });
            //console.log('Main Field Text', mainFieldsTxt);
            
            // Concatenates fields into one string
            function concatTopFields(fieldArr, sublist) {
                let txt = '';
                for (let i = 0; i < fieldArr.length; i++) {
                    txt += `type ${sublist}_${fieldArr[i].field_type} = '${fieldArr[i].id.join("' | '")}';\n`;
                }
                //console.log('Field Text', txt);
                return txt;
            }

            // Concatenates fields into one string
            function concatSublistTypes(fieldArr, sublist) {
                let txt = '';
                for (let i = 0; i < fieldArr.length; i++) {
                    txt += i === fieldArr.length - 1 ? `${sublist}_${fieldArr[i].field_type}` : `${sublist}_${fieldArr[i].field_type} | `;
                }
                //console.log('Field Text', txt);
                return txt;
            }

            // Concatenates fields into one string
            function concatSublists(sublistFields, mainTxt) {
                let txt = '';
                for (let i = 0; i < sublistFields.length; i++) {
                    txt += i === sublistFields.length - 1 ? `${mainTxt}_${sublistFields[i].sublist}` : `${mainTxt}_${sublistFields[i].sublist} | `;
                }
                //console.log('Field Text', txt);
                return txt;
            }

            // Write the text for the record file
            let fileTxt =
`
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './_EventTypes'

`

            //Add main field types to the top of the file
            fileTxt += `// main field types\n`
            fileTxt += concatTopFields(mainFields, 'main');
            fileTxt += `\n`;

            //Add sublist field types to the top of the file
            for (let i = 0; i < sublistFields.length; i++) {
                fileTxt += `// ${sublistFields[i].sublist} field types\n`;
                fileTxt += concatTopFields(sublistFields[i].fields, sublistFields[i].sublist);
                fileTxt += `\n`;
            }

            fileTxt +=
`
interface AttachOptions {
    /**
     * The record to attach.
     */
    record: AttachRecordOptions;
    /**
     * The record that the options.record gets attached to.
     */
    to: AttachRecordOptions;
    /**
     * The name-value pairs containing attributes for the attachment.
     */
    attributes?: any;
}

interface AttachRecordOptions {
    /**
     * The type of record to attach.
     */
    type: Type | string;
    /**
     * The internal ID of the record to attach.
     */
    id: number | string;
}

interface DetachOptions {
    /** The record to be detached. */
    record: AttachRecordOptions;
    /** The destination record that options.record should be detached from. */
    from: AttachRecordOptions;
    /** Name-value pairs containing default values of fields in the new record. */
    attributes?: any;
}

`
        if (sublists) {
            fileTxt += 
`
interface CancelCommitLineOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
    /** The line number to select in the sublist. */
    line: number;
}

`
        }

        for (let i = 0; i < sublistFields.length; i++) {
            fileTxt +=
`
// ${sublistFields[i].sublist} type definitions
interface FindSublistLineWithValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
}

interface GetMatrixHeaderCountOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: '${sublistFields[i].sublist}';
    /** The intenral ID of the matrix field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
}

interface GetMatrixHeaderFieldOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of the matrix field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: '${sublistFields[i].sublist}';
    /** The intenral ID of the matrix field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The column number for the field. */
    column: number
    /**
     * The value to set the field to.
     * The value type must correspond to the field type being set. For example:
     * - Text, Radio and Select fields accept string values.
     * - Checkbox fields accept Boolean values.
     * - Date and DateTime fields accept Date values.
     * - Integer, Float, Currency and Percent fields accept number values.
     */
    value: boolean | string | number | Date | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Indicates whether to perform slaving synchronously. */
    fireSlavingSync?: boolean;
}

interface SetCurrentSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /**
     * The value to set the field to.
     * The value type must correspond to the field type being set. For example:
     * - Text, Radio and Select fields accept string values.
     * - Checkbox fields accept Boolean values.
     * - Date and DateTime fields accept Date values.
     * - Integer, Float, Currency and Percent fields accept number values.
     */
    value: FieldValue;
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetCurrentSublistTextOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatSublistTypes(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The internal ID of a standard or custom sublist field. */
    line: number;
    /**
     * The value to set the sublist field to.
     * The value type must correspond to the field type being set. For example:
     * - Text, Radio and Select fields accept string values.
     * - Checkbox fields accept Boolean values.
     * - Date and DateTime fields accept Date values.
     * - Integer, Float, Currency and Percent fields accept number values.
     */
    value: FieldValue;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

`
            }

            fileTxt +=
`interface GetSelectOptionsOpts {
    /** The search string to filter the select options that are returned. */
    filter: string;
    /** The following operators are supported: contains, is, startswith. Default is contains. */
    operator: "contains" | "is" | "startswith";
}

interface HasSubrecordOptions {
    /** The internal ID of the field that may contain a subrecord. */
    fieldId: ${mainFieldsTxt};
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
    /**
     * The value to set the field to.
     * The value type must correspond to the field type being set. For example:
     * - Text, Radio and Select fields accept string values.
     * - Checkbox fields accept Boolean values.
     * - Date and DateTime fields accept Date values.
     * - Integer, Float, Currency and Percent fields accept number values.
     */
    value: FieldValue;
    /** If set to true, the field change and slaving event is ignored. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetFieldTextOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
    /**
     * The value to set the field to.
     * The value type must correspond to the field type being set. For example:
     * - Text, Radio and Select fields accept string values.
     * - Checkbox fields accept Boolean values.
     * - Date and DateTime fields accept Date values.
     * - Integer, Float, Currency and Percent fields accept number values.
     */
    value: boolean | string | number | Date | string[];
    /** If set to true, the field change and slaving event is ignored. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

type FieldValue = Date | number | string | string[] | boolean;


interface SubmitConfig {
    /** Indicates whether to enable sourcing during the record update. Defaults to true. */
    enableSourcing?: boolean;
    /** Indicates whether to ignore mandatory fields during record submission. Default is false. */
    ignoreMandatoryFields?: boolean;
}

interface SubmitFieldsOptions {
    /** The type of record. */
    type: Type | string;
    /** The internal ID of the existing record instance in NetSuite. */
    id: string | number;
    /** The ID-value pairs for each field you want to edit and submit. */
    values: any;
    /** Additional options to set for the record. */
    options?: SubmitConfig;
}
/**
 * The 'value' parameter in this function is an object with matching properties and values.
 * ex.: value: {'name': 'Bob', 'department': '12'}
 */

export interface RecordCreateOptions_${recordType} { // This one gets exported
    /**
     * The record type.
     */
    type: Type.${recordType};
    /**
     * Determines whether the new record is dynamic. If set to true, the record is created in dynamic mode. If set to false, the record is created in standard mode. By default, this value is false.
     * - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in standard mode, the record’s body fields and sublist line items are not sourced, calculated, and validated until the record is saved (submitted) with Record.save(options).
     * - When you work with a record in standard mode, you do not need to set values in any particular order. After submitting the record, NetSuite processes the record’s body fields and sublist line items in the correct order, regardless of the organization of your script.
     * - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in dynamic mode, the record’s body fields and sublist line items are sourced, calculated, and validated in real-time. A record in dynamic mode emulates the behavior of a record in the UI.
     * - When you work with a record in dynamic mode, it is important that you set values in the same order you would within the UI. If you fail to do this, your results may not be accurate.
     */
    isDynamic?: boolean;
    /**
     * Name-value pairs containing default values of fields in the new record.
     */
    defaultValues?: any;
}

export interface RecordTransformOptions_${recordType} { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.${recordType};
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_${recordType} { // This one gets exported
    /**
     * The record type.
     */
    type: Type.${recordType};
    /**
     * The internal ID of the existing record instance in NetSuite.
     */
    id: number | string;
    /**
     * Determines whether the new record is dynamic. If set to true, the record is created in dynamic mode. If set to false, the record is created in standard mode. By default, this value is false.
     * - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in standard mode, the record’s body fields and sublist line items are not sourced, calculated, and validated until the record is saved (submitted) with Record.save(options).
     * - When you work with a record in standard mode, you do not need to set values in any particular order. After submitting the record, NetSuite processes the record’s body fields and sublist line items in the correct order, regardless of the organization of your script.
     * - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in dynamic mode, the record’s body fields and sublist line items are sourced, calculated, and validated in real-time. A record in dynamic mode emulates the behavior of a record in the UI.
     * - When you work with a record in dynamic mode, it is important that you set values in the same order you would within the UI. If you fail to do this, your results may not be accurate.
     */
    isDynamic?: boolean;
    /**
     * Name-value pairs containing default values of fields in the new record.
     */
    defaultValue?: any;
}

interface RecordSaveFunction {
    (options?: SubmitConfig): number;
    promise(options?: SubmitConfig): Promise<number>;
}

// Exported for other modules to be able to consume this type
export interface ${recordType} extends Record {
`
if (sublists) {
    fileTxt += 
`
    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: ${concatSublists(sublistFields, 'FindSublistLineWithValueOptions')}): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: ${concatSublists(sublistFields, 'FindSublistLineWithValueOptions')}): number;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: ${concatSublists(sublistFields, 'GetCurrentSublistValueOptions')}): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: ${concatSublists(sublistFields, 'GetCurrentSublistValueOptions')}): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: ${concatSublists(sublistFields, 'GetCurrentSublistValueOptions')}): FieldValue;
    /** Returns the value of a sublist field. */
    getSublistValue(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: ${concatSublists(sublistFields, 'GetSublistValueOptions')}): number;
    /** Returns the number of lines in a sublist. */
    getLineCount(options: RecordGetLineCountOptions): number;
    getLineCount(sublistId: string): number;
    /** Returns the specified sublist. */
    getSublist(options: RecordGetLineCountOptions): Sublist;
    /** Removes the subrecord for the associated field. */
    removeSubrecord(options: RecordGetLineCountOptions): void;
    /** Selects a new line at the end of a sublist. */
    selectNewLine(options: RecordGetLineCountOptions): void;
    /** Returns all the field names in a sublist. */
    getSublistFields(options: RecordGetLineCountOptions): string[];
`
        }
        fileTxt +=
`    /** Returns the text representation of a field value. */
    getText(options: GetFieldOptions): string | string[];
    //getText(fieldId: string): string | string[];
    /** Returns the value of a field. */
    //getValue(options: GetFieldOptions_PO): Field;
    getValue(options: GetFieldOptions): string;
    /** Returns a field object from a record. */
    getField(options: GetFieldOptions): Field;
    /** Gets the subrecord for the associated field. */
    getSubrecord(options: GetFieldOptions): Record;
}

export interface RecordCopyFunction {
    (options: CopyLoadOptions_${recordType}): ${recordType};
    promise(options: CopyLoadOptions_${recordType}): Promise<${recordType}>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_${recordType}): ${recordType};
    promise(options: RecordCreateOptions_${recordType}): Promise<${recordType}>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_${recordType}): ${recordType};
    promise(options: CopyLoadOptions_${recordType}): Promise<${recordType}>;
}
`
        fs.writeFile(`./N/recordTypes/${Type[internalId]}.d.ts`, fileTxt, (err) => {
            if (err) throw err;
            console.log(`${Type[internalId]} file has been saved!`);
            completed[internalId] = Type[internalId];
            cb();
        });
    });
}

// Process each of the requests with a Promise
let requests = urls.map((url) => { 
    //console.log('Processing URL', url);
    return new Promise((resolve) => {
        createDefinitionFile(url, resolve);
    });
}, Promise.resolve());

Promise.all(requests).then(() => {
    // console.log('Finished these records', JSON.stringify(completed));

    // Generate the text for the _record_exports.d.ts file
    let recordExportsTxt = `import { CopyLoadOptions, RecordCreateOptions, Record } from '../record';\n`;
    for (let recordType in completed) {
        recordExportsTxt += `import { CopyLoadOptions_${completed[recordType]}, RecordCreateOptions_${completed[recordType]}, ${completed[recordType]} } from './${completed[recordType]}';\n`
    }

    recordExportsTxt += `
// Export Record Load Function
interface RecordLoadFunction {
    (options: CopyLoadOptions): Record;
    promise(options: CopyLoadOptions): Promise<Record>;
}

interface RecordLoadFunction {`;

    for (let recordType in completed) {
        recordExportsTxt += `
    (options: CopyLoadOptions_${completed[recordType]}): ${completed[recordType]};
    promise(options: CopyLoadOptions_${completed[recordType]}): Promise<${completed[recordType]}>;`;
    }

    recordExportsTxt += `
}

// Export Record Load Function
interface RecordCopyFunction {
    (options: CopyLoadOptions): Record;
    promise(options: CopyLoadOptions): Promise<Record>;
}

interface RecordCopyFunction {`;

    for (let recordType in completed) {
        recordExportsTxt += `
    (options: CopyLoadOptions_${completed[recordType]}): ${completed[recordType]};
    promise(options: CopyLoadOptions_${completed[recordType]}): Promise<${completed[recordType]}>;`;
    }

    recordExportsTxt += `
}

// Export Record Create Function
interface RecordCreateFunction {
    (options: RecordCreateOptions): Record;
    promise(options: RecordCreateOptions): Promise<Record>;
}

interface RecordCreateFunction {`;

    for (let recordType in completed) {
        recordExportsTxt += `
    (options: RecordCreateOptions_${completed[recordType]}): ${completed[recordType]};
    promise(options: RecordCreateOptions_${completed[recordType]}): Promise<${completed[recordType]}>;`;
    }

    recordExportsTxt += `
}

export { RecordLoadFunction, RecordCopyFunction, RecordCreateFunction }`;

    fs.writeFile(`./N/recordTypes/_record_exports.d.ts`, recordExportsTxt, (err) => {
        if (err) throw err;
        console.log('Finished creating Record Exports file.');
    })

    // Generate the text for the _context_exports.d.ts file
    let contextExportsTxt = `
import * as N_ui_serverWidget from '../ui/serverWidget';
import * as N_http from '../http';
import { UserEventType, UserEventTypes } from './_EventTypes';
`
    for (let recordType in completed) {
        contextExportsTxt += `import { ${completed[recordType]} as ${completed[recordType]}_REC } from './${completed[recordType]}';\n`
    }

    contextExportsTxt += `\nexport namespace fieldChangedContext {`;
    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace lineInitContext {`
    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace pageInitContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        mode: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace postSourcingContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
        fieldId: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace saveRecordContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
    }`
    }


    contextExportsTxt += `\n}\nexport namespace sublistChangedContext {`

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace validateDeleteContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace validateFieldContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace validateInsertContext {`

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace validateLineContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        currentRecord: ${completed[recordType]}_REC;
        sublistId: string;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace beforeLoadContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        newRecord: ${completed[recordType]}_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace beforeSubmitContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        newRecord: ${completed[recordType]}_REC;
        oldRecord: ${completed[recordType]}_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace afterSubmitContext {`

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        newRecord: ${completed[recordType]}_REC;
        oldRecord: ${completed[recordType]}_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }`
    }

    contextExportsTxt += `\n}\nexport namespace onActionContext {`;

    for (let recordType in completed) {
        contextExportsTxt += `
    interface ${completed[recordType]} {
        newRecord: ${completed[recordType]}_REC;
        oldRecord: ${completed[recordType]}_REC;
    }`
    }

    fs.writeFile(`./N/recordTypes/_context_exports.d.ts`, contextExportsTxt, (err) => {
        if (err) throw err;
        console.log('Finished creating Context Exports file.');
        console.log('PROCESS FINISHED SUCCESSFULLY');
    })
})