
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './_EventTypes'

// main field types
type main_select = 'account' | 'accounthandling' | 'countries' | 'site' | 'states' | 'subsidiary' | 'taxschedule' | 'taxschedulehandling';
type main_radio = 'costbasis' | 'handlingcost';
type main_textarea = 'description';
type main_text = 'displayname' | 'doifarrangement' | 'externalid' | 'integratedlabelsarrangement' | 'invt_dispname' | 'itemid' | 'itemtype' | 'restrictionarrangement' | 'shipitemcurrency';
type main_checkbox = 'doiftotal' | 'doifweight' | 'excludecountries' | 'excludesites' | 'hasmaximumshippingcost' | 'hasminimumshippingcost' | 'isfreeifordertotalisover' | 'ishandlingbyweightbracketed' | 'isinactive' | 'isonline' | 'isshippingbyweightbracketed' | 'needsallfreeshippingitems' | 'returnsintegrated' | 'shipperintegrated';
type main_float = 'fedexdiscountrate' | 'handlingbyweightperquantity' | 'shippingbyweightperquantity' | 'upsdiscountrate' | 'uspsdiscountrate';
type main_currency = 'handlingperitemamount' | 'shippingperitemamount';

// handlingtable field types
type handlingtable_currency = 'handlingtablecharge' | 'handlingtablerangevalue';

// items field types
type items_select = 'item';
type items_integer = 'nqty';

// shippingtable field types
type shippingtable_currency = 'shippingtablecharge' | 'shippingtablerangevalue';

// translations field types
type translations_text = 'displayname' | 'language' | 'locale';


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
    sublistId: 'handlingtable' | 'items' | 'shippingtable' | 'translations';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable' | 'items' | 'shippingtable' | 'translations';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable' | 'items' | 'shippingtable' | 'translations';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable' | 'items' | 'shippingtable' | 'translations';
    /** The line number to select in the sublist. */
    line: number;
}


// handlingtable type definitions
interface FindSublistLineWithValueOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
}

interface GetMatrixHeaderCountOptions_handlingtable {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'handlingtable';
    /** The intenral ID of the matrix field. */
    fieldId: handlingtable_currency;
}

interface GetMatrixHeaderFieldOptions_handlingtable {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'handlingtable';
    /** The internal ID of the matrix field. */
    fieldId: handlingtable_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_handlingtable {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'handlingtable';
    /** The intenral ID of the matrix field. */
    fieldId: handlingtable_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
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

interface SetCurrentSublistValueOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
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

interface SetCurrentSublistTextOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_handlingtable {
    /** The internal ID of the sublist. */
    sublistId: 'handlingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: handlingtable_currency;
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


// items type definitions
interface FindSublistLineWithValueOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
}

interface GetMatrixHeaderCountOptions_items {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'items';
    /** The intenral ID of the matrix field. */
    fieldId: items_select | items_integer;
}

interface GetMatrixHeaderFieldOptions_items {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'items';
    /** The internal ID of the matrix field. */
    fieldId: items_select | items_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_items {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'items';
    /** The intenral ID of the matrix field. */
    fieldId: items_select | items_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
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

interface SetCurrentSublistValueOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
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

interface SetCurrentSublistTextOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_items {
    /** The internal ID of the sublist. */
    sublistId: 'items';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: items_select | items_integer;
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


// shippingtable type definitions
interface FindSublistLineWithValueOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
}

interface GetMatrixHeaderCountOptions_shippingtable {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shippingtable';
    /** The intenral ID of the matrix field. */
    fieldId: shippingtable_currency;
}

interface GetMatrixHeaderFieldOptions_shippingtable {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shippingtable';
    /** The internal ID of the matrix field. */
    fieldId: shippingtable_currency;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_shippingtable {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'shippingtable';
    /** The intenral ID of the matrix field. */
    fieldId: shippingtable_currency;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
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

interface SetCurrentSublistValueOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
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

interface SetCurrentSublistTextOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_shippingtable {
    /** The internal ID of the sublist. */
    sublistId: 'shippingtable';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: shippingtable_currency;
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


// translations type definitions
interface FindSublistLineWithValueOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
}

interface GetMatrixHeaderCountOptions_translations {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'translations';
    /** The intenral ID of the matrix field. */
    fieldId: translations_text;
}

interface GetMatrixHeaderFieldOptions_translations {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'translations';
    /** The internal ID of the matrix field. */
    fieldId: translations_text;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_translations {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'translations';
    /** The intenral ID of the matrix field. */
    fieldId: translations_text;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
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

interface SetCurrentSublistValueOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
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

interface SetCurrentSublistTextOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_translations {
    /** The internal ID of the sublist. */
    sublistId: 'translations';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: translations_text;
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
    fieldId: main_select | main_radio | main_textarea | main_text | main_checkbox | main_float | main_currency;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_radio | main_textarea | main_text | main_checkbox | main_float | main_currency;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_radio | main_textarea | main_text | main_checkbox | main_float | main_currency;
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
    fieldId: main_select | main_radio | main_textarea | main_text | main_checkbox | main_float | main_currency;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_radio | main_textarea | main_text | main_checkbox | main_float | main_currency;
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

export interface RecordCreateOptions_SHIP_ITEM { // This one gets exported
    /**
     * The record type.
     */
    type: Type.SHIP_ITEM;
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

export interface RecordTransformOptions_SHIP_ITEM { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.SHIP_ITEM;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_SHIP_ITEM { // This one gets exported
    /**
     * The record type.
     */
    type: Type.SHIP_ITEM;
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
export interface SHIP_ITEM extends Record {

    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_handlingtable | GetSublistValueOptions_items | GetSublistValueOptions_shippingtable | GetSublistValueOptions_translations): number;
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
    (options: CopyLoadOptions_SHIP_ITEM): SHIP_ITEM;
    promise(options: CopyLoadOptions_SHIP_ITEM): Promise<SHIP_ITEM>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_SHIP_ITEM): SHIP_ITEM;
    promise(options: RecordCreateOptions_SHIP_ITEM): Promise<SHIP_ITEM>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_SHIP_ITEM): SHIP_ITEM;
    promise(options: CopyLoadOptions_SHIP_ITEM): Promise<SHIP_ITEM>;
}
