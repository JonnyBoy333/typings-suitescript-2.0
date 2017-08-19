
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'assigned' | 'buildbroken' | 'buildfixed' | 'buildtarget' | 'customform' | 'emailcells' | 'emailemployees' | 'issuestatus' | 'issuetags' | 'issuetype' | 'item' | 'module' | 'priority' | 'product' | 'productteam' | 'reportedby' | 'reproduce' | 'reviewer' | 'severity' | 'source' | 'versionbroken' | 'versionfixed' | 'versiontarget';
type main_checkbox = 'autoname' | 'emailassignee' | 'isreviewed' | 'isshowstopper';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_text = 'datereleased' | 'externalid';
type main_textarea = 'externalabstract' | 'externaldetails' | 'issueabstract' | 'newdetails';
type main_identifieranycase = 'issuenumber';

// brokeninversion field types
type brokeninversion_select = 'build' | 'version';
type brokeninversion_checkbox = 'primary';

// fixedinversion field types
type fixedinversion_select = 'build' | 'version';
type fixedinversion_checkbox = 'primary';

// relatedissues field types
type relatedissues_url = 'issueabstract';
type relatedissues_text = 'issueassignee' | 'issuestatus';
type relatedissues_select = 'issuenumber' | 'relationship';
type relatedissues_textarea = 'relationshipcomment';

// targetversion field types
type targetversion_select = 'build' | 'version';
type targetversion_checkbox = 'primary';


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
    sublistId: 'brokeninversion' | 'fixedinversion' | 'relatedissues' | 'targetversion';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion' | 'fixedinversion' | 'relatedissues' | 'targetversion';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion' | 'fixedinversion' | 'relatedissues' | 'targetversion';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion' | 'fixedinversion' | 'relatedissues' | 'targetversion';
    /** The line number to select in the sublist. */
    line: number;
}


// brokeninversion type definitions
interface FindSublistLineWithValueOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
}

interface GetMatrixHeaderCountOptions_brokeninversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'brokeninversion';
    /** The intenral ID of the matrix field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
}

interface GetMatrixHeaderFieldOptions_brokeninversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'brokeninversion';
    /** The internal ID of the matrix field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_brokeninversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'brokeninversion';
    /** The intenral ID of the matrix field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
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

interface SetCurrentSublistValueOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
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

interface SetCurrentSublistTextOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_brokeninversion {
    /** The internal ID of the sublist. */
    sublistId: 'brokeninversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: brokeninversion_select | brokeninversion_checkbox;
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


// fixedinversion type definitions
interface FindSublistLineWithValueOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
}

interface GetMatrixHeaderCountOptions_fixedinversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'fixedinversion';
    /** The intenral ID of the matrix field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
}

interface GetMatrixHeaderFieldOptions_fixedinversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'fixedinversion';
    /** The internal ID of the matrix field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_fixedinversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'fixedinversion';
    /** The intenral ID of the matrix field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
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

interface SetCurrentSublistValueOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
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

interface SetCurrentSublistTextOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_fixedinversion {
    /** The internal ID of the sublist. */
    sublistId: 'fixedinversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: fixedinversion_select | fixedinversion_checkbox;
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


// relatedissues type definitions
interface FindSublistLineWithValueOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
}

interface GetMatrixHeaderCountOptions_relatedissues {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'relatedissues';
    /** The intenral ID of the matrix field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
}

interface GetMatrixHeaderFieldOptions_relatedissues {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'relatedissues';
    /** The internal ID of the matrix field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_relatedissues {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'relatedissues';
    /** The intenral ID of the matrix field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
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

interface SetCurrentSublistValueOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
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

interface SetCurrentSublistTextOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_relatedissues {
    /** The internal ID of the sublist. */
    sublistId: 'relatedissues';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: relatedissues_url | relatedissues_text | relatedissues_select | relatedissues_textarea;
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


// targetversion type definitions
interface FindSublistLineWithValueOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
}

interface GetMatrixHeaderCountOptions_targetversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'targetversion';
    /** The intenral ID of the matrix field. */
    fieldId: targetversion_select | targetversion_checkbox;
}

