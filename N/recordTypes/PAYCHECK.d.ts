
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'account' | 'class' | 'department' | 'entity' | 'postingperiod' | 'workplace';
type main_address = 'address';
type main_currency = 'balance' | 'chkamount' | 'useramount';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_text = 'externalid' | 'memo' | 'status' | 'statusRef' | 'taxperiod';
type main_date = 'periodending' | 'startdate' | 'trandate';
type main_rtext = 'tranid';

// paycontrib field types
type paycontrib_currency = 'amount' | 'wagebase';
type paycontrib_checkbox = 'manualentry';
type paycontrib_select = 'payitem';

// paydeduct field types
type paydeduct_currency = 'amount' | 'wagebase';
type paydeduct_checkbox = 'manualentry';
type paydeduct_select = 'payitem';

// payearn field types
type payearn_float = 'count';
type payearn_currency = 'grossamount';
type payearn_checkbox = 'manualentry';
type payearn_select = 'payitem' | 'serviceitem';
type payearn_rate = 'rate';

// paytax field types
type paytax_currency = 'amount' | 'reportablewagebase' | 'taxablewagebase' | 'taxedwagebase';
type paytax_checkbox = 'isexempt' | 'isresidenttax';
type paytax_text = 'paytax';
type paytax_integer = 'sequence';

// paytime field types
type paytime_currency = 'amount' | 'rate';
type paytime_checkbox = 'apply';
type paytime_float = 'count';
type paytime_text = 'custjob' | 'payitemname' | 'serviceitem';
type paytime_date = 'ddate';


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
    sublistId: 'paycontrib' | 'paydeduct' | 'payearn' | 'paytax' | 'paytime';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib' | 'paydeduct' | 'payearn' | 'paytax' | 'paytime';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib' | 'paydeduct' | 'payearn' | 'paytax' | 'paytime';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib' | 'paydeduct' | 'payearn' | 'paytax' | 'paytime';
    /** The line number to select in the sublist. */
    line: number;
}


// paycontrib type definitions
interface FindSublistLineWithValueOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
}

interface GetMatrixHeaderCountOptions_paycontrib {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paycontrib';
    /** The intenral ID of the matrix field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
}

interface GetMatrixHeaderFieldOptions_paycontrib {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paycontrib';
    /** The internal ID of the matrix field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_paycontrib {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paycontrib';
    /** The intenral ID of the matrix field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
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

interface SetCurrentSublistValueOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
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

interface SetCurrentSublistTextOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_paycontrib {
    /** The internal ID of the sublist. */
    sublistId: 'paycontrib';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paycontrib_currency | paycontrib_checkbox | paycontrib_select;
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


// paydeduct type definitions
interface FindSublistLineWithValueOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
}

interface GetMatrixHeaderCountOptions_paydeduct {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paydeduct';
    /** The intenral ID of the matrix field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
}

interface GetMatrixHeaderFieldOptions_paydeduct {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paydeduct';
    /** The internal ID of the matrix field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_paydeduct {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paydeduct';
    /** The intenral ID of the matrix field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
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

interface SetCurrentSublistValueOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
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

interface SetCurrentSublistTextOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_paydeduct {
    /** The internal ID of the sublist. */
    sublistId: 'paydeduct';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paydeduct_currency | paydeduct_checkbox | paydeduct_select;
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


// payearn type definitions
interface FindSublistLineWithValueOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
}

interface GetMatrixHeaderCountOptions_payearn {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'payearn';
    /** The intenral ID of the matrix field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
}

interface GetMatrixHeaderFieldOptions_payearn {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'payearn';
    /** The internal ID of the matrix field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_payearn {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'payearn';
    /** The intenral ID of the matrix field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
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

interface SetCurrentSublistValueOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
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

interface SetCurrentSublistTextOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_payearn {
    /** The internal ID of the sublist. */
    sublistId: 'payearn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payearn_float | payearn_currency | payearn_checkbox | payearn_select | payearn_rate;
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


// paytax type definitions
interface FindSublistLineWithValueOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
}

interface GetMatrixHeaderCountOptions_paytax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paytax';
    /** The intenral ID of the matrix field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
}

interface GetMatrixHeaderFieldOptions_paytax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paytax';
    /** The internal ID of the matrix field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_paytax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paytax';
    /** The intenral ID of the matrix field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
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

interface SetCurrentSublistValueOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
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

interface SetCurrentSublistTextOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_paytax {
    /** The internal ID of the sublist. */
    sublistId: 'paytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytax_currency | paytax_checkbox | paytax_text | paytax_integer;
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


// paytime type definitions
interface FindSublistLineWithValueOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
}

