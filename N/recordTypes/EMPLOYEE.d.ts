
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_text = 'accountnumber' | 'aliennumber' | 'billaddr1' | 'billaddr2' | 'billaddr3' | 'billcity' | 'billcountry' | 'billstate' | 'billzip' | 'btemplate' | 'empcenterqty' | 'empcenterqtymax' | 'entityid' | 'externalid' | 'firstname' | 'fulluserqty' | 'fulluserqtymax' | 'initials' | 'isempcenterqtyenforced' | 'isfulluserqtyenforced' | 'isretailuserqtyenforced' | 'jurisdiction1display' | 'jurisdiction2display' | 'jurisdiction3display' | 'jurisdiction4display' | 'jurisdiction5display' | 'lastname' | 'middlename' | 'phoneticname' | 'retailuserqty' | 'retailuserqtymax' | 'salutation' | 'strength' | 'title' | 'wasempcenterhasaccess' | 'wasfulluserhasaccess' | 'wasinactive' | 'wasretailuserhasaccess';
type main_currency = 'approvallimit' | 'expenselimit' | 'laborcost' | 'purchaseorderapprovallimit' | 'purchaseorderlimit';
type main_select = 'approver' | 'billingclass' | 'class' | 'commissionpaymentpreference' | 'currency' | 'customform' | 'department' | 'employeestatus' | 'employeetype' | 'ethnicity' | 'gender' | 'globalsubscriptionstatus' | 'image' | 'location' | 'maritalstatus' | 'payfrequency' | 'purchaseorderapprover' | 'residentstatus' | 'salesrole' | 'subsidiary' | 'supervisor' | 'timeapprover' | 'unsubscribe' | 'usetimedata' | 'visatype' | 'workcalendar' | 'workplace';
type main_date = 'authworkdate' | 'birthdate' | 'hiredate' | 'lastpaiddate' | 'lastreviewdate' | 'nextreviewdate' | 'releasedate' | 'visaexpdate';
type main_checkbox = 'autoname' | 'billpay' | 'directdeposit' | 'eligibleforcommission' | 'giveaccess' | 'hasofflineaccess' | 'i9verified' | 'inheritiprules' | 'isinactive' | 'isjobresource' | 'issalesrep' | 'issupportrep' | 'requirepwdchange' | 'sendemail' | 'terminationbydeath' | 'useperquest';
type main_textarea = 'comments' | 'ipaddressrule' | 'jobdescription';
type main_datetime = 'datecreated' | 'lastmodifieddate';
type main_address = 'defaultaddress';
type main_email = 'email';
type main_phone = 'fax' | 'homephone' | 'mobilephone' | 'officephone' | 'phone';
type main_ssnumber = 'socialsecuritynumber';

// accruedtime field types
type accruedtime_select = 'accrualmethod' | 'payrollitem';
type accruedtime_float = 'accrualrate' | 'accruedhours' | 'maximumaccruedhours';
type accruedtime_checkbox = 'inactive' | 'resetaccruedhoursatyearend';
type accruedtime_currency = 'monetaryrate';

// addressbook field types
type addressbook_text = 'addr1' | 'addr2' | 'addr3' | 'addressee' | 'addressid' | 'attention' | 'city' | 'displaystate' | 'label' | 'state' | 'zip';
type addressbook_summary = 'addressbookaddress';
type addressbook_address = 'addrtext';
type addressbook_select = 'country';
type addressbook_checkbox = 'defaultbilling' | 'defaultshipping' | 'override';
type addressbook_integer = 'id' | 'internalid';
type addressbook_phone = 'phone';

// companycontribution field types
type companycontribution_checkbox = 'inactive';
type companycontribution_currency = 'limit';
type companycontribution_select = 'payrollitem';
type companycontribution_rate = 'rate';

// deduction field types
type deduction_checkbox = 'inactive';
type deduction_currency = 'limit';
type deduction_select = 'payrollitem';
type deduction_rate = 'rate';

