
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './_EventTypes'

// main field types
type main_integer = 'amortizationperiod' | 'ebayitemlots' | 'internalid' | 'numactivelistings' | 'numcurrentlylisted' | 'primarycategory' | 'secondarycategory' | 'shopzillacategoryid' | 'storecategory' | 'storecategory2';
type main_select = 'amortizationtemplate' | 'auctiontype' | 'billingschedule' | 'class' | 'costcategory' | 'costestimatetype' | 'countryofmanufacture' | 'createrevenueplanson' | 'customform' | 'deferralaccount' | 'deferredrevenueaccount' | 'department' | 'dropshipexpenseaccount' | 'ebayhandlingtime' | 'ebayintlshipinsurance' | 'ebayintlshippingitem1' | 'ebayintlshippingitem2' | 'ebayintlshippingitem3' | 'ebaylayout' | 'ebaypackagetype' | 'ebaypagecounter' | 'ebayrelistingoption' | 'ebaytheme' | 'ebaythemegroup' | 'expenseaccount' | 'imageslocation' | 'incomeaccount' | 'intercoexpenseaccount' | 'intercoincomeaccount' | 'issueproduct' | 'itemcondition' | 'itemoptions' | 'itemrevenuecategory' | 'itemshipinsurance' | 'listingduration' | 'listingstarttime' | 'location' | 'matrixtype' | 'outofstockbehavior' | 'overallquantitypricingtype' | 'overheadtype' | 'parent' | 'preferencecriterion' | 'pricinggroup' | 'productfeed' | 'purchaseunit' | 'quantitypricingschedule' | 'refundgivenas' | 'returnpolicy' | 'returnshippingpaidby' | 'returnswithin' | 'revenueallocationgroup' | 'revenuerecognitionrule' | 'revrecschedule' | 'saleunit' | 'schedulebcode' | 'shippackage' | 'shippingitem1' | 'shippingitem2' | 'shippingitem3' | 'sitemappriority' | 'softdescriptor' | 'storedisplayimage' | 'storedisplaythumbnail' | 'storeitemtemplate' | 'subsidiary' | 'taxschedule' | 'unitstype' | 'vsoedeferral' | 'vsoepermitdiscount' | 'vsoesopgroup' | 'weightunit';
type main_posinteger = 'auctionquantity' | 'minimumquantity' | 'packageheight' | 'packagelength' | 'packagewidth' | 'schedulebquantity';
type main_checkbox = 'availabletopartners' | 'copydescription' | 'deferrevrec' | 'displayinebaystore' | 'dontshowprice' | 'ebayisirregularpackage' | 'endauctionswhenoutofstock' | 'enforceminqtyinternally' | 'excludefromsitemap' | 'gallery' | 'galleryfeatured' | 'generateaccruals' | 'gifttypeexpressship' | 'gifttypegiftwrap' | 'gifttypeshiptorecipient' | 'includechildren' | 'isdonationitem' | 'isdropshipitem' | 'isfulfillable' | 'isgcocompliant' | 'isinactive' | 'isonline' | 'isspecialorderitem' | 'mossapplies' | 'multmanufactureaddr' | 'offersupport' | 'producer' | 'sellonebay' | 'shipasia' | 'shipaustralia' | 'shipcanada' | 'shipeurope' | 'shipgermany' | 'shipindividually' | 'shipjapan' | 'shipmexico' | 'shipnorthsouthamerica' | 'shipuk' | 'shipworldwide' | 'showasgift' | 'showdefaultdonationamount' | 'supersizeimages' | 'taxable' | 'usemarginalrates' | 'vsoedelivered';
type main_currency = 'buyitnowprice' | 'costestimate' | 'ebayintlinsurancefee' | 'ebayintlpackagehandlingfee' | 'handlingcost' | 'itemhandlingfee' | 'iteminsurancefee' | 'reserveprice' | 'shippingcost' | 'shippingrate1' | 'shippingrate2' | 'shippingrate3' | 'startingprice';
type main_text = 'conditionenabled' | 'conditionhelpurl' | 'costunits' | 'currency' | 'displayname' | 'ebayitemlocdisplay' | 'ebayitemloczipcode' | 'ebayitemsubtitle' | 'ebayitemtitle' | 'externalid' | 'froogleproductfeed' | 'handlingcostunits' | 'handlinggroup' | 'imagesgroup' | 'itemid' | 'itemtype' | 'manufacturer' | 'manufactureraddr1' | 'manufacturercity' | 'manufacturerstate' | 'manufacturertariff' | 'manufacturertaxid' | 'manufacturerzip' | 'minimumquantityunits' | 'mpn' | 'nextagcategory' | 'nextagproductfeed' | 'nopricemessage' | 'primarycatdisplayname' | 'schedulebnumber' | 'secondarycatdisplayname' | 'shippingcostunits' | 'shippingdomesticmethodsgroup' | 'shippingdomgroup' | 'shippingintlgroup' | 'shippingintlgroup1' | 'shippingintlgroup2' | 'shippingintlgroup3' | 'shippinglocationsgroup' | 'shippingpackaginggroup' | 'shoppingdotcomcategory' | 'shoppingproductfeed' | 'shopzillaproductfeed' | 'stockdescription' | 'storecatdisplayname' | 'storecatdisplayname2' | 'storedisplayname' | 'subtype' | 'templatesgroup' | 'upccode' | 'vendorname' | 'weightunits' | 'yahooproductfeed';
type main_currency2 = 'cost' | 'maxdonationamount' | 'vsoeprice';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_radio = 'ebayisintlcalculatedrate' | 'iscalculatedrate' | 'listimmediate' | 'standardimages' | 'willship';
type main_textarea = 'ebayitemdescription' | 'featureddescription' | 'matrixitemnametemplate' | 'metataghtml' | 'outofstockmessage' | 'pagetitle' | 'purchasedescription' | 'relateditemsdescription' | 'returnpolicydetails' | 'salesdescription' | 'searchkeywords' | 'storedescription' | 'storedetaileddescription' | 'urlcomponent';
type main_posfloat = 'ebayitemweightamt' | 'purchaseorderamount' | 'purchaseorderquantity' | 'purchaseorderquantitydiff' | 'receiptamount' | 'receiptquantity' | 'receiptquantitydiff';
type main_date = 'listingstartdate';
type main_rate = 'residual';
type main_float = 'weight';

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

