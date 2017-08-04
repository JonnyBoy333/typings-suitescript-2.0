
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'account' | 'class' | 'currency' | 'customform' | 'department' | 'entity' | 'entitynexus' | 'location' | 'nexus' | 'postingperiod' | 'subsidiary';
type main_currency = 'balance' | 'total' | 'usertotal';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_text = 'currencyname' | 'currencysymbol' | 'entity_nexus_country' | 'externalid' | 'memo' | 'nexus_country' | 'taxperiod' | 'tranid' | 'transactionnumber' | 'updatecurrency';
type main_currency2 = 'exchangerate';
type main_checkbox = 'isbasecurrency';
type main_date = 'trandate';
type main_radio = 'trantype';

// expense field types
type expense_select = 'account' | 'class' | 'customer' | 'department' | 'location';
type expense_currency = 'amount';
type expense_text = 'category' | 'memo';
type expense_integer = 'expenseitem' | 'line' | 'numrules';
type expense_checkbox = 'isbillable';

// item field types
type item_currency = 'amount';
type item_text = 'billvariancestatus' | 'id' | 'isvsoebundle' | 'itemsubtype' | 'itemtype' | 'line' | 'linked' | 'matrixtype' | 'printitems' | 'rateschedule' | 'vendorname';
type item_select = 'catchupperiod' | 'class' | 'customer' | 'department' | 'item' | 'location';
type item_checkbox = 'deferrevrec' | 'isbillable';
type item_textarea = 'description';
type item_integer = 'linenumber';
type item_namevaluelist = 'options';
type item_float = 'quantity';
type item_rate = 'rate';

// reimbursements field types
type reimbursements_text = 'id';


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
    sublistId: 'expense' | 'item' | 'reimbursements';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'expense' | 'item' | 'reimbursements';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'expense' | 'item' | 'reimbursements';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'expense' | 'item' | 'reimbursements';
    /** The line number to select in the sublist. */
    line: number;
}


// expense type definitions
interface FindSublistLineWithValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
}

interface GetMatrixHeaderCountOptions_expense {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'expense';
    /** The intenral ID of the matrix field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
}

interface GetMatrixHeaderFieldOptions_expense {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'expense';
    /** The internal ID of the matrix field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_expense {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'expense';
    /** The intenral ID of the matrix field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
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

interface SetCurrentSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
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

interface SetCurrentSublistTextOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_integer | expense_checkbox;
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


// item type definitions
interface FindSublistLineWithValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
}

interface GetMatrixHeaderCountOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The intenral ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
}

interface GetMatrixHeaderFieldOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The internal ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The intenral ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
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

interface SetCurrentSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
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

interface SetCurrentSublistTextOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_namevaluelist | item_float | item_rate;
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


// reimbursements type definitions
interface FindSublistLineWithValueOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
}

interface GetMatrixHeaderCountOptions_reimbursements {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'reimbursements';
    /** The intenral ID of the matrix field. */
    fieldId: reimbursements_text;
}

interface GetMatrixHeaderFieldOptions_reimbursements {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'reimbursements';
    /** The internal ID of the matrix field. */
    fieldId: reimbursements_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_reimbursements {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'reimbursements';
    /** The intenral ID of the matrix field. */
    fieldId: reimbursements_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
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

interface SetCurrentSublistValueOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
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

interface SetCurrentSublistTextOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_reimbursements {
    /** The internal ID of the sublist. */
    sublistId: 'reimbursements';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: reimbursements_text;
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
    fieldId: main_select | main_currency | main_datetime | main_text | main_currency2 | main_checkbox | main_date | main_radio;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_currency | main_datetime | main_text | main_currency2 | main_checkbox | main_date | main_radio;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_currency | main_datetime | main_text | main_currency2 | main_checkbox | main_date | main_radio;
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
    fieldId: main_select | main_currency | main_datetime | main_text | main_currency2 | main_checkbox | main_date | main_radio;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_currency | main_datetime | main_text | main_currency2 | main_checkbox | main_date | main_radio;
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

export interface RecordCreateOptions_CREDIT_CARD_CHARGE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.CREDIT_CARD_CHARGE;
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

export interface RecordTransformOptions_CREDIT_CARD_CHARGE { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.CREDIT_CARD_CHARGE;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_CREDIT_CARD_CHARGE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.CREDIT_CARD_CHARGE;
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
export interface CREDIT_CARD_CHARGE extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_expense | FindSublistLineWithValueOptions_item | FindSublistLineWithValueOptions_reimbursements): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_expense | FindSublistLineWithValueOptions_item | FindSublistLineWithValueOptions_reimbursements): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_reimbursements): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_reimbursements): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_reimbursements): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_reimbursements): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_reimbursements): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_expense | GetMatrixHeaderCountOptions_item | GetMatrixHeaderCountOptions_reimbursements): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_expense | GetMatrixHeaderFieldOptions_item | GetMatrixHeaderFieldOptions_reimbursements): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_expense | GetMatrixHeaderFieldOptions_item | GetMatrixHeaderFieldOptions_reimbursements): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_expense | GetMatrixSublistFieldOptions_item | GetMatrixSublistFieldOptions_reimbursements): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_expense | GetMatrixSublistFieldOptions_item | GetMatrixSublistFieldOptions_reimbursements): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_expense | SetCurrentMatrixSublistValueOptions_item | SetCurrentMatrixSublistValueOptions_reimbursements): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_expense | SetCurrentMatrixSublistValueOptions_item | SetCurrentMatrixSublistValueOptions_reimbursements): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_expense | SetCurrentSublistValueOptions_item | SetCurrentSublistValueOptions_reimbursements): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_expense | SetSublistValueOptions_item | SetSublistValueOptions_reimbursements): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_expense | SetCurrentSublistTextOptions_item | SetCurrentSublistTextOptions_reimbursements): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_expense | SetSublistTextOptions_item | SetSublistTextOptions_reimbursements): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_expense | SetSublistValueOptions_item | SetSublistValueOptions_reimbursements): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_expense | SetSublistTextOptions_item | SetSublistTextOptions_reimbursements): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_reimbursements): number;
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
    (options: CopyLoadOptions_CREDIT_CARD_CHARGE): CREDIT_CARD_CHARGE;
    promise(options: CopyLoadOptions_CREDIT_CARD_CHARGE): Promise<CREDIT_CARD_CHARGE>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_CREDIT_CARD_CHARGE): CREDIT_CARD_CHARGE;
    promise(options: RecordCreateOptions_CREDIT_CARD_CHARGE): Promise<CREDIT_CARD_CHARGE>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_CREDIT_CARD_CHARGE): CREDIT_CARD_CHARGE;
    promise(options: CopyLoadOptions_CREDIT_CARD_CHARGE): Promise<CREDIT_CARD_CHARGE>;
}