// directdeposit field types
type directdeposit_checkbox = 'accountprenoted' | 'inactive' | 'netaccount' | 'savingsaccount';
type directdeposit_currency = 'amount';
type directdeposit_text = 'bankaccountnumber' | 'bankname' | 'bankroutingnumber' | 'id';

// earning field types
type earning_checkbox = 'defaultearning' | 'inactive' | 'primaryearning';
type earning_float = 'defaulthours';
type earning_rate = 'payrate';
type earning_select = 'payrollitem';

// rates field types
type rates_select = 'entitycurrency';
type rates_currency = 'rate';


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
    sublistId: 'accruedtime' | 'addressbook' | 'companycontribution' | 'deduction' | 'directdeposit' | 'earning' | 'rates';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime' | 'addressbook' | 'companycontribution' | 'deduction' | 'directdeposit' | 'earning' | 'rates';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime' | 'addressbook' | 'companycontribution' | 'deduction' | 'directdeposit' | 'earning' | 'rates';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime' | 'addressbook' | 'companycontribution' | 'deduction' | 'directdeposit' | 'earning' | 'rates';
    /** The line number to select in the sublist. */
    line: number;
}


// accruedtime type definitions
interface FindSublistLineWithValueOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
}

interface GetMatrixHeaderCountOptions_accruedtime {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accruedtime';
    /** The intenral ID of the matrix field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
}

interface GetMatrixHeaderFieldOptions_accruedtime {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accruedtime';
    /** The internal ID of the matrix field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_accruedtime {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accruedtime';
    /** The intenral ID of the matrix field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
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

interface SetCurrentSublistValueOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
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

interface SetCurrentSublistTextOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_accruedtime {
    /** The internal ID of the sublist. */
    sublistId: 'accruedtime';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accruedtime_select | accruedtime_float | accruedtime_checkbox | accruedtime_currency;
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


// addressbook type definitions
interface FindSublistLineWithValueOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
}

interface GetMatrixHeaderCountOptions_addressbook {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'addressbook';
    /** The intenral ID of the matrix field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
}

interface GetMatrixHeaderFieldOptions_addressbook {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'addressbook';
    /** The internal ID of the matrix field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_addressbook {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'addressbook';
    /** The intenral ID of the matrix field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
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

interface SetCurrentSublistValueOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
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

interface SetCurrentSublistTextOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_addressbook {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: addressbook_text | addressbook_summary | addressbook_address | addressbook_select | addressbook_checkbox | addressbook_integer | addressbook_phone;
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


// companycontribution type definitions
interface FindSublistLineWithValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
}

interface GetMatrixHeaderCountOptions_companycontribution {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companycontribution';
    /** The intenral ID of the matrix field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
}

interface GetMatrixHeaderFieldOptions_companycontribution {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companycontribution';
    /** The internal ID of the matrix field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_companycontribution {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companycontribution';
    /** The intenral ID of the matrix field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
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

interface SetCurrentSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
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

interface SetCurrentSublistTextOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_checkbox | companycontribution_currency | companycontribution_select | companycontribution_rate;
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


// deduction type definitions
interface FindSublistLineWithValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
}

interface GetMatrixHeaderCountOptions_deduction {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deduction';
    /** The intenral ID of the matrix field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
}

interface GetMatrixHeaderFieldOptions_deduction {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deduction';
    /** The internal ID of the matrix field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_deduction {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deduction';
    /** The intenral ID of the matrix field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
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

interface SetCurrentSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
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

interface SetCurrentSublistTextOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_checkbox | deduction_currency | deduction_select | deduction_rate;
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


// directdeposit type definitions
interface FindSublistLineWithValueOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
}

interface GetMatrixHeaderCountOptions_directdeposit {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'directdeposit';
    /** The intenral ID of the matrix field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
}

interface GetMatrixHeaderFieldOptions_directdeposit {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'directdeposit';
    /** The internal ID of the matrix field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_directdeposit {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'directdeposit';
    /** The intenral ID of the matrix field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
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

interface SetCurrentSublistValueOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
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

interface SetCurrentSublistTextOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_directdeposit {
    /** The internal ID of the sublist. */
    sublistId: 'directdeposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: directdeposit_checkbox | directdeposit_currency | directdeposit_text;
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


// earning type definitions
interface FindSublistLineWithValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
}

