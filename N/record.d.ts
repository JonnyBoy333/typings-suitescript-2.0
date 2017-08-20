
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

export interface CopyLoadOptions {
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
    //getCurrentSublistValue(sublistId: string, fieldId: string): FieldValue;
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
    //setCurrentSublistValue(sublistId: string, fieldId: string, value: FieldValue): void;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions): Record;
    /** Sets the value of the field by a text representation. */
    setText(options: SetFieldTextOptions): void;
    //setText(fieldId: string, value: string): void;
    /** Sets the value of a field. */
    setValue(options: ClientSetValueOptions): void;
    //setValue(fieldId: string, value: FieldValue): void;
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

export interface RecordCreateOptions {
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

import { RecordLoadFunction, RecordCreateFunction, RecordCopyFunction } from './recordTypes/_record_exports';

interface RecordDetachFunction {
    (options: DetachOptions): void;
    promise(options: DetachOptions): Promise<void>;
}

interface RecordDeleteFunction {
    (options: RecordDeleteOptions): void;
    promise(options: RecordDeleteOptions): Promise<void>;
}

interface RecordTransformFunction {
    (options: RecordTransformOptions): Record;
    promise(options: RecordTransformOptions): Promise<Record>;
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
export declare enum Type {
	ACCOUNT = 'account',
	ACCOUNTING_BOOK = 'accountingbook',
	ACCOUNTING_PERIOD = 'accountingperiod',
	AMORTIZATION_SCHEDULE = 'amortizationschedule',
	AMORTIZATION_TEMPLATE = 'amortizationtemplate',
	ASSEMBLY_BUILD = 'assemblybuild',
	ASSEMBLY_ITEM = 'assemblyitem',
	ASSEMBLY_UNBUILD = 'assemblyunbuild',
	BILLING_ACCOUNT = 'billingaccount',
	BILLING_CLASS = 'billingclass',
	BILLING_SCHEDULE = 'billingschedule',
	BIN = 'bin',
	BIN_TRANSFER = 'bintransfer',
	BIN_WORKSHEET = 'binworksheet',
	BUNDLE_INSTALLATION_SCRIPT = 'bundleinstallationscript',
	CALENDAR_EVENT = 'calendarevent',
	CAMPAIGN = 'campaign',
	CAMPAIGN_TEMPLATE = 'campaigntemplate',
	CASH_REFUND = 'cashrefund',
	CASH_SALE = 'cashsale',
	CHARGE = 'charge',
	CHECK = 'check',
	CLASSIFICATION = 'classification',
	CLIENT_SCRIPT = 'clientscript',
	COMPETITOR = 'competitor',
	CONTACT = 'contact',
	CREDIT_CARD_CHARGE = 'creditcardcharge',
	CREDIT_CARD_REFUND = 'creditcardrefund',
	CREDIT_MEMO = 'creditmemo',
	CURRENCY = 'currency',
	CUSTOMER = 'customer',
	CUSTOMER_CATEGORY = 'customercategory',
	CUSTOMER_DEPOSIT = 'customerdeposit',
	CUSTOMER_PAYMENT = 'customerpayment',
	CUSTOMER_REFUND = 'customerrefund',
	CUSTOM_TRANSACTION = 'customtransaction',
	DEPARTMENT = 'department',
	DEPOSIT = 'deposit',
	DEPOSIT_APPLICATION = 'depositapplication',
	DESCRIPTION_ITEM = 'descriptionitem',
	DISCOUNT_ITEM = 'discountitem',
	DOWNLOAD_ITEM = 'downloaditem',
	EMAIL_TEMPLATE = 'emailtemplate',
	EMPLOYEE = 'employee',
	ENTITY_ACCOUNT_MAPPING = 'entityaccountmapping',
	ESTIMATE = 'estimate',
	EXPENSE_CATEGORY = 'expensecategory',
	EXPENSE_REPORT = 'expensereport',
	FAIR_VALUE_PRICE = 'fairvalueprice',
	FOLDER = 'folder',
	GENERIC_RESOURCE = 'genericresource',
	GIFT_CERTIFICATE = 'giftcertificate',
	GIFT_CERTIFICATE_ITEM = 'giftcertificateitem',
	GLOBAL_ACCOUNT_MAPPING = 'globalaccountmapping',
	INTER_COMPANY_JOURNAL_ENTRY = 'intercompanyjournalentry',
	INTER_COMPANY_TRANSFER_ORDER = 'intercompanytransferorder',
	INVENTORY_ADJUSTMENT = 'inventoryadjustment',
	INVENTORY_COST_REVALUATION = 'inventorycostrevaluation',
	INVENTORY_COUNT = 'inventorycount',
	INVENTORY_DETAIL = 'inventorydetail',
	INVENTORY_ITEM = 'inventoryitem',
	INVENTORY_NUMBER = 'inventorynumber',
	INVENTORY_TRANSFER = 'inventorytransfer',
	INVOICE = 'invoice',
	ISSUE = 'issue',
	ITEM_ACCOUNT_MAPPING = 'itemaccountmapping',
	ITEM_DEMAND_PLAN = 'itemdemandplan',
	ITEM_FULFILLMENT = 'itemfulfillment',
	ITEM_GROUP = 'itemgroup',
	ITEM_RECEIPT = 'itemreceipt',
	ITEM_REVISION = 'itemrevision',
	ITEM_SUPPLY_PLAN = 'itemsupplyplan',
	JOURNAL_ENTRY = 'journalentry',
	KIT_ITEM = 'kititem',
	LEAD = 'lead',
	LOCATION = 'location',
	LOT_NUMBERED_ASSEMBLY_ITEM = 'lotnumberedassemblyitem',
	LOT_NUMBERED_INVENTORY_ITEM = 'lotnumberedinventoryitem',
	MANUFACTURING_COST_TEMPLATE = 'manufacturingcosttemplate',
	MANUFACTURING_OPERATION_TASK = 'manufacturingoperationtask',
	MANUFACTURING_ROUTING = 'manufacturingrouting',
	MAP_REDUCE_SCRIPT = 'mapreducescript',
	MARKUP_ITEM = 'markupitem',
	MASSUPDATE_SCRIPT = 'massupdatescript',
	MESSAGE = 'message',
	MFG_PLANNED_TIME = 'mfgplannedtime',
	NEXUS = 'nexus',
	NON_INVENTORY_ITEM = 'noninventoryitem',
	NOTE = 'note',
	OPPORTUNITY = 'opportunity',
	ORDER_SCHEDULE = 'orderschedule',
	OTHER_CHARGE_ITEM = 'otherchargeitem',
	OTHER_NAME = 'othername',
	PARTNER = 'partner',
	PAYCHECK_JOURNAL = 'paycheckjournal',
	PAYMENT_ITEM = 'paymentitem',
	PAYROLL_ITEM = 'payrollitem',
	PHONE_CALL = 'phonecall',
	PORTLET = 'portlet',
	PRICE_LEVEL = 'pricelevel',
	PROJECT_EXPENSE_TYPE = 'projectexpensetype',
	PROJECT_TASK = 'projecttask',
	PROJECT_TEMPLATE = 'projecttemplate',
	PROMOTION_CODE = 'promotioncode',
	PROSPECT = 'prospect',
	PURCHASE_CONTRACT = 'purchasecontract',
	PURCHASE_ORDER = 'purchaseorder',
	PURCHASE_REQUISITION = 'purchaserequisition',
	REALLOCATE_ITEM = 'reallocateitem',
	RESOURCE_ALLOCATION = 'resourceallocation',
	RESTLET = 'restlet',
	RETURN_AUTHORIZATION = 'returnauthorization',
	REVENUE_ARRANGEMENT = 'revenuearrangement',
	REVENUE_COMMITMENT = 'revenuecommitment',
	REVENUE_COMMITMENT_REVERSAL = 'revenuecommitmentreversal',
	REVENUE_PLAN = 'revenueplan',
	REV_REC_SCHEDULE = 'revrecschedule',
	REV_REC_TEMPLATE = 'revrectemplate',
	SALES_ORDER = 'salesorder',
	SALES_TAX_ITEM = 'salestaxitem',
	SCHEDULED_SCRIPT = 'scheduledscript',
	SCHEDULED_SCRIPT_INSTANCE = 'scheduledscriptinstance',
	SCRIPT_DEPLOYMENT = 'scriptdeployment',
	SERIALIZED_ASSEMBLY_ITEM = 'serializedassemblyitem',
	SERIALIZED_INVENTORY_ITEM = 'serializedinventoryitem',
	SERVICE_ITEM = 'serviceitem',
	SHIP_ITEM = 'shipitem',
	SOLUTION = 'solution',
	STATISTICAL_JOURNAL_ENTRY = 'statisticaljournalentry',
	SUBSCRIPTION = 'subscription',
	SUBSCRIPTION_CHANGE_ORDER = 'subscriptionchangeorder',
	SUBSCRIPTION_LINE = 'subscriptionline',
	SUBSCRIPTION_PLAN = 'subscriptionplan',
	SUBSIDIARY = 'subsidiary',
	SUBTOTAL_ITEM = 'subtotalitem',
	SUITELET = 'suitelet',
	SUPPORT_CASE = 'supportcase',
	TASK = 'task',
	TAX_ACCT = 'taxacct',
	TAX_GROUP = 'taxgroup',
	TAX_PERIOD = 'taxperiod',
	TAX_TYPE = 'taxtype',
	TERM = 'term',
	TIME_BILL = 'timebill',
	TIME_OFF_CHANGE = 'timeoffchange',
	TIME_OFF_PLAN = 'timeoffplan',
	TIME_OFF_REQUEST = 'timeoffrequest',
	TIME_OFF_RULE = 'timeoffrule',
	TIME_OFF_TYPE = 'timeofftype',
	TOPIC = 'topic',
	TRANSFER_ORDER = 'transferorder',
	UNITS_TYPE = 'unitstype',
	USEREVENT_SCRIPT = 'usereventscript',
	VENDOR = 'vendor',
	VENDOR_BILL = 'vendorbill',
	VENDOR_CATEGORY = 'vendorcategory',
	VENDOR_CREDIT = 'vendorcredit',
	VENDOR_PAYMENT = 'vendorpayment',
	VENDOR_RETURN_AUTHORIZATION = 'vendorreturnauthorization',
	WEBSITE = 'website',
	WORKFLOW_ACTION_SCRIPT = 'workflowactionscript',
	WORK_ORDER = 'workorder',
	WORK_ORDER_CLOSE = 'workorderclose',
	WORK_ORDER_COMPLETION = 'workordercompletion',
	WORK_ORDER_ISSUE = 'workorderissue',
	TIME_ENTRY = 'timeentry',
	PARTNER_CATEGORY = 'partnercategory',
	PAYMENT_METHOD = 'paymentmethod',
	INBOUND_SHIPMENT = 'inboundshipment',
	INVENTORY_STATUS = 'inventorystatus',
	CUSTOMER_PAYMENT_AUTHORIZATION = 'customerpaymentauthorization',
	COST_CATEGORY = 'costcategory',
	PCT_COMPLETE_PROJECT_REVENUE_RULE = 'pctcompleteprojectrevenuerule',
	BILLING_RATE_CARD = 'billingratecard',
	WORKPLACE = 'workplace',
	TIME_SHEET = 'timesheet',
	FIXED_AMOUNT_PROJECT_REVENUE_RULE = 'fixedamountprojectrevenuerule',
	JOB_TYPE = 'jobtype',
	CONSOLIDATED_EXCHANGE_RATE = 'consolidatedexchangerate',
	ADV_INTER_COMPANY_JOURNAL_ENTRY = 'advintercompanyjournalentry',
	ALLOCATION_SCHEDULE = 'allocationschedule',
	PRICING_GROUP = 'pricinggroup',
	SALES_ROLE = 'salesrole',
	LABOR_BASED_PROJECT_REVENUE_RULE = 'laborbasedprojectrevenuerule',
	CUSTOMER_MESSAGE = 'customermessage',
	ACCOUNTING_CONTEXT = 'accountingcontext',
	PRICE_PLAN = 'priceplan',
	INTERCOMP_ALLOCATION_SCHEDULE = 'intercompallocationschedule',
	BILLING_REVENUE_EVENT = 'billingrevenueevent',
	PRICE_BOOK = 'pricebook',
	USAGE = 'usage',
	CONTACT_ROLE = 'contactrole',
	CHARGE_RULE = 'chargerule',
	NOTE_TYPE = 'notetype',
	BOM_REVISION = 'bomrevision',
	CUSTOM_RECORD = 'customrecord',
	COUPON_CODE = 'couponcode',
	CUSTOMER_STATUS = 'customerstatus',
	JOB = 'job',
	BOM = 'bom',
	BLANKET_PURCHASE_ORDER = 'blanketpurchaseorder',
	CONTACT_CATEGORY = 'contactcategory',
	FULFILLMENT_REQUEST = 'fulfillmentrequest',
	CAMPAIGN_RESPONSE = 'campaignresponse',
	STORE_PICKUP_FULFILLMENT = 'storepickupfulfillment',
	PAYCHECK = 'paycheck',
	OTHER_NAME_CATEGORY = 'othernamecategory',
    COMMERCE_CATEGORY = 'commercecategory'
}
