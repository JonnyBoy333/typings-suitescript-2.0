
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';

// main field types
type main_select = 'account' | 'class' | 'currency' | 'customform' | 'department' | 'employee' | 'location' | 'postingperiod' | 'subsidiary';
type main_datetime = 'createddate' | 'lastmodifieddate';
type main_float = 'exchangerate';
type main_text = 'externalid';
type main_date = 'trandate';

// companycontribution field types
type companycontribution_currency2 = 'amount';
type companycontribution_select = 'class' | 'department' | 'location' | 'payrollitem';
type companycontribution_integer = 'id';

// companytax field types
type companytax_currency2 = 'amount';
type companytax_select = 'class' | 'department' | 'location' | 'payrollitem';
type companytax_integer = 'id';

// deduction field types
type deduction_currency2 = 'amount';
type deduction_select = 'class' | 'department' | 'location' | 'payrollitem';
type deduction_integer = 'id';

// earning field types
type earning_currency2 = 'amount';
type earning_select = 'class' | 'department' | 'location' | 'payrollitem';
type earning_float = 'hours';
type earning_integer = 'id';

// employeetax field types
type employeetax_currency2 = 'amount';
type employeetax_select = 'class' | 'department' | 'location' | 'payrollitem';
type employeetax_integer = 'id';


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
    sublistId: 'companycontribution' | 'companytax' | 'deduction' | 'earning' | 'employeetax';
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution' | 'companytax' | 'deduction' | 'earning' | 'employeetax';
}

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution' | 'companytax' | 'deduction' | 'earning' | 'employeetax';
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution' | 'companytax' | 'deduction' | 'earning' | 'employeetax';
    /** The line number to select in the sublist. */
    line: number;
}


// companycontribution type definitions
interface FindSublistLineWithValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
}

interface GetMatrixHeaderCountOptions_companycontribution {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companycontribution';
    /** The intenral ID of the matrix field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
}

interface GetMatrixHeaderFieldOptions_companycontribution {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companycontribution';
    /** The internal ID of the matrix field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_companycontribution {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companycontribution';
    /** The intenral ID of the matrix field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
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

interface SetCurrentSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
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

interface SetCurrentSublistTextOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_companycontribution {
    /** The internal ID of the sublist. */
    sublistId: 'companycontribution';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companycontribution_currency2 | companycontribution_select | companycontribution_integer;
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


// companytax type definitions
interface FindSublistLineWithValueOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
}

interface GetMatrixHeaderCountOptions_companytax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companytax';
    /** The intenral ID of the matrix field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
}

interface GetMatrixHeaderFieldOptions_companytax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companytax';
    /** The internal ID of the matrix field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_companytax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'companytax';
    /** The intenral ID of the matrix field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
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

interface SetCurrentSublistValueOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
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

interface SetCurrentSublistTextOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_companytax {
    /** The internal ID of the sublist. */
    sublistId: 'companytax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: companytax_currency2 | companytax_select | companytax_integer;
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


// deduction type definitions
interface FindSublistLineWithValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
}

interface GetMatrixHeaderCountOptions_deduction {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deduction';
    /** The intenral ID of the matrix field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
}

interface GetMatrixHeaderFieldOptions_deduction {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deduction';
    /** The internal ID of the matrix field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_deduction {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'deduction';
    /** The intenral ID of the matrix field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
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

interface SetCurrentSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
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

interface SetCurrentSublistTextOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_deduction {
    /** The internal ID of the sublist. */
    sublistId: 'deduction';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: deduction_currency2 | deduction_select | deduction_integer;
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


// earning type definitions
interface FindSublistLineWithValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
}

interface GetMatrixHeaderCountOptions_earning {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'earning';
    /** The intenral ID of the matrix field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
}

interface GetMatrixHeaderFieldOptions_earning {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'earning';
    /** The internal ID of the matrix field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_earning {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'earning';
    /** The intenral ID of the matrix field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
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

interface SetCurrentSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
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

interface SetCurrentSublistTextOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_earning {
    /** The internal ID of the sublist. */
    sublistId: 'earning';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: earning_currency2 | earning_select | earning_float | earning_integer;
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


// employeetax type definitions
interface FindSublistLineWithValueOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
}

