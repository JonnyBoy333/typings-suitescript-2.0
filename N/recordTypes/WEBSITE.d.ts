
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_textarea = 'analyticsclickattributes' | 'analyticssubmitattributes' | 'confpagetrackinghtml' | 'doctypehtml' | 'emailfooter' | 'emailheader' | 'termsandconditionshtml' | 'webstoremetatags';
type main_checkbox = 'autodownloadmedia' | 'ccrequireauth' | 'createcustomersascompanies' | 'displaycompanyfield' | 'displayunsubscribe' | 'enablegaintegration' | 'giftcerteaffectsminamount' | 'hidepaymentpagewhennobalance' | 'includeuncategorizeditems' | 'includevatwithprices' | 'isscriptablecartandcheckout' | 'iswebstoreoffline' | 'iswsdk' | 'legacycategorydescriptions' | 'legacydenselistsupport' | 'legacyimageattributetags' | 'legacynavigationlinks' | 'legacywelcomepage' | 'noactivatetabonhostedpages' | 'outputlinebreaksasbr' | 'passpromocodetocheckout' | 'requestshippingaddressfirst' | 'requirecompanyfield' | 'requireloginforpricing' | 'requireshippinginformation' | 'requiretermsandconditions' | 'savecreditinfo' | 'searchforcategories' | 'searchforinformationitems' | 'searchresultforinvalidurls' | 'shipstoallcountries' | 'showbillingaddress' | 'showcartsummaryportlet' | 'showcookieconsentbanner' | 'showcurrencyportlet' | 'showextendedcart' | 'shownavigationportlet' | 'showordertrackinglink' | 'showpofieldonpayment' | 'showquantitypricinginlists' | 'showsavecreditinfo' | 'showsearchportlet' | 'showshippingestimator' | 'showtellafriendlink' | 'siteloginrequired' | 'siteusescarttags' | 'siteusesdropshadows' | 'useurlfileextension';
type main_select = 'cartdisplayorder' | 'cartupsellitems' | 'categorylistlayout' | 'ccformtemplate' | 'checkoutdomain' | 'colorset' | 'cookiepolicy' | 'custromeregistrationtype' | 'defaultcustomercategory' | 'defaulthostingroot' | 'defaultshippingcountry' | 'defaultshippingmethod' | 'font' | 'igniteedition' | 'invoiceformtemplate' | 'itemlistlayout' | 'itemtemplateaccountingtitem' | 'itemtemplateinformationitem' | 'onlinepricelevel' | 'outofstockitems' | 'pagealign' | 'pagezoom' | 'relateditemslayout' | 'salesordertype' | 'scripttemplatecreditcard' | 'scripttemplateinvoice' | 'searchcategorylistlayout' | 'searchformitemlistlayout' | 'searchitemlistlayout' | 'searchlinkform' | 'searchportletform' | 'shipstocountries' | 'siteportletstyle' | 'sitetabalignment' | 'sitetabstyle' | 'textgroup' | 'upsellitems' | 'upsellitemslayout' | 'urlformat' | 'websitehomepage' | 'websitehomepagetype' | 'websitelogo' | 'websitelogoalign' | 'websitescope' | 'websitetheme' | 'webstoreadditembehavior';
type main_posinteger = 'descriptionfontsize' | 'titlefontsize';
type main_text = 'displayname' | 'externalid' | 'gconotificationurl' | 'internalname' | 'nameorig' | 'pagewidth' | 'relateditemsdescription' | 'storealias' | 'upselldescription' | 'websitelogolinkurl' | 'wsdkcancelcarturl' | 'wsdkcancelcheckouturl' | 'wsdkcancelloginurl' | 'wsdkcompletecheckouturl' | 'wsdkcompleteloginurl';
type main_radio = 'searchportletdisplay';
type main_emails = 'semailaddrforerror' | 'sstoreemailaddrforcopy' | 'sstoreemailaddrforgiftconfcopy' | 'sstoreemailaddrforgiftcopy';
type main_email = 'storeemail';
type main_percent = 'upsellminimumcorrelation' | 'upsellminimumlift';
type main_integer = 'upsellminimumcount';

// cartcolumn field types
type cartcolumn_checkbox = 'show';
type cartcolumn_float = 'width';

