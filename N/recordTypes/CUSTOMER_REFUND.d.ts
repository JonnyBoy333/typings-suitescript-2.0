
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './_EventTypes'

// main field types
type main_select = 'account' | 'aracct' | 'class' | 'creditcard' | 'creditcardprocessor' | 'currency' | 'customer' | 'customform' | 'department' | 'entitynexus' | 'location' | 'nexus' | 'paymenteventholdreason' | 'paymenteventresult' | 'paymentmethod' | 'postingperiod' | 'subsidiary';
type main_address = 'address';
type main_checkbox = 'allowemptycards' | 'ccapproved' | 'ccispurchasecardbin' | 'chargeit' | 'isbasecurrency' | 'overridehold' | 'overrideholdchecked' | 'tobeprinted';
type main_currency = 'balance' | 'consolidatebalance' | 'total';
type main_ccexpdate = 'ccexpiredate';
type main_text = 'cchold' | 'ccname' | 'ccprocessoraccount' | 'ccstreet' | 'cczipcode' | 'currencyname' | 'currencysymbol' | 'customercode' | 'debitcardissueno' | 'externalid' | 'inputpnrefnum' | 'ispurchasecard' | 'memo' | 'paymenteventpurchasedatasent' | 'paymenteventtype' | 'paymenteventupdatedby' | 'pnrefnum' | 'softdescriptor' | 'status' | 'statusRef' | 'tranid' | 'transactionnumber';
type main_textarea = 'ccholdetails';
type main_ccnumber = 'ccnumber';
type main_datetime = 'createddate' | 'lastmodifieddate' | 'paymenteventdate';
type main_currency2 = 'exchangerate';
type main_date = 'trandate';
type main_ccvalidfrom = 'validfrom';

// accountingbookdetail field types
type accountingbookdetail_select = 'accountingbook';
type accountingbookdetail_currency2 = 'exchangerate';

// apply field types
type apply_currency = 'amount' | 'due' | 'total';
type apply_checkbox = 'apply';
type apply_date = 'applydate' | 'duedate';
type apply_text = 'createdfrom' | 'doc' | 'internalid' | 'refnum' | 'url';
type apply_integer = 'line';

// deposit field types
type deposit_currency = 'amount' | 'remaining' | 'total';
type deposit_checkbox = 'apply';
type deposit_text = 'currency' | 'doc' | 'url';
type deposit_date = 'depositdate';


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
    sublistId: 'accountingbookdetail' | 'apply' | 'deposit';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'apply' | 'deposit';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'apply' | 'deposit';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'accountingbookdetail' | 'apply' | 'deposit';
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


// apply type definitions
interface FindSublistLineWithValueOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
}

interface GetMatrixHeaderCountOptions_apply {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'apply';
    /** The intenral ID of the matrix field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
}

interface GetMatrixHeaderFieldOptions_apply {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'apply';
    /** The internal ID of the matrix field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_apply {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'apply';
    /** The intenral ID of the matrix field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
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

interface SetCurrentSublistValueOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
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

interface SetCurrentSublistTextOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_apply {
    /** The internal ID of the sublist. */
    sublistId: 'apply';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: apply_currency | apply_checkbox | apply_date | apply_text | apply_integer;
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


// deposit type definitions
interface FindSublistLineWithValueOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
}

interface GetMatrixHeaderCountOptions_deposit {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deposit';
    /** The intenral ID of the matrix field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
}

interface GetMatrixHeaderFieldOptions_deposit {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deposit';
    /** The internal ID of the matrix field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_deposit {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deposit';
    /** The intenral ID of the matrix field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
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

interface SetCurrentSublistValueOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
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

interface SetCurrentSublistTextOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_deposit {
    /** The internal ID of the sublist. */
    sublistId: 'deposit';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deposit_currency | deposit_checkbox | deposit_text | deposit_date;
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
    fieldId: main_select | main_address | main_checkbox | main_currency | main_ccexpdate | main_text | main_textarea | main_ccnumber | main_datetime | main_currency2 | main_date | main_ccvalidfrom;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_address | main_checkbox | main_currency | main_ccexpdate | main_text | main_textarea | main_ccnumber | main_datetime | main_currency2 | main_date | main_ccvalidfrom;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_address | main_checkbox | main_currency | main_ccexpdate | main_text | main_textarea | main_ccnumber | main_datetime | main_currency2 | main_date | main_ccvalidfrom;
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
    fieldId: main_select | main_address | main_checkbox | main_currency | main_ccexpdate | main_text | main_textarea | main_ccnumber | main_datetime | main_currency2 | main_date | main_ccvalidfrom;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_address | main_checkbox | main_currency | main_ccexpdate | main_text | main_textarea | main_ccnumber | main_datetime | main_currency2 | main_date | main_ccvalidfrom;
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

export interface RecordCreateOptions_CUSTOMER_REFUND { // This one gets exported
    /**
     * The record type.
     */
    type: Type.CUSTOMER_REFUND;
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

export interface RecordTransformOptions_CUSTOMER_REFUND { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.CUSTOMER_REFUND;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_CUSTOMER_REFUND { // This one gets exported
    /**
     * The record type.
     */
    type: Type.CUSTOMER_REFUND;
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
export interface CUSTOMER_REFUND extends Record {

    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_accountingbookdetail | GetSublistValueOptions_apply | GetSublistValueOptions_deposit): number;
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
    (options: CopyLoadOptions_CUSTOMER_REFUND): CUSTOMER_REFUND;
    promise(options: CopyLoadOptions_CUSTOMER_REFUND): Promise<CUSTOMER_REFUND>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_CUSTOMER_REFUND): CUSTOMER_REFUND;
    promise(options: RecordCreateOptions_CUSTOMER_REFUND): Promise<CUSTOMER_REFUND>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_CUSTOMER_REFUND): CUSTOMER_REFUND;
    promise(options: CopyLoadOptions_CUSTOMER_REFUND): Promise<CUSTOMER_REFUND>;
}
