
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_checkbox = 'allowemptycards' | 'ccapproved' | 'excludecommission' | 'getauth' | 'ignoreavs' | 'ignorecsc' | 'isbasecurrency' | 'ismultishipto' | 'isrecurringpayment' | 'istaxable' | 'overridehold' | 'overrideholdchecked' | 'paypalprocess' | 'revreconrevcommitment' | 'shipcomplete' | 'syncpartnerteams' | 'syncsalesteams' | 'tobeemailed' | 'tobefaxed' | 'tobeprinted' | 'tranisvsoebundle' | 'vsoeautocalc';
type main_currency = 'althandlingcost' | 'altsalestotal' | 'altshippingcost' | 'balance' | 'consolidatebalance' | 'deferredrevenue' | 'discounttotal' | 'estgrossprofit' | 'giftcertapplied' | 'handlingcost' | 'recognizedrevenue' | 'shippingcost' | 'subtotal' | 'taxtotal' | 'total' | 'totalcostestimate' | 'unbilledorders';
type main_text = 'authcode' | 'billaddr1' | 'billaddr2' | 'billaddr3' | 'billaddressee' | 'billattention' | 'billcity' | 'billcountry' | 'billisresidential' | 'billphone' | 'billstate' | 'billzip' | 'cchold' | 'ccname' | 'ccprocessoraccount' | 'ccsecuritycode' | 'ccstreet' | 'cczipcode' | 'currencyname' | 'currencysymbol' | 'customercode' | 'debitcardissueno' | 'externalid' | 'fob' | 'handlingtax1rate' | 'inputpnrefnum' | 'isdefaultshippingrequest' | 'ispurchasecard' | 'linkedtrackingnumbers' | 'memo' | 'muccpromocodeinstance' | 'otherrefnum' | 'paymenteventpurchasedatasent' | 'paymenteventtype' | 'paymenteventupdatedby' | 'paypalauthid' | 'paypalstatus' | 'paypaltranid' | 'pnrefnum' | 'promocodepluginimpl' | 'returntrackingnumbers' | 'revcommitstatus' | 'revenuestatus' | 'shipaddr1' | 'shipaddr2' | 'shipaddr3' | 'shipaddressee' | 'shipattention' | 'shipcity' | 'shipcountry' | 'shipisresidential' | 'shipoverride' | 'shipphone' | 'shippingcostoverridden' | 'shippingtax1rate' | 'shipstate' | 'shipzip' | 'softdescriptor' | 'source' | 'status' | 'statusRef' | 'threedstatuscode' | 'tranid';
type main_address = 'billaddress' | 'shipaddress';
type main_select = 'billaddresslist' | 'billingschedule' | 'ccavsstreetmatch' | 'ccavszipmatch' | 'cciavsmatch' | 'ccsecuritycodematch' | 'class' | 'couponcode' | 'createdfrom' | 'creditcard' | 'creditcardprocessor' | 'currency' | 'customform' | 'department' | 'discountitem' | 'draccount' | 'entity' | 'entitynexus' | 'fxaccount' | 'handlingtaxcode' | 'intercostatus' | 'intercotransaction' | 'leadsource' | 'location' | 'messagesel' | 'nexus' | 'opportunity' | 'orderstatus' | 'partner' | 'paymenteventholdreason' | 'paymenteventresult' | 'paymentmethod' | 'promocode' | 'salesgroup' | 'salesrep' | 'shipaddresslist' | 'shipmethod' | 'shippingtaxcode' | 'subsidiary' | 'taxitem' | 'terms';
type main_summary = 'billingaddress' | 'shippingaddress';
type main_ccexpdate = 'ccexpiredate';
type main_textarea = 'ccholdetails' | 'message';
type main_ccnumber = 'ccnumber';
type main_datetime = 'createddate' | 'lastmodifieddate' | 'paymenteventdate';
type main_rate = 'discountrate';
type main_emails = 'email';
type main_date = 'enddate' | 'saleseffectivedate' | 'shipdate' | 'startdate' | 'trandate';
type main_percent = 'estgrossprofitpercent';
type main_currency2 = 'exchangerate' | 'onetime' | 'recurannually' | 'recurmonthly' | 'recurquarterly' | 'recurweekly';
type main_float = 'overrideshippingcost' | 'taxrate';
type main_ccvalidfrom = 'validfrom';

