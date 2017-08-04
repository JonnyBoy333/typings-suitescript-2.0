
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'audience' | 'category' | 'customform' | 'family' | 'item' | 'offer' | 'owner' | 'promotioncode' | 'searchengine' | 'vertical';
type main_checkbox = 'autoname' | 'isinactive';
type main_currency = 'basecost' | 'convcostpercustomer' | 'cost' | 'costpercustomer' | 'expectedrevenue' | 'profit' | 'totalrevenue';
type main_identifieranycase = 'campaignid';
type main_integer = 'conversions' | 'leadsgenerated' | 'uniquevisitors';
type main_date = 'enddate' | 'startdate';
type main_text = 'eventnumber' | 'externalid' | 'keyword' | 'title';
type main_textarea = 'message';
type main_percent = 'roi';
type main_url = 'url';

// campaigndirectmail field types
type campaigndirectmail_select = 'campaigngroup' | 'channel' | 'promocode' | 'status' | 'subscription' | 'template';
type campaigndirectmail_currency = 'cost';
type campaigndirectmail_date = 'datescheduled';
type campaigndirectmail_text = 'description';
type campaigndirectmail_integer = 'internalid';

// campaigndrip field types
type campaigndrip_select = 'channel' | 'promocode' | 'subscription' | 'template';
type campaigndrip_currency = 'cost';
type campaigndrip_text = 'description';
type campaigndrip_integer = 'internalid';

// campaignemail field types
type campaignemail_select = 'campaigngroup' | 'channel' | 'promocode' | 'status' | 'subscription' | 'template' | 'testcell';
type campaignemail_currency = 'cost';
type campaignemail_date = 'datescheduled';
type campaignemail_text = 'description';
type campaignemail_integer = 'internalid';
type campaignemail_timeofday = 'timescheduled';

// campaignevent field types
type campaignevent_select = 'campaigngroup' | 'channel' | 'promocode' | 'status' | 'subscription';
type campaignevent_currency = 'cost';
type campaignevent_date = 'datescheduled';
type campaignevent_text = 'description';
type campaignevent_integer = 'internalid';


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
    sublistId: 'campaigndirectmail' | 'campaigndrip' | 'campaignemail' | 'campaignevent';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail' | 'campaigndrip' | 'campaignemail' | 'campaignevent';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail' | 'campaigndrip' | 'campaignemail' | 'campaignevent';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail' | 'campaigndrip' | 'campaignemail' | 'campaignevent';
    /** The line number to select in the sublist. */
    line: number;
}


// campaigndirectmail type definitions
interface FindSublistLineWithValueOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
}

interface GetMatrixHeaderCountOptions_campaigndirectmail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaigndirectmail';
    /** The intenral ID of the matrix field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
}

interface GetMatrixHeaderFieldOptions_campaigndirectmail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of the matrix field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_campaigndirectmail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaigndirectmail';
    /** The intenral ID of the matrix field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
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

interface SetCurrentSublistValueOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
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

interface SetCurrentSublistTextOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_campaigndirectmail {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndirectmail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndirectmail_select | campaigndirectmail_currency | campaigndirectmail_date | campaigndirectmail_text | campaigndirectmail_integer;
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


// campaigndrip type definitions
interface FindSublistLineWithValueOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
}

interface GetMatrixHeaderCountOptions_campaigndrip {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaigndrip';
    /** The intenral ID of the matrix field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
}

interface GetMatrixHeaderFieldOptions_campaigndrip {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaigndrip';
    /** The internal ID of the matrix field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_campaigndrip {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaigndrip';
    /** The intenral ID of the matrix field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
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

interface SetCurrentSublistValueOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
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

interface SetCurrentSublistTextOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_campaigndrip {
    /** The internal ID of the sublist. */
    sublistId: 'campaigndrip';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaigndrip_select | campaigndrip_currency | campaigndrip_text | campaigndrip_integer;
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


// campaignemail type definitions
interface FindSublistLineWithValueOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
}

interface GetMatrixHeaderCountOptions_campaignemail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaignemail';
    /** The intenral ID of the matrix field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
}

interface GetMatrixHeaderFieldOptions_campaignemail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaignemail';
    /** The internal ID of the matrix field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_campaignemail {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaignemail';
    /** The intenral ID of the matrix field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
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

interface SetCurrentSublistValueOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
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

interface SetCurrentSublistTextOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_campaignemail {
    /** The internal ID of the sublist. */
    sublistId: 'campaignemail';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignemail_select | campaignemail_currency | campaignemail_date | campaignemail_text | campaignemail_integer | campaignemail_timeofday;
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


// campaignevent type definitions
interface FindSublistLineWithValueOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
}