interface GetMatrixHeaderFieldOptions_targetversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'targetversion';
    /** The internal ID of the matrix field. */
    fieldId: targetversion_select | targetversion_checkbox;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_targetversion {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'targetversion';
    /** The intenral ID of the matrix field. */
    fieldId: targetversion_select | targetversion_checkbox;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
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

interface SetCurrentSublistValueOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
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

interface SetCurrentSublistTextOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_targetversion {
    /** The internal ID of the sublist. */
    sublistId: 'targetversion';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: targetversion_select | targetversion_checkbox;
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
    fieldId: main_select | main_checkbox | main_datetime | main_text | main_textarea | main_identifieranycase;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_checkbox | main_datetime | main_text | main_textarea | main_identifieranycase;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_checkbox | main_datetime | main_text | main_textarea | main_identifieranycase;
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
    fieldId: main_select | main_checkbox | main_datetime | main_text | main_textarea | main_identifieranycase;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_checkbox | main_datetime | main_text | main_textarea | main_identifieranycase;
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

export interface RecordCreateOptions_ISSUE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.ISSUE;
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

export interface RecordTransformOptions_ISSUE { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.ISSUE;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_ISSUE { // This one gets exported
    /**
     * The record type.
     */
    type: Type.ISSUE;
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
export interface ISSUE extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_brokeninversion | FindSublistLineWithValueOptions_fixedinversion | FindSublistLineWithValueOptions_relatedissues | FindSublistLineWithValueOptions_targetversion): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_brokeninversion | FindSublistLineWithValueOptions_fixedinversion | FindSublistLineWithValueOptions_relatedissues | FindSublistLineWithValueOptions_targetversion): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_brokeninversion | GetCurrentSublistValueOptions_fixedinversion | GetCurrentSublistValueOptions_relatedissues | GetCurrentSublistValueOptions_targetversion): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_brokeninversion | GetCurrentSublistValueOptions_fixedinversion | GetCurrentSublistValueOptions_relatedissues | GetCurrentSublistValueOptions_targetversion): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_brokeninversion | GetCurrentSublistValueOptions_fixedinversion | GetCurrentSublistValueOptions_relatedissues | GetCurrentSublistValueOptions_targetversion): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_brokeninversion | GetCurrentSublistValueOptions_fixedinversion | GetCurrentSublistValueOptions_relatedissues | GetCurrentSublistValueOptions_targetversion): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_brokeninversion | GetCurrentSublistValueOptions_fixedinversion | GetCurrentSublistValueOptions_relatedissues | GetCurrentSublistValueOptions_targetversion): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_brokeninversion | GetMatrixHeaderCountOptions_fixedinversion | GetMatrixHeaderCountOptions_relatedissues | GetMatrixHeaderCountOptions_targetversion): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_brokeninversion | GetMatrixHeaderFieldOptions_fixedinversion | GetMatrixHeaderFieldOptions_relatedissues | GetMatrixHeaderFieldOptions_targetversion): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_brokeninversion | GetMatrixHeaderFieldOptions_fixedinversion | GetMatrixHeaderFieldOptions_relatedissues | GetMatrixHeaderFieldOptions_targetversion): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_brokeninversion | GetMatrixSublistFieldOptions_fixedinversion | GetMatrixSublistFieldOptions_relatedissues | GetMatrixSublistFieldOptions_targetversion): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_brokeninversion | GetMatrixSublistFieldOptions_fixedinversion | GetMatrixSublistFieldOptions_relatedissues | GetMatrixSublistFieldOptions_targetversion): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_brokeninversion | SetCurrentMatrixSublistValueOptions_fixedinversion | SetCurrentMatrixSublistValueOptions_relatedissues | SetCurrentMatrixSublistValueOptions_targetversion): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_brokeninversion | SetCurrentMatrixSublistValueOptions_fixedinversion | SetCurrentMatrixSublistValueOptions_relatedissues | SetCurrentMatrixSublistValueOptions_targetversion): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_brokeninversion | SetCurrentSublistValueOptions_fixedinversion | SetCurrentSublistValueOptions_relatedissues | SetCurrentSublistValueOptions_targetversion): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_brokeninversion | SetSublistValueOptions_fixedinversion | SetSublistValueOptions_relatedissues | SetSublistValueOptions_targetversion): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_brokeninversion | SetCurrentSublistTextOptions_fixedinversion | SetCurrentSublistTextOptions_relatedissues | SetCurrentSublistTextOptions_targetversion): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_brokeninversion | SetSublistTextOptions_fixedinversion | SetSublistTextOptions_relatedissues | SetSublistTextOptions_targetversion): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_brokeninversion | SetSublistValueOptions_fixedinversion | SetSublistValueOptions_relatedissues | SetSublistValueOptions_targetversion): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_brokeninversion | SetSublistTextOptions_fixedinversion | SetSublistTextOptions_relatedissues | SetSublistTextOptions_targetversion): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_brokeninversion | GetSublistValueOptions_fixedinversion | GetSublistValueOptions_relatedissues | GetSublistValueOptions_targetversion): number;
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
    (options: CopyLoadOptions_ISSUE): ISSUE;
    promise(options: CopyLoadOptions_ISSUE): Promise<ISSUE>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_ISSUE): ISSUE;
    promise(options: RecordCreateOptions_ISSUE): Promise<ISSUE>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_ISSUE): ISSUE;
    promise(options: CopyLoadOptions_ISSUE): Promise<ISSUE>;
}