// accountingbookdetail field types
type accountingbookdetail_select = 'accountingbook';
type accountingbookdetail_currency2 = 'exchangerate';
type accountingbookdetail_checkbox = 'revreconrevcommitment' | 'tranisvsoebundle';

// item field types
type item_currency = 'altsalesamt' | 'amount' | 'costestimate' | 'vsoeallocation' | 'vsoeamount';
type item_text = 'amortizationperiod' | 'amortizationtype' | 'billvariancestatus' | 'chargetype' | 'daysbeforeexpiration' | 'giftcertfrom' | 'giftcertrecipientname' | 'id' | 'isvsoebundle' | 'itemfulfillmentchoice' | 'itemsubtype' | 'itemtype' | 'line' | 'matrixtype' | 'povendor' | 'printitems' | 'rateschedule';
type item_select = 'catchupperiod' | 'commitinventory' | 'costestimatetype' | 'createdpo' | 'createpo' | 'item' | 'price' | 'revrecschedule' | 'shipaddress' | 'shipcarrier' | 'shipmethod' | 'subscription' | 'taxcode' | 'units' | 'vsoedeferral' | 'vsoepermitdiscount' | 'vsoesopgroup';
type item_rate = 'costestimaterate' | 'rate';
type item_checkbox = 'createwo' | 'deferrevrec' | 'excludefromraterequest' | 'fromjob' | 'isclosed' | 'isestimate' | 'istaxable' | 'locationautoassigned' | 'noautoassignlocation' | 'vsoedelivered' | 'vsoeisestimate';
type item_textarea = 'description' | 'giftcertmessage' | 'licensecode';
type item_date = 'expectedshipdate' | 'revrecenddate' | 'revrecstartdate';
type item_email = 'giftcertrecipientemail';
type item_summary = 'inventorydetail';
type item_integer = 'linenumber';
type item_namevaluelist = 'options';
type item_float = 'orderpriority' | 'quantity' | 'quantityavailable' | 'quantitybackordered' | 'quantitybilled' | 'quantitycommitted' | 'quantityfulfilled' | 'quantityrevcommitted';
type item_currency2 = 'porate' | 'vsoeprice';
type item_percent = 'taxrate1';

// partners field types
type partners_percent = 'contribution';
type partners_text = 'id' | 'transaction';
type partners_checkbox = 'isprimary';
type partners_select = 'partner' | 'partnerrole';

// promotions field types
type promotions_text = 'cannotbecombined' | 'muccpromocodeinstance';
type promotions_select = 'couponcode' | 'discount' | 'promocode';
type promotions_rate = 'discountrate';
type promotions_currency = 'purchasediscount';
type promotions_rtext = 'shippingdiscount';

// salesteam field types
type salesteam_percent = 'contribution';
type salesteam_select = 'employee' | 'salesrole';
type salesteam_text = 'id' | 'issalesrep' | 'transaction';
type salesteam_checkbox = 'isprimary';

// shipgroup field types
type shipgroup_text = 'destinationaddress' | 'shippingcarrier' | 'shippingmethod' | 'sourceaddress';
type shipgroup_currency = 'handlingrate' | 'shippingrate';
type shipgroup_integer = 'id';
type shipgroup_float = 'weight';


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
    sublistId: 'accountingbookdetail' | 'item' | 'partners' | 'promotions' | 'salesteam' | 'shipgroup';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'item' | 'partners' | 'promotions' | 'salesteam' | 'shipgroup';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'item' | 'partners' | 'promotions' | 'salesteam' | 'shipgroup';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'item' | 'partners' | 'promotions' | 'salesteam' | 'shipgroup';
    /** The line number to select in the sublist. */
    line: number;
}


// accountingbookdetail type definitions
interface FindSublistLineWithValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
}

interface GetMatrixHeaderCountOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The intenral ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
}

interface GetMatrixHeaderFieldOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_accountingbookdetail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'accountingbookdetail';
    /** The intenral ID of the matrix field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
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
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
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
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_accountingbookdetail {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
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
    fieldId: accountingbookdetail_select | accountingbookdetail_currency2 | accountingbookdetail_checkbox;
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
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
}

interface GetMatrixHeaderCountOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The intenral ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
}

interface GetMatrixHeaderFieldOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The internal ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_item {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'item';
    /** The intenral ID of the matrix field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
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
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
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
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
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
    fieldId: item_currency | item_text | item_select | item_rate | item_checkbox | item_textarea | item_date | item_email | item_summary | item_integer | item_namevaluelist | item_float | item_currency2 | item_percent;
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


// promotions type definitions
interface FindSublistLineWithValueOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
}

interface GetMatrixHeaderCountOptions_promotions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'promotions';
    /** The intenral ID of the matrix field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
}

interface GetMatrixHeaderFieldOptions_promotions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'promotions';
    /** The internal ID of the matrix field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_promotions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'promotions';
    /** The intenral ID of the matrix field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
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

interface SetCurrentSublistValueOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
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

interface SetCurrentSublistTextOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: promotions_text | promotions_select | promotions_rate | promotions_currency | promotions_rtext;
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
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
}

interface GetMatrixHeaderCountOptions_salesteam {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'salesteam';
    /** The intenral ID of the matrix field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
}

interface GetMatrixHeaderFieldOptions_salesteam {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'salesteam';
    /** The internal ID of the matrix field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_salesteam {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'salesteam';
    /** The intenral ID of the matrix field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
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
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
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
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_salesteam {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
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
    fieldId: salesteam_percent | salesteam_select | salesteam_text | salesteam_checkbox;
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


// shipgroup type definitions
interface FindSublistLineWithValueOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
}

interface GetMatrixHeaderCountOptions_shipgroup {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shipgroup';
    /** The intenral ID of the matrix field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
}

interface GetMatrixHeaderFieldOptions_shipgroup {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shipgroup';
    /** The internal ID of the matrix field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_shipgroup {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shipgroup';
    /** The intenral ID of the matrix field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
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

interface SetCurrentSublistValueOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
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

interface SetCurrentSublistTextOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_shipgroup {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shipgroup_text | shipgroup_currency | shipgroup_integer | shipgroup_float;
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
    fieldId: main_checkbox | main_currency | main_text | main_address | main_select | main_summary | main_ccexpdate | main_textarea | main_ccnumber | main_datetime | main_rate | main_emails | main_date | main_percent | main_currency2 | main_float | main_ccvalidfrom;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_checkbox | main_currency | main_text | main_address | main_select | main_summary | main_ccexpdate | main_textarea | main_ccnumber | main_datetime | main_rate | main_emails | main_date | main_percent | main_currency2 | main_float | main_ccvalidfrom;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_checkbox | main_currency | main_text | main_address | main_select | main_summary | main_ccexpdate | main_textarea | main_ccnumber | main_datetime | main_rate | main_emails | main_date | main_percent | main_currency2 | main_float | main_ccvalidfrom;
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
    fieldId: main_checkbox | main_currency | main_text | main_address | main_select | main_summary | main_ccexpdate | main_textarea | main_ccnumber | main_datetime | main_rate | main_emails | main_date | main_percent | main_currency2 | main_float | main_ccvalidfrom;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_checkbox | main_currency | main_text | main_address | main_select | main_summary | main_ccexpdate | main_textarea | main_ccnumber | main_datetime | main_rate | main_emails | main_date | main_percent | main_currency2 | main_float | main_ccvalidfrom;
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

export interface RecordCreateOptions_SALES_ORDER { // This one gets exported
    /**
     * The record type.
     */
    type: Type.SALES_ORDER;
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