// shoppingdomain field types
type shoppingdomain_text = 'domain';
type shoppingdomain_select = 'hostingroot' | 'notfoundpage';
type shoppingdomain_checkbox = 'isprimary';
type shoppingdomain_namevaluelist = 'touchpoints';

// sitecurrency field types
type sitecurrency_text = 'currency';
type sitecurrency_radio = 'isdefault';
type sitecurrency_checkbox = 'isonline';
type sitecurrency_currency = 'minimumorderamount';

// sitelanguage field types
type sitelanguage_radio = 'isdefault';
type sitelanguage_checkbox = 'isonline';
type sitelanguage_text = 'locale';

// siteregion field types
type siteregion_text = 'displayname' | 'subsidiary';
type siteregion_radio = 'isdefault';
type siteregion_checkbox = 'isonline';
type siteregion_select = 'paypalaccount';

// storetab field types
type storetab_text = 'tabdescription' | 'tabname' | 'tabtype';


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
    sublistId: 'cartcolumn' | 'shoppingdomain' | 'sitecurrency' | 'sitelanguage' | 'siteregion' | 'storetab';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn' | 'shoppingdomain' | 'sitecurrency' | 'sitelanguage' | 'siteregion' | 'storetab';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn' | 'shoppingdomain' | 'sitecurrency' | 'sitelanguage' | 'siteregion' | 'storetab';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn' | 'shoppingdomain' | 'sitecurrency' | 'sitelanguage' | 'siteregion' | 'storetab';
    /** The line number to select in the sublist. */
    line: number;
}


// cartcolumn type definitions
interface FindSublistLineWithValueOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
}

interface GetMatrixHeaderCountOptions_cartcolumn {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cartcolumn';
    /** The intenral ID of the matrix field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
}

interface GetMatrixHeaderFieldOptions_cartcolumn {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cartcolumn';
    /** The internal ID of the matrix field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_cartcolumn {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'cartcolumn';
    /** The intenral ID of the matrix field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
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

interface SetCurrentSublistValueOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
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

interface SetCurrentSublistTextOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_cartcolumn {
    /** The internal ID of the sublist. */
    sublistId: 'cartcolumn';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: cartcolumn_checkbox | cartcolumn_float;
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


// shoppingdomain type definitions
interface FindSublistLineWithValueOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
}

interface GetMatrixHeaderCountOptions_shoppingdomain {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shoppingdomain';
    /** The intenral ID of the matrix field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
}

interface GetMatrixHeaderFieldOptions_shoppingdomain {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shoppingdomain';
    /** The internal ID of the matrix field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_shoppingdomain {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shoppingdomain';
    /** The intenral ID of the matrix field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
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

interface SetCurrentSublistValueOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
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

interface SetCurrentSublistTextOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_shoppingdomain {
    /** The internal ID of the sublist. */
    sublistId: 'shoppingdomain';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shoppingdomain_text | shoppingdomain_select | shoppingdomain_checkbox | shoppingdomain_namevaluelist;
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


// sitecurrency type definitions
interface FindSublistLineWithValueOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
}

interface GetMatrixHeaderCountOptions_sitecurrency {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitecurrency';
    /** The intenral ID of the matrix field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
}

interface GetMatrixHeaderFieldOptions_sitecurrency {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitecurrency';
    /** The internal ID of the matrix field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_sitecurrency {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitecurrency';
    /** The intenral ID of the matrix field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
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

interface SetCurrentSublistValueOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
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

interface SetCurrentSublistTextOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_sitecurrency {
    /** The internal ID of the sublist. */
    sublistId: 'sitecurrency';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitecurrency_text | sitecurrency_radio | sitecurrency_checkbox | sitecurrency_currency;
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


// sitelanguage type definitions
interface FindSublistLineWithValueOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
}

interface GetMatrixHeaderCountOptions_sitelanguage {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitelanguage';
    /** The intenral ID of the matrix field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
}

interface GetMatrixHeaderFieldOptions_sitelanguage {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitelanguage';
    /** The internal ID of the matrix field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_sitelanguage {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'sitelanguage';
    /** The intenral ID of the matrix field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
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

interface SetCurrentSublistValueOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
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

interface SetCurrentSublistTextOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_sitelanguage {
    /** The internal ID of the sublist. */
    sublistId: 'sitelanguage';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: sitelanguage_radio | sitelanguage_checkbox | sitelanguage_text;
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


// siteregion type definitions
interface FindSublistLineWithValueOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
}