interface GetMatrixHeaderCountOptions_employeetax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'employeetax';
    /** The intenral ID of the matrix field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
}

interface GetMatrixHeaderFieldOptions_employeetax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'employeetax';
    /** The internal ID of the matrix field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_employeetax {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: 'employeetax';
    /** The intenral ID of the matrix field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
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

interface SetCurrentSublistValueOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
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

interface SetCurrentSublistTextOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_employeetax {
    /** The internal ID of the sublist. */
    sublistId: 'employeetax';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: employeetax_currency2 | employeetax_select | employeetax_integer;
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
    fieldId: main_select | main_datetime | main_float | main_text | main_date;
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_float | main_text | main_date;
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_float | main_text | main_date;
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
    fieldId: main_select | main_datetime | main_float | main_text | main_date;
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: main_select | main_datetime | main_float | main_text | main_date;
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

export interface RecordCreateOptions_PAYCHECK_JOURNAL { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PAYCHECK_JOURNAL;
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

export interface RecordTransformOptions_PAYCHECK_JOURNAL { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.PAYCHECK_JOURNAL;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

export interface CopyLoadOptions_PAYCHECK_JOURNAL { // This one gets exported
    /**
     * The record type.
     */
    type: Type.PAYCHECK_JOURNAL;
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
export interface PAYCHECK_JOURNAL extends Record {