interface GetMatrixHeaderCountOptions_campaignevent {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaignevent';
    /** The intenral ID of the matrix field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
}

interface GetMatrixHeaderFieldOptions_campaignevent {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaignevent';
    /** The internal ID of the matrix field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_campaignevent {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'campaignevent';
    /** The intenral ID of the matrix field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
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

interface SetCurrentSublistValueOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
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

interface SetCurrentSublistTextOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_campaignevent {
    /** The internal ID of the sublist. */
    sublistId: 'campaignevent';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: campaignevent_select | campaignevent_currency | campaignevent_date | campaignevent_text | campaignevent_integer;
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
    fieldId: main_select | main_checkbox | main_currency | main_identifieranycase | main_integer | main_date | main_text | main_textarea | main_percent | main_url;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_checkbox | main_currency | main_identifieranycase | main_integer | main_date | main_text | main_textarea | main_percent | main_url;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_checkbox | main_currency | main_identifieranycase | main_integer | main_date | main_text | main_textarea | main_percent | main_url;
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
    fieldId: main_select | main_checkbox | main_currency | main_identifieranycase | main_integer | main_date | main_text | main_textarea | main_percent | main_url;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_checkbox | main_currency | main_identifieranycase | main_integer | main_date | main_text | main_textarea | main_percent | main_url;
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

export interface RecordCreateOptions_CAMPAIGN { // This one gets exported
    /**
     * The record type.
     */
    type: Type.CAMPAIGN;
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

export interface RecordTransformOptions_CAMPAIGN { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.CAMPAIGN;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_CAMPAIGN { // This one gets exported
    /**
     * The record type.
     */
    type: Type.CAMPAIGN;
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
export interface CAMPAIGN extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_campaigndirectmail | FindSublistLineWithValueOptions_campaigndrip | FindSublistLineWithValueOptions_campaignemail | FindSublistLineWithValueOptions_campaignevent): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_campaigndirectmail | FindSublistLineWithValueOptions_campaigndrip | FindSublistLineWithValueOptions_campaignemail | FindSublistLineWithValueOptions_campaignevent): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_campaigndirectmail | GetCurrentSublistValueOptions_campaigndrip | GetCurrentSublistValueOptions_campaignemail | GetCurrentSublistValueOptions_campaignevent): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_campaigndirectmail | GetCurrentSublistValueOptions_campaigndrip | GetCurrentSublistValueOptions_campaignemail | GetCurrentSublistValueOptions_campaignevent): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_campaigndirectmail | GetCurrentSublistValueOptions_campaigndrip | GetCurrentSublistValueOptions_campaignemail | GetCurrentSublistValueOptions_campaignevent): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_campaigndirectmail | GetCurrentSublistValueOptions_campaigndrip | GetCurrentSublistValueOptions_campaignemail | GetCurrentSublistValueOptions_campaignevent): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_campaigndirectmail | GetCurrentSublistValueOptions_campaigndrip | GetCurrentSublistValueOptions_campaignemail | GetCurrentSublistValueOptions_campaignevent): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_campaigndirectmail | GetMatrixHeaderCountOptions_campaigndrip | GetMatrixHeaderCountOptions_campaignemail | GetMatrixHeaderCountOptions_campaignevent): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_campaigndirectmail | GetMatrixHeaderFieldOptions_campaigndrip | GetMatrixHeaderFieldOptions_campaignemail | GetMatrixHeaderFieldOptions_campaignevent): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_campaigndirectmail | GetMatrixHeaderFieldOptions_campaigndrip | GetMatrixHeaderFieldOptions_campaignemail | GetMatrixHeaderFieldOptions_campaignevent): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_campaigndirectmail | GetMatrixSublistFieldOptions_campaigndrip | GetMatrixSublistFieldOptions_campaignemail | GetMatrixSublistFieldOptions_campaignevent): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_campaigndirectmail | GetMatrixSublistFieldOptions_campaigndrip | GetMatrixSublistFieldOptions_campaignemail | GetMatrixSublistFieldOptions_campaignevent): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_campaigndirectmail | SetCurrentMatrixSublistValueOptions_campaigndrip | SetCurrentMatrixSublistValueOptions_campaignemail | SetCurrentMatrixSublistValueOptions_campaignevent): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_campaigndirectmail | SetCurrentMatrixSublistValueOptions_campaigndrip | SetCurrentMatrixSublistValueOptions_campaignemail | SetCurrentMatrixSublistValueOptions_campaignevent): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_campaigndirectmail | SetCurrentSublistValueOptions_campaigndrip | SetCurrentSublistValueOptions_campaignemail | SetCurrentSublistValueOptions_campaignevent): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_campaigndirectmail | SetSublistValueOptions_campaigndrip | SetSublistValueOptions_campaignemail | SetSublistValueOptions_campaignevent): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_campaigndirectmail | SetCurrentSublistTextOptions_campaigndrip | SetCurrentSublistTextOptions_campaignemail | SetCurrentSublistTextOptions_campaignevent): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_campaigndirectmail | SetSublistTextOptions_campaigndrip | SetSublistTextOptions_campaignemail | SetSublistTextOptions_campaignevent): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_campaigndirectmail | SetSublistValueOptions_campaigndrip | SetSublistValueOptions_campaignemail | SetSublistValueOptions_campaignevent): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_campaigndirectmail | SetSublistTextOptions_campaigndrip | SetSublistTextOptions_campaignemail | SetSublistTextOptions_campaignevent): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_campaigndirectmail | GetSublistValueOptions_campaigndrip | GetSublistValueOptions_campaignemail | GetSublistValueOptions_campaignevent): number;
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
    (options: CopyLoadOptions_CAMPAIGN): CAMPAIGN;
    promise(options: CopyLoadOptions_CAMPAIGN): Promise<CAMPAIGN>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_CAMPAIGN): CAMPAIGN;
    promise(options: RecordCreateOptions_CAMPAIGN): Promise<CAMPAIGN>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_CAMPAIGN): CAMPAIGN;
    promise(options: CopyLoadOptions_CAMPAIGN): Promise<CAMPAIGN>;
}
