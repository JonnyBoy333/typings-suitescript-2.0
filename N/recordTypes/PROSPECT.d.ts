
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'accessrole' | 'buyingreason' | 'buyingtimeframe' | 'campaigncategory' | 'category' | 'contact' | 'creditholdoverride' | 'currency' | 'customform' | 'defaultbankaccount' | 'draccount' | 'emailpreference' | 'entitystatus' | 'fxaccount' | 'globalsubscriptionstatus' | 'image' | 'language' | 'leadsource' | 'monthlyclosing' | 'negativenumberformat' | 'numberformat' | 'openingbalanceaccount' | 'otherrelationships' | 'parent' | 'partner' | 'prefccprocessor' | 'pricelevel' | 'receivablesaccount' | 'salesreadiness' | 'subsidiary' | 'taxfractionunit' | 'taxitem' | 'taxrounding' | 'terms' | 'territory' | 'unsubscribe';
type main_text = 'accountnumber' | 'billaddr1' | 'billaddr2' | 'billaddr3' | 'billcity' | 'billcountry' | 'billstate' | 'billzip' | 'clickstream' | 'companyname' | 'currencyprecision' | 'entityid' | 'externalid' | 'firstname' | 'isjob' | 'keywords' | 'lastname' | 'lastpagevisited' | 'middlename' | 'phoneticname' | 'printoncheckas' | 'referrer' | 'resalenumber' | 'salutation' | 'stage' | 'strength' | 'title' | 'vatregnumber' | 'weblead';

// addressbook field types
type addressbook_text = 'addr1' | 'addr2' | 'addr3' | 'addressee' | 'addressid' | 'attention' | 'city' | 'displaystate' | 'label' | 'state' | 'zip';
type addressbook_summary = 'addressbookaddress';
type addressbook_address = 'addrtext';
type addressbook_select = 'country';
type addressbook_checkbox = 'defaultbilling' | 'defaultshipping' | 'isresidential' | 'override';
type addressbook_integer = 'id' | 'internalid';
type addressbook_phone = 'phone';

// contactroles field types
type contactroles_select = 'contact' | 'role';
type contactroles_email = 'email';
type contactroles_checkbox = 'giveaccess' | 'sendemail';
type contactroles_password = 'password' | 'passwordconfirm';
type contactroles_text = 'strength';

// currency field types
type currency_currency = 'balance' | 'consolbalance' | 'consoldepositbalance' | 'consoloverduebalance' | 'consolunbilledorders' | 'depositbalance' | 'overduebalance' | 'unbilledorders';
type currency_select = 'currency' | 'symbolplacement';
type currency_text = 'currencyformatsample' | 'displaysymbol';
type currency_checkbox = 'overridecurrencyformat';

// download field types
type download_date = 'expiration';
type download_select = 'file';
type download_textarea = 'licensecode';
type download_integer = 'remainingdownloads';

// grouppricing field types
type grouppricing_select = 'group' | 'level';

// itempricing field types
type itempricing_select = 'currency' | 'item' | 'level';
type itempricing_currency2 = 'price';

// partners field types
type partners_percent = 'contribution';
type partners_text = 'customer' | 'id';
type partners_checkbox = 'isprimary';
type partners_select = 'partner' | 'partnerrole';

// salesteam field types
type salesteam_percent = 'contribution';
type salesteam_text = 'customer' | 'id' | 'issalesrep';
type salesteam_select = 'employee' | 'salesrole';
type salesteam_checkbox = 'isprimary';


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
    sublistId: 'addressbook' | 'contactroles' | 'currency' | 'download' | 'grouppricing' | 'itempricing' | 'partners' | 'salesteam';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook' | 'contactroles' | 'currency' | 'download' | 'grouppricing' | 'itempricing' | 'partners' | 'salesteam';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook' | 'contactroles' | 'currency' | 'download' | 'grouppricing' | 'itempricing' | 'partners' | 'salesteam';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook' | 'contactroles' | 'currency' | 'download' | 'grouppricing' | 'itempricing' | 'partners' | 'salesteam';
    /** The line number to select in the sublist. */
    line: number;
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