    /** Returns the line number of the first instance where a specified value is found in a specified column of the matrix. */
    findMatrixSublistLineWIthValue(options: FindSublistLineWithValueOptions_companycontribution | FindSublistLineWithValueOptions_companytax | FindSublistLineWithValueOptions_deduction | FindSublistLineWithValueOptions_earning | FindSublistLineWithValueOptions_employeetax): number;
    /** Returns the line number for the first occurrence of a field value in a sublist. */
    findSublistLineWithValue(options: FindSublistLineWithValueOptions_companycontribution | FindSublistLineWithValueOptions_companytax | FindSublistLineWithValueOptions_deduction | FindSublistLineWithValueOptions_earning | FindSublistLineWithValueOptions_employeetax): number;
    /** Gets the value for the currently selected line in the matrix. */
    getCurrentMatrixSublistValue(options: GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_companytax | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_employeetax): number | Date | string | string[] | boolean;
    /** Returns a value indicating whether the associated sublist field has a subrecord on the current line. This method can only be used on dynamic records. */
    hasCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_companytax | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_employeetax): boolean;
    /** Gets the subrecord for the associated sublist field on the current line. */
    getCurrentSublistSubrecord(options: GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_companytax | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_employeetax): Record;
    /** Returns a text representation of the field value in the currently selected line. */
    getCurrentSublistText(options: GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_companytax | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_employeetax): string;
    /** Returns the value of a sublist field on the currently selected sublist line. */
    getCurrentSublistValue(options: GetCurrentSublistValueOptions_companycontribution | GetCurrentSublistValueOptions_companytax | GetCurrentSublistValueOptions_deduction | GetCurrentSublistValueOptions_earning | GetCurrentSublistValueOptions_employeetax): FieldValue;
    /** Returns the number of columns for the specified matrix. */
    getMatrixHeaderCount(options: GetMatrixHeaderCountOptions_companycontribution | GetMatrixHeaderCountOptions_companytax | GetMatrixHeaderCountOptions_deduction | GetMatrixHeaderCountOptions_earning | GetMatrixHeaderCountOptions_employeetax): number;
    /** Gets the field for the specified header in the matrix. */
    getMatrixHeaderField(options: GetMatrixHeaderFieldOptions_companycontribution | GetMatrixHeaderFieldOptions_companytax | GetMatrixHeaderFieldOptions_deduction | GetMatrixHeaderFieldOptions_earning | GetMatrixHeaderFieldOptions_employeetax): Field;
    /** Gets the value for the associated header in the matrix. */
    getMatrixHeaderValue(options: GetMatrixHeaderFieldOptions_companycontribution | GetMatrixHeaderFieldOptions_companytax | GetMatrixHeaderFieldOptions_deduction | GetMatrixHeaderFieldOptions_earning | GetMatrixHeaderFieldOptions_employeetax): FieldValue;
    /** Gets the field for the specified sublist in the matrix. */
    getMatrixSublistField(options: GetMatrixSublistFieldOptions_companycontribution | GetMatrixSublistFieldOptions_companytax | GetMatrixSublistFieldOptions_deduction | GetMatrixSublistFieldOptions_earning | GetMatrixSublistFieldOptions_employeetax): Field;
    /** Gets the value for the associated field in the matrix. */
    getMatrixSublistValue(options: GetMatrixSublistFieldOptions_companycontribution | GetMatrixSublistFieldOptions_companytax | GetMatrixSublistFieldOptions_deduction | GetMatrixSublistFieldOptions_earning | GetMatrixSublistFieldOptions_employeetax): FieldValue;
    /** Sets the value for the line currently selected in the matrix. */
    setCurrentMatrixSublistValue(options: SetCurrentMatrixSublistValueOptions_companycontribution | SetCurrentMatrixSublistValueOptions_companytax | SetCurrentMatrixSublistValueOptions_deduction | SetCurrentMatrixSublistValueOptions_earning | SetCurrentMatrixSublistValueOptions_employeetax): Record;
    /** Sets the value for the associated header in the matrix. */
    setMatrixHeaderValue(options: SetCurrentMatrixSublistValueOptions_companycontribution | SetCurrentMatrixSublistValueOptions_companytax | SetCurrentMatrixSublistValueOptions_deduction | SetCurrentMatrixSublistValueOptions_earning | SetCurrentMatrixSublistValueOptions_employeetax): Record;
    /** Sets the value for the field in the currently selected line. */
    setCurrentSublistValue(options: SetCurrentSublistValueOptions_companycontribution | SetCurrentSublistValueOptions_companytax | SetCurrentSublistValueOptions_deduction | SetCurrentSublistValueOptions_earning | SetCurrentSublistValueOptions_employeetax): void;
    /** Sets the value of a sublist field. (standard mode only). */
    setSublistValue(options: SetSublistValueOptions_companycontribution | SetSublistValueOptions_companytax | SetSublistValueOptions_deduction | SetSublistValueOptions_earning | SetSublistValueOptions_employeetax): Record;
    /** Sets the value for the field in the currently selected line by a text representation. */
    setCurrentSublistText(options: SetCurrentSublistTextOptions_companycontribution | SetCurrentSublistTextOptions_companytax | SetCurrentSublistTextOptions_deduction | SetCurrentSublistTextOptions_earning | SetCurrentSublistTextOptions_employeetax): void;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_companycontribution | SetSublistTextOptions_companytax | SetSublistTextOptions_deduction | SetSublistTextOptions_earning | SetSublistTextOptions_employeetax): Record;
    /** Sets the value for the associated field in the matrix. */
    setMatrixSublistValue(options: SetSublistValueOptions_companycontribution | SetSublistValueOptions_companytax | SetSublistValueOptions_deduction | SetSublistValueOptions_earning | SetSublistValueOptions_employeetax): Record;
    /** Sets the value of a sublist field by a text representation. */
    setSublistText(options: SetSublistTextOptions_companycontribution | SetSublistTextOptions_companytax | SetSublistTextOptions_deduction | SetSublistTextOptions_earning | SetSublistTextOptions_employeetax): Record;
    /** Returns the value of a sublist field. */
    getSublistValue(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: GetSublistValueOptions_companycontribution | GetSublistValueOptions_companytax | GetSublistValueOptions_deduction | GetSublistValueOptions_earning | GetSublistValueOptions_employeetax): number;
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
    (options: CopyLoadOptions_PAYCHECK_JOURNAL): PAYCHECK_JOURNAL;
    promise(options: CopyLoadOptions_PAYCHECK_JOURNAL): Promise<PAYCHECK_JOURNAL>;
}

export interface RecordCreateFunction {
    (options: RecordCreateOptions_PAYCHECK_JOURNAL): PAYCHECK_JOURNAL;
    promise(options: RecordCreateOptions_PAYCHECK_JOURNAL): Promise<PAYCHECK_JOURNAL>;
}

export interface RecordLoadFunction {
    (options: CopyLoadOptions_PAYCHECK_JOURNAL): PAYCHECK_JOURNAL;
    promise(options: CopyLoadOptions_PAYCHECK_JOURNAL): Promise<PAYCHECK_JOURNAL>;
}
