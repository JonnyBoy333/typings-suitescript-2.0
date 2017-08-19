
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'account' | 'class' | 'creditcardprocessor' | 'customform' | 'department' | 'location' | 'postingperiod' | 'subsidiary';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_text = 'currency' | 'currencyname' | 'externalid' | 'memo' | 'taxperiod' | 'tranid' | 'updatecurrency';
type main_currency2 = 'exchangerate';
type main_checkbox = 'isbasecurrency' | 'tobeprinted';
type main_currency = 'total';
type main_date = 'trandate';

// accountingbookdetail field types
type accountingbookdetail_select = 'accountingbook';
type accountingbookdetail_currency2 = 'exchangerate';

// cashback field types
type cashback_select = 'account' | 'class' | 'department' | 'location';
type cashback_currency = 'amount';
type cashback_text = 'line' | 'memo';

// other field types
type other_select = 'account' | 'class' | 'department' | 'entity' | 'location' | 'paymentmethod';
type other_currency = 'amount';
type other_text = 'line' | 'memo' | 'refnum';

// payment field types
type payment_select = 'class' | 'currency' | 'department' | 'entity' | 'location' | 'paymentmethod' | 'type';
type payment_checkbox = 'deposit';
type payment_date = 'docdate';
type payment_text = 'docnumber' | 'id' | 'memo' | 'pmtcurrencyprecision' | 'refnum';
type payment_integer = 'lineid';
type payment_currency = 'paymentamount' | 'transactionamount';


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
    sublistId: 'accountingbookdetail' | 'cashback' | 'other' | 'payment';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'cashback' | 'other' | 'payment';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'cashback' | 'other' | 'payment';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'cashback' | 'other' | 'payment';
    /** The line number to select in the sublist. */
    line: number;
}


// accountingbookdetail type definitions
interface FindSublistLineWithValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
}

interface GetMatrixHeaderCountOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The intenral ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
}

interface GetMatrixHeaderFieldOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The intenral ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
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

interface SetCurrentSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
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

interface SetCurrentSublistTextOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2;
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


// cashback type definitions
interface FindSublistLineWithValueOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
}

interface GetMatrixHeaderCountOptions_cashback {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cashback';
    /** The intenral ID of the matrix field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
}

interface GetMatrixHeaderFieldOptions_cashback {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cashback';
    /** The internal ID of the matrix field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_cashback {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cashback';
    /** The intenral ID of the matrix field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
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

interface SetCurrentSublistValueOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
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

interface SetCurrentSublistTextOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_cashback {
    /** The internal ID of the sublist. */
    sublistId: 'cashback';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cashback_select | cashback_currency | cashback_text;
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


// other type definitions
interface FindSublistLineWithValueOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
}

interface GetMatrixHeaderCountOptions_other {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'other';
    /** The intenral ID of the matrix field. */
    fieldId: other_select | other_currency | other_text;
}

interface GetMatrixHeaderFieldOptions_other {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'other';
    /** The internal ID of the matrix field. */
    fieldId: other_select | other_currency | other_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_other {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'other';
    /** The intenral ID of the matrix field. */
    fieldId: other_select | other_currency | other_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
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

interface SetCurrentSublistValueOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
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

interface SetCurrentSublistTextOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_other {
    /** The internal ID of the sublist. */
    sublistId: 'other';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: other_select | other_currency | other_text;
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


// payment type definitions
interface FindSublistLineWithValueOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
}

interface GetMatrixHeaderCountOptions_payment {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'payment';
    /** The intenral ID of the matrix field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
}

interface GetMatrixHeaderFieldOptions_payment {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'payment';
    /** The internal ID of the matrix field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_payment {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'payment';
    /** The intenral ID of the matrix field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
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

interface SetCurrentSublistValueOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
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

interface SetCurrentSublistTextOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_payment {
    /** The internal ID of the sublist. */
    sublistId: 'payment';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: payment_select | payment_checkbox | payment_date | payment_text | payment_integer | payment_currency;
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
    fieldId: main_select | main_datetime | main_text | main_currency2 | main_checkbox | main_currency | main_date;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_text | main_currency2 | main_checkbox | main_currency | main_date;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_text | main_currency2 | main_checkbox | main_currency | main_date;
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
    fieldId: main_select | main_datetime | main_text | main_currency2 | main_checkbox | main_currency | main_date;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_text | main_currency2 | main_checkbox | main_currency | main_date;
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

export interface RecordCreateOptions_DEPOSIT { // This one gets exported
    /**
     * The record type.
     */
    type: Type.DEPOSIT;
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

export interface RecordTransformOptions_DEPOSIT { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.DEPOSIT;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_DEPOSIT { // This one gets exported
    /**
     * The record type.
     */
    type: Type.DEPOSIT;
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
export interface DEPOSIT extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_cashback | FindSublistLineWithValueOptions_other | FindSublistLineWithValueOptions_payment): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_cashback | FindSublistLineWithValueOptions_other | FindSublistLineWithValueOptions_payment): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_cashback | GetCurrentSublistValueOptions_other | GetCurrentSublistValueOptions_payment): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_cashback | GetCurrentSublistValueOptions_other | GetCurrentSublistValueOptions_payment): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_cashback | GetCurrentSublistValueOptions_other | GetCurrentSublistValueOptions_payment): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_cashback | GetCurrentSublistValueOptions_other | GetCurrentSublistValueOptions_payment): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_cashback | GetCurrentSublistValueOptions_other | GetCurrentSublistValueOptions_payment): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_accountingbookdetail | GetMatrixHeaderCountOptions_cashback | GetMatrixHeaderCountOptions_other | GetMatrixHeaderCountOptions_payment): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_cashback | GetMatrixHeaderFieldOptions_other | GetMatrixHeaderFieldOptions_payment): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_cashback | GetMatrixHeaderFieldOptions_other | GetMatrixHeaderFieldOptions_payment): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_cashback | GetMatrixSublistFieldOptions_other | GetMatrixSublistFieldOptions_payment): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_cashback | GetMatrixSublistFieldOptions_other | GetMatrixSublistFieldOptions_payment): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_cashback | SetCurrentMatrixSublistValueOptions_other | SetCurrentMatrixSublistValueOptions_payment): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_cashback | SetCurrentMatrixSublistValueOptions_other | SetCurrentMatrixSublistValueOptions_payment): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_accountingbookdetail | SetCurrentSublistValueOptions_cashback | SetCurrentSublistValueOptions_other | SetCurrentSublistValueOptions_payment): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_cashback | SetSublistValueOptions_other | SetSublistValueOptions_payment): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_accountingbookdetail | SetCurrentSublistTextOptions_cashback | SetCurrentSublistTextOptions_other | SetCurrentSublistTextOptions_payment): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_cashback | SetSublistTextOptions_other | SetSublistTextOptions_payment): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_cashback | SetSublistValueOptions_other | SetSublistValueOptions_payment): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_cashback | SetSublistTextOptions_other | SetSublistTextOptions_payment): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_cashback | GetSublistValueOptions_other | GetSublistValueOptions_payment): number;
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
    (options: CopyLoadOptions_DEPOSIT): DEPOSIT;
    promise(options: CopyLoadOptions_DEPOSIT): Promise<DEPOSIT>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_DEPOSIT): DEPOSIT;
    promise(options: RecordCreateOptions_DEPOSIT): Promise<DEPOSIT>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_DEPOSIT): DEPOSIT;
    promise(options: CopyLoadOptions_DEPOSIT): Promise<DEPOSIT>;
}
