let allTables = jQuery('tbody');
let mainFields = '';
let sublistFields = [];
let sublists = '';

function groupArray(fields){
    var group_to_values = fields.reduce(function(obj,item){
        obj[item.fieldType] = obj[item.fieldType] || [];
        obj[item.fieldType].push(item.fieldId);
        return obj;
    }, {});

    return Object.entries(group_to_values).map(([field_type, id]) => ({ field_type, id }));
}

for (let j = 0; j < allTables.length; j++){
	let names = [];
	let listName = 'main';
    for(let i = 0; i < allTables[j].children.length; i++){
    	let id = allTables[j].children[i].id;
		if (id.indexOf('_') !== id.lastIndexOf('_')) listName = id.substring(id.indexOf('_') + 1, id.lastIndexOf('_'));
		if (id.substr(id.lastIndexOf('_') >- 0)){
			//let name = "'" + id.substr(id.lastIndexOf('_') + 1) + "'";
			let name = allTables[j].children[i].children[0].innerText;
			let fieldType = allTables[j].children[i].children[1].innerText;
        	//if (i === allTables[j].children.length - 1) names += name;
			//else names += name + ' | ';
			names.push({
			    fieldId: name,
			    fieldType: fieldType
			})
        }
    }
	if(names.length > 0) {
		if (listName === 'main') {
            // mainFields = names.sort((a,b) => a.fieldType - b.fieldType);
            mainFields = groupArray(names);
			//console.log(mainFields);
		} 
		else {
			sublistFields.push({
				sublist: listName,
				fields: groupArray(names)
			});
			//console.log('sublists', sublists);
            sublists += sublists ? ` | '${listName}'` : `'${listName}'`;
		}
// 		console.log(listName);
// 		console.log(names);
    }
}

console.log('Main Fields', mainFields);
console.log('Sublists', sublists)
console.log('Sublist Fields', sublistFields);

// var mainFieldGroups = groupArray(mainFields);
// console.log('Main Field Groups', mainFieldGroups);

var mainFieldsTxt = mainFields.reduce((txt, val, i, arr) => {
    if (i === arr.length - 1) return txt += `main_${val.field_type}`;
    else return txt = i === 1 ? `main_${txt.field_type} | main_${val.field_type} | ` : txt + `main_${val.field_type} | `;
});

console.log('Main Field Text', mainFieldsTxt);

