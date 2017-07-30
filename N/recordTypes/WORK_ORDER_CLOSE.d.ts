
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './_EventTypes'

// main field types
type main_select = 'class' | 'customform' | 'department' | 'item' | 'location' | 'postingperiod' | 'revision' | 'subsidiary';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_text = 'externalid' | 'memo' | 'revisionmemo' | 'taxperiod' | 'tranid';
type main_integer = 'manufacturingrouting';
type main_float = 'orderquantity' | 'scrapquantity';
type main_posfloat = 'quantity';
type main_currency = 'total';
type main_date = 'trandate';

// component field types
type component_text = 'item';
type component_integer = 'linenumber';
type component_float = 'orderquantity';

// routingitem field types
type routingitem_text = 'item';
type routingitem_float = 'unitcost';


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
    sublistId: 'component' | 'routingitem';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'component' | 'routingitem';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'component' | 'routingitem';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'component' | 'routingitem';
    /** The line number to select in the sublist. */
    line: number;
}


// component type definitions
interface FindSublistLineWithValueOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
}

interface GetMatrixHeaderCountOptions_component {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'component';
    /** The intenral ID of the matrix field. */
    fieldId: component_text | component_integer | component_float;
}

interface GetMatrixHeaderFieldOptions_component {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'component';
    /** The internal ID of the matrix field. */
    fieldId: component_text | component_integer | component_float;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_component {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'component';
    /** The intenral ID of the matrix field. */
    fieldId: component_text | component_integer | component_float;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
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

interface SetCurrentSublistValueOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
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

interface SetCurrentSublistTextOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_component {
    /** The internal ID of the sublist. */
    sublistId: 'component';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: component_text | component_integer | component_float;
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


// routingitem type definitions
interface FindSublistLineWithValueOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
}

interface GetMatrixHeaderCountOptions_routingitem {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'routingitem';
    /** The intenral ID of the matrix field. */
    fieldId: routingitem_text | routingitem_float;
}

interface GetMatrixHeaderFieldOptions_routingitem {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'routingitem';
    /** The internal ID of the matrix field. */
    fieldId: routingitem_text | routingitem_float;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_routingitem {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'routingitem';
    /** The intenral ID of the matrix field. */
    fieldId: routingitem_text | routingitem_float;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
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

interface SetCurrentSublistValueOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
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

interface SetCurrentSublistTextOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_routingitem {
    /** The internal ID of the sublist. */
    sublistId: 'routingitem';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: routingitem_text | routingitem_float;
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
    fieldId: main_select | main_datetime | main_text | main_integer | main_float | main_posfloat | main_currency | main_date;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_text | main_integer | main_float | main_posfloat | main_currency | main_date;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_text | main_integer | main_float | main_posfloat | main_currency | main_date;
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
    fieldId: main_select | main_datetime | main_text | main_integer | main_float | main_posfloat | main_currency | main_date;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_text | main_integer | main_float | main_posfloat | main_currency | main_date;
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

export interface RecordCreateOptions_WORK_ORDER_CLOSE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.WORK_ORDER_CLOSE;
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

export interface RecordTransformOptions_WORK_ORDER_CLOSE { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.WORK_ORDER_CLOSE;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_WORK_ORDER_CLOSE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.WORK_ORDER_CLOSE;
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
export interface WORK_ORDER_CLOSE extends Record {

    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_component | GetSublistValueOptions_routingitem): number;
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
    (options: CopyLoadOptions_WORK_ORDER_CLOSE): WORK_ORDER_CLOSE;
    promise(options: CopyLoadOptions_WORK_ORDER_CLOSE): Promise<WORK_ORDER_CLOSE>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_WORK_ORDER_CLOSE): WORK_ORDER_CLOSE;
    promise(options: RecordCreateOptions_WORK_ORDER_CLOSE): Promise<WORK_ORDER_CLOSE>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_WORK_ORDER_CLOSE): WORK_ORDER_CLOSE;
    promise(options: CopyLoadOptions_WORK_ORDER_CLOSE): Promise<WORK_ORDER_CLOSE>;
}