interface GetMatrixHeaderCountOptions_earning {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'earning';
    /** The intenral ID of the matrix field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
}

interface GetMatrixHeaderFieldOptions_earning {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'earning';
    /** The internal ID of the matrix field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_earning {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'earning';
    /** The intenral ID of the matrix field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
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

interface SetCurrentSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
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

interface SetCurrentSublistTextOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_checkbox | earning_float | earning_rate | earning_select;
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


// rates type definitions
interface FindSublistLineWithValueOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
}

interface GetMatrixHeaderCountOptions_rates {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'rates';
    /** The intenral ID of the matrix field. */
    fieldId: rates_select | rates_currency;
}

interface GetMatrixHeaderFieldOptions_rates {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'rates';
    /** The internal ID of the matrix field. */
    fieldId: rates_select | rates_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_rates {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'rates';
    /** The intenral ID of the matrix field. */
    fieldId: rates_select | rates_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
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

interface SetCurrentSublistValueOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
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

interface SetCurrentSublistTextOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_rates {
    /** The internal ID of the sublist. */
    sublistId: 'rates';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: rates_select | rates_currency;
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
    fieldId: main_text | main_currency | main_select | main_date | main_checkbox | main_textarea | main_datetime | main_address | main_email | main_phone | main_ssnumber;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_currency | main_select | main_date | main_checkbox | main_textarea | main_datetime | main_address | main_email | main_phone | main_ssnumber;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_currency | main_select | main_date | main_checkbox | main_textarea | main_datetime | main_address | main_email | main_phone | main_ssnumber;
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
    fieldId: main_text | main_currency | main_select | main_date | main_checkbox | main_textarea | main_datetime | main_address | main_email | main_phone | main_ssnumber;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_currency | main_select | main_date | main_checkbox | main_textarea | main_datetime | main_address | main_email | main_phone | main_ssnumber;
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

export interface RecordCreateOptions_EMPLOYEE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.EMPLOYEE;
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

export interface RecordTransformOptions_EMPLOYEE { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.EMPLOYEE;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_EMPLOYEE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.EMPLOYEE;
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
export interface EMPLOYEE extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_accruedtime | FindSublistLineWithValueOptions_addressbook | FindSublistLineWithValueOptions_companycontribution | FindSublistLineWithValueOptions_deduction | FindSublistLineWithValueOptions_directdeposit | FindSublistLineWithValueOptions_earning | FindSublistLineWithValueOptions_rates): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_accruedtime | FindSublistLineWithValueOptions_addressbook | FindSublistLineWithValueOptions_companycontribution | FindSublistLineWithValueOptions_deduction | FindSublistLineWithValueOptions_directdeposit | FindSublistLineWithValueOptions_earning | FindSublistLineWithValueOptions_rates): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_accruedtime | GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_directdeposit | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_rates): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accruedtime | GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_directdeposit | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_rates): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accruedtime | GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_directdeposit | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_rates): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_accruedtime | GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_directdeposit | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_rates): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_accruedtime | GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_directdeposit | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_rates): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_accruedtime | GetMatrixHeaderCountOptions_addressbook | GetMatrixHeaderCountOptions_companycontribution | GetMatrixHeaderCountOptions_deduction | GetMatrixHeaderCountOptions_directdeposit | GetMatrixHeaderCountOptions_earning | GetMatrixHeaderCountOptions_rates): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_accruedtime | GetMatrixHeaderFieldOptions_addressbook | GetMatrixHeaderFieldOptions_companycontribution | GetMatrixHeaderFieldOptions_deduction | GetMatrixHeaderFieldOptions_directdeposit | GetMatrixHeaderFieldOptions_earning | GetMatrixHeaderFieldOptions_rates): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_accruedtime | GetMatrixHeaderFieldOptions_addressbook | GetMatrixHeaderFieldOptions_companycontribution | GetMatrixHeaderFieldOptions_deduction | GetMatrixHeaderFieldOptions_directdeposit | GetMatrixHeaderFieldOptions_earning | GetMatrixHeaderFieldOptions_rates): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_accruedtime | GetMatrixSublistFieldOptions_addressbook | GetMatrixSublistFieldOptions_companycontribution | GetMatrixSublistFieldOptions_deduction | GetMatrixSublistFieldOptions_directdeposit | GetMatrixSublistFieldOptions_earning | GetMatrixSublistFieldOptions_rates): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_accruedtime | GetMatrixSublistFieldOptions_addressbook | GetMatrixSublistFieldOptions_companycontribution | GetMatrixSublistFieldOptions_deduction | GetMatrixSublistFieldOptions_directdeposit | GetMatrixSublistFieldOptions_earning | GetMatrixSublistFieldOptions_rates): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_accruedtime | SetCurrentMatrixSublistValueOptions_addressbook | SetCurrentMatrixSublistValueOptions_companycontribution | SetCurrentMatrixSublistValueOptions_deduction | SetCurrentMatrixSublistValueOptions_directdeposit | SetCurrentMatrixSublistValueOptions_earning | SetCurrentMatrixSublistValueOptions_rates): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_accruedtime | SetCurrentMatrixSublistValueOptions_addressbook | SetCurrentMatrixSublistValueOptions_companycontribution | SetCurrentMatrixSublistValueOptions_deduction | SetCurrentMatrixSublistValueOptions_directdeposit | SetCurrentMatrixSublistValueOptions_earning | SetCurrentMatrixSublistValueOptions_rates): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_accruedtime | SetCurrentSublistValueOptions_addressbook | SetCurrentSublistValueOptions_companycontribution | SetCurrentSublistValueOptions_deduction | SetCurrentSublistValueOptions_directdeposit | SetCurrentSublistValueOptions_earning | SetCurrentSublistValueOptions_rates): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_accruedtime | SetSublistValueOptions_addressbook | SetSublistValueOptions_companycontribution | SetSublistValueOptions_deduction | SetSublistValueOptions_directdeposit | SetSublistValueOptions_earning | SetSublistValueOptions_rates): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_accruedtime | SetCurrentSublistTextOptions_addressbook | SetCurrentSublistTextOptions_companycontribution | SetCurrentSublistTextOptions_deduction | SetCurrentSublistTextOptions_directdeposit | SetCurrentSublistTextOptions_earning | SetCurrentSublistTextOptions_rates): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accruedtime | SetSublistTextOptions_addressbook | SetSublistTextOptions_companycontribution | SetSublistTextOptions_deduction | SetSublistTextOptions_directdeposit | SetSublistTextOptions_earning | SetSublistTextOptions_rates): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_accruedtime | SetSublistValueOptions_addressbook | SetSublistValueOptions_companycontribution | SetSublistValueOptions_deduction | SetSublistValueOptions_directdeposit | SetSublistValueOptions_earning | SetSublistValueOptions_rates): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accruedtime | SetSublistTextOptions_addressbook | SetSublistTextOptions_companycontribution | SetSublistTextOptions_deduction | SetSublistTextOptions_directdeposit | SetSublistTextOptions_earning | SetSublistTextOptions_rates): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accruedtime | GetSublistValueOptions_addressbook | GetSublistValueOptions_companycontribution | GetSublistValueOptions_deduction | GetSublistValueOptions_directdeposit | GetSublistValueOptions_earning | GetSublistValueOptions_rates): number;
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
    (options: CopyLoadOptions_EMPLOYEE): EMPLOYEE;
    promise(options: CopyLoadOptions_EMPLOYEE): Promise<EMPLOYEE>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_EMPLOYEE): EMPLOYEE;
    promise(options: RecordCreateOptions_EMPLOYEE): Promise<EMPLOYEE>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_EMPLOYEE): EMPLOYEE;
    promise(options: CopyLoadOptions_EMPLOYEE): Promise<EMPLOYEE>;
}
