
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_text = 'addr1' | 'addr2' | 'addr3' | 'addressee' | 'attention' | 'city' | 'externalid' | 'name' | 'returnaddress1' | 'returnaddress2' | 'returncity' | 'returnzip' | 'state' | 'tranprefix' | 'zip';
type main_phone = 'addrphone';
type main_address = 'addrtext' | 'returnaddr';
type main_select = 'autoassignmentregionsetting' | 'country' | 'locationtype' | 'logo' | 'parent' | 'returncountry' | 'returnstate' | 'subsidiary' | 'timezone';
type main_integer = 'bufferstock' | 'dailyshippingcapacity' | 'totalshippingcapacity';
type main_radio = 'geolocationmethod';
type main_checkbox = 'isinactive' | 'makeinventoryavailable' | 'makeinventoryavailablestore' | 'override' | 'usebins';
type main_float = 'latitude' | 'longitude';

// excludelocationregions field types
type excludelocationregions_text = 'name';
type excludelocationregions_integer = 'ranking';
type excludelocationregions_select = 'region';

// includelocationregions field types
type includelocationregions_text = 'name';
type includelocationregions_integer = 'ranking';
type includelocationregions_select = 'region';


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


interface CancelCommitLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions' | 'includelocationregions';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions' | 'includelocationregions';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions' | 'includelocationregions';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions' | 'includelocationregions';
    /** The line number to select in the sublist. */
    line: number;
}


// excludelocationregions type definitions
interface FindSublistLineWithValueOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
}

interface GetMatrixHeaderCountOptions_excludelocationregions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'excludelocationregions';
    /** The intenral ID of the matrix field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
}

interface GetMatrixHeaderFieldOptions_excludelocationregions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'excludelocationregions';
    /** The internal ID of the matrix field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_excludelocationregions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'excludelocationregions';
    /** The intenral ID of the matrix field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
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

interface SetCurrentSublistValueOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
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

interface SetCurrentSublistTextOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_excludelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'excludelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: excludelocationregions_text | excludelocationregions_integer | excludelocationregions_select;
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


// includelocationregions type definitions
interface FindSublistLineWithValueOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
}

interface GetMatrixHeaderCountOptions_includelocationregions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'includelocationregions';
    /** The intenral ID of the matrix field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
}

interface GetMatrixHeaderFieldOptions_includelocationregions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'includelocationregions';
    /** The internal ID of the matrix field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_includelocationregions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'includelocationregions';
    /** The intenral ID of the matrix field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
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

interface SetCurrentSublistValueOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
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

interface SetCurrentSublistTextOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_includelocationregions {
    /** The internal ID of the sublist. */
    sublistId: 'includelocationregions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: includelocationregions_text | includelocationregions_integer | includelocationregions_select;
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

interface GetSelectOptionsOpts {
    /** The search string to filter the select options that are returned. */
    filter: string;
    /** The following operators are supported: contains, is, startswith. Default is contains. */
    operator: "contains" | "is" | "startswith";
}

interface HasSubrecordOptions {
    /** The internal ID of the field that may contain a subrecord. */
    fieldId: main_text | main_phone | main_address | main_select | main_integer | main_radio | main_checkbox | main_float;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_phone | main_address | main_select | main_integer | main_radio | main_checkbox | main_float;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_phone | main_address | main_select | main_integer | main_radio | main_checkbox | main_float;
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
    fieldId: main_text | main_phone | main_address | main_select | main_integer | main_radio | main_checkbox | main_float;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_phone | main_address | main_select | main_integer | main_radio | main_checkbox | main_float;
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

export interface RecordCreateOptions_LOCATION { // This one gets exported
    /**
     * The record type.
     */
    type: Type.LOCATION;
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

export interface RecordTransformOptions_LOCATION { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.LOCATION;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_LOCATION { // This one gets exported
    /**
     * The record type.
     */
    type: Type.LOCATION;
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
export interface LOCATION extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_excludelocationregions | FindSublistLineWithValueOptions_includelocationregions): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_excludelocationregions | FindSublistLineWithValueOptions_includelocationregions): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_excludelocationregions | GetCurrentSublistValueOptions_includelocationregions): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_excludelocationregions | GetCurrentSublistValueOptions_includelocationregions): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_excludelocationregions | GetCurrentSublistValueOptions_includelocationregions): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_excludelocationregions | GetCurrentSublistValueOptions_includelocationregions): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_excludelocationregions | GetCurrentSublistValueOptions_includelocationregions): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_excludelocationregions | GetMatrixHeaderCountOptions_includelocationregions): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_excludelocationregions | GetMatrixHeaderFieldOptions_includelocationregions): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_excludelocationregions | GetMatrixHeaderFieldOptions_includelocationregions): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_excludelocationregions | GetMatrixSublistFieldOptions_includelocationregions): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_excludelocationregions | GetMatrixSublistFieldOptions_includelocationregions): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_excludelocationregions | SetCurrentMatrixSublistValueOptions_includelocationregions): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_excludelocationregions | SetCurrentMatrixSublistValueOptions_includelocationregions): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_excludelocationregions | SetCurrentSublistValueOptions_includelocationregions): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_excludelocationregions | SetSublistValueOptions_includelocationregions): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_excludelocationregions | SetCurrentSublistTextOptions_includelocationregions): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_excludelocationregions | SetSublistTextOptions_includelocationregions): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_excludelocationregions | SetSublistValueOptions_includelocationregions): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_excludelocationregions | SetSublistTextOptions_includelocationregions): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_excludelocationregions | GetSublistValueOptions_includelocationregions): number;
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
    /** Sets the value of the field by a text representation. */
    setText(options: SetFieldTextOptions): void;
    /** Sets the value of a field. */
    setValue(options: ClientSetValueOptions): void;
    /** Returns the text representation of a field value. */
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
    (options: CopyLoadOptions_LOCATION): LOCATION;
    promise(options: CopyLoadOptions_LOCATION): Promise<LOCATION>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_LOCATION): LOCATION;
    promise(options: RecordCreateOptions_LOCATION): Promise<LOCATION>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_LOCATION): LOCATION;
    promise(options: CopyLoadOptions_LOCATION): Promise<LOCATION>;
}