export interface RecordTransformOptions_SALES_ORDER { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.SALES_ORDER;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_SALES_ORDER { // This one gets exported
    /**
     * The record type.
     */
    type: Type.SALES_ORDER;
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
export interface SALES_ORDER extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_item | FindSublistLineWithValueOptions_partners | FindSublistLineWithValueOptions_promotions | FindSublistLineWithValueOptions_salesteam | FindSublistLineWithValueOptions_shipgroup): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_accountingbookdetail | FindSublistLineWithValueOptions_item | FindSublistLineWithValueOptions_partners | FindSublistLineWithValueOptions_promotions | FindSublistLineWithValueOptions_salesteam | FindSublistLineWithValueOptions_shipgroup): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_promotions | GetCurrentSublistValueOptions_salesteam | GetCurrentSublistValueOptions_shipgroup): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_promotions | GetCurrentSublistValueOptions_salesteam | GetCurrentSublistValueOptions_shipgroup): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_promotions | GetCurrentSublistValueOptions_salesteam | GetCurrentSublistValueOptions_shipgroup): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_promotions | GetCurrentSublistValueOptions_salesteam | GetCurrentSublistValueOptions_shipgroup): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_accountingbookdetail | GetCurrentSublistValueOptions_item | GetCurrentSublistValueOptions_partners | GetCurrentSublistValueOptions_promotions | GetCurrentSublistValueOptions_salesteam | GetCurrentSublistValueOptions_shipgroup): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_accountingbookdetail | GetMatrixHeaderCountOptions_item | GetMatrixHeaderCountOptions_partners | GetMatrixHeaderCountOptions_promotions | GetMatrixHeaderCountOptions_salesteam | GetMatrixHeaderCountOptions_shipgroup): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_item | GetMatrixHeaderFieldOptions_partners | GetMatrixHeaderFieldOptions_promotions | GetMatrixHeaderFieldOptions_salesteam | GetMatrixHeaderFieldOptions_shipgroup): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_accountingbookdetail | GetMatrixHeaderFieldOptions_item | GetMatrixHeaderFieldOptions_partners | GetMatrixHeaderFieldOptions_promotions | GetMatrixHeaderFieldOptions_salesteam | GetMatrixHeaderFieldOptions_shipgroup): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_item | GetMatrixSublistFieldOptions_partners | GetMatrixSublistFieldOptions_promotions | GetMatrixSublistFieldOptions_salesteam | GetMatrixSublistFieldOptions_shipgroup): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_accountingbookdetail | GetMatrixSublistFieldOptions_item | GetMatrixSublistFieldOptions_partners | GetMatrixSublistFieldOptions_promotions | GetMatrixSublistFieldOptions_salesteam | GetMatrixSublistFieldOptions_shipgroup): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_item | SetCurrentMatrixSublistValueOptions_partners | SetCurrentMatrixSublistValueOptions_promotions | SetCurrentMatrixSublistValueOptions_salesteam | SetCurrentMatrixSublistValueOptions_shipgroup): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_accountingbookdetail | SetCurrentMatrixSublistValueOptions_item | SetCurrentMatrixSublistValueOptions_partners | SetCurrentMatrixSublistValueOptions_promotions | SetCurrentMatrixSublistValueOptions_salesteam | SetCurrentMatrixSublistValueOptions_shipgroup): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_accountingbookdetail | SetCurrentSublistValueOptions_item | SetCurrentSublistValueOptions_partners | SetCurrentSublistValueOptions_promotions | SetCurrentSublistValueOptions_salesteam | SetCurrentSublistValueOptions_shipgroup): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_item | SetSublistValueOptions_partners | SetSublistValueOptions_promotions | SetSublistValueOptions_salesteam | SetSublistValueOptions_shipgroup): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_accountingbookdetail | SetCurrentSublistTextOptions_item | SetCurrentSublistTextOptions_partners | SetCurrentSublistTextOptions_promotions | SetCurrentSublistTextOptions_salesteam | SetCurrentSublistTextOptions_shipgroup): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_item | SetSublistTextOptions_partners | SetSublistTextOptions_promotions | SetSublistTextOptions_salesteam | SetSublistTextOptions_shipgroup): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_accountingbookdetail | SetSublistValueOptions_item | SetSublistValueOptions_partners | SetSublistValueOptions_promotions | SetSublistValueOptions_salesteam | SetSublistValueOptions_shipgroup): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_accountingbookdetail | SetSublistTextOptions_item | SetSublistTextOptions_partners | SetSublistTextOptions_promotions | SetSublistTextOptions_salesteam | SetSublistTextOptions_shipgroup): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_item | GetSublistValueOptions_partners | GetSublistValueOptions_promotions | GetSublistValueOptions_salesteam | GetSublistValueOptions_shipgroup): number;
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
    (options: CopyLoadOptions_SALES_ORDER): SALES_ORDER;
    promise(options: CopyLoadOptions_SALES_ORDER): Promise<SALES_ORDER>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_SALES_ORDER): SALES_ORDER;
    promise(options: RecordCreateOptions_SALES_ORDER): Promise<SALES_ORDER>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_SALES_ORDER): SALES_ORDER;
    promise(options: CopyLoadOptions_SALES_ORDER): Promise<SALES_ORDER>;
}
