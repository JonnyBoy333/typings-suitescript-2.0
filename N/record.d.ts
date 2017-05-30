
import { AddSelectOptionOptions, Sublist } from './ui/serverWidget';
import { Operator } from './search';

interface RecordSaveFunction {
    (options?: SubmitConfig): number;
    promise(options?: SubmitConfig): Promise<number>;
}

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

interface CancelCommitLineOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: string;
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

interface CopyLoadOptions {
    /**
     * The record type.
     */
    type: Type;
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

interface CopyLoadOptions_SO {
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

interface DetachOptions {
    /** The record to be detached. */
    record: AttachRecordOptions;
    /** The destination record that options.record should be detached from. */
    from: AttachRecordOptions;
    /** Name-value pairs containing default values of fields in the new record. */
    attributes?: any;
}

interface FindSublistLineWithValueOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    //fieldId: string;
    fieldId: string;
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
}

interface GetMatrixHeaderCountOptions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: string;
    /** The intenral ID of the matrix field. */
    fieldId: string;
}

interface GetMatrixHeaderFieldOptions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: string;
    /** The intenral ID of the matrix field. */
    fieldId: string;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: string;
    /** The intenral ID of the matrix field. */
    fieldId: string;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
    /** The line number for the field. */
    line: number;
}

interface HasSubrecordOptions {
    /** The internal ID of the field that may contain a subrecord. */
    fieldId: string;
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The line number to select in the sublist. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
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

interface SetCurrentSublistValueOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
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

interface SetCurrentSublistTextOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: string;
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
    fieldId: string;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistTextOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions {
    /** The internal ID of the sublist. */
    sublistId: string;
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string;
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

/** Sales Order Specific Types */
interface GetSublistValueOptions_SO_ab {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string | 'accountingbook' | 'exchangerate' | 'revreconrevcommitment' | 'tranisvsoebundle';
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_SO_item {
    /** The internal ID of the sublist. */
    sublistId: 'item';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string | 'altsalesamt' | 'amortizationperiod' | 'amortizationtype' | 'amount' | 'billvariancestatus' | 'catchupperiod' | 'chargetype' | 'commitinventory' | 'costestimate' | 'costestimaterate' | 'costestimatetype' | 'createdpo' | 'createpo' | 'createwo' | 'daysbeforeexpiration' | 'deferrevrec' | 'description' | 'excludefromraterequest' | 'expectedshipdate' | 'fromjob' | 'giftcertfrom' | 'giftcertmessage' | 'giftcertrecipientemail' | 'giftcertrecipientname' | 'id' | 'inventorydetail' | 'isclosed' | 'isestimate' | 'istaxable' | 'isvsoebundle' | 'item' | 'itemfulfillmentchoice' | 'itemsubtype' | 'itemtype' | 'licensecode' | 'line' | 'linenumber' | 'locationautoassigned' | 'matrixtype' | 'noautoassignlocation' | 'options' | 'orderpriority' | 'porate' | 'povendor' | 'price' | 'printitems' | 'quantity' | 'quantityavailable' | 'quantitybackordered' | 'quantitybilled' | 'quantitycommitted' | 'quantityfulfilled' | 'quantityrevcommitted' | 'rate' | 'rateschedule' | 'revrecenddate' | 'revrecschedule' | 'revrecstartdate' | 'shipaddress' | 'shipcarrier' | 'shipmethod' | 'subscription' | 'taxcode' | 'taxrate1' | 'units' | 'vsoeallocation' | 'vsoeamount' | 'vsoedeferral' | 'vsoedelivered' | 'vsoeisestimate' | 'vsoepermitdiscount' | 'vsoeprice' | 'vsoesopgroup';
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_SO_partners {
    /** The internal ID of the sublist. */
    sublistId: 'partners';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string | 'contribution' | 'id' | 'isprimary' | 'partner' | 'partnerrole' | 'transaction';
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_SO_promotions {
    /** The internal ID of the sublist. */
    sublistId: 'promotions';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string | 'cannotbecombined' | 'couponcode' | 'discount' | 'discountrate' | 'muccpromocodeinstance' | 'promocode' | 'purchasediscount' | 'shippingdiscount';
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_SO_sales {
    /** The internal ID of the sublist. */
    sublistId: 'salesteam';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string | 'contribution' | 'employee' | 'id' | 'isprimary' | 'issalesrep' | 'salesrole' | 'transaction';
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_SO_ship {
    /** The internal ID of the sublist. */
    sublistId: 'shipgroup';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: string | 'destinationaddress' | 'handlingrate' | 'id' | 'shippingcarrier' | 'shippingmethod' | 'shippingrate' | 'sourceaddress' | 'weight';
    /** The line number for the field. */
    line: number;
}

interface GetFieldOptions_SO {
    /** The internal ID of a standard or custom body field. */
    fieldId: string | "allowemptycards" | "althandlingcost" | "altsalestotal" | "altshippingcost" | "authcode" | "balance" | "billaddr1" | "billaddr2" | "billaddr3" | "billaddress" | "billaddressee" | "billaddresslist" | "billattention" | "billcity" | "billcountry" | "billingaddress" | "billingschedule" | "billisresidential" | "billphone" | "billstate" | "billzip" | "ccapproved" | "ccavsstreetmatch" | "ccavszipmatch" | "ccexpiredate" | "cchold" | "ccholdetails" | "cciavsmatch" | "ccname" | "ccnumber" | "ccprocessoraccount" | "ccsecuritycode" | "ccsecuritycodematch" | "ccstreet" | "cczipcode" | "class" | "consolidatebalance" | "couponcode" | "createddate" | "createdfrom" | "creditcard" | "creditcardprocessor" | "currency" | "currencyname" | "currencysymbol" | "customercode" | "customform" | "debitcardissueno" | "deferredrevenue" | "department" | "discountitem" | "discountrate" | "discounttotal" | "draccount" | "email" | "enddate" | "entity" | "entitynexus" | "estgrossprofit" | "estgrossprofitpercent" | "exchangerate" | "excludecommission" | "externalid" | "fob" | "fxaccount" | "getauth" | "giftcertapplied" | "handlingcost" | "handlingtax1rate" | "handlingtaxcode" | "ignoreavs" | "ignorecsc" | "inputpnrefnum" | "intercostatus" | "intercotransaction" | "isbasecurrency" | "isdefaultshippingrequest" | "ismultishipto" | "ispurchasecard" | "isrecurringpayment" | "istaxable" | "lastmodifieddate" | "leadsource" | "linkedtrackingnumbers" | "location" | "memo" | "message" | "messagesel" | "muccpromocodeinstance" | "nexus" | "onetime" | "opportunity" | "orderstatus" | "otherrefnum" | "overridehold" | "overrideholdchecked" | "overrideshippingcost" | "partner" | "paymenteventdate" | "paymenteventholdreason" | "paymenteventpurchasedatasent" | "paymenteventresult" | "paymenteventtype" | "paymenteventupdatedby" | "paymentmethod" | "paypalauthid" | "paypalprocess" | "paypalstatus" | "paypaltranid" | "pnrefnum" | "promocode" | "promocodepluginimpl" | "recognizedrevenue" | "recurannually" | "recurmonthly" | "recurquarterly" | "recurweekly" | "returntrackingnumbers" | "revcommitstatus" | "revenuestatus" | "revreconrevcommitment" | "saleseffectivedate" | "salesgroup" | "salesrep" | "shipaddr1" | "shipaddr2" | "shipaddr3" | "shipaddress" | "shipaddressee" | "shipaddresslist" | "shipattention" | "shipcity" | "shipcomplete" | "shipcountry" | "shipdate" | "shipisresidential" | "shipmethod" | "shipoverride" | "shipphone" | "shippingaddress" | "shippingcost" | "shippingcostoverridden" | "shippingtax1rate" | "shippingtaxcode" | "shipstate" | "shipzip" | "softdescriptor" | "source" | "startdate" | "status" | "statusRef" | "subsidiary" | "subtotal" | "syncpartnerteams" | "syncsalesteams" | "taxitem" | "taxrate" | "taxtotal" | "terms" | "threedstatuscode" | "tobeemailed" | "tobefaxed" | "tobeprinted" | "total" | "totalcostestimate" | "trandate" | "tranid" | "tranisvsoebundle" | "unbilledorders" | "validfrom" | "vsoeautocalc";
}

// interface GetCurrentSublistValueOptions {
//     /** The internal ID of the sublist. */
//     sublistId: string;
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string;
// }
//
// interface GetFieldOptions {
//     /** The internal ID of a standard or custom body field. */
//     fieldId: string;
// }
//
// interface RecordGetLineCountOptions {
//     /** The internal ID of the sublist. */
//     sublistId: string;
// }

/** End of Sales Order Types */

export interface Field {
    /** Adds the select options that appears in the dropdown of a field. */
    insertSelectOption(options: AddSelectOptionOptions): void;
    /** Returns an array of available options on a standard or custom select, multi-select, or radio field as key-value pairs. Only the first 1,000 available options are returned. */
    getSelectOptions(options?: GetSelectOptionsOpts): { value: any, text: string }[];
    /**
     * Removes a single select option from a select or multiselect field added via script.
     * Note that this API call can only be used on select/multiselect fields that are added via the UI Objects API (for example on Suitelets or beforeLoad user event scripts).
    */
    removeSelectOption(options?: { value: string }): void;
    /** Returns the UI label for a standard or custom field body or sublist field. */
    label: string;
    /** Returns the internal ID of a standard or custom body or sublist field. */
    id: string;
    /** Returns the type of a body or sublist field. */
    type: string;
    /** Returns true if the standard or custom field is mandatory on the record form, or false otherwise. */
    isMandatory: boolean;
    /** Returns true if the standard or custom field is disabled on the record form, or false otherwise. */
    isDisabled: boolean;
    /** Returns true if the field is a popup list field, or false otherwise. */
    isPopup: boolean;
    /** Returns true if the field is set to display on the record form, or false otherwise. */
    isDisplay: boolean;
    /** Returns true if the field is visible on the record form, or false otherwise. */
    isVisible: boolean;
    /**
     * Returns true if the field on the record form cannot be edited, or false otherwise.
     * For textarea fields, this property can be read or written to. For all other fields, this property is read-only.
     */
    isReadOnly: boolean;
}

type FieldValue = Date | number | string | string[] | boolean;

/** Almost like a full Record, except without things like save(). */
export interface ClientCurrentRecord {
    /** Cancels the currently selected line on a sublist. */
    cancelLine(options: CancelCommitLineOptions): Record;
    cancelLine(sublistId: string): Record;
    /** Commits the currently selected line on a sublist. */
    commitLine(options: CancelCommitLineOptions): Record;
    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions): number | Date | string | string[] | boolean;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: RecordGetLineCountOptions): number;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions): FieldValue;
    getCurrentSublistValue(sublistId: string, fieldId: string): FieldValue;
    /** Returns a field object from a record. */
    getField(options: GetFieldOptions): Field;
    /** Returns the number of lines in a sublist. */
    getLineCount(options: RecordGetLineCountOptions): number;
    getLineCount(sublistId: string): number;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions): FieldValue;
    /** Returns the specified sublist. */
    getSublist(options: RecordGetLineCountOptions): Sublist;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions): string;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Gets the subrecord for the associated field. */
    getSubrecord(options: GetFieldOptions): Record;
    /** Returns the text representation of a field value. */
    getText(options: GetFieldOptions): string | string[];
    //getText(fieldId: string): string | string[];
    /** Returns the value of a field. */
    getValue(options: GetFieldOptions): FieldValue;
    //getValue(fieldId: string): FieldValue;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): boolean;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions): boolean;
    /** Returns a value indicating whether the field contains a subrecord. */
    hasSubrecord(options: HasSubrecordOptions): boolean;
    /** The internal ID of a specific record. */
    id: number;
    /** Inserts a sublist line. */
    insertLine(options: InsertLineOptions): void;
    /**
     * Indicates whether the record is in dynamic or standard mode.
     * - If set to true, the record is currently in dynamic mode. If set to false, the record is currently in standard mode.
     *  - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in standard mode, the record’s body fields and sublist line items are not sourced, calculated, and validated until the record is saved (submitted) with Record.save(options).
     *  - When you work with a record in standard mode, you do not need to set values in any particular order. After submitting the record, NetSuite processes the record’s body fields and sublist line items in the correct order, regardless of the organization of your script.
     *  - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in dynamic mode, the record’s body fields and sublist line items are sourced, calculated, and validated in real-time. A record in dynamic mode emulates the behavior of a record in the UI.
     *  - When you work with a record in dynamic mode, it is important that you set values in the same order you would within the UI. If you fail to do this, your results may not be accurate.
     * This value is set when the record is created or accessed.
     */
    isDynamic: boolean;
    /** Removes the subrecord for the associated sublist field on the current line. */
    removeCurrentSublistSubrecord(options: GetCurrentSublistValueOptions): void;
    /** Removes a sublist line. */
    removeLine(options: InsertLineOptions): void;
    /** Removes the subrecord for the associated field. */
    removeSubrecord(options: RecordGetLineCountOptions): void;
    /** Selects an existing line in a sublist. */
    selectLine(options: SelectLineOptions): void;
    selectLine(sublistId: string, line: number): void;
    /** Selects a new line at the end of a sublist. */
    selectNewLine(options: RecordGetLineCountOptions): void;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions): void;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions): void;
    setCurrentSublistValue(sublistId: string, fieldId: string, value: FieldValue): void;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions): Record;
    /** Sets the value of the field by a text representation. */
    setText(options: SetFieldTextOptions): void;
    setText(fieldId: string, value: string): void;
    /** Sets the value of a field. */
    setValue(options: ClientSetValueOptions): void;
    setValue(fieldId: string, value: FieldValue): void;
    /** The record type. */
    type: Type | string;
}

