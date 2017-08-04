
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_integer = 'amortizationperiod';
type main_select = 'amortizationtemplate' | 'billingschedule' | 'class' | 'costcategory' | 'costestimatetype' | 'createrevenueplanson' | 'customform' | 'deferralaccount' | 'deferredrevenueaccount' | 'department' | 'expenseaccount' | 'incomeaccount' | 'intercoexpenseaccount' | 'intercoincomeaccount' | 'issueproduct' | 'itemoptions' | 'itemrevenuecategory' | 'location' | 'matrixtype' | 'overallquantitypricingtype' | 'overheadtype' | 'parent' | 'pricinggroup' | 'purchaseunit' | 'quantitypricingschedule' | 'revenueallocationgroup' | 'revenuerecognitionrule' | 'revrecschedule' | 'saleunit' | 'softdescriptor' | 'subsidiary' | 'taxschedule' | 'unitstype' | 'vsoedeferral' | 'vsoepermitdiscount' | 'vsoesopgroup';
type main_checkbox = 'availabletopartners' | 'deferrevrec' | 'enforceminqtyinternally' | 'generateaccruals' | 'includechildren' | 'isfulfillable' | 'isgcocompliant' | 'isinactive' | 'isonline' | 'mossapplies' | 'offersupport' | 'usemarginalrates' | 'vsoedelivered';
type main_currency2 = 'cost' | 'vsoeprice';
type main_currency = 'costestimate';
type main_text = 'costunits' | 'currency' | 'displayname' | 'externalid' | 'itemid' | 'itemtype' | 'minimumquantityunits' | 'subtype' | 'upccode' | 'vendorname';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_textarea = 'matrixitemnametemplate' | 'purchasedescription' | 'salesdescription';
type main_posinteger = 'minimumquantity';
type main_posfloat = 'purchaseorderamount' | 'purchaseorderquantity' | 'purchaseorderquantitydiff' | 'receiptamount' | 'receiptquantity' | 'receiptquantitydiff';
type main_rate = 'residual';

// accountingbookdetail field types
type accountingbookdetail_select = 'amortizationtemplate' | 'revrecschedule';
type accountingbookdetail_checkbox = 'sameasprimaryamortization' | 'sameasprimaryrevrec';

// price1 field types
type price1_text = 'currency' | 'pricelevel';
type price1_percent = 'discount' | 'discountdisplay';

// price2 field types
type price2_text = 'currency' | 'pricelevel';
type price2_percent = 'discount' | 'discountdisplay';

// price3 field types
type price3_text = 'currency' | 'pricelevel';
type price3_percent = 'discount' | 'discountdisplay';

// price4 field types
type price4_text = 'currency' | 'pricelevel';
type price4_percent = 'discount' | 'discountdisplay';


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
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4';
    /** The line number to select in the sublist. */
    line: number;
}


// accountingbookdetail type definitions
interface FindSublistLineWithValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
}

interface GetMatrixHeaderCountOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The intenral ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
}

interface GetMatrixHeaderFieldOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The intenral ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
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
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
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
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
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
    fieldId: accountingbookdetail_select | accountingbookdetail_checkbox;
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


// price1 type definitions
interface FindSublistLineWithValueOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
}

interface GetMatrixHeaderCountOptions_price1 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price1';
    /** The intenral ID of the matrix field. */
    fieldId: price1_text | price1_percent;
}

interface GetMatrixHeaderFieldOptions_price1 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price1';
    /** The internal ID of the matrix field. */
    fieldId: price1_text | price1_percent;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_price1 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price1';
    /** The intenral ID of the matrix field. */
    fieldId: price1_text | price1_percent;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
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

interface SetCurrentSublistValueOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
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

interface SetCurrentSublistTextOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_price1 {
    /** The internal ID of the sublist. */
    sublistId: 'price1';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price1_text | price1_percent;
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


// price2 type definitions
interface FindSublistLineWithValueOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
}

interface GetMatrixHeaderCountOptions_price2 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price2';
    /** The intenral ID of the matrix field. */
    fieldId: price2_text | price2_percent;
}

interface GetMatrixHeaderFieldOptions_price2 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price2';
    /** The internal ID of the matrix field. */
    fieldId: price2_text | price2_percent;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_price2 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price2';
    /** The intenral ID of the matrix field. */
    fieldId: price2_text | price2_percent;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
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

interface SetCurrentSublistValueOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
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

interface SetCurrentSublistTextOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_price2 {
    /** The internal ID of the sublist. */
    sublistId: 'price2';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price2_text | price2_percent;
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


// price3 type definitions
interface FindSublistLineWithValueOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
}

interface GetMatrixHeaderCountOptions_price3 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price3';
    /** The intenral ID of the matrix field. */
    fieldId: price3_text | price3_percent;
}

interface GetMatrixHeaderFieldOptions_price3 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price3';
    /** The internal ID of the matrix field. */
    fieldId: price3_text | price3_percent;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_price3 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price3';
    /** The intenral ID of the matrix field. */
    fieldId: price3_text | price3_percent;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
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

interface SetCurrentSublistValueOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
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

interface SetCurrentSublistTextOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_price3 {
    /** The internal ID of the sublist. */
    sublistId: 'price3';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price3_text | price3_percent;
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


// price4 type definitions
interface FindSublistLineWithValueOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
}

interface GetMatrixHeaderCountOptions_price4 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price4';
    /** The intenral ID of the matrix field. */
    fieldId: price4_text | price4_percent;
}