// contactroles type definitions
interface FindSublistLineWithValueOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
}

interface GetMatrixHeaderCountOptions_contactroles {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'contactroles';
    /** The intenral ID of the matrix field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
}

interface GetMatrixHeaderFieldOptions_contactroles {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'contactroles';
    /** The internal ID of the matrix field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_contactroles {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'contactroles';
    /** The intenral ID of the matrix field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
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

interface SetCurrentSublistValueOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
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

interface SetCurrentSublistTextOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_contactroles {
    /** The internal ID of the sublist. */
    sublistId: 'contactroles';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: contactroles_select | contactroles_email | contactroles_checkbox | contactroles_password | contactroles_text;
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


// currency type definitions
interface FindSublistLineWithValueOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
}

interface GetMatrixHeaderCountOptions_currency {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'currency';
    /** The intenral ID of the matrix field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
}

interface GetMatrixHeaderFieldOptions_currency {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'currency';
    /** The internal ID of the matrix field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_currency {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'currency';
    /** The intenral ID of the matrix field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
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

interface SetCurrentSublistValueOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
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

interface SetCurrentSublistTextOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_currency {
    /** The internal ID of the sublist. */
    sublistId: 'currency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: currency_currency | currency_select | currency_text | currency_checkbox;
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


// download type definitions
interface FindSublistLineWithValueOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
}

interface GetMatrixHeaderCountOptions_download {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'download';
    /** The intenral ID of the matrix field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
}

interface GetMatrixHeaderFieldOptions_download {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'download';
    /** The internal ID of the matrix field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_download {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'download';
    /** The intenral ID of the matrix field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
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

interface SetCurrentSublistValueOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
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

interface SetCurrentSublistTextOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_download {
    /** The internal ID of the sublist. */
    sublistId: 'download';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: download_date | download_select | download_textarea | download_integer;
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


// grouppricing type definitions
interface FindSublistLineWithValueOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
}

interface GetMatrixHeaderCountOptions_grouppricing {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'grouppricing';
    /** The intenral ID of the matrix field. */
    fieldId: grouppricing_select;
}