// Exported for other modules to be able to consume this type
export interface Record extends ClientCurrentRecord {
    /** Returns the body field names (internal ids) of all the fields in the record, including machine header field and matrix header fields. */
    getFields(): string[];
    /** Returns all the names of all the sublists. */
    getSublists(): string[];
    /** Returns all the field names in a sublist. */
    getSublistFields(options: RecordGetLineCountOptions): string[];
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions): Record;
    /** Submits a new record or saves edits to an existing record. */
    save: RecordSaveFunction;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions): Record;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions): Record;
    toString(): string;
}

export interface SalesOrder extends Record {
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): boolean;
    /** Returns the text representation of a field value. */
    getText(options: GetFieldOptions_SO): string | string[];
    getText(fieldId: string): string | string[];
    /** Returns the value of a field. */
    getValue(options: GetFieldOptions_SO): FieldValue;
    //getValue(fieldId: string): FieldValue;
    testFunc(options: 'bingo') : FieldValue;
}

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
interface SubmitFieldsFunction {
    (options: SubmitFieldsOptions): number;
    promise(options: SubmitFieldsOptions): Promise<number>;
}

interface RecordAttachFunction {
    (options: AttachOptions): void;
    promise(options: AttachOptions): Promise<void>;
}

interface RecordCopyFunction {
    (options: CopyLoadOptions): Record;
    promise(options: CopyLoadOptions): Promise<Record>;
}