interface GetMatrixHeaderFieldOptions_price4 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price4';
    /** The internal ID of the matrix field. */
    fieldId: price4_text | price4_percent;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_price4 {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'price4';
    /** The intenral ID of the matrix field. */
    fieldId: price4_text | price4_percent;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
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

interface SetCurrentSublistValueOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
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

interface SetCurrentSublistTextOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_price4 {
    /** The internal ID of the sublist. */
    sublistId: 'price4';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: price4_text | price4_percent;
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
    fieldId: main_integer | main_select | main_checkbox | main_currency2 | main_currency | main_text | main_datetime | main_textarea | main_posinteger | main_posfloat | main_rate;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_integer | main_select | main_checkbox | main_currency2 | main_currency | main_text | main_datetime | main_textarea | main_posinteger | main_posfloat | main_rate;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_integer | main_select | main_checkbox | main_currency2 | main_currency | main_text | main_datetime | main_textarea | main_posinteger | main_posfloat | main_rate;
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
    fieldId: main_integer | main_select | main_checkbox | main_currency2 | main_currency | main_text | main_datetime | main_textarea | main_posinteger | main_posfloat | main_rate;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_integer | main_select | main_checkbox | main_currency2 | main_currency | main_text | main_datetime | main_textarea | main_posinteger | main_posfloat | main_rate;
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

export interface RecordCreateOptions_OTHER_CHARGE_ITEM { // This one gets exported
    /**
     * The record type.
     */
    type: Type.OTHER_CHARGE_ITEM;
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

export interface RecordTransformOptions_OTHER_CHARGE_ITEM { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.OTHER_CHARGE_ITEM;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_OTHER_CHARGE_ITEM { // This one gets exported
    /**
     * The record type.
     */
    type: Type.OTHER_CHARGE_ITEM;
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
export interface OTHER_CHARGE_ITEM extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_price1 | FindSublistLineWithValueOptions_price2 | FindSublistLineWithValueOptions_price3 | FindSublistLineWithValueOptions_price4): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_price1 | FindSublistLineWithValueOptions_price2 | FindSublistLineWithValueOptions_price3 | FindSublistLineWithValueOptions_price4): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_price1 | GetCurrentSublistValueOptions_price2 | GetCurrentSublistValueOptions_price3 | GetCurrentSublistValueOptions_price4): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_price1 | GetCurrentSublistValueOptions_price2 | GetCurrentSublistValueOptions_price3 | GetCurrentSublistValueOptions_price4): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_price1 | GetCurrentSublistValueOptions_price2 | GetCurrentSublistValueOptions_price3 | GetCurrentSublistValueOptions_price4): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_price1 | GetCurrentSublistValueOptions_price2 | GetCurrentSublistValueOptions_price3 | GetCurrentSublistValueOptions_price4): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_price1 | GetCurrentSublistValueOptions_price2 | GetCurrentSublistValueOptions_price3 | GetCurrentSublistValueOptions_price4): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_accountingbookdetail | GetMatrixHeaderCountOptions_price1 | GetMatrixHeaderCountOptions_price2 | GetMatrixHeaderCountOptions_price3 | GetMatrixHeaderCountOptions_price4): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_price1 | GetMatrixHeaderFieldOptions_price2 | GetMatrixHeaderFieldOptions_price3 | GetMatrixHeaderFieldOptions_price4): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_price1 | GetMatrixHeaderFieldOptions_price2 | GetMatrixHeaderFieldOptions_price3 | GetMatrixHeaderFieldOptions_price4): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_price1 | GetMatrixSublistFieldOptions_price2 | GetMatrixSublistFieldOptions_price3 | GetMatrixSublistFieldOptions_price4): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_price1 | GetMatrixSublistFieldOptions_price2 | GetMatrixSublistFieldOptions_price3 | GetMatrixSublistFieldOptions_price4): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_price1 | SetCurrentMatrixSublistValueOptions_price2 | SetCurrentMatrixSublistValueOptions_price3 | SetCurrentMatrixSublistValueOptions_price4): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_price1 | SetCurrentMatrixSublistValueOptions_price2 | SetCurrentMatrixSublistValueOptions_price3 | SetCurrentMatrixSublistValueOptions_price4): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_accountingbookdetail | SetCurrentSublistValueOptions_price1 | SetCurrentSublistValueOptions_price2 | SetCurrentSublistValueOptions_price3 | SetCurrentSublistValueOptions_price4): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_price1 | SetSublistValueOptions_price2 | SetSublistValueOptions_price3 | SetSublistValueOptions_price4): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_accountingbookdetail | SetCurrentSublistTextOptions_price1 | SetCurrentSublistTextOptions_price2 | SetCurrentSublistTextOptions_price3 | SetCurrentSublistTextOptions_price4): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_price1 | SetSublistTextOptions_price2 | SetSublistTextOptions_price3 | SetSublistTextOptions_price4): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_price1 | SetSublistValueOptions_price2 | SetSublistValueOptions_price3 | SetSublistValueOptions_price4): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_price1 | SetSublistTextOptions_price2 | SetSublistTextOptions_price3 | SetSublistTextOptions_price4): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4): number;
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
    (options: CopyLoadOptions_OTHER_CHARGE_ITEM): OTHER_CHARGE_ITEM;
    promise(options: CopyLoadOptions_OTHER_CHARGE_ITEM): Promise<OTHER_CHARGE_ITEM>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_OTHER_CHARGE_ITEM): OTHER_CHARGE_ITEM;
    promise(options: RecordCreateOptions_OTHER_CHARGE_ITEM): Promise<OTHER_CHARGE_ITEM>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_OTHER_CHARGE_ITEM): OTHER_CHARGE_ITEM;
    promise(options: CopyLoadOptions_OTHER_CHARGE_ITEM): Promise<OTHER_CHARGE_ITEM>;
}
