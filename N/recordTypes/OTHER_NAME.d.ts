
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_text = 'accountnumber' | 'bcn' | 'billaddr1' | 'billaddr2' | 'billaddr3' | 'billcity' | 'billcountry' | 'billstate' | 'billzip' | 'companyname' | 'entityid' | 'externalid' | 'firstname' | 'lastname' | 'middlename' | 'phoneticname' | 'printoncheckas' | 'salutation' | 'taxidnum' | 'title' | 'vatregnumber';
type main_email = 'altemail' | 'email';
type main_checkbox = 'autoname' | 'isinactive';
type main_currency = 'balance' | 'creditlimit' | 'openingbalance';
type main_select = 'category' | 'contact' | 'currency' | 'emailpreference' | 'globalsubscriptionstatus' | 'image' | 'openingbalanceaccount' | 'otherrelationships' | 'subsidiary' | 'taxfractionunit' | 'taxrounding' | 'terms' | 'unsubscribe';
type main_textarea = 'comments';
type main_datetime = 'datecreated' | 'lastmodifieddate';
type main_address = 'defaultaddress';
type main_integer = 'entitystatus' | 'parent' | 'salesrep';
type main_phone = 'fax' | 'homephone' | 'mobilephone' | 'phone';
type main_radio = 'isperson';
type main_date = 'openingbalancedate';
type main_url = 'url';

// addressbook field types
type addressbook_text = 'addr1' | 'addr2' | 'addr3' | 'addressee' | 'addressid' | 'attention' | 'city' | 'displaystate' | 'label' | 'state' | 'zip';
type addressbook_summary = 'addressbookaddress';
type addressbook_address = 'addrtext';
type addressbook_select = 'country';
type addressbook_checkbox = 'defaultbilling' | 'defaultshipping' | 'override';
type addressbook_integer = 'id' | 'internalid';
type addressbook_phone = 'phone';


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
    sublistId: 'addressbook';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'addressbook';
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

interface GetSelectOptionsOpts {
    /** The search string to filter the select options that are returned. */
    filter: string;
    /** The following operators are supported: contains, is, startswith. Default is contains. */
    operator: "contains" | "is" | "startswith";
}

interface HasSubrecordOptions {
    /** The internal ID of the field that may contain a subrecord. */
    fieldId: main_text | main_email | main_checkbox | main_currency | main_select | main_textarea | main_datetime | main_address | main_integer | main_phone | main_radio | main_date | main_url;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_email | main_checkbox | main_currency | main_select | main_textarea | main_datetime | main_address | main_integer | main_phone | main_radio | main_date | main_url;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_email | main_checkbox | main_currency | main_select | main_textarea | main_datetime | main_address | main_integer | main_phone | main_radio | main_date | main_url;
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
    fieldId: main_text | main_email | main_checkbox | main_currency | main_select | main_textarea | main_datetime | main_address | main_integer | main_phone | main_radio | main_date | main_url;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_text | main_email | main_checkbox | main_currency | main_select | main_textarea | main_datetime | main_address | main_integer | main_phone | main_radio | main_date | main_url;
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

export interface RecordCreateOptions_OTHER_NAME { // This one gets exported
    /**
     * The record type.
     */
    type: Type.OTHER_NAME;
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

export interface RecordTransformOptions_OTHER_NAME { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.OTHER_NAME;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_OTHER_NAME { // This one gets exported
    /**
     * The record type.
     */
    type: Type.OTHER_NAME;
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
export interface OTHER_NAME extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_addressbook): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_addressbook): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_addressbook): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_addressbook): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_addressbook): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_addressbook): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_addressbook): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_addressbook): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_addressbook): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_addressbook): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_addressbook): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_addressbook): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_addressbook): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_addressbook): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_addressbook): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_addressbook): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_addressbook): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_addressbook): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_addressbook): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_addressbook): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_addressbook): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_addressbook): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_addressbook): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_addressbook): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_addressbook): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_addressbook): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_addressbook): number;
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
    /** Sets the value of the field by a text representation. */
    setText(options: SetFieldTextOptions): void;
    /** Sets the value of a field. */
    setValue(options: ClientSetValueOptions): void;
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
    (options: CopyLoadOptions_OTHER_NAME): OTHER_NAME;
    promise(options: CopyLoadOptions_OTHER_NAME): Promise<OTHER_NAME>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_OTHER_NAME): OTHER_NAME;
    promise(options: RecordCreateOptions_OTHER_NAME): Promise<OTHER_NAME>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_OTHER_NAME): OTHER_NAME;
    promise(options: CopyLoadOptions_OTHER_NAME): Promise<OTHER_NAME>;
}