interface RecordCreateOptions {
    /**
     * The record type.
     */
    type: Type | string;
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

interface RecordCreateFunction {
    (options: RecordCreateOptions): Record;
    promise(options: RecordCreateOptions): Promise<Record>;
}

interface RecordDeleteOptions {
    /**
     * The record type.
     */
    type: Type | string;
    /**
     * The internal ID of the record instance to be deleted.
     */
    id: (string | number);
}

interface RecordDetachFunction {
    (options: DetachOptions): void;
    promise(options: DetachOptions): Promise<void>;
}

interface RecordLoadFunction {
    (options: CopyLoadOptions_SO): SalesOrder;
    //promise(options: CopyLoadOptions_SO): Promise<SalesOrder>;
    (options: CopyLoadOptions): Record;
    //promise(options: CopyLoadOptions): Promise<Record>;
}

// interface RecordLoadFunction_SO {
//     (options: CopyLoadOptions_SO): SalesOrder;
//     promise(options: CopyLoadOptions_SO): Promise<SalesOrder>;
// }

interface RecordDeleteFunction {
    (options: RecordDeleteOptions): void;
    promise(options: RecordDeleteOptions): Promise<void>;
}

interface RecordTransformFunction {
    (options: RecordTransformOptions): Record;
    promise(options: RecordTransformOptions): Promise<Record>;
}

interface RecordTransformOptions {
    /** The record type of the existing record instance being transformed. */
    fromType: string | Type;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

/** Attaches a record to another record. */
export var attach: RecordAttachFunction;
/** Creates a new record by copying an existing record in NetSuite. */
export var copy: RecordCopyFunction;
/** Creates a new record. */
export var create: RecordCreateFunction;
/** Deletes a record. */
declare var deleteFunc: RecordDeleteFunction;
export { deleteFunc as delete };
/** Detaches a record from another record. */
export var detach: RecordDetachFunction;
/** Loads an existing record. */
export var load: RecordLoadFunction;
/**
 * Updates and submits one or more body fields on an existing record in NetSuite, and returns the internal ID of the parent record.
 * When you use this method, you do not need to load or submit the parent record.
 * You can use this method to edit and submit the following:
 * - Standard body fields that support inline editing (direct list editing). For more information, see Using Inline Editing.
 * - Custom body fields that support inline editing.
 * You cannot use this method to edit and submit the following:
 * - Select fields
 * - Sublist line item fields
 * - Subrecord fields (for example, address fields)
 */
export var submitFields: SubmitFieldsFunction;
/** Transforms a record from one type into another, using data from an existing record. */
export var transform: RecordTransformFunction;

/**
 * N/record.Type enum
 *
 */
export const enum Type {
    ACCOUNT,
    ACCOUNTING_BOOK,
    ACCOUNTING_PERIOD,
    AMORTIZATION_SCHEDULE,
    AMORTIZATION_TEMPLATE,
    ASSEMBLY_BUILD,
    ASSEMBLY_ITEM,
    ASSEMBLY_UNBUILD,
    BILLING_ACCOUNT,
    BILLING_CLASS,
    BILLING_SCHEDULE,
    BIN,
    BIN_TRANSFER,
    BIN_WORKSHEET,
    BLANKET_PURCHASE_ORDER,
    BUNDLE_INSTALLATION_SCRIPT,
    CALENDAR_EVENT,
    CAMPAIGN,
    CAMPAIGN_TEMPLATE,
    CASH_REFUND,
    CASH_SALE,
    CHARGE,
    CHECK,
    CLASSIFICATION,
    CLIENT_SCRIPT,
    COMPETITOR,
    CONTACT,
    COUPON_CODE,
    CREDIT_CARD_CHARGE,
    CREDIT_CARD_REFUND,
    CREDIT_MEMO,
    CURRENCY,
    CUSTOMER,
    CUSTOMER_CATEGORY,
    CUSTOMER_DEPOSIT,
    CUSTOMER_PAYMENT,
    CUSTOMER_REFUND,
    CUSTOM_TRANSACTION,
    DEPARTMENT,
    DEPOSIT,
    DEPOSIT_APPLICATION,
    DESCRIPTION_ITEM,
    DISCOUNT_ITEM,
    DOWNLOAD_ITEM,
    DRIVERS_LICENSE,
    EMAIL_TEMPLATE,
    EMPLOYEE,
    ENTITY_ACCOUNT_MAPPING,
    ESTIMATE,
    EXPENSE_CATEGORY,
    EXPENSE_REPORT,
    FAIR_VALUE_PRICE,
    FOLDER,
    GENERIC_RESOURCE,
    GIFT_CERTIFICATE,
    GIFT_CERTIFICATE_ITEM,
    GLOBAL_ACCOUNT_MAPPING,
    GOVERNMENT_ISSUED_ID_TYPE,
    HCM_JOB,
    INTER_COMPANY_JOURNAL_ENTRY,
    INTER_COMPANY_TRANSFER_ORDER,
    INVENTORY_ADJUSTMENT,
    INVENTORY_COST_REVALUATION,
    INVENTORY_COUNT,
    INVENTORY_DETAIL,
    INVENTORY_ITEM,
    INVENTORY_NUMBER,
    INVENTORY_TRANSFER,
    INVOICE,
    ISSUE,
    ITEM_ACCOUNT_MAPPING,
    ITEM_DEMAND_PLAN,
    ITEM_FULFILLMENT,
    ITEM_GROUP,
    ITEM_RECEIPT,
    ITEM_REVISION,
    ITEM_SUPPLY_PLAN,
    JOB,
    JOB_REQUISITION,
    JOURNAL_ENTRY,
    KIT_ITEM,
    KUDOS,
    LEAD,
    LOCATION,
    LOT_NUMBERED_ASSEMBLY_ITEM,
    LOT_NUMBERED_INVENTORY_ITEM,
    MANUFACTURING_COST_TEMPLATE,
    MANUFACTURING_OPERATION_TASK,
    MANUFACTURING_ROUTING,
    MAP_REDUCE_SCRIPT,
    MARKUP_ITEM,
    MASSUPDATE_SCRIPT,
    MESSAGE,
    MFG_PLANNED_TIME,
    NEXUS,
    NON_INVENTORY_ITEM,
    NOTE,
    OPPORTUNITY,
    ORDER_SCHEDULE,
    ORGANIZATION_VALUE,
    OTHER_CHARGE_ITEM,
    OTHER_GOVERNMENT_ISSUED_ID,
    OTHER_NAME,
    PARTNER,
    PASSPORT,
    PAYCHECK_JOURNAL,
    PAYMENT_ITEM,
    PAYROLL_ITEM,
    PHONE_CALL,
    PORTLET,
    POSITION,
    PRICE_LEVEL,
    PROJECT_EXPENSE_TYPE,
    PROJECT_TASK,
    PROJECT_TEMPLATE,
    PROMOTION_CODE,
    PROSPECT,
    PURCHASE_CONTRACT,
    PURCHASE_ORDER,
    PURCHASE_REQUISITION,
    RATE_PLAN,
    REALLOCATE_ITEM,
    RESOURCE_ALLOCATION,
    RESTLET,
    RETURN_AUTHORIZATION,
    REVENUE_ARRANGEMENT,
    REVENUE_COMMITMENT,
    REVENUE_COMMITMENT_REVERSAL,
    REVENUE_PLAN,
    REV_REC_SCHEDULE,
    REV_REC_TEMPLATE,
    SALES_ORDER,
    SALES_TAX_ITEM,
    SCHEDULED_SCRIPT,
    SCHEDULED_SCRIPT_INSTANCE,
    SCRIPT_DEPLOYMENT,
    SERIALIZED_ASSEMBLY_ITEM,
    SERIALIZED_INVENTORY_ITEM,
    SERVICE_ITEM,
    SHIP_ITEM,
    SOLUTION,
    STATISTICAL_JOURNAL_ENTRY,
    SUBSCRIPTION,
    SUBSCRIPTION_CHANGE_ORDER,
    SUBSCRIPTION_LINE,
    SUBSCRIPTION_PLAN,
    SUBSIDIARY,
    SUBTOTAL_ITEM,
    SUITELET,
    SUPPORT_CASE,
    TASK,
    TAX_ACCT,
    TAX_GROUP,
    TAX_PERIOD,
    TAX_TYPE,
    TERM,
    TERMINATION_REASON,
    TIME_BILL,
    TIME_OFF_CHANGE,
    TIME_OFF_PLAN,
    TIME_OFF_REQUEST,
    TIME_OFF_RULE,
    TIME_OFF_TYPE,
    TOPIC,
    TRANSFER_ORDER,
    UNITS_TYPE,
    USEREVENT_SCRIPT,
    VENDOR,
    VENDOR_BILL,
    VENDOR_CATEGORY,
    VENDOR_CREDIT,
    VENDOR_PAYMENT,
    VENDOR_RETURN_AUTHORIZATION,
    WEBSITE,
    WORKFLOW_ACTION_SCRIPT,
    WORK_ORDER,
    WORK_ORDER_CLOSE,
    WORK_ORDER_COMPLETION,
    WORK_ORDER_ISSUE
}

// /**
//  * N/record.Type enum
//  *
//  */
// export const enum Type {
//     ACCOUNT = 0,
//     ACCOUNTING_BOOK = 1,
//     ACCOUNTING_PERIOD = 2,
//     AMORTIZATION_SCHEDULE = 3,
//     AMORTIZATION_TEMPLATE = 4,
//     ASSEMBLY_BUILD = 5,
//     ASSEMBLY_ITEM = 6,
//     ASSEMBLY_UNBUILD = 7,
//     BILLING_ACCOUNT = 8,
//     BILLING_CLASS = 9,
//     BILLING_SCHEDULE = 10,
//     BIN = 11,
//     BIN_TRANSFER = 12,
//     BIN_WORKSHEET = 13,
//     BLANKET_PURCHASE_ORDER = 14,
//     BUNDLE_INSTALLATION_SCRIPT = 15,
//     CALENDAR_EVENT = 16,
//     CAMPAIGN = 17,
//     CAMPAIGN_TEMPLATE = 18,
//     CASH_REFUND = 19,
//     CASH_SALE = 20,
//     CHARGE = 21,
//     CHECK = 22,
//     CLASSIFICATION = 23,
//     CLIENT_SCRIPT = 24,
//     COMPETITOR = 25,
//     CONTACT = 26,
//     COUPON_CODE = 27,
//     CREDIT_CARD_CHARGE = 28,
//     CREDIT_CARD_REFUND = 29,
//     CREDIT_MEMO = 30,
//     CURRENCY = 31,
//     CUSTOMER = 32,
//     CUSTOMER_CATEGORY = 33,
//     CUSTOMER_DEPOSIT = 34,
//     CUSTOMER_PAYMENT = 35,
//     CUSTOMER_REFUND = 36,
//     CUSTOM_TRANSACTION = 37,
//     DEPARTMENT = 38,
//     DEPOSIT = 39,
//     DEPOSIT_APPLICATION = 40,
//     DESCRIPTION_ITEM = 41,
//     DISCOUNT_ITEM = 42,
//     DOWNLOAD_ITEM = 43,
//     DRIVERS_LICENSE = 44,
//     EMAIL_TEMPLATE = 45,
//     EMPLOYEE = 46,
//     ENTITY_ACCOUNT_MAPPING = 47,
//     ESTIMATE = 48,
//     EXPENSE_CATEGORY = 49,
//     EXPENSE_REPORT = 50,
//     FAIR_VALUE_PRICE = 51,
//     // FOLDER,
//     // GENERIC_RESOURCE,
//     // GIFT_CERTIFICATE,
//     // GIFT_CERTIFICATE_ITEM,
//     // GLOBAL_ACCOUNT_MAPPING,
//     // GOVERNMENT_ISSUED_ID_TYPE,
//     // HCM_JOB,
//     // INTER_COMPANY_JOURNAL_ENTRY,
//     // INTER_COMPANY_TRANSFER_ORDER,
//     // INVENTORY_ADJUSTMENT,
//     // INVENTORY_COST_REVALUATION,
//     // INVENTORY_COUNT,
//     // INVENTORY_DETAIL,
//     // INVENTORY_ITEM,
//     // INVENTORY_NUMBER,
//     // INVENTORY_TRANSFER,
//     // INVOICE,
//     // ISSUE,
//     // ITEM_ACCOUNT_MAPPING,
//     // ITEM_DEMAND_PLAN,
//     // ITEM_FULFILLMENT,
//     // ITEM_GROUP,
//     // ITEM_RECEIPT,
//     // ITEM_REVISION,
//     // ITEM_SUPPLY_PLAN,
//     // JOB,
//     // JOB_REQUISITION,
//     // JOURNAL_ENTRY,
//     // KIT_ITEM,
//     // KUDOS,
//     // LEAD,
//     // LOCATION,
//     // LOT_NUMBERED_ASSEMBLY_ITEM,
//     // LOT_NUMBERED_INVENTORY_ITEM,
//     // MANUFACTURING_COST_TEMPLATE,
//     // MANUFACTURING_OPERATION_TASK,
//     // MANUFACTURING_ROUTING,
//     // MAP_REDUCE_SCRIPT,
//     // MARKUP_ITEM,
//     // MASSUPDATE_SCRIPT,
//     // MESSAGE,
//     // MFG_PLANNED_TIME,
//     // NEXUS,
//     // NON_INVENTORY_ITEM,
//     // NOTE,
//     // OPPORTUNITY,
//     // ORDER_SCHEDULE,
//     // ORGANIZATION_VALUE,
//     // OTHER_CHARGE_ITEM,
//     // OTHER_GOVERNMENT_ISSUED_ID,
//     // OTHER_NAME,
//     // PARTNER,
//     // PASSPORT,
//     // PAYCHECK_JOURNAL,
//     // PAYMENT_ITEM,
//     // PAYROLL_ITEM,
//     // PHONE_CALL,
//     // PORTLET,
//     // POSITION,
//     // PRICE_LEVEL,
//     // PROJECT_EXPENSE_TYPE,
//     // PROJECT_TASK,
//     // PROJECT_TEMPLATE,
//     // PROMOTION_CODE,
//     // PROSPECT,
//     // PURCHASE_CONTRACT,
//     // PURCHASE_ORDER,
//     // PURCHASE_REQUISITION,
//     // RATE_PLAN,
//     // REALLOCATE_ITEM,
//     // RESOURCE_ALLOCATION,
//     // RESTLET,
//     // RETURN_AUTHORIZATION,
//     // REVENUE_ARRANGEMENT,
//     // REVENUE_COMMITMENT,
//     // REVENUE_COMMITMENT_REVERSAL,
//     // REVENUE_PLAN,
//     // REV_REC_SCHEDULE,
//     // REV_REC_TEMPLATE,
//     SALES_ORDER = 52
//     // SALES_TAX_ITEM,
//     // SCHEDULED_SCRIPT,
//     // SCHEDULED_SCRIPT_INSTANCE,
//     // SCRIPT_DEPLOYMENT,
//     // SERIALIZED_ASSEMBLY_ITEM,
//     // SERIALIZED_INVENTORY_ITEM,
//     // SERVICE_ITEM,
//     // SHIP_ITEM,
//     // SOLUTION,
//     // STATISTICAL_JOURNAL_ENTRY,
//     // SUBSCRIPTION,
//     // SUBSCRIPTION_CHANGE_ORDER,
//     // SUBSCRIPTION_LINE,
//     // SUBSCRIPTION_PLAN,
//     // SUBSIDIARY,
//     // SUBTOTAL_ITEM,
//     // SUITELET,
//     // SUPPORT_CASE,
//     // TASK,
//     // TAX_ACCT,
//     // TAX_GROUP,
//     // TAX_PERIOD,
//     // TAX_TYPE,
//     // TERM,
//     // TERMINATION_REASON,
//     // TIME_BILL,
//     // TIME_OFF_CHANGE,
//     // TIME_OFF_PLAN,
//     // TIME_OFF_REQUEST,
//     // TIME_OFF_RULE,
//     // TIME_OFF_TYPE,
//     // TOPIC,
//     // TRANSFER_ORDER,
//     // UNITS_TYPE,
//     // USEREVENT_SCRIPT,
//     // VENDOR,
//     // VENDOR_BILL,
//     // VENDOR_CATEGORY,
//     // VENDOR_CREDIT,
//     // VENDOR_PAYMENT,
//     // VENDOR_RETURN_AUTHORIZATION,
//     // WEBSITE,
//     // WORKFLOW_ACTION_SCRIPT,
//     // WORK_ORDER,
//     // WORK_ORDER_CLOSE,
//     // WORK_ORDER_COMPLETION,
//     // WORK_ORDER_ISSUE
// }