const internalId = jQuery('h3:first').text().substring(13);
const Type = {
    account: 'ACCOUNT',
    accountingbook: 'ACCOUNTING_BOOK',
    accountingperiod: 'ACCOUNTING_PERIOD',
    amortizationschedule: 'AMORTIZATION_SCHEDULE',
    amortizationtemplate: 'AMORTIZATION_TEMPLATE',
    assemblybuild: 'ASSEMBLY_BUILD',
    assemblyitem: 'ASSEMBLY_ITEM',
    assemblyunbuild: 'ASSEMBLY_UNBUILD',
    billingaccount: 'BILLING_ACCOUNT',
    billingclass: 'BILLING_CLASS',
    billingschedule: 'BILLING_SCHEDULE',
    bin: 'BIN',
    bintransfer: 'BIN_TRANSFER',
    binworksheet: 'BIN_WORKSHEET',
    binworksheet: 'BLANKET_PURCHASE_ORDER',
    bundleinstallationscript: 'BUNDLE_INSTALLATION_SCRIPT',
    calendarevent: 'CALENDAR_EVENT',
    campaign: 'CAMPAIGN',
    campaigntemplate: 'CAMPAIGN_TEMPLATE',
    cashrefund: 'CASH_REFUND',
    cashsale: 'CASH_SALE',
    charge: 'CHARGE',
    check: 'CHECK',
    classification: 'CLASSIFICATION',
    clientscript: 'CLIENT_SCRIPT',
    competitor: 'COMPETITOR',
    contact: 'CONTACT',
    contact: 'COUPON_CODE',
    creditcardcharge: 'CREDIT_CARD_CHARGE',
    creditcardrefund: 'CREDIT_CARD_REFUND',
    creditmemo: 'CREDIT_MEMO',
    currency: 'CURRENCY',
    customer: 'CUSTOMER',
    customercategory: 'CUSTOMER_CATEGORY',
    customerdeposit: 'CUSTOMER_DEPOSIT',
    customerpayment: 'CUSTOMER_PAYMENT',
    customerrefund: 'CUSTOMER_REFUND',
    customtransaction: 'CUSTOM_TRANSACTION',
    department: 'DEPARTMENT',
    deposit: 'DEPOSIT',
    depositapplication: 'DEPOSIT_APPLICATION',
    descriptionitem: 'DESCRIPTION_ITEM',
    discountitem: 'DISCOUNT_ITEM',
    downloaditem: 'DOWNLOAD_ITEM',
    DRIVERS_LICENSE: '',
    emailtemplate: 'EMAIL_TEMPLATE',
    employee: 'EMPLOYEE',
    entityaccountmapping: 'ENTITY_ACCOUNT_MAPPING',
    estimate: 'ESTIMATE',
    expensecategory: 'EXPENSE_CATEGORY',
    expensereport: 'EXPENSE_REPORT',
    fairvalueprice: 'FAIR_VALUE_PRICE',
    folder: 'FOLDER',
    genericresource: 'GENERIC_RESOURCE',
    giftcertificate: 'GIFT_CERTIFICATE',
    giftcertificateitem: 'GIFT_CERTIFICATE_ITEM',
    globalaccountmapping: 'GLOBAL_ACCOUNT_MAPPING',
    GOVERNMENT_ISSUED_ID_TYPE: '',
    HCM_JOB: '',
    intercompanyjournalentry: 'INTER_COMPANY_JOURNAL_ENTRY',
    intercompanytransferorder: 'INTER_COMPANY_TRANSFER_ORDER',
    inventoryadjustment: 'INVENTORY_ADJUSTMENT',
    inventorycostrevaluation: 'INVENTORY_COST_REVALUATION',
    inventorycount: 'INVENTORY_COUNT',
    inventorydetail: 'INVENTORY_DETAIL',
    inventoryitem: 'INVENTORY_ITEM',
    inventorynumber: 'INVENTORY_NUMBER',
    inventorytransfer: 'INVENTORY_TRANSFER',
    invoice: 'INVOICE',
    issue: 'ISSUE',
    itemaccountmapping: 'ITEM_ACCOUNT_MAPPING',
    itemdemandplan: 'ITEM_DEMAND_PLAN',
    itemfulfillment: 'ITEM_FULFILLMENT',
    itemgroup: 'ITEM_GROUP',
    itemreceipt: 'ITEM_RECEIPT',
    itemrevision: 'ITEM_REVISION',
    itemsupplyplan: 'ITEM_SUPPLY_PLAN',
    jobstatus: 'JOB',
    JOB_REQUISITION: '',
    journalentry: 'JOURNAL_ENTRY',
    kititem: 'KIT_ITEM',
    KUDOS: '',
    lead: 'LEAD',
    location: 'LOCATION',
    lotnumberedassemblyitem: 'LOT_NUMBERED_ASSEMBLY_ITEM',
    lotnumberedinventoryitem: 'LOT_NUMBERED_INVENTORY_ITEM',
    manufacturingcosttemplate: 'MANUFACTURING_COST_TEMPLATE',
    manufacturingoperationtask: 'MANUFACTURING_OPERATION_TASK',
    manufacturingrouting: 'MANUFACTURING_ROUTING',
    mapreducescript: 'MAP_REDUCE_SCRIPT',
    markupitem: 'MARKUP_ITEM',
    massupdatescript: 'MASSUPDATE_SCRIPT',
    message: 'MESSAGE',
    mfgplannedtime: 'MFG_PLANNED_TIME',
    nexus: 'NEXUS',
    noninventoryitem: 'NON_INVENTORY_ITEM',
    note: 'NOTE',
    opportunity: 'OPPORTUNITY',
    orderschedule: 'ORDER_SCHEDULE',
    ORGANIZATION_VALUE: '',
    otherchargeitem: 'OTHER_CHARGE_ITEM',
    OTHER_GOVERNMENT_ISSUED_ID: '',
    othername: 'OTHER_NAME',
    partner: 'PARTNER',
    PASSPORT: '',
    paycheckjournal: 'PAYCHECK_JOURNAL',
    paymentitem: 'PAYMENT_ITEM',
    payrollitem: 'PAYROLL_ITEM',
    phonecall: 'PHONE_CALL',
    portlet: 'PORTLET',
    POSITION: '',
    pricelevel: 'PRICE_LEVEL',
    projectexpensetype: 'PROJECT_EXPENSE_TYPE',
    projecttask: 'PROJECT_TASK',
    projecttemplate: 'PROJECT_TEMPLATE',
    promotioncode: 'PROMOTION_CODE',
    prospect: 'PROSPECT',
    purchasecontract: 'PURCHASE_CONTRACT',
    purchaseorder: 'PURCHASE_ORDER',
    purchaserequisition: 'PURCHASE_REQUISITION',
    RATE_PLAN: '',
    reallocateitem: 'REALLOCATE_ITEM',
    resourceallocation: 'RESOURCE_ALLOCATION',
    restlet: 'RESTLET',
    returnauthorization: 'RETURN_AUTHORIZATION',
    revenuearrangement: 'REVENUE_ARRANGEMENT',
    revenuecommitment: 'REVENUE_COMMITMENT',
    revenuecommitmentreversal: 'REVENUE_COMMITMENT_REVERSAL',
    revenueplan: 'REVENUE_PLAN',
    revrecschedule: 'REV_REC_SCHEDULE',
    revrectemplate: 'REV_REC_TEMPLATE',
    salesorder: 'SALES_ORDER',
    salestaxitem: 'SALES_TAX_ITEM',
    scheduledscript: 'SCHEDULED_SCRIPT',
    scheduledscriptinstance: 'SCHEDULED_SCRIPT_INSTANCE',
    scriptdeployment: 'SCRIPT_DEPLOYMENT',
    serializedassemblyitem: 'SERIALIZED_ASSEMBLY_ITEM',
    serializedinventoryitem: 'SERIALIZED_INVENTORY_ITEM',
    serviceitem: 'SERVICE_ITEM',
    shipitem: 'SHIP_ITEM',
    solution: 'SOLUTION',
    statisticaljournalentry: 'STATISTICAL_JOURNAL_ENTRY',
    SUBSCRIPTION: '',
    SUBSCRIPTION_CHANGE_ORDER: '',
    SUBSCRIPTION_LINE: '',
    SUBSCRIPTION_PLAN: '',
    subsidiary: 'SUBSIDIARY',
    subtotalitem: 'SUBTOTAL_ITEM',
    suitelet: 'SUITELET',
    supportcase: 'SUPPORT_CASE',
    task: 'TASK',
    taxacct: 'TAX_ACCT',
    taxgroup: 'TAX_GROUP',
    taxperiod: 'TAX_PERIOD',
    taxtype: 'TAX_TYPE',
    term: 'TERM',
    TERMINATION_REASON: '',
    timebill: 'TIME_BILL',
    TIME_OFF_CHANGE: '',
    TIME_OFF_PLAN: '',
    TIME_OFF_REQUEST: '',
    TIME_OFF_RULE: '',
    TIME_OFF_TYPE: '',
    topic: 'TOPIC',
    transferorder: 'TRANSFER_ORDER',
    unitstype: 'UNITS_TYPE',
    usereventscript: 'USEREVENT_SCRIPT',
    vendor: 'VENDOR',
    vendorbill: 'VENDOR_BILL',
    vendorcategory: 'VENDOR_CATEGORY',
    vendorcredit: 'VENDOR_CREDIT',
    vendorpayment: 'VENDOR_PAYMENT',
    vendorreturnauthorization: 'VENDOR_RETURN_AUTHORIZATION',
    website: 'WEBSITE',
    workflowactionscript: 'WORKFLOW_ACTION_SCRIPT',
    workorder: 'WORK_ORDER',
    workorderclose: 'WORK_ORDER_CLOSE',
    workordercompletion: 'WORK_ORDER_COMPLETION',
    workorderissue: 'WORK_ORDER_ISSUE'
}
const recordType = Type[internalId];

