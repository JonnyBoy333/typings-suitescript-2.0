
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_currency = 'billedamount' | 'purchasedamount' | 'receivedamount';
type main_textarea = 'billinginstructions' | 'packinglistinstructions' | 'productlabelinginstructions' | 'purchaseorderinstructions';
type main_text = 'carrier' | 'currencyname' | 'currencysymbol' | 'externalid' | 'memo' | 'oldrevenuecommitment' | 'orderstatus' | 'otherrefnum' | 'source' | 'status' | 'statusRef' | 'tranid' | 'updatecurrency';
type main_select = 'class' | 'createdfrom' | 'currency' | 'customform' | 'department' | 'effectivitybasedon' | 'employee' | 'entity' | 'entitynexus' | 'incoterm' | 'location' | 'nexus' | 'subsidiary' | 'terms';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_date = 'enddate' | 'startdate' | 'trandate';
type main_currency2 = 'exchangerate';
type main_checkbox = 'isbasecurrency';
type main_poscurrency = 'maximumamount';

// accountingbookdetail field types
type accountingbookdetail_select = 'accountingbook';
type accountingbookdetail_currency2 = 'exchangerate';

// expense field types
type expense_select = 'account' | 'category' | 'class' | 'department' | 'location';
type expense_currency = 'amount' | 'amountordered';
type expense_text = 'line' | 'memo';
type expense_summary = 'orderschedule';

// item field types
type item_currency = 'amount';
type item_text = 'billvariancestatus' | 'id' | 'isvsoebundle' | 'itemsubtype' | 'itemtype' | 'line' | 'matrixtype' | 'options' | 'rateschedule' | 'vendorname';
type item_select = 'catchupperiod' | 'class' | 'department' | 'item' | 'location' | 'units';
type item_checkbox = 'deferrevrec';
type item_textarea = 'description';
type item_integer = 'linenumber';
type item_summary = 'orderschedule';
type item_float = 'quantity' | 'quantityordered';
type item_rate = 'rate';

// links field types
type links_text = 'id';


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
    sublistId: 'accountingbookdetail' | 'expense' | 'item' | 'links';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'expense' | 'item' | 'links';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'expense' | 'item' | 'links';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'expense' | 'item' | 'links';
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


// expense type definitions
interface FindSublistLineWithValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
}

interface GetMatrixHeaderCountOptions_expense {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'expense';
    /** The intenral ID of the matrix field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
}

interface GetMatrixHeaderFieldOptions_expense {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'expense';
    /** The internal ID of the matrix field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_expense {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'expense';
    /** The intenral ID of the matrix field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
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
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
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
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_expense {
    /** The internal ID of the sublist. */
    sublistId: 'expense';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
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
    fieldId: expense_select | expense_currency | expense_text | expense_summary;
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
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
}

interface GetMatrixHeaderCountOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The intenral ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
}

interface GetMatrixHeaderFieldOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The internal ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The intenral ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
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
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
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
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
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
    fieldId: item_currency | item_text | item_select | item_checkbox | item_textarea | item_integer | item_summary | item_float | item_rate;
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


// links type definitions
interface FindSublistLineWithValueOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
}

interface GetMatrixHeaderCountOptions_links {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'links';
    /** The intenral ID of the matrix field. */
    fieldId: links_text;
}

interface GetMatrixHeaderFieldOptions_links {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'links';
    /** The internal ID of the matrix field. */
    fieldId: links_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_links {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'links';
    /** The intenral ID of the matrix field. */
    fieldId: links_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
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

interface SetCurrentSublistValueOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
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

interface SetCurrentSublistTextOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_links {
    /** The internal ID of the sublist. */
    sublistId: 'links';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: links_text;
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
    fieldId: main_currency | main_textarea | main_text | main_select | main_datetime | main_date | main_currency2 | main_checkbox | main_poscurrency;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_currency | main_textarea | main_text | main_select | main_datetime | main_date | main_currency2 | main_checkbox | main_poscurrency;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_currency | main_textarea | main_text | main_select | main_datetime | main_date | main_currency2 | main_checkbox | main_poscurrency;
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
    fieldId: main_currency | main_textarea | main_text | main_select | main_datetime | main_date | main_currency2 | main_checkbox | main_poscurrency;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_currency | main_textarea | main_text | main_select | main_datetime | main_date | main_currency2 | main_checkbox | main_poscurrency;
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

export interface RecordCreateOptions_BLANKET_PURCHASE_ORDER { // This one gets exported
    /**
     * The record type.
     */
    type: Type.BLANKET_PURCHASE_ORDER;
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

export interface RecordTransformOptions_BLANKET_PURCHASE_ORDER { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.BLANKET_PURCHASE_ORDER;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_BLANKET_PURCHASE_ORDER { // This one gets exported
    /**
     * The record type.
     */
    type: Type.BLANKET_PURCHASE_ORDER;
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
export interface BLANKET_PURCHASE_ORDER extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_expense | FindSublistLineWithValueOptions_item | FindSublistLineWithValueOptions_links): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_expense | FindSublistLineWithValueOptions_item | FindSublistLineWithValueOptions_links): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_links): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_links): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_links): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_links): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_expense | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_links): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_accountingbookdetail | GetMatrixHeaderCountOptions_expense | GetMatrixHeaderCountOptions_item | GetMatrixHeaderCountOptions_links): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_expense | GetMatrixHeaderFieldOptions_item | GetMatrixHeaderFieldOptions_links): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_expense | GetMatrixHeaderFieldOptions_item | GetMatrixHeaderFieldOptions_links): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_expense | GetMatrixSublistFieldOptions_item | GetMatrixSublistFieldOptions_links): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_expense | GetMatrixSublistFieldOptions_item | GetMatrixSublistFieldOptions_links): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_expense | SetCurrentMatrixSublistValueOptions_item | SetCurrentMatrixSublistValueOptions_links): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_expense | SetCurrentMatrixSublistValueOptions_item | SetCurrentMatrixSublistValueOptions_links): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_accountingbookdetail | SetCurrentSublistValueOptions_expense | SetCurrentSublistValueOptions_item | SetCurrentSublistValueOptions_links): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_expense | SetSublistValueOptions_item | SetSublistValueOptions_links): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_accountingbookdetail | SetCurrentSublistTextOptions_expense | SetCurrentSublistTextOptions_item | SetCurrentSublistTextOptions_links): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_expense | SetSublistTextOptions_item | SetSublistTextOptions_links): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_expense | SetSublistValueOptions_item | SetSublistValueOptions_links): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_expense | SetSublistTextOptions_item | SetSublistTextOptions_links): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_expense | GetSublistValueOptions_item | GetSublistValueOptions_links): number;
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
    (options: CopyLoadOptions_BLANKET_PURCHASE_ORDER): BLANKET_PURCHASE_ORDER;
    promise(options: CopyLoadOptions_BLANKET_PURCHASE_ORDER): Promise<BLANKET_PURCHASE_ORDER>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_BLANKET_PURCHASE_ORDER): BLANKET_PURCHASE_ORDER;
    promise(options: RecordCreateOptions_BLANKET_PURCHASE_ORDER): Promise<BLANKET_PURCHASE_ORDER>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_BLANKET_PURCHASE_ORDER): BLANKET_PURCHASE_ORDER;
    promise(options: CopyLoadOptions_BLANKET_PURCHASE_ORDER): Promise<BLANKET_PURCHASE_ORDER>;
}