interface GetMatrixHeaderCountOptions_siteregion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'siteregion';
    /** The intenral ID of the matrix field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
}

interface GetMatrixHeaderFieldOptions_siteregion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'siteregion';
    /** The internal ID of the matrix field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_siteregion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'siteregion';
    /** The intenral ID of the matrix field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
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

interface SetCurrentSublistValueOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
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

interface SetCurrentSublistTextOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_siteregion {
    /** The internal ID of the sublist. */
    sublistId: 'siteregion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: siteregion_text | siteregion_radio | siteregion_checkbox | siteregion_select;
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


// storetab type definitions
interface FindSublistLineWithValueOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
}

interface GetMatrixHeaderCountOptions_storetab {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'storetab';
    /** The intenral ID of the matrix field. */
    fieldId: storetab_text;
}

interface GetMatrixHeaderFieldOptions_storetab {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'storetab';
    /** The internal ID of the matrix field. */
    fieldId: storetab_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_storetab {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'storetab';
    /** The intenral ID of the matrix field. */
    fieldId: storetab_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
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

interface SetCurrentSublistValueOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
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

interface SetCurrentSublistTextOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_storetab {
    /** The internal ID of the sublist. */
    sublistId: 'storetab';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: storetab_text;
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
    fieldId: main_textarea | main_checkbox | main_select | main_posinteger | main_text | main_radio | main_emails | main_email | main_percent | main_integer;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_textarea | main_checkbox | main_select | main_posinteger | main_text | main_radio | main_emails | main_email | main_percent | main_integer;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_textarea | main_checkbox | main_select | main_posinteger | main_text | main_radio | main_emails | main_email | main_percent | main_integer;
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
    fieldId: main_textarea | main_checkbox | main_select | main_posinteger | main_text | main_radio | main_emails | main_email | main_percent | main_integer;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_textarea | main_checkbox | main_select | main_posinteger | main_text | main_radio | main_emails | main_email | main_percent | main_integer;
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

export interface RecordCreateOptions_WEBSITE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.WEBSITE;
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

export interface RecordTransformOptions_WEBSITE { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.WEBSITE;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_WEBSITE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.WEBSITE;
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
export interface WEBSITE extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_cartcolumn | FindSublistLineWithValueOptions_shoppingdomain | FindSublistLineWithValueOptions_sitecurrency | FindSublistLineWithValueOptions_sitelanguage | FindSublistLineWithValueOptions_siteregion | FindSublistLineWithValueOptions_storetab): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_cartcolumn | FindSublistLineWithValueOptions_shoppingdomain | FindSublistLineWithValueOptions_sitecurrency | FindSublistLineWithValueOptions_sitelanguage | FindSublistLineWithValueOptions_siteregion | FindSublistLineWithValueOptions_storetab): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_cartcolumn | GetCurrentSublistValueOptions_shoppingdomain | GetCurrentSublistValueOptions_sitecurrency | GetCurrentSublistValueOptions_sitelanguage | GetCurrentSublistValueOptions_siteregion | GetCurrentSublistValueOptions_storetab): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_cartcolumn | GetCurrentSublistValueOptions_shoppingdomain | GetCurrentSublistValueOptions_sitecurrency | GetCurrentSublistValueOptions_sitelanguage | GetCurrentSublistValueOptions_siteregion | GetCurrentSublistValueOptions_storetab): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_cartcolumn | GetCurrentSublistValueOptions_shoppingdomain | GetCurrentSublistValueOptions_sitecurrency | GetCurrentSublistValueOptions_sitelanguage | GetCurrentSublistValueOptions_siteregion | GetCurrentSublistValueOptions_storetab): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_cartcolumn | GetCurrentSublistValueOptions_shoppingdomain | GetCurrentSublistValueOptions_sitecurrency | GetCurrentSublistValueOptions_sitelanguage | GetCurrentSublistValueOptions_siteregion | GetCurrentSublistValueOptions_storetab): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_cartcolumn | GetCurrentSublistValueOptions_shoppingdomain | GetCurrentSublistValueOptions_sitecurrency | GetCurrentSublistValueOptions_sitelanguage | GetCurrentSublistValueOptions_siteregion | GetCurrentSublistValueOptions_storetab): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_cartcolumn | GetMatrixHeaderCountOptions_shoppingdomain | GetMatrixHeaderCountOptions_sitecurrency | GetMatrixHeaderCountOptions_sitelanguage | GetMatrixHeaderCountOptions_siteregion | GetMatrixHeaderCountOptions_storetab): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_cartcolumn | GetMatrixHeaderFieldOptions_shoppingdomain | GetMatrixHeaderFieldOptions_sitecurrency | GetMatrixHeaderFieldOptions_sitelanguage | GetMatrixHeaderFieldOptions_siteregion | GetMatrixHeaderFieldOptions_storetab): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_cartcolumn | GetMatrixHeaderFieldOptions_shoppingdomain | GetMatrixHeaderFieldOptions_sitecurrency | GetMatrixHeaderFieldOptions_sitelanguage | GetMatrixHeaderFieldOptions_siteregion | GetMatrixHeaderFieldOptions_storetab): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_cartcolumn | GetMatrixSublistFieldOptions_shoppingdomain | GetMatrixSublistFieldOptions_sitecurrency | GetMatrixSublistFieldOptions_sitelanguage | GetMatrixSublistFieldOptions_siteregion | GetMatrixSublistFieldOptions_storetab): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_cartcolumn | GetMatrixSublistFieldOptions_shoppingdomain | GetMatrixSublistFieldOptions_sitecurrency | GetMatrixSublistFieldOptions_sitelanguage | GetMatrixSublistFieldOptions_siteregion | GetMatrixSublistFieldOptions_storetab): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_cartcolumn | SetCurrentMatrixSublistValueOptions_shoppingdomain | SetCurrentMatrixSublistValueOptions_sitecurrency | SetCurrentMatrixSublistValueOptions_sitelanguage | SetCurrentMatrixSublistValueOptions_siteregion | SetCurrentMatrixSublistValueOptions_storetab): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_cartcolumn | SetCurrentMatrixSublistValueOptions_shoppingdomain | SetCurrentMatrixSublistValueOptions_sitecurrency | SetCurrentMatrixSublistValueOptions_sitelanguage | SetCurrentMatrixSublistValueOptions_siteregion | SetCurrentMatrixSublistValueOptions_storetab): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_cartcolumn | SetCurrentSublistValueOptions_shoppingdomain | SetCurrentSublistValueOptions_sitecurrency | SetCurrentSublistValueOptions_sitelanguage | SetCurrentSublistValueOptions_siteregion | SetCurrentSublistValueOptions_storetab): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_cartcolumn | SetSublistValueOptions_shoppingdomain | SetSublistValueOptions_sitecurrency | SetSublistValueOptions_sitelanguage | SetSublistValueOptions_siteregion | SetSublistValueOptions_storetab): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_cartcolumn | SetCurrentSublistTextOptions_shoppingdomain | SetCurrentSublistTextOptions_sitecurrency | SetCurrentSublistTextOptions_sitelanguage | SetCurrentSublistTextOptions_siteregion | SetCurrentSublistTextOptions_storetab): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_cartcolumn | SetSublistTextOptions_shoppingdomain | SetSublistTextOptions_sitecurrency | SetSublistTextOptions_sitelanguage | SetSublistTextOptions_siteregion | SetSublistTextOptions_storetab): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_cartcolumn | SetSublistValueOptions_shoppingdomain | SetSublistValueOptions_sitecurrency | SetSublistValueOptions_sitelanguage | SetSublistValueOptions_siteregion | SetSublistValueOptions_storetab): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_cartcolumn | SetSublistTextOptions_shoppingdomain | SetSublistTextOptions_sitecurrency | SetSublistTextOptions_sitelanguage | SetSublistTextOptions_siteregion | SetSublistTextOptions_storetab): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_cartcolumn | GetSublistValueOptions_shoppingdomain | GetSublistValueOptions_sitecurrency | GetSublistValueOptions_sitelanguage | GetSublistValueOptions_siteregion | GetSublistValueOptions_storetab): number;
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
    (options: CopyLoadOptions_WEBSITE): WEBSITE;
    promise(options: CopyLoadOptions_WEBSITE): Promise<WEBSITE>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_WEBSITE): WEBSITE;
    promise(options: RecordCreateOptions_WEBSITE): Promise<WEBSITE>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_WEBSITE): WEBSITE;
    promise(options: CopyLoadOptions_WEBSITE): Promise<WEBSITE>;
}