// sitecategory field types
type sitecategory_select = 'category' | 'website';
type sitecategory_text = 'categorydescription';
type sitecategory_checkbox = 'isdefault';


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
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4' | 'sitecategory';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4' | 'sitecategory';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4' | 'sitecategory';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'price1' | 'price2' | 'price3' | 'price4' | 'sitecategory';
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


// sitecategory type definitions
interface FindSublistLineWithValueOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
}

interface GetMatrixHeaderCountOptions_sitecategory {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitecategory';
    /** The intenral ID of the matrix field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
}

interface GetMatrixHeaderFieldOptions_sitecategory {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitecategory';
    /** The internal ID of the matrix field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_sitecategory {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitecategory';
    /** The intenral ID of the matrix field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
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

interface SetCurrentSublistValueOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
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

interface SetCurrentSublistTextOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_sitecategory {
    /** The internal ID of the sublist. */
    sublistId: 'sitecategory';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecategory_select | sitecategory_text | sitecategory_checkbox;
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
    fieldId: main_integer | main_select | main_posinteger | main_checkbox | main_currency | main_text | main_currency2 | main_datetime | main_radio | main_textarea | main_posfloat | main_date | main_rate | main_float;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_integer | main_select | main_posinteger | main_checkbox | main_currency | main_text | main_currency2 | main_datetime | main_radio | main_textarea | main_posfloat | main_date | main_rate | main_float;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_integer | main_select | main_posinteger | main_checkbox | main_currency | main_text | main_currency2 | main_datetime | main_radio | main_textarea | main_posfloat | main_date | main_rate | main_float;
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
    fieldId: main_integer | main_select | main_posinteger | main_checkbox | main_currency | main_text | main_currency2 | main_datetime | main_radio | main_textarea | main_posfloat | main_date | main_rate | main_float;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_integer | main_select | main_posinteger | main_checkbox | main_currency | main_text | main_currency2 | main_datetime | main_radio | main_textarea | main_posfloat | main_date | main_rate | main_float;
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

export interface RecordCreateOptions_NON_INVENTORY_ITEM { // This one gets exported
    /**
     * The record type.
     */
    type: Type.NON_INVENTORY_ITEM;
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

export interface RecordTransformOptions_NON_INVENTORY_ITEM { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.NON_INVENTORY_ITEM;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_NON_INVENTORY_ITEM { // This one gets exported
    /**
     * The record type.
     */
    type: Type.NON_INVENTORY_ITEM;
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
export interface NON_INVENTORY_ITEM extends Record {

    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_price1 | GetSublistValueOptions_price2 | GetSublistValueOptions_price3 | GetSublistValueOptions_price4 | GetSublistValueOptions_sitecategory): number;
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
    (options: CopyLoadOptions_NON_INVENTORY_ITEM): NON_INVENTORY_ITEM;
    promise(options: CopyLoadOptions_NON_INVENTORY_ITEM): Promise<NON_INVENTORY_ITEM>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_NON_INVENTORY_ITEM): NON_INVENTORY_ITEM;
    promise(options: RecordCreateOptions_NON_INVENTORY_ITEM): Promise<NON_INVENTORY_ITEM>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_NON_INVENTORY_ITEM): NON_INVENTORY_ITEM;
    promise(options: CopyLoadOptions_NON_INVENTORY_ITEM): Promise<NON_INVENTORY_ITEM>;
}