function concatFields(fieldArr, sublist) {
    let txt = '';
    for (let i = 0; i < fieldArr.length; i++) {
        txt += `type ${sublist}_${fieldArr[i].field_type} = '${fieldArr[i].id.join("' | '")}';\n`;
    }
    //console.log('Field Text', txt);
    return txt;
}

function concatFields2(fieldArr, sublist) {
    let txt = '';
    for (let i = 0; i < fieldArr.length; i++) {
        txt += i === fieldArr.length - 1 ? `${sublist}_${fieldArr[i].field_type}` : `${sublist}_${fieldArr[i].field_type} | `;
    }
    //console.log('Field Text', txt);
    return txt;
}

function concatFields3(mainTxt) {
    let txt = '';
    for (let i = 0; i < sublistFields.length; i++) {
        txt += i === sublistFields.length - 1 ? `${mainTxt}_${sublistFields[i].sublist}` : `${mainTxt}_${sublistFields[i].sublist} | `;
    }
    //console.log('Field Text', txt);
    return txt;
}

let fileTxt =
`
import { Field, Record, Type } from '../record'
import { Sublist } from '../ui/serverWidget';
import { UserEventType, UserEventTypes } from './EventTypes'

`

//Add main field types to the top of the file
fileTxt += `// main field types\n`
fileTxt += concatFields(mainFields, 'main');
fileTxt += `\n`;

//Add sublist field types to the top of the file
for (let i = 0; i < sublistFields.length; i++) {
    fileTxt += `// ${sublistFields[i].sublist} field types\n`;
    fileTxt += concatFields(sublistFields[i].fields, sublistFields[i].sublist);
    fileTxt += `\n`;
}