interface GetMatrixHeaderFieldOptions_grouppricing {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'grouppricing';
    /** The internal ID of the matrix field. */
    fieldId: grouppricing_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_grouppricing {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'grouppricing';
    /** The intenral ID of the matrix field. */
    fieldId: grouppricing_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
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

interface SetCurrentSublistValueOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
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

interface SetCurrentSublistTextOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_grouppricing {
    /** The internal ID of the sublist. */
    sublistId: 'grouppricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: grouppricing_select;
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


// itempricing type definitions
interface FindSublistLineWithValueOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
}

interface GetMatrixHeaderCountOptions_itempricing {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'itempricing';
    /** The intenral ID of the matrix field. */
    fieldId: itempricing_select | itempricing_currency2;
}

interface GetMatrixHeaderFieldOptions_itempricing {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'itempricing';
    /** The internal ID of the matrix field. */
    fieldId: itempricing_select | itempricing_currency2;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_itempricing {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'itempricing';
    /** The intenral ID of the matrix field. */
    fieldId: itempricing_select | itempricing_currency2;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
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

interface SetCurrentSublistValueOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
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

interface SetCurrentSublistTextOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_itempricing {
    /** The internal ID of the sublist. */
    sublistId: 'itempricing';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: itempricing_select | itempricing_currency2;
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


// partners type definitions
interface FindSublistLineWithValueOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
}

interface GetMatrixHeaderCountOptions_partners {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'partners';
    /** The intenral ID of the matrix field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
}

interface GetMatrixHeaderFieldOptions_partners {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'partners';
    /** The internal ID of the matrix field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_partners {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'partners';
    /** The intenral ID of the matrix field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
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

interface SetCurrentSublistValueOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
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

interface SetCurrentSublistTextOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: partners_percent | partners_text | partners_checkbox | partners_select;
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


// salesteam type definitions
interface FindSublistLineWithValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
}

interface GetMatrixHeaderCountOptions_salesteam {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'salesteam';
    /** The intenral ID of the matrix field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
}

interface GetMatrixHeaderFieldOptions_salesteam {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'salesteam';
    /** The internal ID of the matrix field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_salesteam {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'salesteam';
    /** The intenral ID of the matrix field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
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

interface SetCurrentSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
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

interface SetCurrentSublistTextOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_text | salesteam_select | salesteam_checkbox;
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
    fieldId: main_select | main_text;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_text;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_text;
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
    fieldId: main_select | main_text;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_text;
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

export interface RecordCreateOptions_PROSPECT { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PROSPECT;
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

export interface RecordTransformOptions_PROSPECT { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.PROSPECT;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_PROSPECT { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PROSPECT;
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
export interface PROSPECT extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_addressbook | FindSublistLineWithValueOptions_contactroles | FindSublistLineWithValueOptions_currency | FindSublistLineWithValueOptions_download | FindSublistLineWithValueOptions_grouppricing | FindSublistLineWithValueOptions_itempricing | FindSublistLineWithValueOptions_partners | FindSublistLineWithValueOptions_salesteam): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_addressbook | FindSublistLineWithValueOptions_contactroles | FindSublistLineWithValueOptions_currency | FindSublistLineWithValueOptions_download | FindSublistLineWithValueOptions_grouppricing | FindSublistLineWithValueOptions_itempricing | FindSublistLineWithValueOptions_partners | FindSublistLineWithValueOptions_salesteam): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_contactroles | GetCurrentSublistValueOptions_currency | GetCurrentSublistValueOptions_download | GetCurrentSublistValueOptions_grouppricing | GetCurrentSublistValueOptions_itempricing | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_salesteam): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_contactroles | GetCurrentSublistValueOptions_currency | GetCurrentSublistValueOptions_download | GetCurrentSublistValueOptions_grouppricing | GetCurrentSublistValueOptions_itempricing | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_salesteam): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_contactroles | GetCurrentSublistValueOptions_currency | GetCurrentSublistValueOptions_download | GetCurrentSublistValueOptions_grouppricing | GetCurrentSublistValueOptions_itempricing | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_salesteam): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_contactroles | GetCurrentSublistValueOptions_currency | GetCurrentSublistValueOptions_download | GetCurrentSublistValueOptions_grouppricing | GetCurrentSublistValueOptions_itempricing | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_salesteam): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_addressbook | GetCurrentSublistValueOptions_contactroles | GetCurrentSublistValueOptions_currency | GetCurrentSublistValueOptions_download | GetCurrentSublistValueOptions_grouppricing | GetCurrentSublistValueOptions_itempricing | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_salesteam): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_addressbook | GetMatrixHeaderCountOptions_contactroles | GetMatrixHeaderCountOptions_currency | GetMatrixHeaderCountOptions_download | GetMatrixHeaderCountOptions_grouppricing | GetMatrixHeaderCountOptions_itempricing | GetMatrixHeaderCountOptions_partners | GetMatrixHeaderCountOptions_salesteam): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_addressbook | GetMatrixHeaderFieldOptions_contactroles | GetMatrixHeaderFieldOptions_currency | GetMatrixHeaderFieldOptions_download | GetMatrixHeaderFieldOptions_grouppricing | GetMatrixHeaderFieldOptions_itempricing | GetMatrixHeaderFieldOptions_partners | GetMatrixHeaderFieldOptions_salesteam): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_addressbook | GetMatrixHeaderFieldOptions_contactroles | GetMatrixHeaderFieldOptions_currency | GetMatrixHeaderFieldOptions_download | GetMatrixHeaderFieldOptions_grouppricing | GetMatrixHeaderFieldOptions_itempricing | GetMatrixHeaderFieldOptions_partners | GetMatrixHeaderFieldOptions_salesteam): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_addressbook | GetMatrixSublistFieldOptions_contactroles | GetMatrixSublistFieldOptions_currency | GetMatrixSublistFieldOptions_download | GetMatrixSublistFieldOptions_grouppricing | GetMatrixSublistFieldOptions_itempricing | GetMatrixSublistFieldOptions_partners | GetMatrixSublistFieldOptions_salesteam): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_addressbook | GetMatrixSublistFieldOptions_contactroles | GetMatrixSublistFieldOptions_currency | GetMatrixSublistFieldOptions_download | GetMatrixSublistFieldOptions_grouppricing | GetMatrixSublistFieldOptions_itempricing | GetMatrixSublistFieldOptions_partners | GetMatrixSublistFieldOptions_salesteam): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_addressbook | SetCurrentMatrixSublistValueOptions_contactroles | SetCurrentMatrixSublistValueOptions_currency | SetCurrentMatrixSublistValueOptions_download | SetCurrentMatrixSublistValueOptions_grouppricing | SetCurrentMatrixSublistValueOptions_itempricing | SetCurrentMatrixSublistValueOptions_partners | SetCurrentMatrixSublistValueOptions_salesteam): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_addressbook | SetCurrentMatrixSublistValueOptions_contactroles | SetCurrentMatrixSublistValueOptions_currency | SetCurrentMatrixSublistValueOptions_download | SetCurrentMatrixSublistValueOptions_grouppricing | SetCurrentMatrixSublistValueOptions_itempricing | SetCurrentMatrixSublistValueOptions_partners | SetCurrentMatrixSublistValueOptions_salesteam): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_addressbook | SetCurrentSublistValueOptions_contactroles | SetCurrentSublistValueOptions_currency | SetCurrentSublistValueOptions_download | SetCurrentSublistValueOptions_grouppricing | SetCurrentSublistValueOptions_itempricing | SetCurrentSublistValueOptions_partners | SetCurrentSublistValueOptions_salesteam): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_addressbook | SetSublistValueOptions_contactroles | SetSublistValueOptions_currency | SetSublistValueOptions_download | SetSublistValueOptions_grouppricing | SetSublistValueOptions_itempricing | SetSublistValueOptions_partners | SetSublistValueOptions_salesteam): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_addressbook | SetCurrentSublistTextOptions_contactroles | SetCurrentSublistTextOptions_currency | SetCurrentSublistTextOptions_download | SetCurrentSublistTextOptions_grouppricing | SetCurrentSublistTextOptions_itempricing | SetCurrentSublistTextOptions_partners | SetCurrentSublistTextOptions_salesteam): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_addressbook | SetSublistTextOptions_contactroles | SetSublistTextOptions_currency | SetSublistTextOptions_download | SetSublistTextOptions_grouppricing | SetSublistTextOptions_itempricing | SetSublistTextOptions_partners | SetSublistTextOptions_salesteam): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_addressbook | SetSublistValueOptions_contactroles | SetSublistValueOptions_currency | SetSublistValueOptions_download | SetSublistValueOptions_grouppricing | SetSublistValueOptions_itempricing | SetSublistValueOptions_partners | SetSublistValueOptions_salesteam): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_addressbook | SetSublistTextOptions_contactroles | SetSublistTextOptions_currency | SetSublistTextOptions_download | SetSublistTextOptions_grouppricing | SetSublistTextOptions_itempricing | SetSublistTextOptions_partners | SetSublistTextOptions_salesteam): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_addressbook | GetSublistValueOptions_contactroles | GetSublistValueOptions_currency | GetSublistValueOptions_download | GetSublistValueOptions_grouppricing | GetSublistValueOptions_itempricing | GetSublistValueOptions_partners | GetSublistValueOptions_salesteam): number;
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
    (options: CopyLoadOptions_PROSPECT): PROSPECT;
    promise(options: CopyLoadOptions_PROSPECT): Promise<PROSPECT>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_PROSPECT): PROSPECT;
    promise(options: RecordCreateOptions_PROSPECT): Promise<PROSPECT>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_PROSPECT): PROSPECT;
    promise(options: CopyLoadOptions_PROSPECT): Promise<PROSPECT>;
}
