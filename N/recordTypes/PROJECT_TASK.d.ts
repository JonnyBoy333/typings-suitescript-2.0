
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './_EventTypes'

// main field types
type main_float = 'actualwork' | 'estimatedwork' | 'estimatedworkbaseline' | 'remainingwork' | 'slackminutes';
type main_checkbox = 'bbudgetshowcalculatedlines' | 'bbudgetusecalculatedvalues' | 'cbudgetshowcalculatedlines' | 'cbudgetusecalculatedvalues' | 'ismilestone' | 'nonbillabletask';
type main_select = 'company' | 'constrainttype' | 'contact' | 'customform' | 'order' | 'owner' | 'parent' | 'priority' | 'status';
type main_date = 'enddate' | 'finishbydate' | 'lateend' | 'latestart' | 'startdate';
type main_datetime = 'enddatebaseline' | 'startdatebaseline';
type main_integer = 'eventid';
type main_text = 'externalid' | 'isoncriticalpath' | 'title';
type main_currency2 = 'fxrate';
type main_textarea = 'message';
type main_percent = 'percenttimecomplete';
type main_timeofday = 'starttime';

// assignee field types
type assignee_select = 'billingclass' | 'resource' | 'serviceitem';
type assignee_currency = 'cost' | 'price' | 'unitcost' | 'unitprice';
type assignee_float = 'estimatedwork';
type assignee_integer = 'id';
type assignee_percent = 'units';

// bbudget field types
type bbudget_integer = 'costcategoryref';
type bbudget_text = 'costcategorysubtype' | 'costcategorytype';
type bbudget_checkbox = 'selectline';
type bbudget_currency = 'totalamount';

// cbudget field types
type cbudget_integer = 'costcategoryref';
type cbudget_text = 'costcategorysubtype' | 'costcategorytype';
type cbudget_checkbox = 'selectline';
type cbudget_currency = 'totalamount';

// predecessor field types
type predecessor_datetime = 'enddate' | 'startdate';
type predecessor_select = 'task' | 'type';


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
    sublistId: 'assignee' | 'bbudget' | 'cbudget' | 'predecessor';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'assignee' | 'bbudget' | 'cbudget' | 'predecessor';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'assignee' | 'bbudget' | 'cbudget' | 'predecessor';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'assignee' | 'bbudget' | 'cbudget' | 'predecessor';
    /** The line number to select in the sublist. */
    line: number;
}


// assignee type definitions
interface FindSublistLineWithValueOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
}

interface GetMatrixHeaderCountOptions_assignee {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'assignee';
    /** The intenral ID of the matrix field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
}

interface GetMatrixHeaderFieldOptions_assignee {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'assignee';
    /** The internal ID of the matrix field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_assignee {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'assignee';
    /** The intenral ID of the matrix field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
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

interface SetCurrentSublistValueOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
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

interface SetCurrentSublistTextOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_assignee {
    /** The internal ID of the sublist. */
    sublistId: 'assignee';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: assignee_select | assignee_currency | assignee_float | assignee_integer | assignee_percent;
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


// bbudget type definitions
interface FindSublistLineWithValueOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
}

interface GetMatrixHeaderCountOptions_bbudget {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'bbudget';
    /** The intenral ID of the matrix field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
}

interface GetMatrixHeaderFieldOptions_bbudget {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'bbudget';
    /** The internal ID of the matrix field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_bbudget {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'bbudget';
    /** The intenral ID of the matrix field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
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

interface SetCurrentSublistValueOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
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

interface SetCurrentSublistTextOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_bbudget {
    /** The internal ID of the sublist. */
    sublistId: 'bbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: bbudget_integer | bbudget_text | bbudget_checkbox | bbudget_currency;
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


// cbudget type definitions
interface FindSublistLineWithValueOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
}

interface GetMatrixHeaderCountOptions_cbudget {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cbudget';
    /** The intenral ID of the matrix field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
}

interface GetMatrixHeaderFieldOptions_cbudget {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cbudget';
    /** The internal ID of the matrix field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_cbudget {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cbudget';
    /** The intenral ID of the matrix field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
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

interface SetCurrentSublistValueOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
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

interface SetCurrentSublistTextOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_cbudget {
    /** The internal ID of the sublist. */
    sublistId: 'cbudget';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cbudget_integer | cbudget_text | cbudget_checkbox | cbudget_currency;
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


// predecessor type definitions
interface FindSublistLineWithValueOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
}

interface GetMatrixHeaderCountOptions_predecessor {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'predecessor';
    /** The intenral ID of the matrix field. */
    fieldId: predecessor_datetime | predecessor_select;
}

interface GetMatrixHeaderFieldOptions_predecessor {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'predecessor';
    /** The internal ID of the matrix field. */
    fieldId: predecessor_datetime | predecessor_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_predecessor {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'predecessor';
    /** The intenral ID of the matrix field. */
    fieldId: predecessor_datetime | predecessor_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
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

interface SetCurrentSublistValueOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
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

interface SetCurrentSublistTextOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_predecessor {
    /** The internal ID of the sublist. */
    sublistId: 'predecessor';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: predecessor_datetime | predecessor_select;
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
    fieldId: main_float | main_checkbox | main_select | main_date | main_datetime | main_integer | main_text | main_currency2 | main_textarea | main_percent | main_timeofday;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_float | main_checkbox | main_select | main_date | main_datetime | main_integer | main_text | main_currency2 | main_textarea | main_percent | main_timeofday;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_float | main_checkbox | main_select | main_date | main_datetime | main_integer | main_text | main_currency2 | main_textarea | main_percent | main_timeofday;
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
    fieldId: main_float | main_checkbox | main_select | main_date | main_datetime | main_integer | main_text | main_currency2 | main_textarea | main_percent | main_timeofday;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_float | main_checkbox | main_select | main_date | main_datetime | main_integer | main_text | main_currency2 | main_textarea | main_percent | main_timeofday;
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

export interface RecordCreateOptions_PROJECT_TASK { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PROJECT_TASK;
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

export interface RecordTransformOptions_PROJECT_TASK { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.PROJECT_TASK;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_PROJECT_TASK { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PROJECT_TASK;
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
export interface PROJECT_TASK extends Record {

    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_assignee | GetSublistValueOptions_bbudget | GetSublistValueOptions_cbudget | GetSublistValueOptions_predecessor): number;
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
    (options: CopyLoadOptions_PROJECT_TASK): PROJECT_TASK;
    promise(options: CopyLoadOptions_PROJECT_TASK): Promise<PROJECT_TASK>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_PROJECT_TASK): PROJECT_TASK;
    promise(options: RecordCreateOptions_PROJECT_TASK): Promise<PROJECT_TASK>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_PROJECT_TASK): PROJECT_TASK;
    promise(options: CopyLoadOptions_PROJECT_TASK): Promise<PROJECT_TASK>;
}