fileTxt +=
`
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
    sublistId: ${sublists};
}

interface RecordGetLineCountOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
}

export interface CopyLoadOptions { // This one gets exported
    /**
     * The record type.
     */
    type: Type.${recordType};
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

interface InsertLineOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
    /** The line number to insert. */
    line: number;
    /** If set to true, scripting recalculation is ignored. Default is false. */
    ignoreRecalc?: boolean;
}

interface SelectLineOptions {
    /** The internal ID of the sublist. */
    sublistId: ${sublists};
    /** The line number to select in the sublist. */
    line: number;
}

`

for (let i = 0; i < sublistFields.length; i++) {
    fileTxt += 
`
// ${sublistFields[i].sublist} type definitions
interface FindSublistLineWithValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The value to search for. */
    value: FieldValue;
}

interface GetCurrentSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
}

interface GetMatrixHeaderCountOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: '${sublistFields[i].sublist}';
    /** The intenral ID of the matrix field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
}

interface GetMatrixHeaderFieldOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of the matrix field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The column number for the field. */
    column: number;
}

interface GetMatrixSublistFieldOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist that contains the matrix. */
    sublistId: '${sublistFields[i].sublist}';
    /** The intenral ID of the matrix field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The column number for the field. */
    column: number;
    /** The line number for the field. */
    line: number;
}

interface GetSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The line number for the field. */
    line: number;
}

interface SetCurrentMatrixSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
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

interface SetCurrentSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
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

interface SetCurrentSublistTextOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The text to set the value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
}

interface SetSublistTextOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
    /** The line number for the field. */
    line: number;
    /** The text to set the value to. */
    text: string;
    /** WARNING - UNDOCUMENTED. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface SetSublistValueOptions_${sublistFields[i].sublist} {
    /** The internal ID of the sublist. */
    sublistId: '${sublistFields[i].sublist}';
    /** The internal ID of a standard or custom sublist field. */
    fieldId: ${concatFields2(sublistFields[i].fields, sublistFields[i].sublist)};
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

`
}

fileTxt += 
`interface GetSelectOptionsOpts {
    /** The search string to filter the select options that are returned. */
    filter: string;
    /** The following operators are supported: contains, is, startswith. Default is contains. */
    operator: "contains" | "is" | "startswith";
}

interface HasSubrecordOptions {
    /** The internal ID of the field that may contain a subrecord. */
    fieldId: ${mainFieldsTxt};
}

interface GetFieldOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
}

interface SetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
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
    fieldId: ${mainFieldsTxt};
    /** The text to change the field value to. */
    text: string | string[];
    /** If set to true, the field change and slaving event is ignored. Default is false. */
    ignoreFieldChange?: boolean;
    /** Documented in N/currentRecord but not N/record. Set to true to synchronously set this value and its sourced values before returning. */
    fireSlavingSync?: boolean;
}

interface ClientSetValueOptions {
    /** The internal ID of a standard or custom body field. */
    fieldId: ${mainFieldsTxt};
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

export interface RecordCreateOptions { // This one gets exported
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

export interface RecordTransformOptions { // This one gets exported
    /** The record type of the existing record instance being transformed. */
    fromType: Type.VENDOR_BILL;
    /** The internal ID of the existing record instance being transformed. */
    fromId: number;
    /** The record type of the record returned when the transformation is complete. */
    toType: string | Type;
    /** If set to true, the new record is created in dynamic mode. If set to false, the new record is created in standard mode. */
    isDynamic?: boolean;
    /** Name-value pairs containing default values of fields in the new record. */
    defaultValues?: any;
}

interface RecordSaveFunction {
    (options?: SubmitConfig): number;
    promise(options?: SubmitConfig): Promise<number>;
}

// Exported for other modules to be able to consume this type
export interface ${recordType} extends Record {
    /** Returns the value of a sublist field. */
    getSublistValue(options: ${concatFields3('GetSublistValueOptions')}): FieldValue;
    //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
    /** Returns a field object from a sublist. */
    getSublistField(options: ${concatFields3('GetSublistValueOptions')}): Field;
    /** Returns the value of a sublist field in a text representation. */
    getSublistText(options: ${concatFields3('GetSublistValueOptions')}): string;
    /** Returns a value indicating whether the associated sublist field contains a subrecord. */
    hasSublistSubrecord(options: ${concatFields3('GetSublistValueOptions')}): boolean;
    /** Gets the subrecord associated with a sublist field. */
    getSublistSubrecord(options: ${concatFields3('GetSublistValueOptions')}): Record;
    /** Removes the subrecord for the associated sublist field. */
    removeSublistSubrecord(options: ${concatFields3('GetSublistValueOptions')}): Record;
    /** Returns the line number of the currently selected line. */
    getCurrentSublistIndex(options: ${concatFields3('GetSublistValueOptions')}): number;
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
`

console.dir(fileTxt);