interface GetMatrixHeaderCountOptions_paytime {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paytime';
    /** The intenral ID of the matrix field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
}

interface GetMatrixHeaderFieldOptions_paytime {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paytime';
    /** The internal ID of the matrix field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_paytime {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'paytime';
    /** The intenral ID of the matrix field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
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

interface SetCurrentSublistValueOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
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

interface SetCurrentSublistTextOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_paytime {
    /** The internal ID of the sublist. */
    sublistId: 'paytime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: paytime_currency | paytime_checkbox | paytime_float | paytime_text | paytime_date;
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
    fieldId: main_select | main_address | main_currency | main_datetime | main_text | main_date | main_rtext;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_address | main_currency | main_datetime | main_text | main_date | main_rtext;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_address | main_currency | main_datetime | main_text | main_date | main_rtext;
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
    fieldId: main_select | main_address | main_currency | main_datetime | main_text | main_date | main_rtext;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_address | main_currency | main_datetime | main_text | main_date | main_rtext;
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

export interface RecordCreateOptions_PAYCHECK { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PAYCHECK;
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

export interface RecordTransformOptions_PAYCHECK { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.PAYCHECK;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_PAYCHECK { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PAYCHECK;
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
export interface PAYCHECK extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_paycontrib | FindSublistLineWithValueOptions_paydeduct | FindSublistLineWithValueOptions_payearn | FindSublistLineWithValueOptions_paytax | FindSublistLineWithValueOptions_paytime): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_paycontrib | FindSublistLineWithValueOptions_paydeduct | FindSublistLineWithValueOptions_payearn | FindSublistLineWithValueOptions_paytax | FindSublistLineWithValueOptions_paytime): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_paycontrib | GetCurrentSublistValueOptions_paydeduct | GetCurrentSublistValueOptions_payearn | GetCurrentSublistValueOptions_paytax | GetCurrentSublistValueOptions_paytime): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_paycontrib | GetCurrentSublistValueOptions_paydeduct | GetCurrentSublistValueOptions_payearn | GetCurrentSublistValueOptions_paytax | GetCurrentSublistValueOptions_paytime): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_paycontrib | GetCurrentSublistValueOptions_paydeduct | GetCurrentSublistValueOptions_payearn | GetCurrentSublistValueOptions_paytax | GetCurrentSublistValueOptions_paytime): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_paycontrib | GetCurrentSublistValueOptions_paydeduct | GetCurrentSublistValueOptions_payearn | GetCurrentSublistValueOptions_paytax | GetCurrentSublistValueOptions_paytime): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_paycontrib | GetCurrentSublistValueOptions_paydeduct | GetCurrentSublistValueOptions_payearn | GetCurrentSublistValueOptions_paytax | GetCurrentSublistValueOptions_paytime): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_paycontrib | GetMatrixHeaderCountOptions_paydeduct | GetMatrixHeaderCountOptions_payearn | GetMatrixHeaderCountOptions_paytax | GetMatrixHeaderCountOptions_paytime): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_paycontrib | GetMatrixHeaderFieldOptions_paydeduct | GetMatrixHeaderFieldOptions_payearn | GetMatrixHeaderFieldOptions_paytax | GetMatrixHeaderFieldOptions_paytime): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_paycontrib | GetMatrixHeaderFieldOptions_paydeduct | GetMatrixHeaderFieldOptions_payearn | GetMatrixHeaderFieldOptions_paytax | GetMatrixHeaderFieldOptions_paytime): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_paycontrib | GetMatrixSublistFieldOptions_paydeduct | GetMatrixSublistFieldOptions_payearn | GetMatrixSublistFieldOptions_paytax | GetMatrixSublistFieldOptions_paytime): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_paycontrib | GetMatrixSublistFieldOptions_paydeduct | GetMatrixSublistFieldOptions_payearn | GetMatrixSublistFieldOptions_paytax | GetMatrixSublistFieldOptions_paytime): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_paycontrib | SetCurrentMatrixSublistValueOptions_paydeduct | SetCurrentMatrixSublistValueOptions_payearn | SetCurrentMatrixSublistValueOptions_paytax | SetCurrentMatrixSublistValueOptions_paytime): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_paycontrib | SetCurrentMatrixSublistValueOptions_paydeduct | SetCurrentMatrixSublistValueOptions_payearn | SetCurrentMatrixSublistValueOptions_paytax | SetCurrentMatrixSublistValueOptions_paytime): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_paycontrib | SetCurrentSublistValueOptions_paydeduct | SetCurrentSublistValueOptions_payearn | SetCurrentSublistValueOptions_paytax | SetCurrentSublistValueOptions_paytime): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_paycontrib | SetSublistValueOptions_paydeduct | SetSublistValueOptions_payearn | SetSublistValueOptions_paytax | SetSublistValueOptions_paytime): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_paycontrib | SetCurrentSublistTextOptions_paydeduct | SetCurrentSublistTextOptions_payearn | SetCurrentSublistTextOptions_paytax | SetCurrentSublistTextOptions_paytime): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_paycontrib | SetSublistTextOptions_paydeduct | SetSublistTextOptions_payearn | SetSublistTextOptions_paytax | SetSublistTextOptions_paytime): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_paycontrib | SetSublistValueOptions_paydeduct | SetSublistValueOptions_payearn | SetSublistValueOptions_paytax | SetSublistValueOptions_paytime): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_paycontrib | SetSublistTextOptions_paydeduct | SetSublistTextOptions_payearn | SetSublistTextOptions_paytax | SetSublistTextOptions_paytime): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_paycontrib | GetSublistValueOptions_paydeduct | GetSublistValueOptions_payearn | GetSublistValueOptions_paytax | GetSublistValueOptions_paytime): number;
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
    (options: CopyLoadOptions_PAYCHECK): PAYCHECK;
    promise(options: CopyLoadOptions_PAYCHECK): Promise<PAYCHECK>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_PAYCHECK): PAYCHECK;
    promise(options: RecordCreateOptions_PAYCHECK): Promise<PAYCHECK>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_PAYCHECK): PAYCHECK;
    promise(options: CopyLoadOptions_PAYCHECK): Promise<PAYCHECK>;
}
