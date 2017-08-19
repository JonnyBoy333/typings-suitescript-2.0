
import * as N_ui_serverWidget from '../ui/serverWidget';
import * as N_http from '../http';
import { UserEventType, UserEventTypes } from './_EventTypes';
import { DEPARTMENT as DEPARTMENT_REC } from './DEPARTMENT';
import { CASH_SALE as CASH_SALE_REC } from './CASH_SALE';
import { BUNDLE_INSTALLATION_SCRIPT as BUNDLE_INSTALLATION_SCRIPT_REC } from './BUNDLE_INSTALLATION_SCRIPT';
import { CUSTOMER_CATEGORY as CUSTOMER_CATEGORY_REC } from './CUSTOMER_CATEGORY';
import { FOLDER as FOLDER_REC } from './FOLDER';
import { CONTACT as CONTACT_REC } from './CONTACT';
import { EXPENSE_REPORT as EXPENSE_REPORT_REC } from './EXPENSE_REPORT';
import { EMAIL_TEMPLATE as EMAIL_TEMPLATE_REC } from './EMAIL_TEMPLATE';
import { GIFT_CERTIFICATE as GIFT_CERTIFICATE_REC } from './GIFT_CERTIFICATE';
import { EXPENSE_CATEGORY as EXPENSE_CATEGORY_REC } from './EXPENSE_CATEGORY';
import { INTER_COMPANY_TRANSFER_ORDER as INTER_COMPANY_TRANSFER_ORDER_REC } from './INTER_COMPANY_TRANSFER_ORDER';
import { INVENTORY_NUMBER as INVENTORY_NUMBER_REC } from './INVENTORY_NUMBER';
import { ASSEMBLY_UNBUILD as ASSEMBLY_UNBUILD_REC } from './ASSEMBLY_UNBUILD';
import { ACCOUNT as ACCOUNT_REC } from './ACCOUNT';
import { BILLING_ACCOUNT as BILLING_ACCOUNT_REC } from './BILLING_ACCOUNT';
import { BIN as BIN_REC } from './BIN';
import { ACCOUNTING_BOOK as ACCOUNTING_BOOK_REC } from './ACCOUNTING_BOOK';
import { CLIENT_SCRIPT as CLIENT_SCRIPT_REC } from './CLIENT_SCRIPT';
import { CURRENCY as CURRENCY_REC } from './CURRENCY';
import { DEPOSIT as DEPOSIT_REC } from './DEPOSIT';
import { CASH_REFUND as CASH_REFUND_REC } from './CASH_REFUND';
import { DEPOSIT_APPLICATION as DEPOSIT_APPLICATION_REC } from './DEPOSIT_APPLICATION';
import { LOT_NUMBERED_INVENTORY_ITEM as LOT_NUMBERED_INVENTORY_ITEM_REC } from './LOT_NUMBERED_INVENTORY_ITEM';
import { ITEM_GROUP as ITEM_GROUP_REC } from './ITEM_GROUP';
import { MAP_REDUCE_SCRIPT as MAP_REDUCE_SCRIPT_REC } from './MAP_REDUCE_SCRIPT';
import { MASSUPDATE_SCRIPT as MASSUPDATE_SCRIPT_REC } from './MASSUPDATE_SCRIPT';
import { OTHER_CHARGE_ITEM as OTHER_CHARGE_ITEM_REC } from './OTHER_CHARGE_ITEM';
import { ITEM_SUPPLY_PLAN as ITEM_SUPPLY_PLAN_REC } from './ITEM_SUPPLY_PLAN';
import { JOURNAL_ENTRY as JOURNAL_ENTRY_REC } from './JOURNAL_ENTRY';
import { MANUFACTURING_COST_TEMPLATE as MANUFACTURING_COST_TEMPLATE_REC } from './MANUFACTURING_COST_TEMPLATE';
import { OPPORTUNITY as OPPORTUNITY_REC } from './OPPORTUNITY';
import { NOTE as NOTE_REC } from './NOTE';
import { NON_INVENTORY_ITEM as NON_INVENTORY_ITEM_REC } from './NON_INVENTORY_ITEM';
import { PROJECT_TASK as PROJECT_TASK_REC } from './PROJECT_TASK';
import { MARKUP_ITEM as MARKUP_ITEM_REC } from './MARKUP_ITEM';
import { PAYMENT_ITEM as PAYMENT_ITEM_REC } from './PAYMENT_ITEM';
import { PRICE_LEVEL as PRICE_LEVEL_REC } from './PRICE_LEVEL';
import { MANUFACTURING_OPERATION_TASK as MANUFACTURING_OPERATION_TASK_REC } from './MANUFACTURING_OPERATION_TASK';
import { NEXUS as NEXUS_REC } from './NEXUS';
import { LEAD as LEAD_REC } from './LEAD';
import { SCRIPT_DEPLOYMENT as SCRIPT_DEPLOYMENT_REC } from './SCRIPT_DEPLOYMENT';
import { PROSPECT as PROSPECT_REC } from './PROSPECT';
import { PROJECT_EXPENSE_TYPE as PROJECT_EXPENSE_TYPE_REC } from './PROJECT_EXPENSE_TYPE';
import { PROJECT_TEMPLATE as PROJECT_TEMPLATE_REC } from './PROJECT_TEMPLATE';
import { ASSEMBLY_ITEM as ASSEMBLY_ITEM_REC } from './ASSEMBLY_ITEM';
import { ITEM_DEMAND_PLAN as ITEM_DEMAND_PLAN_REC } from './ITEM_DEMAND_PLAN';
import { CALENDAR_EVENT as CALENDAR_EVENT_REC } from './CALENDAR_EVENT';
import { DISCOUNT_ITEM as DISCOUNT_ITEM_REC } from './DISCOUNT_ITEM';
import { BIN_TRANSFER as BIN_TRANSFER_REC } from './BIN_TRANSFER';
import { CLASSIFICATION as CLASSIFICATION_REC } from './CLASSIFICATION';
import { AMORTIZATION_TEMPLATE as AMORTIZATION_TEMPLATE_REC } from './AMORTIZATION_TEMPLATE';
import { KIT_ITEM as KIT_ITEM_REC } from './KIT_ITEM';
import { RESTLET as RESTLET_REC } from './RESTLET';
import { CHECK as CHECK_REC } from './CHECK';
import { CREDIT_CARD_REFUND as CREDIT_CARD_REFUND_REC } from './CREDIT_CARD_REFUND';
import { BILLING_CLASS as BILLING_CLASS_REC } from './BILLING_CLASS';
import { COMPETITOR as COMPETITOR_REC } from './COMPETITOR';
import { CREDIT_MEMO as CREDIT_MEMO_REC } from './CREDIT_MEMO';
import { INTER_COMPANY_JOURNAL_ENTRY as INTER_COMPANY_JOURNAL_ENTRY_REC } from './INTER_COMPANY_JOURNAL_ENTRY';
import { CAMPAIGN_TEMPLATE as CAMPAIGN_TEMPLATE_REC } from './CAMPAIGN_TEMPLATE';
import { CUSTOMER_DEPOSIT as CUSTOMER_DEPOSIT_REC } from './CUSTOMER_DEPOSIT';
import { ACCOUNTING_PERIOD as ACCOUNTING_PERIOD_REC } from './ACCOUNTING_PERIOD';
import { AMORTIZATION_SCHEDULE as AMORTIZATION_SCHEDULE_REC } from './AMORTIZATION_SCHEDULE';
import { CUSTOMER_PAYMENT as CUSTOMER_PAYMENT_REC } from './CUSTOMER_PAYMENT';
import { BIN_WORKSHEET as BIN_WORKSHEET_REC } from './BIN_WORKSHEET';
import { BILLING_SCHEDULE as BILLING_SCHEDULE_REC } from './BILLING_SCHEDULE';
import { ASSEMBLY_BUILD as ASSEMBLY_BUILD_REC } from './ASSEMBLY_BUILD';
import { CHARGE as CHARGE_REC } from './CHARGE';
import { CUSTOMER_REFUND as CUSTOMER_REFUND_REC } from './CUSTOMER_REFUND';
import { CREDIT_CARD_CHARGE as CREDIT_CARD_CHARGE_REC } from './CREDIT_CARD_CHARGE';
import { CAMPAIGN as CAMPAIGN_REC } from './CAMPAIGN';
import { INVENTORY_ITEM as INVENTORY_ITEM_REC } from './INVENTORY_ITEM';
import { SALES_ORDER as SALES_ORDER_REC } from './SALES_ORDER';
import { SHIP_ITEM as SHIP_ITEM_REC } from './SHIP_ITEM';
import { SUBSIDIARY as SUBSIDIARY_REC } from './SUBSIDIARY';
import { SUPPORT_CASE as SUPPORT_CASE_REC } from './SUPPORT_CASE';
import { SALES_TAX_ITEM as SALES_TAX_ITEM_REC } from './SALES_TAX_ITEM';
import { STATISTICAL_JOURNAL_ENTRY as STATISTICAL_JOURNAL_ENTRY_REC } from './STATISTICAL_JOURNAL_ENTRY';
import { SUBTOTAL_ITEM as SUBTOTAL_ITEM_REC } from './SUBTOTAL_ITEM';
import { TASK as TASK_REC } from './TASK';
import { TAX_PERIOD as TAX_PERIOD_REC } from './TAX_PERIOD';
import { TAX_ACCT as TAX_ACCT_REC } from './TAX_ACCT';
import { TAX_GROUP as TAX_GROUP_REC } from './TAX_GROUP';
import { SUITELET as SUITELET_REC } from './SUITELET';
import { REV_REC_TEMPLATE as REV_REC_TEMPLATE_REC } from './REV_REC_TEMPLATE';
import { TIME_BILL as TIME_BILL_REC } from './TIME_BILL';
import { PAYCHECK as PAYCHECK_REC } from './PAYCHECK';
import { USEREVENT_SCRIPT as USEREVENT_SCRIPT_REC } from './USEREVENT_SCRIPT';
import { SOLUTION as SOLUTION_REC } from './SOLUTION';
import { UNITS_TYPE as UNITS_TYPE_REC } from './UNITS_TYPE';
import { MANUFACTURING_ROUTING as MANUFACTURING_ROUTING_REC } from './MANUFACTURING_ROUTING';
import { SERIALIZED_INVENTORY_ITEM as SERIALIZED_INVENTORY_ITEM_REC } from './SERIALIZED_INVENTORY_ITEM';
import { CUSTOM_TRANSACTION as CUSTOM_TRANSACTION_REC } from './CUSTOM_TRANSACTION';
import { SERVICE_ITEM as SERVICE_ITEM_REC } from './SERVICE_ITEM';
import { WEBSITE as WEBSITE_REC } from './WEBSITE';
import { REVENUE_COMMITMENT_REVERSAL as REVENUE_COMMITMENT_REVERSAL_REC } from './REVENUE_COMMITMENT_REVERSAL';
import { REV_REC_SCHEDULE as REV_REC_SCHEDULE_REC } from './REV_REC_SCHEDULE';
import { VENDOR_PAYMENT as VENDOR_PAYMENT_REC } from './VENDOR_PAYMENT';
import { VENDOR_CREDIT as VENDOR_CREDIT_REC } from './VENDOR_CREDIT';
import { VENDOR as VENDOR_REC } from './VENDOR';
import { CUSTOMER as CUSTOMER_REC } from './CUSTOMER';
import { TRANSFER_ORDER as TRANSFER_ORDER_REC } from './TRANSFER_ORDER';
import { PROMOTION_CODE as PROMOTION_CODE_REC } from './PROMOTION_CODE';
import { USAGE as USAGE_REC } from './USAGE';
import { WORKFLOW_ACTION_SCRIPT as WORKFLOW_ACTION_SCRIPT_REC } from './WORKFLOW_ACTION_SCRIPT';
import { INTERCOMP_ALLOCATION_SCHEDULE as INTERCOMP_ALLOCATION_SCHEDULE_REC } from './INTERCOMP_ALLOCATION_SCHEDULE';
import { VENDOR_RETURN_AUTHORIZATION as VENDOR_RETURN_AUTHORIZATION_REC } from './VENDOR_RETURN_AUTHORIZATION';
import { CAMPAIGN_RESPONSE as CAMPAIGN_RESPONSE_REC } from './CAMPAIGN_RESPONSE';
import { COMMERCE_CATEGORY as COMMERCE_CATEGORY_REC } from './COMMERCE_CATEGORY';
import { RESOURCE_ALLOCATION as RESOURCE_ALLOCATION_REC } from './RESOURCE_ALLOCATION';
import { OTHER_NAME_CATEGORY as OTHER_NAME_CATEGORY_REC } from './OTHER_NAME_CATEGORY';
import { CONTACT_CATEGORY as CONTACT_CATEGORY_REC } from './CONTACT_CATEGORY';
import { RETURN_AUTHORIZATION as RETURN_AUTHORIZATION_REC } from './RETURN_AUTHORIZATION';
import { COUPON_CODE as COUPON_CODE_REC } from './COUPON_CODE';
import { TERM as TERM_REC } from './TERM';
import { REVENUE_ARRANGEMENT as REVENUE_ARRANGEMENT_REC } from './REVENUE_ARRANGEMENT';
import { PURCHASE_REQUISITION as PURCHASE_REQUISITION_REC } from './PURCHASE_REQUISITION';
import { PAYROLL_ITEM as PAYROLL_ITEM_REC } from './PAYROLL_ITEM';
import { REALLOCATE_ITEM as REALLOCATE_ITEM_REC } from './REALLOCATE_ITEM';
import { PAYCHECK_JOURNAL as PAYCHECK_JOURNAL_REC } from './PAYCHECK_JOURNAL';
import { PHONE_CALL as PHONE_CALL_REC } from './PHONE_CALL';
import { PURCHASE_ORDER as PURCHASE_ORDER_REC } from './PURCHASE_ORDER';
import { PORTLET as PORTLET_REC } from './PORTLET';
import { REVENUE_COMMITMENT as REVENUE_COMMITMENT_REC } from './REVENUE_COMMITMENT';
import { SCHEDULED_SCRIPT as SCHEDULED_SCRIPT_REC } from './SCHEDULED_SCRIPT';
import { VENDOR_BILL as VENDOR_BILL_REC } from './VENDOR_BILL';
import { CUSTOMER_STATUS as CUSTOMER_STATUS_REC } from './CUSTOMER_STATUS';
import { CONTACT_ROLE as CONTACT_ROLE_REC } from './CONTACT_ROLE';
import { TOPIC as TOPIC_REC } from './TOPIC';
import { JOB as JOB_REC } from './JOB';
import { TAX_TYPE as TAX_TYPE_REC } from './TAX_TYPE';
import { ESTIMATE as ESTIMATE_REC } from './ESTIMATE';
import { DOWNLOAD_ITEM as DOWNLOAD_ITEM_REC } from './DOWNLOAD_ITEM';
import { EMPLOYEE as EMPLOYEE_REC } from './EMPLOYEE';
import { FAIR_VALUE_PRICE as FAIR_VALUE_PRICE_REC } from './FAIR_VALUE_PRICE';
import { ORDER_SCHEDULE as ORDER_SCHEDULE_REC } from './ORDER_SCHEDULE';
import { GIFT_CERTIFICATE_ITEM as GIFT_CERTIFICATE_ITEM_REC } from './GIFT_CERTIFICATE_ITEM';
import { GENERIC_RESOURCE as GENERIC_RESOURCE_REC } from './GENERIC_RESOURCE';
import { ITEM_RECEIPT as ITEM_RECEIPT_REC } from './ITEM_RECEIPT';
import { REVENUE_PLAN as REVENUE_PLAN_REC } from './REVENUE_PLAN';
import { GLOBAL_ACCOUNT_MAPPING as GLOBAL_ACCOUNT_MAPPING_REC } from './GLOBAL_ACCOUNT_MAPPING';
import { ITEM_ACCOUNT_MAPPING as ITEM_ACCOUNT_MAPPING_REC } from './ITEM_ACCOUNT_MAPPING';
import { INVENTORY_COST_REVALUATION as INVENTORY_COST_REVALUATION_REC } from './INVENTORY_COST_REVALUATION';
import { INVENTORY_COUNT as INVENTORY_COUNT_REC } from './INVENTORY_COUNT';
import { MESSAGE as MESSAGE_REC } from './MESSAGE';
import { ITEM_FULFILLMENT as ITEM_FULFILLMENT_REC } from './ITEM_FULFILLMENT';
import { DESCRIPTION_ITEM as DESCRIPTION_ITEM_REC } from './DESCRIPTION_ITEM';
import { LOCATION as LOCATION_REC } from './LOCATION';
import { OTHER_NAME as OTHER_NAME_REC } from './OTHER_NAME';
import { ISSUE as ISSUE_REC } from './ISSUE';
import { INVENTORY_ADJUSTMENT as INVENTORY_ADJUSTMENT_REC } from './INVENTORY_ADJUSTMENT';
import { ITEM_REVISION as ITEM_REVISION_REC } from './ITEM_REVISION';
import { INVENTORY_DETAIL as INVENTORY_DETAIL_REC } from './INVENTORY_DETAIL';
import { PARTNER as PARTNER_REC } from './PARTNER';
import { INVENTORY_TRANSFER as INVENTORY_TRANSFER_REC } from './INVENTORY_TRANSFER';
import { PURCHASE_CONTRACT as PURCHASE_CONTRACT_REC } from './PURCHASE_CONTRACT';
import { SERIALIZED_ASSEMBLY_ITEM as SERIALIZED_ASSEMBLY_ITEM_REC } from './SERIALIZED_ASSEMBLY_ITEM';
import { WORKPLACE as WORKPLACE_REC } from './WORKPLACE';
import { CUSTOMER_PAYMENT_AUTHORIZATION as CUSTOMER_PAYMENT_AUTHORIZATION_REC } from './CUSTOMER_PAYMENT_AUTHORIZATION';
import { WORK_ORDER_CLOSE as WORK_ORDER_CLOSE_REC } from './WORK_ORDER_CLOSE';
import { PARTNER_CATEGORY as PARTNER_CATEGORY_REC } from './PARTNER_CATEGORY';
import { PAYMENT_METHOD as PAYMENT_METHOD_REC } from './PAYMENT_METHOD';
import { TIME_ENTRY as TIME_ENTRY_REC } from './TIME_ENTRY';
import { WORK_ORDER_ISSUE as WORK_ORDER_ISSUE_REC } from './WORK_ORDER_ISSUE';
import { COST_CATEGORY as COST_CATEGORY_REC } from './COST_CATEGORY';
import { TIME_SHEET as TIME_SHEET_REC } from './TIME_SHEET';
import { BILLING_RATE_CARD as BILLING_RATE_CARD_REC } from './BILLING_RATE_CARD';
import { WORK_ORDER_COMPLETION as WORK_ORDER_COMPLETION_REC } from './WORK_ORDER_COMPLETION';
import { CUSTOMER_MESSAGE as CUSTOMER_MESSAGE_REC } from './CUSTOMER_MESSAGE';
import { SALES_ROLE as SALES_ROLE_REC } from './SALES_ROLE';
import { ALLOCATION_SCHEDULE as ALLOCATION_SCHEDULE_REC } from './ALLOCATION_SCHEDULE';
import { ACCOUNTING_CONTEXT as ACCOUNTING_CONTEXT_REC } from './ACCOUNTING_CONTEXT';
import { PRICING_GROUP as PRICING_GROUP_REC } from './PRICING_GROUP';
import { CONSOLIDATED_EXCHANGE_RATE as CONSOLIDATED_EXCHANGE_RATE_REC } from './CONSOLIDATED_EXCHANGE_RATE';
import { ENTITY_ACCOUNT_MAPPING as ENTITY_ACCOUNT_MAPPING_REC } from './ENTITY_ACCOUNT_MAPPING';
import { INVOICE as INVOICE_REC } from './INVOICE';
import { JOB_TYPE as JOB_TYPE_REC } from './JOB_TYPE';
import { NOTE_TYPE as NOTE_TYPE_REC } from './NOTE_TYPE';
import { BLANKET_PURCHASE_ORDER as BLANKET_PURCHASE_ORDER_REC } from './BLANKET_PURCHASE_ORDER';
import { LOT_NUMBERED_ASSEMBLY_ITEM as LOT_NUMBERED_ASSEMBLY_ITEM_REC } from './LOT_NUMBERED_ASSEMBLY_ITEM';
import { WORK_ORDER as WORK_ORDER_REC } from './WORK_ORDER';
import { VENDOR_CATEGORY as VENDOR_CATEGORY_REC } from './VENDOR_CATEGORY';

export namespace fieldChangedContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line: number;
        column: number;
    }
}
export namespace lineInitContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
    }
}
export namespace pageInitContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        mode: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        mode: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        mode: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        mode: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        mode: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        mode: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        mode: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        mode: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        mode: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        mode: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        mode: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        mode: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        mode: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        mode: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        mode: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        mode: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        mode: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        mode: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        mode: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        mode: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        mode: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        mode: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        mode: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        mode: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        mode: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        mode: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        mode: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        mode: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        mode: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        mode: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        mode: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        mode: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        mode: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        mode: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        mode: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        mode: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        mode: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        mode: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        mode: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        mode: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        mode: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        mode: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        mode: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        mode: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        mode: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        mode: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        mode: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        mode: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        mode: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        mode: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        mode: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        mode: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        mode: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        mode: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        mode: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        mode: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        mode: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        mode: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        mode: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        mode: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        mode: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        mode: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        mode: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        mode: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        mode: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        mode: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        mode: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        mode: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        mode: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        mode: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        mode: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        mode: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        mode: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        mode: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        mode: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        mode: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        mode: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        mode: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        mode: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        mode: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        mode: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        mode: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        mode: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        mode: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        mode: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        mode: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        mode: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        mode: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        mode: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        mode: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        mode: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        mode: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        mode: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        mode: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        mode: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        mode: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        mode: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        mode: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        mode: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        mode: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        mode: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        mode: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        mode: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        mode: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        mode: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        mode: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        mode: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        mode: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        mode: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        mode: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        mode: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        mode: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        mode: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        mode: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        mode: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        mode: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        mode: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        mode: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        mode: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        mode: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        mode: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        mode: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        mode: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        mode: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        mode: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        mode: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        mode: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        mode: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        mode: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        mode: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        mode: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        mode: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        mode: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        mode: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        mode: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        mode: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        mode: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        mode: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        mode: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        mode: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        mode: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        mode: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        mode: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        mode: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        mode: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        mode: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        mode: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        mode: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        mode: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        mode: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        mode: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        mode: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        mode: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        mode: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        mode: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        mode: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        mode: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        mode: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        mode: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        mode: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        mode: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        mode: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        mode: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        mode: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        mode: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        mode: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        mode: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        mode: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        mode: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        mode: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        mode: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        mode: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        mode: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        mode: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        mode: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        mode: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        mode: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        mode: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        mode: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        mode: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        mode: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        mode: string;
    }
}
export namespace postSourcingContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
        fieldId: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
        fieldId: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
        fieldId: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
        fieldId: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
        fieldId: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
        fieldId: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
        fieldId: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
        fieldId: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
        fieldId: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
        fieldId: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
        fieldId: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
        fieldId: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
    }
}
export namespace saveRecordContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
    }
    interface BIN {
        currentRecord: BIN_REC;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
    }
    interface TASK {
        currentRecord: TASK_REC;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
    }
    interface TERM {
        currentRecord: TERM_REC;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
    }
    interface JOB {
        currentRecord: JOB_REC;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
    }
}
export namespace sublistChangedContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
        /**
         * Commit, etc.
         */
        operation: string;
    }
}
export namespace validateDeleteContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
    }
}
export namespace validateFieldContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
        fieldId: string;
        line?: number;
        column?: number;
    }
}
export namespace validateInsertContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
    }
}
export namespace validateLineContext {
    interface DEPARTMENT {
        currentRecord: DEPARTMENT_REC;
        sublistId: string;
    }
    interface CASH_SALE {
        currentRecord: CASH_SALE_REC;
        sublistId: string;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        currentRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        sublistId: string;
    }
    interface CUSTOMER_CATEGORY {
        currentRecord: CUSTOMER_CATEGORY_REC;
        sublistId: string;
    }
    interface FOLDER {
        currentRecord: FOLDER_REC;
        sublistId: string;
    }
    interface CONTACT {
        currentRecord: CONTACT_REC;
        sublistId: string;
    }
    interface EXPENSE_REPORT {
        currentRecord: EXPENSE_REPORT_REC;
        sublistId: string;
    }
    interface EMAIL_TEMPLATE {
        currentRecord: EMAIL_TEMPLATE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE {
        currentRecord: GIFT_CERTIFICATE_REC;
        sublistId: string;
    }
    interface EXPENSE_CATEGORY {
        currentRecord: EXPENSE_CATEGORY_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        currentRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface INVENTORY_NUMBER {
        currentRecord: INVENTORY_NUMBER_REC;
        sublistId: string;
    }
    interface ASSEMBLY_UNBUILD {
        currentRecord: ASSEMBLY_UNBUILD_REC;
        sublistId: string;
    }
    interface ACCOUNT {
        currentRecord: ACCOUNT_REC;
        sublistId: string;
    }
    interface BILLING_ACCOUNT {
        currentRecord: BILLING_ACCOUNT_REC;
        sublistId: string;
    }
    interface BIN {
        currentRecord: BIN_REC;
        sublistId: string;
    }
    interface ACCOUNTING_BOOK {
        currentRecord: ACCOUNTING_BOOK_REC;
        sublistId: string;
    }
    interface CLIENT_SCRIPT {
        currentRecord: CLIENT_SCRIPT_REC;
        sublistId: string;
    }
    interface CURRENCY {
        currentRecord: CURRENCY_REC;
        sublistId: string;
    }
    interface DEPOSIT {
        currentRecord: DEPOSIT_REC;
        sublistId: string;
    }
    interface CASH_REFUND {
        currentRecord: CASH_REFUND_REC;
        sublistId: string;
    }
    interface DEPOSIT_APPLICATION {
        currentRecord: DEPOSIT_APPLICATION_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        currentRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_GROUP {
        currentRecord: ITEM_GROUP_REC;
        sublistId: string;
    }
    interface MAP_REDUCE_SCRIPT {
        currentRecord: MAP_REDUCE_SCRIPT_REC;
        sublistId: string;
    }
    interface MASSUPDATE_SCRIPT {
        currentRecord: MASSUPDATE_SCRIPT_REC;
        sublistId: string;
    }
    interface OTHER_CHARGE_ITEM {
        currentRecord: OTHER_CHARGE_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_SUPPLY_PLAN {
        currentRecord: ITEM_SUPPLY_PLAN_REC;
        sublistId: string;
    }
    interface JOURNAL_ENTRY {
        currentRecord: JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        currentRecord: MANUFACTURING_COST_TEMPLATE_REC;
        sublistId: string;
    }
    interface OPPORTUNITY {
        currentRecord: OPPORTUNITY_REC;
        sublistId: string;
    }
    interface NOTE {
        currentRecord: NOTE_REC;
        sublistId: string;
    }
    interface NON_INVENTORY_ITEM {
        currentRecord: NON_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface PROJECT_TASK {
        currentRecord: PROJECT_TASK_REC;
        sublistId: string;
    }
    interface MARKUP_ITEM {
        currentRecord: MARKUP_ITEM_REC;
        sublistId: string;
    }
    interface PAYMENT_ITEM {
        currentRecord: PAYMENT_ITEM_REC;
        sublistId: string;
    }
    interface PRICE_LEVEL {
        currentRecord: PRICE_LEVEL_REC;
        sublistId: string;
    }
    interface MANUFACTURING_OPERATION_TASK {
        currentRecord: MANUFACTURING_OPERATION_TASK_REC;
        sublistId: string;
    }
    interface NEXUS {
        currentRecord: NEXUS_REC;
        sublistId: string;
    }
    interface LEAD {
        currentRecord: LEAD_REC;
        sublistId: string;
    }
    interface SCRIPT_DEPLOYMENT {
        currentRecord: SCRIPT_DEPLOYMENT_REC;
        sublistId: string;
    }
    interface PROSPECT {
        currentRecord: PROSPECT_REC;
        sublistId: string;
    }
    interface PROJECT_EXPENSE_TYPE {
        currentRecord: PROJECT_EXPENSE_TYPE_REC;
        sublistId: string;
    }
    interface PROJECT_TEMPLATE {
        currentRecord: PROJECT_TEMPLATE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_ITEM {
        currentRecord: ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface ITEM_DEMAND_PLAN {
        currentRecord: ITEM_DEMAND_PLAN_REC;
        sublistId: string;
    }
    interface CALENDAR_EVENT {
        currentRecord: CALENDAR_EVENT_REC;
        sublistId: string;
    }
    interface DISCOUNT_ITEM {
        currentRecord: DISCOUNT_ITEM_REC;
        sublistId: string;
    }
    interface BIN_TRANSFER {
        currentRecord: BIN_TRANSFER_REC;
        sublistId: string;
    }
    interface CLASSIFICATION {
        currentRecord: CLASSIFICATION_REC;
        sublistId: string;
    }
    interface AMORTIZATION_TEMPLATE {
        currentRecord: AMORTIZATION_TEMPLATE_REC;
        sublistId: string;
    }
    interface KIT_ITEM {
        currentRecord: KIT_ITEM_REC;
        sublistId: string;
    }
    interface RESTLET {
        currentRecord: RESTLET_REC;
        sublistId: string;
    }
    interface CHECK {
        currentRecord: CHECK_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_REFUND {
        currentRecord: CREDIT_CARD_REFUND_REC;
        sublistId: string;
    }
    interface BILLING_CLASS {
        currentRecord: BILLING_CLASS_REC;
        sublistId: string;
    }
    interface COMPETITOR {
        currentRecord: COMPETITOR_REC;
        sublistId: string;
    }
    interface CREDIT_MEMO {
        currentRecord: CREDIT_MEMO_REC;
        sublistId: string;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        currentRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface CAMPAIGN_TEMPLATE {
        currentRecord: CAMPAIGN_TEMPLATE_REC;
        sublistId: string;
    }
    interface CUSTOMER_DEPOSIT {
        currentRecord: CUSTOMER_DEPOSIT_REC;
        sublistId: string;
    }
    interface ACCOUNTING_PERIOD {
        currentRecord: ACCOUNTING_PERIOD_REC;
        sublistId: string;
    }
    interface AMORTIZATION_SCHEDULE {
        currentRecord: AMORTIZATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT {
        currentRecord: CUSTOMER_PAYMENT_REC;
        sublistId: string;
    }
    interface BIN_WORKSHEET {
        currentRecord: BIN_WORKSHEET_REC;
        sublistId: string;
    }
    interface BILLING_SCHEDULE {
        currentRecord: BILLING_SCHEDULE_REC;
        sublistId: string;
    }
    interface ASSEMBLY_BUILD {
        currentRecord: ASSEMBLY_BUILD_REC;
        sublistId: string;
    }
    interface CHARGE {
        currentRecord: CHARGE_REC;
        sublistId: string;
    }
    interface CUSTOMER_REFUND {
        currentRecord: CUSTOMER_REFUND_REC;
        sublistId: string;
    }
    interface CREDIT_CARD_CHARGE {
        currentRecord: CREDIT_CARD_CHARGE_REC;
        sublistId: string;
    }
    interface CAMPAIGN {
        currentRecord: CAMPAIGN_REC;
        sublistId: string;
    }
    interface INVENTORY_ITEM {
        currentRecord: INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface SALES_ORDER {
        currentRecord: SALES_ORDER_REC;
        sublistId: string;
    }
    interface SHIP_ITEM {
        currentRecord: SHIP_ITEM_REC;
        sublistId: string;
    }
    interface SUBSIDIARY {
        currentRecord: SUBSIDIARY_REC;
        sublistId: string;
    }
    interface SUPPORT_CASE {
        currentRecord: SUPPORT_CASE_REC;
        sublistId: string;
    }
    interface SALES_TAX_ITEM {
        currentRecord: SALES_TAX_ITEM_REC;
        sublistId: string;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        currentRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        sublistId: string;
    }
    interface SUBTOTAL_ITEM {
        currentRecord: SUBTOTAL_ITEM_REC;
        sublistId: string;
    }
    interface TASK {
        currentRecord: TASK_REC;
        sublistId: string;
    }
    interface TAX_PERIOD {
        currentRecord: TAX_PERIOD_REC;
        sublistId: string;
    }
    interface TAX_ACCT {
        currentRecord: TAX_ACCT_REC;
        sublistId: string;
    }
    interface TAX_GROUP {
        currentRecord: TAX_GROUP_REC;
        sublistId: string;
    }
    interface SUITELET {
        currentRecord: SUITELET_REC;
        sublistId: string;
    }
    interface REV_REC_TEMPLATE {
        currentRecord: REV_REC_TEMPLATE_REC;
        sublistId: string;
    }
    interface TIME_BILL {
        currentRecord: TIME_BILL_REC;
        sublistId: string;
    }
    interface PAYCHECK {
        currentRecord: PAYCHECK_REC;
        sublistId: string;
    }
    interface USEREVENT_SCRIPT {
        currentRecord: USEREVENT_SCRIPT_REC;
        sublistId: string;
    }
    interface SOLUTION {
        currentRecord: SOLUTION_REC;
        sublistId: string;
    }
    interface UNITS_TYPE {
        currentRecord: UNITS_TYPE_REC;
        sublistId: string;
    }
    interface MANUFACTURING_ROUTING {
        currentRecord: MANUFACTURING_ROUTING_REC;
        sublistId: string;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        currentRecord: SERIALIZED_INVENTORY_ITEM_REC;
        sublistId: string;
    }
    interface CUSTOM_TRANSACTION {
        currentRecord: CUSTOM_TRANSACTION_REC;
        sublistId: string;
    }
    interface SERVICE_ITEM {
        currentRecord: SERVICE_ITEM_REC;
        sublistId: string;
    }
    interface WEBSITE {
        currentRecord: WEBSITE_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        currentRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        sublistId: string;
    }
    interface REV_REC_SCHEDULE {
        currentRecord: REV_REC_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_PAYMENT {
        currentRecord: VENDOR_PAYMENT_REC;
        sublistId: string;
    }
    interface VENDOR_CREDIT {
        currentRecord: VENDOR_CREDIT_REC;
        sublistId: string;
    }
    interface VENDOR {
        currentRecord: VENDOR_REC;
        sublistId: string;
    }
    interface CUSTOMER {
        currentRecord: CUSTOMER_REC;
        sublistId: string;
    }
    interface TRANSFER_ORDER {
        currentRecord: TRANSFER_ORDER_REC;
        sublistId: string;
    }
    interface PROMOTION_CODE {
        currentRecord: PROMOTION_CODE_REC;
        sublistId: string;
    }
    interface USAGE {
        currentRecord: USAGE_REC;
        sublistId: string;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        currentRecord: WORKFLOW_ACTION_SCRIPT_REC;
        sublistId: string;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        currentRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        currentRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface CAMPAIGN_RESPONSE {
        currentRecord: CAMPAIGN_RESPONSE_REC;
        sublistId: string;
    }
    interface COMMERCE_CATEGORY {
        currentRecord: COMMERCE_CATEGORY_REC;
        sublistId: string;
    }
    interface RESOURCE_ALLOCATION {
        currentRecord: RESOURCE_ALLOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME_CATEGORY {
        currentRecord: OTHER_NAME_CATEGORY_REC;
        sublistId: string;
    }
    interface CONTACT_CATEGORY {
        currentRecord: CONTACT_CATEGORY_REC;
        sublistId: string;
    }
    interface RETURN_AUTHORIZATION {
        currentRecord: RETURN_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface COUPON_CODE {
        currentRecord: COUPON_CODE_REC;
        sublistId: string;
    }
    interface TERM {
        currentRecord: TERM_REC;
        sublistId: string;
    }
    interface REVENUE_ARRANGEMENT {
        currentRecord: REVENUE_ARRANGEMENT_REC;
        sublistId: string;
    }
    interface PURCHASE_REQUISITION {
        currentRecord: PURCHASE_REQUISITION_REC;
        sublistId: string;
    }
    interface PAYROLL_ITEM {
        currentRecord: PAYROLL_ITEM_REC;
        sublistId: string;
    }
    interface REALLOCATE_ITEM {
        currentRecord: REALLOCATE_ITEM_REC;
        sublistId: string;
    }
    interface PAYCHECK_JOURNAL {
        currentRecord: PAYCHECK_JOURNAL_REC;
        sublistId: string;
    }
    interface PHONE_CALL {
        currentRecord: PHONE_CALL_REC;
        sublistId: string;
    }
    interface PURCHASE_ORDER {
        currentRecord: PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface PORTLET {
        currentRecord: PORTLET_REC;
        sublistId: string;
    }
    interface REVENUE_COMMITMENT {
        currentRecord: REVENUE_COMMITMENT_REC;
        sublistId: string;
    }
    interface SCHEDULED_SCRIPT {
        currentRecord: SCHEDULED_SCRIPT_REC;
        sublistId: string;
    }
    interface VENDOR_BILL {
        currentRecord: VENDOR_BILL_REC;
        sublistId: string;
    }
    interface CUSTOMER_STATUS {
        currentRecord: CUSTOMER_STATUS_REC;
        sublistId: string;
    }
    interface CONTACT_ROLE {
        currentRecord: CONTACT_ROLE_REC;
        sublistId: string;
    }
    interface TOPIC {
        currentRecord: TOPIC_REC;
        sublistId: string;
    }
    interface JOB {
        currentRecord: JOB_REC;
        sublistId: string;
    }
    interface TAX_TYPE {
        currentRecord: TAX_TYPE_REC;
        sublistId: string;
    }
    interface ESTIMATE {
        currentRecord: ESTIMATE_REC;
        sublistId: string;
    }
    interface DOWNLOAD_ITEM {
        currentRecord: DOWNLOAD_ITEM_REC;
        sublistId: string;
    }
    interface EMPLOYEE {
        currentRecord: EMPLOYEE_REC;
        sublistId: string;
    }
    interface FAIR_VALUE_PRICE {
        currentRecord: FAIR_VALUE_PRICE_REC;
        sublistId: string;
    }
    interface ORDER_SCHEDULE {
        currentRecord: ORDER_SCHEDULE_REC;
        sublistId: string;
    }
    interface GIFT_CERTIFICATE_ITEM {
        currentRecord: GIFT_CERTIFICATE_ITEM_REC;
        sublistId: string;
    }
    interface GENERIC_RESOURCE {
        currentRecord: GENERIC_RESOURCE_REC;
        sublistId: string;
    }
    interface ITEM_RECEIPT {
        currentRecord: ITEM_RECEIPT_REC;
        sublistId: string;
    }
    interface REVENUE_PLAN {
        currentRecord: REVENUE_PLAN_REC;
        sublistId: string;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        currentRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface ITEM_ACCOUNT_MAPPING {
        currentRecord: ITEM_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVENTORY_COST_REVALUATION {
        currentRecord: INVENTORY_COST_REVALUATION_REC;
        sublistId: string;
    }
    interface INVENTORY_COUNT {
        currentRecord: INVENTORY_COUNT_REC;
        sublistId: string;
    }
    interface MESSAGE {
        currentRecord: MESSAGE_REC;
        sublistId: string;
    }
    interface ITEM_FULFILLMENT {
        currentRecord: ITEM_FULFILLMENT_REC;
        sublistId: string;
    }
    interface DESCRIPTION_ITEM {
        currentRecord: DESCRIPTION_ITEM_REC;
        sublistId: string;
    }
    interface LOCATION {
        currentRecord: LOCATION_REC;
        sublistId: string;
    }
    interface OTHER_NAME {
        currentRecord: OTHER_NAME_REC;
        sublistId: string;
    }
    interface ISSUE {
        currentRecord: ISSUE_REC;
        sublistId: string;
    }
    interface INVENTORY_ADJUSTMENT {
        currentRecord: INVENTORY_ADJUSTMENT_REC;
        sublistId: string;
    }
    interface ITEM_REVISION {
        currentRecord: ITEM_REVISION_REC;
        sublistId: string;
    }
    interface INVENTORY_DETAIL {
        currentRecord: INVENTORY_DETAIL_REC;
        sublistId: string;
    }
    interface PARTNER {
        currentRecord: PARTNER_REC;
        sublistId: string;
    }
    interface INVENTORY_TRANSFER {
        currentRecord: INVENTORY_TRANSFER_REC;
        sublistId: string;
    }
    interface PURCHASE_CONTRACT {
        currentRecord: PURCHASE_CONTRACT_REC;
        sublistId: string;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        currentRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORKPLACE {
        currentRecord: WORKPLACE_REC;
        sublistId: string;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        currentRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        sublistId: string;
    }
    interface WORK_ORDER_CLOSE {
        currentRecord: WORK_ORDER_CLOSE_REC;
        sublistId: string;
    }
    interface PARTNER_CATEGORY {
        currentRecord: PARTNER_CATEGORY_REC;
        sublistId: string;
    }
    interface PAYMENT_METHOD {
        currentRecord: PAYMENT_METHOD_REC;
        sublistId: string;
    }
    interface TIME_ENTRY {
        currentRecord: TIME_ENTRY_REC;
        sublistId: string;
    }
    interface WORK_ORDER_ISSUE {
        currentRecord: WORK_ORDER_ISSUE_REC;
        sublistId: string;
    }
    interface COST_CATEGORY {
        currentRecord: COST_CATEGORY_REC;
        sublistId: string;
    }
    interface TIME_SHEET {
        currentRecord: TIME_SHEET_REC;
        sublistId: string;
    }
    interface BILLING_RATE_CARD {
        currentRecord: BILLING_RATE_CARD_REC;
        sublistId: string;
    }
    interface WORK_ORDER_COMPLETION {
        currentRecord: WORK_ORDER_COMPLETION_REC;
        sublistId: string;
    }
    interface CUSTOMER_MESSAGE {
        currentRecord: CUSTOMER_MESSAGE_REC;
        sublistId: string;
    }
    interface SALES_ROLE {
        currentRecord: SALES_ROLE_REC;
        sublistId: string;
    }
    interface ALLOCATION_SCHEDULE {
        currentRecord: ALLOCATION_SCHEDULE_REC;
        sublistId: string;
    }
    interface ACCOUNTING_CONTEXT {
        currentRecord: ACCOUNTING_CONTEXT_REC;
        sublistId: string;
    }
    interface PRICING_GROUP {
        currentRecord: PRICING_GROUP_REC;
        sublistId: string;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        currentRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        sublistId: string;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        currentRecord: ENTITY_ACCOUNT_MAPPING_REC;
        sublistId: string;
    }
    interface INVOICE {
        currentRecord: INVOICE_REC;
        sublistId: string;
    }
    interface JOB_TYPE {
        currentRecord: JOB_TYPE_REC;
        sublistId: string;
    }
    interface NOTE_TYPE {
        currentRecord: NOTE_TYPE_REC;
        sublistId: string;
    }
    interface BLANKET_PURCHASE_ORDER {
        currentRecord: BLANKET_PURCHASE_ORDER_REC;
        sublistId: string;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        currentRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        sublistId: string;
    }
    interface WORK_ORDER {
        currentRecord: WORK_ORDER_REC;
        sublistId: string;
    }
    interface VENDOR_CATEGORY {
        currentRecord: VENDOR_CATEGORY_REC;
        sublistId: string;
    }
}
export namespace beforeLoadContext {
    interface DEPARTMENT {
        newRecord: DEPARTMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CASH_SALE {
        newRecord: CASH_SALE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        newRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_CATEGORY {
        newRecord: CUSTOMER_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface FOLDER {
        newRecord: FOLDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CONTACT {
        newRecord: CONTACT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface EXPENSE_REPORT {
        newRecord: EXPENSE_REPORT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface EMAIL_TEMPLATE {
        newRecord: EMAIL_TEMPLATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface GIFT_CERTIFICATE {
        newRecord: GIFT_CERTIFICATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface EXPENSE_CATEGORY {
        newRecord: EXPENSE_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        newRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_NUMBER {
        newRecord: INVENTORY_NUMBER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ASSEMBLY_UNBUILD {
        newRecord: ASSEMBLY_UNBUILD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ACCOUNT {
        newRecord: ACCOUNT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BILLING_ACCOUNT {
        newRecord: BILLING_ACCOUNT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BIN {
        newRecord: BIN_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ACCOUNTING_BOOK {
        newRecord: ACCOUNTING_BOOK_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CLIENT_SCRIPT {
        newRecord: CLIENT_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CURRENCY {
        newRecord: CURRENCY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface DEPOSIT {
        newRecord: DEPOSIT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CASH_REFUND {
        newRecord: CASH_REFUND_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface DEPOSIT_APPLICATION {
        newRecord: DEPOSIT_APPLICATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        newRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_GROUP {
        newRecord: ITEM_GROUP_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MAP_REDUCE_SCRIPT {
        newRecord: MAP_REDUCE_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MASSUPDATE_SCRIPT {
        newRecord: MASSUPDATE_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface OTHER_CHARGE_ITEM {
        newRecord: OTHER_CHARGE_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_SUPPLY_PLAN {
        newRecord: ITEM_SUPPLY_PLAN_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface JOURNAL_ENTRY {
        newRecord: JOURNAL_ENTRY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        newRecord: MANUFACTURING_COST_TEMPLATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface OPPORTUNITY {
        newRecord: OPPORTUNITY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface NOTE {
        newRecord: NOTE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface NON_INVENTORY_ITEM {
        newRecord: NON_INVENTORY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PROJECT_TASK {
        newRecord: PROJECT_TASK_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MARKUP_ITEM {
        newRecord: MARKUP_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PAYMENT_ITEM {
        newRecord: PAYMENT_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PRICE_LEVEL {
        newRecord: PRICE_LEVEL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MANUFACTURING_OPERATION_TASK {
        newRecord: MANUFACTURING_OPERATION_TASK_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface NEXUS {
        newRecord: NEXUS_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface LEAD {
        newRecord: LEAD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SCRIPT_DEPLOYMENT {
        newRecord: SCRIPT_DEPLOYMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PROSPECT {
        newRecord: PROSPECT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PROJECT_EXPENSE_TYPE {
        newRecord: PROJECT_EXPENSE_TYPE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PROJECT_TEMPLATE {
        newRecord: PROJECT_TEMPLATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ASSEMBLY_ITEM {
        newRecord: ASSEMBLY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_DEMAND_PLAN {
        newRecord: ITEM_DEMAND_PLAN_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CALENDAR_EVENT {
        newRecord: CALENDAR_EVENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface DISCOUNT_ITEM {
        newRecord: DISCOUNT_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BIN_TRANSFER {
        newRecord: BIN_TRANSFER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CLASSIFICATION {
        newRecord: CLASSIFICATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface AMORTIZATION_TEMPLATE {
        newRecord: AMORTIZATION_TEMPLATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface KIT_ITEM {
        newRecord: KIT_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface RESTLET {
        newRecord: RESTLET_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CHECK {
        newRecord: CHECK_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CREDIT_CARD_REFUND {
        newRecord: CREDIT_CARD_REFUND_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BILLING_CLASS {
        newRecord: BILLING_CLASS_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface COMPETITOR {
        newRecord: COMPETITOR_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CREDIT_MEMO {
        newRecord: CREDIT_MEMO_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        newRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CAMPAIGN_TEMPLATE {
        newRecord: CAMPAIGN_TEMPLATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_DEPOSIT {
        newRecord: CUSTOMER_DEPOSIT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ACCOUNTING_PERIOD {
        newRecord: ACCOUNTING_PERIOD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface AMORTIZATION_SCHEDULE {
        newRecord: AMORTIZATION_SCHEDULE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_PAYMENT {
        newRecord: CUSTOMER_PAYMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BIN_WORKSHEET {
        newRecord: BIN_WORKSHEET_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BILLING_SCHEDULE {
        newRecord: BILLING_SCHEDULE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ASSEMBLY_BUILD {
        newRecord: ASSEMBLY_BUILD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CHARGE {
        newRecord: CHARGE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_REFUND {
        newRecord: CUSTOMER_REFUND_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CREDIT_CARD_CHARGE {
        newRecord: CREDIT_CARD_CHARGE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CAMPAIGN {
        newRecord: CAMPAIGN_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_ITEM {
        newRecord: INVENTORY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SALES_ORDER {
        newRecord: SALES_ORDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SHIP_ITEM {
        newRecord: SHIP_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SUBSIDIARY {
        newRecord: SUBSIDIARY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SUPPORT_CASE {
        newRecord: SUPPORT_CASE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SALES_TAX_ITEM {
        newRecord: SALES_TAX_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        newRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SUBTOTAL_ITEM {
        newRecord: SUBTOTAL_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TASK {
        newRecord: TASK_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TAX_PERIOD {
        newRecord: TAX_PERIOD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TAX_ACCT {
        newRecord: TAX_ACCT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TAX_GROUP {
        newRecord: TAX_GROUP_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SUITELET {
        newRecord: SUITELET_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REV_REC_TEMPLATE {
        newRecord: REV_REC_TEMPLATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TIME_BILL {
        newRecord: TIME_BILL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PAYCHECK {
        newRecord: PAYCHECK_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface USEREVENT_SCRIPT {
        newRecord: USEREVENT_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SOLUTION {
        newRecord: SOLUTION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface UNITS_TYPE {
        newRecord: UNITS_TYPE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MANUFACTURING_ROUTING {
        newRecord: MANUFACTURING_ROUTING_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        newRecord: SERIALIZED_INVENTORY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOM_TRANSACTION {
        newRecord: CUSTOM_TRANSACTION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SERVICE_ITEM {
        newRecord: SERVICE_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WEBSITE {
        newRecord: WEBSITE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        newRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REV_REC_SCHEDULE {
        newRecord: REV_REC_SCHEDULE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface VENDOR_PAYMENT {
        newRecord: VENDOR_PAYMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface VENDOR_CREDIT {
        newRecord: VENDOR_CREDIT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface VENDOR {
        newRecord: VENDOR_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER {
        newRecord: CUSTOMER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TRANSFER_ORDER {
        newRecord: TRANSFER_ORDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PROMOTION_CODE {
        newRecord: PROMOTION_CODE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface USAGE {
        newRecord: USAGE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        newRecord: WORKFLOW_ACTION_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        newRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        newRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CAMPAIGN_RESPONSE {
        newRecord: CAMPAIGN_RESPONSE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface COMMERCE_CATEGORY {
        newRecord: COMMERCE_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface RESOURCE_ALLOCATION {
        newRecord: RESOURCE_ALLOCATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface OTHER_NAME_CATEGORY {
        newRecord: OTHER_NAME_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CONTACT_CATEGORY {
        newRecord: CONTACT_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface RETURN_AUTHORIZATION {
        newRecord: RETURN_AUTHORIZATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface COUPON_CODE {
        newRecord: COUPON_CODE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TERM {
        newRecord: TERM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REVENUE_ARRANGEMENT {
        newRecord: REVENUE_ARRANGEMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PURCHASE_REQUISITION {
        newRecord: PURCHASE_REQUISITION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PAYROLL_ITEM {
        newRecord: PAYROLL_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REALLOCATE_ITEM {
        newRecord: REALLOCATE_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PAYCHECK_JOURNAL {
        newRecord: PAYCHECK_JOURNAL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PHONE_CALL {
        newRecord: PHONE_CALL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PURCHASE_ORDER {
        newRecord: PURCHASE_ORDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PORTLET {
        newRecord: PORTLET_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REVENUE_COMMITMENT {
        newRecord: REVENUE_COMMITMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SCHEDULED_SCRIPT {
        newRecord: SCHEDULED_SCRIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface VENDOR_BILL {
        newRecord: VENDOR_BILL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_STATUS {
        newRecord: CUSTOMER_STATUS_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CONTACT_ROLE {
        newRecord: CONTACT_ROLE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TOPIC {
        newRecord: TOPIC_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface JOB {
        newRecord: JOB_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TAX_TYPE {
        newRecord: TAX_TYPE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ESTIMATE {
        newRecord: ESTIMATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface DOWNLOAD_ITEM {
        newRecord: DOWNLOAD_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface EMPLOYEE {
        newRecord: EMPLOYEE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface FAIR_VALUE_PRICE {
        newRecord: FAIR_VALUE_PRICE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ORDER_SCHEDULE {
        newRecord: ORDER_SCHEDULE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface GIFT_CERTIFICATE_ITEM {
        newRecord: GIFT_CERTIFICATE_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface GENERIC_RESOURCE {
        newRecord: GENERIC_RESOURCE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_RECEIPT {
        newRecord: ITEM_RECEIPT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface REVENUE_PLAN {
        newRecord: REVENUE_PLAN_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        newRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_ACCOUNT_MAPPING {
        newRecord: ITEM_ACCOUNT_MAPPING_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_COST_REVALUATION {
        newRecord: INVENTORY_COST_REVALUATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_COUNT {
        newRecord: INVENTORY_COUNT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface MESSAGE {
        newRecord: MESSAGE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_FULFILLMENT {
        newRecord: ITEM_FULFILLMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface DESCRIPTION_ITEM {
        newRecord: DESCRIPTION_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface LOCATION {
        newRecord: LOCATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface OTHER_NAME {
        newRecord: OTHER_NAME_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ISSUE {
        newRecord: ISSUE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_ADJUSTMENT {
        newRecord: INVENTORY_ADJUSTMENT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ITEM_REVISION {
        newRecord: ITEM_REVISION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_DETAIL {
        newRecord: INVENTORY_DETAIL_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PARTNER {
        newRecord: PARTNER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVENTORY_TRANSFER {
        newRecord: INVENTORY_TRANSFER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PURCHASE_CONTRACT {
        newRecord: PURCHASE_CONTRACT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        newRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WORKPLACE {
        newRecord: WORKPLACE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        newRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WORK_ORDER_CLOSE {
        newRecord: WORK_ORDER_CLOSE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PARTNER_CATEGORY {
        newRecord: PARTNER_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PAYMENT_METHOD {
        newRecord: PAYMENT_METHOD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TIME_ENTRY {
        newRecord: TIME_ENTRY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WORK_ORDER_ISSUE {
        newRecord: WORK_ORDER_ISSUE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface COST_CATEGORY {
        newRecord: COST_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface TIME_SHEET {
        newRecord: TIME_SHEET_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BILLING_RATE_CARD {
        newRecord: BILLING_RATE_CARD_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WORK_ORDER_COMPLETION {
        newRecord: WORK_ORDER_COMPLETION_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CUSTOMER_MESSAGE {
        newRecord: CUSTOMER_MESSAGE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface SALES_ROLE {
        newRecord: SALES_ROLE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ALLOCATION_SCHEDULE {
        newRecord: ALLOCATION_SCHEDULE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ACCOUNTING_CONTEXT {
        newRecord: ACCOUNTING_CONTEXT_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface PRICING_GROUP {
        newRecord: PRICING_GROUP_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        newRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        newRecord: ENTITY_ACCOUNT_MAPPING_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface INVOICE {
        newRecord: INVOICE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface JOB_TYPE {
        newRecord: JOB_TYPE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface NOTE_TYPE {
        newRecord: NOTE_TYPE_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface BLANKET_PURCHASE_ORDER {
        newRecord: BLANKET_PURCHASE_ORDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        newRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface WORK_ORDER {
        newRecord: WORK_ORDER_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
    interface VENDOR_CATEGORY {
        newRecord: VENDOR_CATEGORY_REC;
        form: N_ui_serverWidget.Form;
        type: UserEventType;
        UserEventType: UserEventTypes;
        request: N_http.ServerRequest;
    }
}
export namespace beforeSubmitContext {
    interface DEPARTMENT {
        newRecord: DEPARTMENT_REC;
        oldRecord: DEPARTMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CASH_SALE {
        newRecord: CASH_SALE_REC;
        oldRecord: CASH_SALE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        newRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        oldRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_CATEGORY {
        newRecord: CUSTOMER_CATEGORY_REC;
        oldRecord: CUSTOMER_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface FOLDER {
        newRecord: FOLDER_REC;
        oldRecord: FOLDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONTACT {
        newRecord: CONTACT_REC;
        oldRecord: CONTACT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EXPENSE_REPORT {
        newRecord: EXPENSE_REPORT_REC;
        oldRecord: EXPENSE_REPORT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EMAIL_TEMPLATE {
        newRecord: EMAIL_TEMPLATE_REC;
        oldRecord: EMAIL_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GIFT_CERTIFICATE {
        newRecord: GIFT_CERTIFICATE_REC;
        oldRecord: GIFT_CERTIFICATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EXPENSE_CATEGORY {
        newRecord: EXPENSE_CATEGORY_REC;
        oldRecord: EXPENSE_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        newRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        oldRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_NUMBER {
        newRecord: INVENTORY_NUMBER_REC;
        oldRecord: INVENTORY_NUMBER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ASSEMBLY_UNBUILD {
        newRecord: ASSEMBLY_UNBUILD_REC;
        oldRecord: ASSEMBLY_UNBUILD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNT {
        newRecord: ACCOUNT_REC;
        oldRecord: ACCOUNT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_ACCOUNT {
        newRecord: BILLING_ACCOUNT_REC;
        oldRecord: BILLING_ACCOUNT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BIN {
        newRecord: BIN_REC;
        oldRecord: BIN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNTING_BOOK {
        newRecord: ACCOUNTING_BOOK_REC;
        oldRecord: ACCOUNTING_BOOK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CLIENT_SCRIPT {
        newRecord: CLIENT_SCRIPT_REC;
        oldRecord: CLIENT_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CURRENCY {
        newRecord: CURRENCY_REC;
        oldRecord: CURRENCY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DEPOSIT {
        newRecord: DEPOSIT_REC;
        oldRecord: DEPOSIT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CASH_REFUND {
        newRecord: CASH_REFUND_REC;
        oldRecord: CASH_REFUND_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DEPOSIT_APPLICATION {
        newRecord: DEPOSIT_APPLICATION_REC;
        oldRecord: DEPOSIT_APPLICATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        newRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        oldRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_GROUP {
        newRecord: ITEM_GROUP_REC;
        oldRecord: ITEM_GROUP_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MAP_REDUCE_SCRIPT {
        newRecord: MAP_REDUCE_SCRIPT_REC;
        oldRecord: MAP_REDUCE_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MASSUPDATE_SCRIPT {
        newRecord: MASSUPDATE_SCRIPT_REC;
        oldRecord: MASSUPDATE_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OTHER_CHARGE_ITEM {
        newRecord: OTHER_CHARGE_ITEM_REC;
        oldRecord: OTHER_CHARGE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_SUPPLY_PLAN {
        newRecord: ITEM_SUPPLY_PLAN_REC;
        oldRecord: ITEM_SUPPLY_PLAN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface JOURNAL_ENTRY {
        newRecord: JOURNAL_ENTRY_REC;
        oldRecord: JOURNAL_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        newRecord: MANUFACTURING_COST_TEMPLATE_REC;
        oldRecord: MANUFACTURING_COST_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OPPORTUNITY {
        newRecord: OPPORTUNITY_REC;
        oldRecord: OPPORTUNITY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NOTE {
        newRecord: NOTE_REC;
        oldRecord: NOTE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NON_INVENTORY_ITEM {
        newRecord: NON_INVENTORY_ITEM_REC;
        oldRecord: NON_INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROJECT_TASK {
        newRecord: PROJECT_TASK_REC;
        oldRecord: PROJECT_TASK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MARKUP_ITEM {
        newRecord: MARKUP_ITEM_REC;
        oldRecord: MARKUP_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYMENT_ITEM {
        newRecord: PAYMENT_ITEM_REC;
        oldRecord: PAYMENT_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PRICE_LEVEL {
        newRecord: PRICE_LEVEL_REC;
        oldRecord: PRICE_LEVEL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MANUFACTURING_OPERATION_TASK {
        newRecord: MANUFACTURING_OPERATION_TASK_REC;
        oldRecord: MANUFACTURING_OPERATION_TASK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NEXUS {
        newRecord: NEXUS_REC;
        oldRecord: NEXUS_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LEAD {
        newRecord: LEAD_REC;
        oldRecord: LEAD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SCRIPT_DEPLOYMENT {
        newRecord: SCRIPT_DEPLOYMENT_REC;
        oldRecord: SCRIPT_DEPLOYMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROSPECT {
        newRecord: PROSPECT_REC;
        oldRecord: PROSPECT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROJECT_EXPENSE_TYPE {
        newRecord: PROJECT_EXPENSE_TYPE_REC;
        oldRecord: PROJECT_EXPENSE_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROJECT_TEMPLATE {
        newRecord: PROJECT_TEMPLATE_REC;
        oldRecord: PROJECT_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ASSEMBLY_ITEM {
        newRecord: ASSEMBLY_ITEM_REC;
        oldRecord: ASSEMBLY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_DEMAND_PLAN {
        newRecord: ITEM_DEMAND_PLAN_REC;
        oldRecord: ITEM_DEMAND_PLAN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CALENDAR_EVENT {
        newRecord: CALENDAR_EVENT_REC;
        oldRecord: CALENDAR_EVENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DISCOUNT_ITEM {
        newRecord: DISCOUNT_ITEM_REC;
        oldRecord: DISCOUNT_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BIN_TRANSFER {
        newRecord: BIN_TRANSFER_REC;
        oldRecord: BIN_TRANSFER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CLASSIFICATION {
        newRecord: CLASSIFICATION_REC;
        oldRecord: CLASSIFICATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface AMORTIZATION_TEMPLATE {
        newRecord: AMORTIZATION_TEMPLATE_REC;
        oldRecord: AMORTIZATION_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface KIT_ITEM {
        newRecord: KIT_ITEM_REC;
        oldRecord: KIT_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface RESTLET {
        newRecord: RESTLET_REC;
        oldRecord: RESTLET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CHECK {
        newRecord: CHECK_REC;
        oldRecord: CHECK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CREDIT_CARD_REFUND {
        newRecord: CREDIT_CARD_REFUND_REC;
        oldRecord: CREDIT_CARD_REFUND_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_CLASS {
        newRecord: BILLING_CLASS_REC;
        oldRecord: BILLING_CLASS_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COMPETITOR {
        newRecord: COMPETITOR_REC;
        oldRecord: COMPETITOR_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CREDIT_MEMO {
        newRecord: CREDIT_MEMO_REC;
        oldRecord: CREDIT_MEMO_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        newRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        oldRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CAMPAIGN_TEMPLATE {
        newRecord: CAMPAIGN_TEMPLATE_REC;
        oldRecord: CAMPAIGN_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_DEPOSIT {
        newRecord: CUSTOMER_DEPOSIT_REC;
        oldRecord: CUSTOMER_DEPOSIT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNTING_PERIOD {
        newRecord: ACCOUNTING_PERIOD_REC;
        oldRecord: ACCOUNTING_PERIOD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface AMORTIZATION_SCHEDULE {
        newRecord: AMORTIZATION_SCHEDULE_REC;
        oldRecord: AMORTIZATION_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_PAYMENT {
        newRecord: CUSTOMER_PAYMENT_REC;
        oldRecord: CUSTOMER_PAYMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BIN_WORKSHEET {
        newRecord: BIN_WORKSHEET_REC;
        oldRecord: BIN_WORKSHEET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_SCHEDULE {
        newRecord: BILLING_SCHEDULE_REC;
        oldRecord: BILLING_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ASSEMBLY_BUILD {
        newRecord: ASSEMBLY_BUILD_REC;
        oldRecord: ASSEMBLY_BUILD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CHARGE {
        newRecord: CHARGE_REC;
        oldRecord: CHARGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_REFUND {
        newRecord: CUSTOMER_REFUND_REC;
        oldRecord: CUSTOMER_REFUND_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CREDIT_CARD_CHARGE {
        newRecord: CREDIT_CARD_CHARGE_REC;
        oldRecord: CREDIT_CARD_CHARGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CAMPAIGN {
        newRecord: CAMPAIGN_REC;
        oldRecord: CAMPAIGN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_ITEM {
        newRecord: INVENTORY_ITEM_REC;
        oldRecord: INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SALES_ORDER {
        newRecord: SALES_ORDER_REC;
        oldRecord: SALES_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SHIP_ITEM {
        newRecord: SHIP_ITEM_REC;
        oldRecord: SHIP_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUBSIDIARY {
        newRecord: SUBSIDIARY_REC;
        oldRecord: SUBSIDIARY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUPPORT_CASE {
        newRecord: SUPPORT_CASE_REC;
        oldRecord: SUPPORT_CASE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SALES_TAX_ITEM {
        newRecord: SALES_TAX_ITEM_REC;
        oldRecord: SALES_TAX_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        newRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        oldRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUBTOTAL_ITEM {
        newRecord: SUBTOTAL_ITEM_REC;
        oldRecord: SUBTOTAL_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TASK {
        newRecord: TASK_REC;
        oldRecord: TASK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_PERIOD {
        newRecord: TAX_PERIOD_REC;
        oldRecord: TAX_PERIOD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_ACCT {
        newRecord: TAX_ACCT_REC;
        oldRecord: TAX_ACCT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_GROUP {
        newRecord: TAX_GROUP_REC;
        oldRecord: TAX_GROUP_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUITELET {
        newRecord: SUITELET_REC;
        oldRecord: SUITELET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REV_REC_TEMPLATE {
        newRecord: REV_REC_TEMPLATE_REC;
        oldRecord: REV_REC_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TIME_BILL {
        newRecord: TIME_BILL_REC;
        oldRecord: TIME_BILL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYCHECK {
        newRecord: PAYCHECK_REC;
        oldRecord: PAYCHECK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface USEREVENT_SCRIPT {
        newRecord: USEREVENT_SCRIPT_REC;
        oldRecord: USEREVENT_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SOLUTION {
        newRecord: SOLUTION_REC;
        oldRecord: SOLUTION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface UNITS_TYPE {
        newRecord: UNITS_TYPE_REC;
        oldRecord: UNITS_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MANUFACTURING_ROUTING {
        newRecord: MANUFACTURING_ROUTING_REC;
        oldRecord: MANUFACTURING_ROUTING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        newRecord: SERIALIZED_INVENTORY_ITEM_REC;
        oldRecord: SERIALIZED_INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOM_TRANSACTION {
        newRecord: CUSTOM_TRANSACTION_REC;
        oldRecord: CUSTOM_TRANSACTION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SERVICE_ITEM {
        newRecord: SERVICE_ITEM_REC;
        oldRecord: SERVICE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WEBSITE {
        newRecord: WEBSITE_REC;
        oldRecord: WEBSITE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        newRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        oldRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REV_REC_SCHEDULE {
        newRecord: REV_REC_SCHEDULE_REC;
        oldRecord: REV_REC_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_PAYMENT {
        newRecord: VENDOR_PAYMENT_REC;
        oldRecord: VENDOR_PAYMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_CREDIT {
        newRecord: VENDOR_CREDIT_REC;
        oldRecord: VENDOR_CREDIT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR {
        newRecord: VENDOR_REC;
        oldRecord: VENDOR_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER {
        newRecord: CUSTOMER_REC;
        oldRecord: CUSTOMER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TRANSFER_ORDER {
        newRecord: TRANSFER_ORDER_REC;
        oldRecord: TRANSFER_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROMOTION_CODE {
        newRecord: PROMOTION_CODE_REC;
        oldRecord: PROMOTION_CODE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface USAGE {
        newRecord: USAGE_REC;
        oldRecord: USAGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        newRecord: WORKFLOW_ACTION_SCRIPT_REC;
        oldRecord: WORKFLOW_ACTION_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        newRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        oldRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        newRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        oldRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CAMPAIGN_RESPONSE {
        newRecord: CAMPAIGN_RESPONSE_REC;
        oldRecord: CAMPAIGN_RESPONSE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COMMERCE_CATEGORY {
        newRecord: COMMERCE_CATEGORY_REC;
        oldRecord: COMMERCE_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface RESOURCE_ALLOCATION {
        newRecord: RESOURCE_ALLOCATION_REC;
        oldRecord: RESOURCE_ALLOCATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OTHER_NAME_CATEGORY {
        newRecord: OTHER_NAME_CATEGORY_REC;
        oldRecord: OTHER_NAME_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONTACT_CATEGORY {
        newRecord: CONTACT_CATEGORY_REC;
        oldRecord: CONTACT_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface RETURN_AUTHORIZATION {
        newRecord: RETURN_AUTHORIZATION_REC;
        oldRecord: RETURN_AUTHORIZATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COUPON_CODE {
        newRecord: COUPON_CODE_REC;
        oldRecord: COUPON_CODE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TERM {
        newRecord: TERM_REC;
        oldRecord: TERM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_ARRANGEMENT {
        newRecord: REVENUE_ARRANGEMENT_REC;
        oldRecord: REVENUE_ARRANGEMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PURCHASE_REQUISITION {
        newRecord: PURCHASE_REQUISITION_REC;
        oldRecord: PURCHASE_REQUISITION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYROLL_ITEM {
        newRecord: PAYROLL_ITEM_REC;
        oldRecord: PAYROLL_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REALLOCATE_ITEM {
        newRecord: REALLOCATE_ITEM_REC;
        oldRecord: REALLOCATE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYCHECK_JOURNAL {
        newRecord: PAYCHECK_JOURNAL_REC;
        oldRecord: PAYCHECK_JOURNAL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PHONE_CALL {
        newRecord: PHONE_CALL_REC;
        oldRecord: PHONE_CALL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PURCHASE_ORDER {
        newRecord: PURCHASE_ORDER_REC;
        oldRecord: PURCHASE_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PORTLET {
        newRecord: PORTLET_REC;
        oldRecord: PORTLET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_COMMITMENT {
        newRecord: REVENUE_COMMITMENT_REC;
        oldRecord: REVENUE_COMMITMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SCHEDULED_SCRIPT {
        newRecord: SCHEDULED_SCRIPT_REC;
        oldRecord: SCHEDULED_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_BILL {
        newRecord: VENDOR_BILL_REC;
        oldRecord: VENDOR_BILL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_STATUS {
        newRecord: CUSTOMER_STATUS_REC;
        oldRecord: CUSTOMER_STATUS_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONTACT_ROLE {
        newRecord: CONTACT_ROLE_REC;
        oldRecord: CONTACT_ROLE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TOPIC {
        newRecord: TOPIC_REC;
        oldRecord: TOPIC_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface JOB {
        newRecord: JOB_REC;
        oldRecord: JOB_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_TYPE {
        newRecord: TAX_TYPE_REC;
        oldRecord: TAX_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ESTIMATE {
        newRecord: ESTIMATE_REC;
        oldRecord: ESTIMATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DOWNLOAD_ITEM {
        newRecord: DOWNLOAD_ITEM_REC;
        oldRecord: DOWNLOAD_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EMPLOYEE {
        newRecord: EMPLOYEE_REC;
        oldRecord: EMPLOYEE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface FAIR_VALUE_PRICE {
        newRecord: FAIR_VALUE_PRICE_REC;
        oldRecord: FAIR_VALUE_PRICE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ORDER_SCHEDULE {
        newRecord: ORDER_SCHEDULE_REC;
        oldRecord: ORDER_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GIFT_CERTIFICATE_ITEM {
        newRecord: GIFT_CERTIFICATE_ITEM_REC;
        oldRecord: GIFT_CERTIFICATE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GENERIC_RESOURCE {
        newRecord: GENERIC_RESOURCE_REC;
        oldRecord: GENERIC_RESOURCE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_RECEIPT {
        newRecord: ITEM_RECEIPT_REC;
        oldRecord: ITEM_RECEIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_PLAN {
        newRecord: REVENUE_PLAN_REC;
        oldRecord: REVENUE_PLAN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        newRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        oldRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_ACCOUNT_MAPPING {
        newRecord: ITEM_ACCOUNT_MAPPING_REC;
        oldRecord: ITEM_ACCOUNT_MAPPING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_COST_REVALUATION {
        newRecord: INVENTORY_COST_REVALUATION_REC;
        oldRecord: INVENTORY_COST_REVALUATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_COUNT {
        newRecord: INVENTORY_COUNT_REC;
        oldRecord: INVENTORY_COUNT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MESSAGE {
        newRecord: MESSAGE_REC;
        oldRecord: MESSAGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_FULFILLMENT {
        newRecord: ITEM_FULFILLMENT_REC;
        oldRecord: ITEM_FULFILLMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DESCRIPTION_ITEM {
        newRecord: DESCRIPTION_ITEM_REC;
        oldRecord: DESCRIPTION_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LOCATION {
        newRecord: LOCATION_REC;
        oldRecord: LOCATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OTHER_NAME {
        newRecord: OTHER_NAME_REC;
        oldRecord: OTHER_NAME_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ISSUE {
        newRecord: ISSUE_REC;
        oldRecord: ISSUE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_ADJUSTMENT {
        newRecord: INVENTORY_ADJUSTMENT_REC;
        oldRecord: INVENTORY_ADJUSTMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_REVISION {
        newRecord: ITEM_REVISION_REC;
        oldRecord: ITEM_REVISION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_DETAIL {
        newRecord: INVENTORY_DETAIL_REC;
        oldRecord: INVENTORY_DETAIL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PARTNER {
        newRecord: PARTNER_REC;
        oldRecord: PARTNER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_TRANSFER {
        newRecord: INVENTORY_TRANSFER_REC;
        oldRecord: INVENTORY_TRANSFER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PURCHASE_CONTRACT {
        newRecord: PURCHASE_CONTRACT_REC;
        oldRecord: PURCHASE_CONTRACT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        newRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        oldRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORKPLACE {
        newRecord: WORKPLACE_REC;
        oldRecord: WORKPLACE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        newRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        oldRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER_CLOSE {
        newRecord: WORK_ORDER_CLOSE_REC;
        oldRecord: WORK_ORDER_CLOSE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PARTNER_CATEGORY {
        newRecord: PARTNER_CATEGORY_REC;
        oldRecord: PARTNER_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYMENT_METHOD {
        newRecord: PAYMENT_METHOD_REC;
        oldRecord: PAYMENT_METHOD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TIME_ENTRY {
        newRecord: TIME_ENTRY_REC;
        oldRecord: TIME_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER_ISSUE {
        newRecord: WORK_ORDER_ISSUE_REC;
        oldRecord: WORK_ORDER_ISSUE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COST_CATEGORY {
        newRecord: COST_CATEGORY_REC;
        oldRecord: COST_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TIME_SHEET {
        newRecord: TIME_SHEET_REC;
        oldRecord: TIME_SHEET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_RATE_CARD {
        newRecord: BILLING_RATE_CARD_REC;
        oldRecord: BILLING_RATE_CARD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER_COMPLETION {
        newRecord: WORK_ORDER_COMPLETION_REC;
        oldRecord: WORK_ORDER_COMPLETION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_MESSAGE {
        newRecord: CUSTOMER_MESSAGE_REC;
        oldRecord: CUSTOMER_MESSAGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SALES_ROLE {
        newRecord: SALES_ROLE_REC;
        oldRecord: SALES_ROLE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ALLOCATION_SCHEDULE {
        newRecord: ALLOCATION_SCHEDULE_REC;
        oldRecord: ALLOCATION_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNTING_CONTEXT {
        newRecord: ACCOUNTING_CONTEXT_REC;
        oldRecord: ACCOUNTING_CONTEXT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PRICING_GROUP {
        newRecord: PRICING_GROUP_REC;
        oldRecord: PRICING_GROUP_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        newRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        oldRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        newRecord: ENTITY_ACCOUNT_MAPPING_REC;
        oldRecord: ENTITY_ACCOUNT_MAPPING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVOICE {
        newRecord: INVOICE_REC;
        oldRecord: INVOICE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface JOB_TYPE {
        newRecord: JOB_TYPE_REC;
        oldRecord: JOB_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NOTE_TYPE {
        newRecord: NOTE_TYPE_REC;
        oldRecord: NOTE_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BLANKET_PURCHASE_ORDER {
        newRecord: BLANKET_PURCHASE_ORDER_REC;
        oldRecord: BLANKET_PURCHASE_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        newRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        oldRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER {
        newRecord: WORK_ORDER_REC;
        oldRecord: WORK_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_CATEGORY {
        newRecord: VENDOR_CATEGORY_REC;
        oldRecord: VENDOR_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
}
export namespace afterSubmitContext {
    interface DEPARTMENT {
        newRecord: DEPARTMENT_REC;
        oldRecord: DEPARTMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CASH_SALE {
        newRecord: CASH_SALE_REC;
        oldRecord: CASH_SALE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        newRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        oldRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_CATEGORY {
        newRecord: CUSTOMER_CATEGORY_REC;
        oldRecord: CUSTOMER_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface FOLDER {
        newRecord: FOLDER_REC;
        oldRecord: FOLDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONTACT {
        newRecord: CONTACT_REC;
        oldRecord: CONTACT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EXPENSE_REPORT {
        newRecord: EXPENSE_REPORT_REC;
        oldRecord: EXPENSE_REPORT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EMAIL_TEMPLATE {
        newRecord: EMAIL_TEMPLATE_REC;
        oldRecord: EMAIL_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GIFT_CERTIFICATE {
        newRecord: GIFT_CERTIFICATE_REC;
        oldRecord: GIFT_CERTIFICATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EXPENSE_CATEGORY {
        newRecord: EXPENSE_CATEGORY_REC;
        oldRecord: EXPENSE_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        newRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        oldRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_NUMBER {
        newRecord: INVENTORY_NUMBER_REC;
        oldRecord: INVENTORY_NUMBER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ASSEMBLY_UNBUILD {
        newRecord: ASSEMBLY_UNBUILD_REC;
        oldRecord: ASSEMBLY_UNBUILD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNT {
        newRecord: ACCOUNT_REC;
        oldRecord: ACCOUNT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_ACCOUNT {
        newRecord: BILLING_ACCOUNT_REC;
        oldRecord: BILLING_ACCOUNT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BIN {
        newRecord: BIN_REC;
        oldRecord: BIN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNTING_BOOK {
        newRecord: ACCOUNTING_BOOK_REC;
        oldRecord: ACCOUNTING_BOOK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CLIENT_SCRIPT {
        newRecord: CLIENT_SCRIPT_REC;
        oldRecord: CLIENT_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CURRENCY {
        newRecord: CURRENCY_REC;
        oldRecord: CURRENCY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DEPOSIT {
        newRecord: DEPOSIT_REC;
        oldRecord: DEPOSIT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CASH_REFUND {
        newRecord: CASH_REFUND_REC;
        oldRecord: CASH_REFUND_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DEPOSIT_APPLICATION {
        newRecord: DEPOSIT_APPLICATION_REC;
        oldRecord: DEPOSIT_APPLICATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        newRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        oldRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_GROUP {
        newRecord: ITEM_GROUP_REC;
        oldRecord: ITEM_GROUP_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MAP_REDUCE_SCRIPT {
        newRecord: MAP_REDUCE_SCRIPT_REC;
        oldRecord: MAP_REDUCE_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MASSUPDATE_SCRIPT {
        newRecord: MASSUPDATE_SCRIPT_REC;
        oldRecord: MASSUPDATE_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OTHER_CHARGE_ITEM {
        newRecord: OTHER_CHARGE_ITEM_REC;
        oldRecord: OTHER_CHARGE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_SUPPLY_PLAN {
        newRecord: ITEM_SUPPLY_PLAN_REC;
        oldRecord: ITEM_SUPPLY_PLAN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface JOURNAL_ENTRY {
        newRecord: JOURNAL_ENTRY_REC;
        oldRecord: JOURNAL_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        newRecord: MANUFACTURING_COST_TEMPLATE_REC;
        oldRecord: MANUFACTURING_COST_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OPPORTUNITY {
        newRecord: OPPORTUNITY_REC;
        oldRecord: OPPORTUNITY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NOTE {
        newRecord: NOTE_REC;
        oldRecord: NOTE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NON_INVENTORY_ITEM {
        newRecord: NON_INVENTORY_ITEM_REC;
        oldRecord: NON_INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROJECT_TASK {
        newRecord: PROJECT_TASK_REC;
        oldRecord: PROJECT_TASK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MARKUP_ITEM {
        newRecord: MARKUP_ITEM_REC;
        oldRecord: MARKUP_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYMENT_ITEM {
        newRecord: PAYMENT_ITEM_REC;
        oldRecord: PAYMENT_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PRICE_LEVEL {
        newRecord: PRICE_LEVEL_REC;
        oldRecord: PRICE_LEVEL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MANUFACTURING_OPERATION_TASK {
        newRecord: MANUFACTURING_OPERATION_TASK_REC;
        oldRecord: MANUFACTURING_OPERATION_TASK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NEXUS {
        newRecord: NEXUS_REC;
        oldRecord: NEXUS_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LEAD {
        newRecord: LEAD_REC;
        oldRecord: LEAD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SCRIPT_DEPLOYMENT {
        newRecord: SCRIPT_DEPLOYMENT_REC;
        oldRecord: SCRIPT_DEPLOYMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROSPECT {
        newRecord: PROSPECT_REC;
        oldRecord: PROSPECT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROJECT_EXPENSE_TYPE {
        newRecord: PROJECT_EXPENSE_TYPE_REC;
        oldRecord: PROJECT_EXPENSE_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROJECT_TEMPLATE {
        newRecord: PROJECT_TEMPLATE_REC;
        oldRecord: PROJECT_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ASSEMBLY_ITEM {
        newRecord: ASSEMBLY_ITEM_REC;
        oldRecord: ASSEMBLY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_DEMAND_PLAN {
        newRecord: ITEM_DEMAND_PLAN_REC;
        oldRecord: ITEM_DEMAND_PLAN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CALENDAR_EVENT {
        newRecord: CALENDAR_EVENT_REC;
        oldRecord: CALENDAR_EVENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DISCOUNT_ITEM {
        newRecord: DISCOUNT_ITEM_REC;
        oldRecord: DISCOUNT_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BIN_TRANSFER {
        newRecord: BIN_TRANSFER_REC;
        oldRecord: BIN_TRANSFER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CLASSIFICATION {
        newRecord: CLASSIFICATION_REC;
        oldRecord: CLASSIFICATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface AMORTIZATION_TEMPLATE {
        newRecord: AMORTIZATION_TEMPLATE_REC;
        oldRecord: AMORTIZATION_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface KIT_ITEM {
        newRecord: KIT_ITEM_REC;
        oldRecord: KIT_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface RESTLET {
        newRecord: RESTLET_REC;
        oldRecord: RESTLET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CHECK {
        newRecord: CHECK_REC;
        oldRecord: CHECK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CREDIT_CARD_REFUND {
        newRecord: CREDIT_CARD_REFUND_REC;
        oldRecord: CREDIT_CARD_REFUND_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_CLASS {
        newRecord: BILLING_CLASS_REC;
        oldRecord: BILLING_CLASS_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COMPETITOR {
        newRecord: COMPETITOR_REC;
        oldRecord: COMPETITOR_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CREDIT_MEMO {
        newRecord: CREDIT_MEMO_REC;
        oldRecord: CREDIT_MEMO_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        newRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        oldRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CAMPAIGN_TEMPLATE {
        newRecord: CAMPAIGN_TEMPLATE_REC;
        oldRecord: CAMPAIGN_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_DEPOSIT {
        newRecord: CUSTOMER_DEPOSIT_REC;
        oldRecord: CUSTOMER_DEPOSIT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNTING_PERIOD {
        newRecord: ACCOUNTING_PERIOD_REC;
        oldRecord: ACCOUNTING_PERIOD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface AMORTIZATION_SCHEDULE {
        newRecord: AMORTIZATION_SCHEDULE_REC;
        oldRecord: AMORTIZATION_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_PAYMENT {
        newRecord: CUSTOMER_PAYMENT_REC;
        oldRecord: CUSTOMER_PAYMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BIN_WORKSHEET {
        newRecord: BIN_WORKSHEET_REC;
        oldRecord: BIN_WORKSHEET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_SCHEDULE {
        newRecord: BILLING_SCHEDULE_REC;
        oldRecord: BILLING_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ASSEMBLY_BUILD {
        newRecord: ASSEMBLY_BUILD_REC;
        oldRecord: ASSEMBLY_BUILD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CHARGE {
        newRecord: CHARGE_REC;
        oldRecord: CHARGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_REFUND {
        newRecord: CUSTOMER_REFUND_REC;
        oldRecord: CUSTOMER_REFUND_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CREDIT_CARD_CHARGE {
        newRecord: CREDIT_CARD_CHARGE_REC;
        oldRecord: CREDIT_CARD_CHARGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CAMPAIGN {
        newRecord: CAMPAIGN_REC;
        oldRecord: CAMPAIGN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_ITEM {
        newRecord: INVENTORY_ITEM_REC;
        oldRecord: INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SALES_ORDER {
        newRecord: SALES_ORDER_REC;
        oldRecord: SALES_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SHIP_ITEM {
        newRecord: SHIP_ITEM_REC;
        oldRecord: SHIP_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUBSIDIARY {
        newRecord: SUBSIDIARY_REC;
        oldRecord: SUBSIDIARY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUPPORT_CASE {
        newRecord: SUPPORT_CASE_REC;
        oldRecord: SUPPORT_CASE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SALES_TAX_ITEM {
        newRecord: SALES_TAX_ITEM_REC;
        oldRecord: SALES_TAX_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        newRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        oldRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUBTOTAL_ITEM {
        newRecord: SUBTOTAL_ITEM_REC;
        oldRecord: SUBTOTAL_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TASK {
        newRecord: TASK_REC;
        oldRecord: TASK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_PERIOD {
        newRecord: TAX_PERIOD_REC;
        oldRecord: TAX_PERIOD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_ACCT {
        newRecord: TAX_ACCT_REC;
        oldRecord: TAX_ACCT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_GROUP {
        newRecord: TAX_GROUP_REC;
        oldRecord: TAX_GROUP_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SUITELET {
        newRecord: SUITELET_REC;
        oldRecord: SUITELET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REV_REC_TEMPLATE {
        newRecord: REV_REC_TEMPLATE_REC;
        oldRecord: REV_REC_TEMPLATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TIME_BILL {
        newRecord: TIME_BILL_REC;
        oldRecord: TIME_BILL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYCHECK {
        newRecord: PAYCHECK_REC;
        oldRecord: PAYCHECK_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface USEREVENT_SCRIPT {
        newRecord: USEREVENT_SCRIPT_REC;
        oldRecord: USEREVENT_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SOLUTION {
        newRecord: SOLUTION_REC;
        oldRecord: SOLUTION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface UNITS_TYPE {
        newRecord: UNITS_TYPE_REC;
        oldRecord: UNITS_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MANUFACTURING_ROUTING {
        newRecord: MANUFACTURING_ROUTING_REC;
        oldRecord: MANUFACTURING_ROUTING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        newRecord: SERIALIZED_INVENTORY_ITEM_REC;
        oldRecord: SERIALIZED_INVENTORY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOM_TRANSACTION {
        newRecord: CUSTOM_TRANSACTION_REC;
        oldRecord: CUSTOM_TRANSACTION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SERVICE_ITEM {
        newRecord: SERVICE_ITEM_REC;
        oldRecord: SERVICE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WEBSITE {
        newRecord: WEBSITE_REC;
        oldRecord: WEBSITE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        newRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        oldRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REV_REC_SCHEDULE {
        newRecord: REV_REC_SCHEDULE_REC;
        oldRecord: REV_REC_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_PAYMENT {
        newRecord: VENDOR_PAYMENT_REC;
        oldRecord: VENDOR_PAYMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_CREDIT {
        newRecord: VENDOR_CREDIT_REC;
        oldRecord: VENDOR_CREDIT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR {
        newRecord: VENDOR_REC;
        oldRecord: VENDOR_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER {
        newRecord: CUSTOMER_REC;
        oldRecord: CUSTOMER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TRANSFER_ORDER {
        newRecord: TRANSFER_ORDER_REC;
        oldRecord: TRANSFER_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PROMOTION_CODE {
        newRecord: PROMOTION_CODE_REC;
        oldRecord: PROMOTION_CODE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface USAGE {
        newRecord: USAGE_REC;
        oldRecord: USAGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        newRecord: WORKFLOW_ACTION_SCRIPT_REC;
        oldRecord: WORKFLOW_ACTION_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        newRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        oldRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        newRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        oldRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CAMPAIGN_RESPONSE {
        newRecord: CAMPAIGN_RESPONSE_REC;
        oldRecord: CAMPAIGN_RESPONSE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COMMERCE_CATEGORY {
        newRecord: COMMERCE_CATEGORY_REC;
        oldRecord: COMMERCE_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface RESOURCE_ALLOCATION {
        newRecord: RESOURCE_ALLOCATION_REC;
        oldRecord: RESOURCE_ALLOCATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OTHER_NAME_CATEGORY {
        newRecord: OTHER_NAME_CATEGORY_REC;
        oldRecord: OTHER_NAME_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONTACT_CATEGORY {
        newRecord: CONTACT_CATEGORY_REC;
        oldRecord: CONTACT_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface RETURN_AUTHORIZATION {
        newRecord: RETURN_AUTHORIZATION_REC;
        oldRecord: RETURN_AUTHORIZATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COUPON_CODE {
        newRecord: COUPON_CODE_REC;
        oldRecord: COUPON_CODE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TERM {
        newRecord: TERM_REC;
        oldRecord: TERM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_ARRANGEMENT {
        newRecord: REVENUE_ARRANGEMENT_REC;
        oldRecord: REVENUE_ARRANGEMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PURCHASE_REQUISITION {
        newRecord: PURCHASE_REQUISITION_REC;
        oldRecord: PURCHASE_REQUISITION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYROLL_ITEM {
        newRecord: PAYROLL_ITEM_REC;
        oldRecord: PAYROLL_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REALLOCATE_ITEM {
        newRecord: REALLOCATE_ITEM_REC;
        oldRecord: REALLOCATE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYCHECK_JOURNAL {
        newRecord: PAYCHECK_JOURNAL_REC;
        oldRecord: PAYCHECK_JOURNAL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PHONE_CALL {
        newRecord: PHONE_CALL_REC;
        oldRecord: PHONE_CALL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PURCHASE_ORDER {
        newRecord: PURCHASE_ORDER_REC;
        oldRecord: PURCHASE_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PORTLET {
        newRecord: PORTLET_REC;
        oldRecord: PORTLET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_COMMITMENT {
        newRecord: REVENUE_COMMITMENT_REC;
        oldRecord: REVENUE_COMMITMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SCHEDULED_SCRIPT {
        newRecord: SCHEDULED_SCRIPT_REC;
        oldRecord: SCHEDULED_SCRIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_BILL {
        newRecord: VENDOR_BILL_REC;
        oldRecord: VENDOR_BILL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_STATUS {
        newRecord: CUSTOMER_STATUS_REC;
        oldRecord: CUSTOMER_STATUS_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONTACT_ROLE {
        newRecord: CONTACT_ROLE_REC;
        oldRecord: CONTACT_ROLE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TOPIC {
        newRecord: TOPIC_REC;
        oldRecord: TOPIC_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface JOB {
        newRecord: JOB_REC;
        oldRecord: JOB_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TAX_TYPE {
        newRecord: TAX_TYPE_REC;
        oldRecord: TAX_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ESTIMATE {
        newRecord: ESTIMATE_REC;
        oldRecord: ESTIMATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DOWNLOAD_ITEM {
        newRecord: DOWNLOAD_ITEM_REC;
        oldRecord: DOWNLOAD_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface EMPLOYEE {
        newRecord: EMPLOYEE_REC;
        oldRecord: EMPLOYEE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface FAIR_VALUE_PRICE {
        newRecord: FAIR_VALUE_PRICE_REC;
        oldRecord: FAIR_VALUE_PRICE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ORDER_SCHEDULE {
        newRecord: ORDER_SCHEDULE_REC;
        oldRecord: ORDER_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GIFT_CERTIFICATE_ITEM {
        newRecord: GIFT_CERTIFICATE_ITEM_REC;
        oldRecord: GIFT_CERTIFICATE_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GENERIC_RESOURCE {
        newRecord: GENERIC_RESOURCE_REC;
        oldRecord: GENERIC_RESOURCE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_RECEIPT {
        newRecord: ITEM_RECEIPT_REC;
        oldRecord: ITEM_RECEIPT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface REVENUE_PLAN {
        newRecord: REVENUE_PLAN_REC;
        oldRecord: REVENUE_PLAN_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        newRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        oldRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_ACCOUNT_MAPPING {
        newRecord: ITEM_ACCOUNT_MAPPING_REC;
        oldRecord: ITEM_ACCOUNT_MAPPING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_COST_REVALUATION {
        newRecord: INVENTORY_COST_REVALUATION_REC;
        oldRecord: INVENTORY_COST_REVALUATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_COUNT {
        newRecord: INVENTORY_COUNT_REC;
        oldRecord: INVENTORY_COUNT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface MESSAGE {
        newRecord: MESSAGE_REC;
        oldRecord: MESSAGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_FULFILLMENT {
        newRecord: ITEM_FULFILLMENT_REC;
        oldRecord: ITEM_FULFILLMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface DESCRIPTION_ITEM {
        newRecord: DESCRIPTION_ITEM_REC;
        oldRecord: DESCRIPTION_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LOCATION {
        newRecord: LOCATION_REC;
        oldRecord: LOCATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface OTHER_NAME {
        newRecord: OTHER_NAME_REC;
        oldRecord: OTHER_NAME_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ISSUE {
        newRecord: ISSUE_REC;
        oldRecord: ISSUE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_ADJUSTMENT {
        newRecord: INVENTORY_ADJUSTMENT_REC;
        oldRecord: INVENTORY_ADJUSTMENT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ITEM_REVISION {
        newRecord: ITEM_REVISION_REC;
        oldRecord: ITEM_REVISION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_DETAIL {
        newRecord: INVENTORY_DETAIL_REC;
        oldRecord: INVENTORY_DETAIL_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PARTNER {
        newRecord: PARTNER_REC;
        oldRecord: PARTNER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVENTORY_TRANSFER {
        newRecord: INVENTORY_TRANSFER_REC;
        oldRecord: INVENTORY_TRANSFER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PURCHASE_CONTRACT {
        newRecord: PURCHASE_CONTRACT_REC;
        oldRecord: PURCHASE_CONTRACT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        newRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        oldRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORKPLACE {
        newRecord: WORKPLACE_REC;
        oldRecord: WORKPLACE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        newRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        oldRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER_CLOSE {
        newRecord: WORK_ORDER_CLOSE_REC;
        oldRecord: WORK_ORDER_CLOSE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PARTNER_CATEGORY {
        newRecord: PARTNER_CATEGORY_REC;
        oldRecord: PARTNER_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PAYMENT_METHOD {
        newRecord: PAYMENT_METHOD_REC;
        oldRecord: PAYMENT_METHOD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TIME_ENTRY {
        newRecord: TIME_ENTRY_REC;
        oldRecord: TIME_ENTRY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER_ISSUE {
        newRecord: WORK_ORDER_ISSUE_REC;
        oldRecord: WORK_ORDER_ISSUE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface COST_CATEGORY {
        newRecord: COST_CATEGORY_REC;
        oldRecord: COST_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface TIME_SHEET {
        newRecord: TIME_SHEET_REC;
        oldRecord: TIME_SHEET_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BILLING_RATE_CARD {
        newRecord: BILLING_RATE_CARD_REC;
        oldRecord: BILLING_RATE_CARD_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER_COMPLETION {
        newRecord: WORK_ORDER_COMPLETION_REC;
        oldRecord: WORK_ORDER_COMPLETION_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CUSTOMER_MESSAGE {
        newRecord: CUSTOMER_MESSAGE_REC;
        oldRecord: CUSTOMER_MESSAGE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface SALES_ROLE {
        newRecord: SALES_ROLE_REC;
        oldRecord: SALES_ROLE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ALLOCATION_SCHEDULE {
        newRecord: ALLOCATION_SCHEDULE_REC;
        oldRecord: ALLOCATION_SCHEDULE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ACCOUNTING_CONTEXT {
        newRecord: ACCOUNTING_CONTEXT_REC;
        oldRecord: ACCOUNTING_CONTEXT_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface PRICING_GROUP {
        newRecord: PRICING_GROUP_REC;
        oldRecord: PRICING_GROUP_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        newRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        oldRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        newRecord: ENTITY_ACCOUNT_MAPPING_REC;
        oldRecord: ENTITY_ACCOUNT_MAPPING_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface INVOICE {
        newRecord: INVOICE_REC;
        oldRecord: INVOICE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface JOB_TYPE {
        newRecord: JOB_TYPE_REC;
        oldRecord: JOB_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface NOTE_TYPE {
        newRecord: NOTE_TYPE_REC;
        oldRecord: NOTE_TYPE_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface BLANKET_PURCHASE_ORDER {
        newRecord: BLANKET_PURCHASE_ORDER_REC;
        oldRecord: BLANKET_PURCHASE_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        newRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        oldRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface WORK_ORDER {
        newRecord: WORK_ORDER_REC;
        oldRecord: WORK_ORDER_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
    interface VENDOR_CATEGORY {
        newRecord: VENDOR_CATEGORY_REC;
        oldRecord: VENDOR_CATEGORY_REC;
        type: UserEventType;
        UserEventType: UserEventTypes;
    }
}
export namespace onActionContext {
    interface DEPARTMENT {
        newRecord: DEPARTMENT_REC;
        oldRecord: DEPARTMENT_REC;
    }
    interface CASH_SALE {
        newRecord: CASH_SALE_REC;
        oldRecord: CASH_SALE_REC;
    }
    interface BUNDLE_INSTALLATION_SCRIPT {
        newRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
        oldRecord: BUNDLE_INSTALLATION_SCRIPT_REC;
    }
    interface CUSTOMER_CATEGORY {
        newRecord: CUSTOMER_CATEGORY_REC;
        oldRecord: CUSTOMER_CATEGORY_REC;
    }
    interface FOLDER {
        newRecord: FOLDER_REC;
        oldRecord: FOLDER_REC;
    }
    interface CONTACT {
        newRecord: CONTACT_REC;
        oldRecord: CONTACT_REC;
    }
    interface EXPENSE_REPORT {
        newRecord: EXPENSE_REPORT_REC;
        oldRecord: EXPENSE_REPORT_REC;
    }
    interface EMAIL_TEMPLATE {
        newRecord: EMAIL_TEMPLATE_REC;
        oldRecord: EMAIL_TEMPLATE_REC;
    }
    interface GIFT_CERTIFICATE {
        newRecord: GIFT_CERTIFICATE_REC;
        oldRecord: GIFT_CERTIFICATE_REC;
    }
    interface EXPENSE_CATEGORY {
        newRecord: EXPENSE_CATEGORY_REC;
        oldRecord: EXPENSE_CATEGORY_REC;
    }
    interface INTER_COMPANY_TRANSFER_ORDER {
        newRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
        oldRecord: INTER_COMPANY_TRANSFER_ORDER_REC;
    }
    interface INVENTORY_NUMBER {
        newRecord: INVENTORY_NUMBER_REC;
        oldRecord: INVENTORY_NUMBER_REC;
    }
    interface ASSEMBLY_UNBUILD {
        newRecord: ASSEMBLY_UNBUILD_REC;
        oldRecord: ASSEMBLY_UNBUILD_REC;
    }
    interface ACCOUNT {
        newRecord: ACCOUNT_REC;
        oldRecord: ACCOUNT_REC;
    }
    interface BILLING_ACCOUNT {
        newRecord: BILLING_ACCOUNT_REC;
        oldRecord: BILLING_ACCOUNT_REC;
    }
    interface BIN {
        newRecord: BIN_REC;
        oldRecord: BIN_REC;
    }
    interface ACCOUNTING_BOOK {
        newRecord: ACCOUNTING_BOOK_REC;
        oldRecord: ACCOUNTING_BOOK_REC;
    }
    interface CLIENT_SCRIPT {
        newRecord: CLIENT_SCRIPT_REC;
        oldRecord: CLIENT_SCRIPT_REC;
    }
    interface CURRENCY {
        newRecord: CURRENCY_REC;
        oldRecord: CURRENCY_REC;
    }
    interface DEPOSIT {
        newRecord: DEPOSIT_REC;
        oldRecord: DEPOSIT_REC;
    }
    interface CASH_REFUND {
        newRecord: CASH_REFUND_REC;
        oldRecord: CASH_REFUND_REC;
    }
    interface DEPOSIT_APPLICATION {
        newRecord: DEPOSIT_APPLICATION_REC;
        oldRecord: DEPOSIT_APPLICATION_REC;
    }
    interface LOT_NUMBERED_INVENTORY_ITEM {
        newRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
        oldRecord: LOT_NUMBERED_INVENTORY_ITEM_REC;
    }
    interface ITEM_GROUP {
        newRecord: ITEM_GROUP_REC;
        oldRecord: ITEM_GROUP_REC;
    }
    interface MAP_REDUCE_SCRIPT {
        newRecord: MAP_REDUCE_SCRIPT_REC;
        oldRecord: MAP_REDUCE_SCRIPT_REC;
    }
    interface MASSUPDATE_SCRIPT {
        newRecord: MASSUPDATE_SCRIPT_REC;
        oldRecord: MASSUPDATE_SCRIPT_REC;
    }
    interface OTHER_CHARGE_ITEM {
        newRecord: OTHER_CHARGE_ITEM_REC;
        oldRecord: OTHER_CHARGE_ITEM_REC;
    }
    interface ITEM_SUPPLY_PLAN {
        newRecord: ITEM_SUPPLY_PLAN_REC;
        oldRecord: ITEM_SUPPLY_PLAN_REC;
    }
    interface JOURNAL_ENTRY {
        newRecord: JOURNAL_ENTRY_REC;
        oldRecord: JOURNAL_ENTRY_REC;
    }
    interface MANUFACTURING_COST_TEMPLATE {
        newRecord: MANUFACTURING_COST_TEMPLATE_REC;
        oldRecord: MANUFACTURING_COST_TEMPLATE_REC;
    }
    interface OPPORTUNITY {
        newRecord: OPPORTUNITY_REC;
        oldRecord: OPPORTUNITY_REC;
    }
    interface NOTE {
        newRecord: NOTE_REC;
        oldRecord: NOTE_REC;
    }
    interface NON_INVENTORY_ITEM {
        newRecord: NON_INVENTORY_ITEM_REC;
        oldRecord: NON_INVENTORY_ITEM_REC;
    }
    interface PROJECT_TASK {
        newRecord: PROJECT_TASK_REC;
        oldRecord: PROJECT_TASK_REC;
    }
    interface MARKUP_ITEM {
        newRecord: MARKUP_ITEM_REC;
        oldRecord: MARKUP_ITEM_REC;
    }
    interface PAYMENT_ITEM {
        newRecord: PAYMENT_ITEM_REC;
        oldRecord: PAYMENT_ITEM_REC;
    }
    interface PRICE_LEVEL {
        newRecord: PRICE_LEVEL_REC;
        oldRecord: PRICE_LEVEL_REC;
    }
    interface MANUFACTURING_OPERATION_TASK {
        newRecord: MANUFACTURING_OPERATION_TASK_REC;
        oldRecord: MANUFACTURING_OPERATION_TASK_REC;
    }
    interface NEXUS {
        newRecord: NEXUS_REC;
        oldRecord: NEXUS_REC;
    }
    interface LEAD {
        newRecord: LEAD_REC;
        oldRecord: LEAD_REC;
    }
    interface SCRIPT_DEPLOYMENT {
        newRecord: SCRIPT_DEPLOYMENT_REC;
        oldRecord: SCRIPT_DEPLOYMENT_REC;
    }
    interface PROSPECT {
        newRecord: PROSPECT_REC;
        oldRecord: PROSPECT_REC;
    }
    interface PROJECT_EXPENSE_TYPE {
        newRecord: PROJECT_EXPENSE_TYPE_REC;
        oldRecord: PROJECT_EXPENSE_TYPE_REC;
    }
    interface PROJECT_TEMPLATE {
        newRecord: PROJECT_TEMPLATE_REC;
        oldRecord: PROJECT_TEMPLATE_REC;
    }
    interface ASSEMBLY_ITEM {
        newRecord: ASSEMBLY_ITEM_REC;
        oldRecord: ASSEMBLY_ITEM_REC;
    }
    interface ITEM_DEMAND_PLAN {
        newRecord: ITEM_DEMAND_PLAN_REC;
        oldRecord: ITEM_DEMAND_PLAN_REC;
    }
    interface CALENDAR_EVENT {
        newRecord: CALENDAR_EVENT_REC;
        oldRecord: CALENDAR_EVENT_REC;
    }
    interface DISCOUNT_ITEM {
        newRecord: DISCOUNT_ITEM_REC;
        oldRecord: DISCOUNT_ITEM_REC;
    }
    interface BIN_TRANSFER {
        newRecord: BIN_TRANSFER_REC;
        oldRecord: BIN_TRANSFER_REC;
    }
    interface CLASSIFICATION {
        newRecord: CLASSIFICATION_REC;
        oldRecord: CLASSIFICATION_REC;
    }
    interface AMORTIZATION_TEMPLATE {
        newRecord: AMORTIZATION_TEMPLATE_REC;
        oldRecord: AMORTIZATION_TEMPLATE_REC;
    }
    interface KIT_ITEM {
        newRecord: KIT_ITEM_REC;
        oldRecord: KIT_ITEM_REC;
    }
    interface RESTLET {
        newRecord: RESTLET_REC;
        oldRecord: RESTLET_REC;
    }
    interface CHECK {
        newRecord: CHECK_REC;
        oldRecord: CHECK_REC;
    }
    interface CREDIT_CARD_REFUND {
        newRecord: CREDIT_CARD_REFUND_REC;
        oldRecord: CREDIT_CARD_REFUND_REC;
    }
    interface BILLING_CLASS {
        newRecord: BILLING_CLASS_REC;
        oldRecord: BILLING_CLASS_REC;
    }
    interface COMPETITOR {
        newRecord: COMPETITOR_REC;
        oldRecord: COMPETITOR_REC;
    }
    interface CREDIT_MEMO {
        newRecord: CREDIT_MEMO_REC;
        oldRecord: CREDIT_MEMO_REC;
    }
    interface INTER_COMPANY_JOURNAL_ENTRY {
        newRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
        oldRecord: INTER_COMPANY_JOURNAL_ENTRY_REC;
    }
    interface CAMPAIGN_TEMPLATE {
        newRecord: CAMPAIGN_TEMPLATE_REC;
        oldRecord: CAMPAIGN_TEMPLATE_REC;
    }
    interface CUSTOMER_DEPOSIT {
        newRecord: CUSTOMER_DEPOSIT_REC;
        oldRecord: CUSTOMER_DEPOSIT_REC;
    }
    interface ACCOUNTING_PERIOD {
        newRecord: ACCOUNTING_PERIOD_REC;
        oldRecord: ACCOUNTING_PERIOD_REC;
    }
    interface AMORTIZATION_SCHEDULE {
        newRecord: AMORTIZATION_SCHEDULE_REC;
        oldRecord: AMORTIZATION_SCHEDULE_REC;
    }
    interface CUSTOMER_PAYMENT {
        newRecord: CUSTOMER_PAYMENT_REC;
        oldRecord: CUSTOMER_PAYMENT_REC;
    }
    interface BIN_WORKSHEET {
        newRecord: BIN_WORKSHEET_REC;
        oldRecord: BIN_WORKSHEET_REC;
    }
    interface BILLING_SCHEDULE {
        newRecord: BILLING_SCHEDULE_REC;
        oldRecord: BILLING_SCHEDULE_REC;
    }
    interface ASSEMBLY_BUILD {
        newRecord: ASSEMBLY_BUILD_REC;
        oldRecord: ASSEMBLY_BUILD_REC;
    }
    interface CHARGE {
        newRecord: CHARGE_REC;
        oldRecord: CHARGE_REC;
    }
    interface CUSTOMER_REFUND {
        newRecord: CUSTOMER_REFUND_REC;
        oldRecord: CUSTOMER_REFUND_REC;
    }
    interface CREDIT_CARD_CHARGE {
        newRecord: CREDIT_CARD_CHARGE_REC;
        oldRecord: CREDIT_CARD_CHARGE_REC;
    }
    interface CAMPAIGN {
        newRecord: CAMPAIGN_REC;
        oldRecord: CAMPAIGN_REC;
    }
    interface INVENTORY_ITEM {
        newRecord: INVENTORY_ITEM_REC;
        oldRecord: INVENTORY_ITEM_REC;
    }
    interface SALES_ORDER {
        newRecord: SALES_ORDER_REC;
        oldRecord: SALES_ORDER_REC;
    }
    interface SHIP_ITEM {
        newRecord: SHIP_ITEM_REC;
        oldRecord: SHIP_ITEM_REC;
    }
    interface SUBSIDIARY {
        newRecord: SUBSIDIARY_REC;
        oldRecord: SUBSIDIARY_REC;
    }
    interface SUPPORT_CASE {
        newRecord: SUPPORT_CASE_REC;
        oldRecord: SUPPORT_CASE_REC;
    }
    interface SALES_TAX_ITEM {
        newRecord: SALES_TAX_ITEM_REC;
        oldRecord: SALES_TAX_ITEM_REC;
    }
    interface STATISTICAL_JOURNAL_ENTRY {
        newRecord: STATISTICAL_JOURNAL_ENTRY_REC;
        oldRecord: STATISTICAL_JOURNAL_ENTRY_REC;
    }
    interface SUBTOTAL_ITEM {
        newRecord: SUBTOTAL_ITEM_REC;
        oldRecord: SUBTOTAL_ITEM_REC;
    }
    interface TASK {
        newRecord: TASK_REC;
        oldRecord: TASK_REC;
    }
    interface TAX_PERIOD {
        newRecord: TAX_PERIOD_REC;
        oldRecord: TAX_PERIOD_REC;
    }
    interface TAX_ACCT {
        newRecord: TAX_ACCT_REC;
        oldRecord: TAX_ACCT_REC;
    }
    interface TAX_GROUP {
        newRecord: TAX_GROUP_REC;
        oldRecord: TAX_GROUP_REC;
    }
    interface SUITELET {
        newRecord: SUITELET_REC;
        oldRecord: SUITELET_REC;
    }
    interface REV_REC_TEMPLATE {
        newRecord: REV_REC_TEMPLATE_REC;
        oldRecord: REV_REC_TEMPLATE_REC;
    }
    interface TIME_BILL {
        newRecord: TIME_BILL_REC;
        oldRecord: TIME_BILL_REC;
    }
    interface PAYCHECK {
        newRecord: PAYCHECK_REC;
        oldRecord: PAYCHECK_REC;
    }
    interface USEREVENT_SCRIPT {
        newRecord: USEREVENT_SCRIPT_REC;
        oldRecord: USEREVENT_SCRIPT_REC;
    }
    interface SOLUTION {
        newRecord: SOLUTION_REC;
        oldRecord: SOLUTION_REC;
    }
    interface UNITS_TYPE {
        newRecord: UNITS_TYPE_REC;
        oldRecord: UNITS_TYPE_REC;
    }
    interface MANUFACTURING_ROUTING {
        newRecord: MANUFACTURING_ROUTING_REC;
        oldRecord: MANUFACTURING_ROUTING_REC;
    }
    interface SERIALIZED_INVENTORY_ITEM {
        newRecord: SERIALIZED_INVENTORY_ITEM_REC;
        oldRecord: SERIALIZED_INVENTORY_ITEM_REC;
    }
    interface CUSTOM_TRANSACTION {
        newRecord: CUSTOM_TRANSACTION_REC;
        oldRecord: CUSTOM_TRANSACTION_REC;
    }
    interface SERVICE_ITEM {
        newRecord: SERVICE_ITEM_REC;
        oldRecord: SERVICE_ITEM_REC;
    }
    interface WEBSITE {
        newRecord: WEBSITE_REC;
        oldRecord: WEBSITE_REC;
    }
    interface REVENUE_COMMITMENT_REVERSAL {
        newRecord: REVENUE_COMMITMENT_REVERSAL_REC;
        oldRecord: REVENUE_COMMITMENT_REVERSAL_REC;
    }
    interface REV_REC_SCHEDULE {
        newRecord: REV_REC_SCHEDULE_REC;
        oldRecord: REV_REC_SCHEDULE_REC;
    }
    interface VENDOR_PAYMENT {
        newRecord: VENDOR_PAYMENT_REC;
        oldRecord: VENDOR_PAYMENT_REC;
    }
    interface VENDOR_CREDIT {
        newRecord: VENDOR_CREDIT_REC;
        oldRecord: VENDOR_CREDIT_REC;
    }
    interface VENDOR {
        newRecord: VENDOR_REC;
        oldRecord: VENDOR_REC;
    }
    interface CUSTOMER {
        newRecord: CUSTOMER_REC;
        oldRecord: CUSTOMER_REC;
    }
    interface TRANSFER_ORDER {
        newRecord: TRANSFER_ORDER_REC;
        oldRecord: TRANSFER_ORDER_REC;
    }
    interface PROMOTION_CODE {
        newRecord: PROMOTION_CODE_REC;
        oldRecord: PROMOTION_CODE_REC;
    }
    interface USAGE {
        newRecord: USAGE_REC;
        oldRecord: USAGE_REC;
    }
    interface WORKFLOW_ACTION_SCRIPT {
        newRecord: WORKFLOW_ACTION_SCRIPT_REC;
        oldRecord: WORKFLOW_ACTION_SCRIPT_REC;
    }
    interface INTERCOMP_ALLOCATION_SCHEDULE {
        newRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
        oldRecord: INTERCOMP_ALLOCATION_SCHEDULE_REC;
    }
    interface VENDOR_RETURN_AUTHORIZATION {
        newRecord: VENDOR_RETURN_AUTHORIZATION_REC;
        oldRecord: VENDOR_RETURN_AUTHORIZATION_REC;
    }
    interface CAMPAIGN_RESPONSE {
        newRecord: CAMPAIGN_RESPONSE_REC;
        oldRecord: CAMPAIGN_RESPONSE_REC;
    }
    interface COMMERCE_CATEGORY {
        newRecord: COMMERCE_CATEGORY_REC;
        oldRecord: COMMERCE_CATEGORY_REC;
    }
    interface RESOURCE_ALLOCATION {
        newRecord: RESOURCE_ALLOCATION_REC;
        oldRecord: RESOURCE_ALLOCATION_REC;
    }
    interface OTHER_NAME_CATEGORY {
        newRecord: OTHER_NAME_CATEGORY_REC;
        oldRecord: OTHER_NAME_CATEGORY_REC;
    }
    interface CONTACT_CATEGORY {
        newRecord: CONTACT_CATEGORY_REC;
        oldRecord: CONTACT_CATEGORY_REC;
    }
    interface RETURN_AUTHORIZATION {
        newRecord: RETURN_AUTHORIZATION_REC;
        oldRecord: RETURN_AUTHORIZATION_REC;
    }
    interface COUPON_CODE {
        newRecord: COUPON_CODE_REC;
        oldRecord: COUPON_CODE_REC;
    }
    interface TERM {
        newRecord: TERM_REC;
        oldRecord: TERM_REC;
    }
    interface REVENUE_ARRANGEMENT {
        newRecord: REVENUE_ARRANGEMENT_REC;
        oldRecord: REVENUE_ARRANGEMENT_REC;
    }
    interface PURCHASE_REQUISITION {
        newRecord: PURCHASE_REQUISITION_REC;
        oldRecord: PURCHASE_REQUISITION_REC;
    }
    interface PAYROLL_ITEM {
        newRecord: PAYROLL_ITEM_REC;
        oldRecord: PAYROLL_ITEM_REC;
    }
    interface REALLOCATE_ITEM {
        newRecord: REALLOCATE_ITEM_REC;
        oldRecord: REALLOCATE_ITEM_REC;
    }
    interface PAYCHECK_JOURNAL {
        newRecord: PAYCHECK_JOURNAL_REC;
        oldRecord: PAYCHECK_JOURNAL_REC;
    }
    interface PHONE_CALL {
        newRecord: PHONE_CALL_REC;
        oldRecord: PHONE_CALL_REC;
    }
    interface PURCHASE_ORDER {
        newRecord: PURCHASE_ORDER_REC;
        oldRecord: PURCHASE_ORDER_REC;
    }
    interface PORTLET {
        newRecord: PORTLET_REC;
        oldRecord: PORTLET_REC;
    }
    interface REVENUE_COMMITMENT {
        newRecord: REVENUE_COMMITMENT_REC;
        oldRecord: REVENUE_COMMITMENT_REC;
    }
    interface SCHEDULED_SCRIPT {
        newRecord: SCHEDULED_SCRIPT_REC;
        oldRecord: SCHEDULED_SCRIPT_REC;
    }
    interface VENDOR_BILL {
        newRecord: VENDOR_BILL_REC;
        oldRecord: VENDOR_BILL_REC;
    }
    interface CUSTOMER_STATUS {
        newRecord: CUSTOMER_STATUS_REC;
        oldRecord: CUSTOMER_STATUS_REC;
    }
    interface CONTACT_ROLE {
        newRecord: CONTACT_ROLE_REC;
        oldRecord: CONTACT_ROLE_REC;
    }
    interface TOPIC {
        newRecord: TOPIC_REC;
        oldRecord: TOPIC_REC;
    }
    interface JOB {
        newRecord: JOB_REC;
        oldRecord: JOB_REC;
    }
    interface TAX_TYPE {
        newRecord: TAX_TYPE_REC;
        oldRecord: TAX_TYPE_REC;
    }
    interface ESTIMATE {
        newRecord: ESTIMATE_REC;
        oldRecord: ESTIMATE_REC;
    }
    interface DOWNLOAD_ITEM {
        newRecord: DOWNLOAD_ITEM_REC;
        oldRecord: DOWNLOAD_ITEM_REC;
    }
    interface EMPLOYEE {
        newRecord: EMPLOYEE_REC;
        oldRecord: EMPLOYEE_REC;
    }
    interface FAIR_VALUE_PRICE {
        newRecord: FAIR_VALUE_PRICE_REC;
        oldRecord: FAIR_VALUE_PRICE_REC;
    }
    interface ORDER_SCHEDULE {
        newRecord: ORDER_SCHEDULE_REC;
        oldRecord: ORDER_SCHEDULE_REC;
    }
    interface GIFT_CERTIFICATE_ITEM {
        newRecord: GIFT_CERTIFICATE_ITEM_REC;
        oldRecord: GIFT_CERTIFICATE_ITEM_REC;
    }
    interface GENERIC_RESOURCE {
        newRecord: GENERIC_RESOURCE_REC;
        oldRecord: GENERIC_RESOURCE_REC;
    }
    interface ITEM_RECEIPT {
        newRecord: ITEM_RECEIPT_REC;
        oldRecord: ITEM_RECEIPT_REC;
    }
    interface REVENUE_PLAN {
        newRecord: REVENUE_PLAN_REC;
        oldRecord: REVENUE_PLAN_REC;
    }
    interface GLOBAL_ACCOUNT_MAPPING {
        newRecord: GLOBAL_ACCOUNT_MAPPING_REC;
        oldRecord: GLOBAL_ACCOUNT_MAPPING_REC;
    }
    interface ITEM_ACCOUNT_MAPPING {
        newRecord: ITEM_ACCOUNT_MAPPING_REC;
        oldRecord: ITEM_ACCOUNT_MAPPING_REC;
    }
    interface INVENTORY_COST_REVALUATION {
        newRecord: INVENTORY_COST_REVALUATION_REC;
        oldRecord: INVENTORY_COST_REVALUATION_REC;
    }
    interface INVENTORY_COUNT {
        newRecord: INVENTORY_COUNT_REC;
        oldRecord: INVENTORY_COUNT_REC;
    }
    interface MESSAGE {
        newRecord: MESSAGE_REC;
        oldRecord: MESSAGE_REC;
    }
    interface ITEM_FULFILLMENT {
        newRecord: ITEM_FULFILLMENT_REC;
        oldRecord: ITEM_FULFILLMENT_REC;
    }
    interface DESCRIPTION_ITEM {
        newRecord: DESCRIPTION_ITEM_REC;
        oldRecord: DESCRIPTION_ITEM_REC;
    }
    interface LOCATION {
        newRecord: LOCATION_REC;
        oldRecord: LOCATION_REC;
    }
    interface OTHER_NAME {
        newRecord: OTHER_NAME_REC;
        oldRecord: OTHER_NAME_REC;
    }
    interface ISSUE {
        newRecord: ISSUE_REC;
        oldRecord: ISSUE_REC;
    }
    interface INVENTORY_ADJUSTMENT {
        newRecord: INVENTORY_ADJUSTMENT_REC;
        oldRecord: INVENTORY_ADJUSTMENT_REC;
    }
    interface ITEM_REVISION {
        newRecord: ITEM_REVISION_REC;
        oldRecord: ITEM_REVISION_REC;
    }
    interface INVENTORY_DETAIL {
        newRecord: INVENTORY_DETAIL_REC;
        oldRecord: INVENTORY_DETAIL_REC;
    }
    interface PARTNER {
        newRecord: PARTNER_REC;
        oldRecord: PARTNER_REC;
    }
    interface INVENTORY_TRANSFER {
        newRecord: INVENTORY_TRANSFER_REC;
        oldRecord: INVENTORY_TRANSFER_REC;
    }
    interface PURCHASE_CONTRACT {
        newRecord: PURCHASE_CONTRACT_REC;
        oldRecord: PURCHASE_CONTRACT_REC;
    }
    interface SERIALIZED_ASSEMBLY_ITEM {
        newRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
        oldRecord: SERIALIZED_ASSEMBLY_ITEM_REC;
    }
    interface WORKPLACE {
        newRecord: WORKPLACE_REC;
        oldRecord: WORKPLACE_REC;
    }
    interface CUSTOMER_PAYMENT_AUTHORIZATION {
        newRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
        oldRecord: CUSTOMER_PAYMENT_AUTHORIZATION_REC;
    }
    interface WORK_ORDER_CLOSE {
        newRecord: WORK_ORDER_CLOSE_REC;
        oldRecord: WORK_ORDER_CLOSE_REC;
    }
    interface PARTNER_CATEGORY {
        newRecord: PARTNER_CATEGORY_REC;
        oldRecord: PARTNER_CATEGORY_REC;
    }
    interface PAYMENT_METHOD {
        newRecord: PAYMENT_METHOD_REC;
        oldRecord: PAYMENT_METHOD_REC;
    }
    interface TIME_ENTRY {
        newRecord: TIME_ENTRY_REC;
        oldRecord: TIME_ENTRY_REC;
    }
    interface WORK_ORDER_ISSUE {
        newRecord: WORK_ORDER_ISSUE_REC;
        oldRecord: WORK_ORDER_ISSUE_REC;
    }
    interface COST_CATEGORY {
        newRecord: COST_CATEGORY_REC;
        oldRecord: COST_CATEGORY_REC;
    }
    interface TIME_SHEET {
        newRecord: TIME_SHEET_REC;
        oldRecord: TIME_SHEET_REC;
    }
    interface BILLING_RATE_CARD {
        newRecord: BILLING_RATE_CARD_REC;
        oldRecord: BILLING_RATE_CARD_REC;
    }
    interface WORK_ORDER_COMPLETION {
        newRecord: WORK_ORDER_COMPLETION_REC;
        oldRecord: WORK_ORDER_COMPLETION_REC;
    }
    interface CUSTOMER_MESSAGE {
        newRecord: CUSTOMER_MESSAGE_REC;
        oldRecord: CUSTOMER_MESSAGE_REC;
    }
    interface SALES_ROLE {
        newRecord: SALES_ROLE_REC;
        oldRecord: SALES_ROLE_REC;
    }
    interface ALLOCATION_SCHEDULE {
        newRecord: ALLOCATION_SCHEDULE_REC;
        oldRecord: ALLOCATION_SCHEDULE_REC;
    }
    interface ACCOUNTING_CONTEXT {
        newRecord: ACCOUNTING_CONTEXT_REC;
        oldRecord: ACCOUNTING_CONTEXT_REC;
    }
    interface PRICING_GROUP {
        newRecord: PRICING_GROUP_REC;
        oldRecord: PRICING_GROUP_REC;
    }
    interface CONSOLIDATED_EXCHANGE_RATE {
        newRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
        oldRecord: CONSOLIDATED_EXCHANGE_RATE_REC;
    }
    interface ENTITY_ACCOUNT_MAPPING {
        newRecord: ENTITY_ACCOUNT_MAPPING_REC;
        oldRecord: ENTITY_ACCOUNT_MAPPING_REC;
    }
    interface INVOICE {
        newRecord: INVOICE_REC;
        oldRecord: INVOICE_REC;
    }
    interface JOB_TYPE {
        newRecord: JOB_TYPE_REC;
        oldRecord: JOB_TYPE_REC;
    }
    interface NOTE_TYPE {
        newRecord: NOTE_TYPE_REC;
        oldRecord: NOTE_TYPE_REC;
    }
    interface BLANKET_PURCHASE_ORDER {
        newRecord: BLANKET_PURCHASE_ORDER_REC;
        oldRecord: BLANKET_PURCHASE_ORDER_REC;
    }
    interface LOT_NUMBERED_ASSEMBLY_ITEM {
        newRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
        oldRecord: LOT_NUMBERED_ASSEMBLY_ITEM_REC;
    }
    interface WORK_ORDER {
        newRecord: WORK_ORDER_REC;
        oldRecord: WORK_ORDER_REC;
    }
    interface VENDOR_CATEGORY {
        newRecord: VENDOR_CATEGORY_REC;
        oldRecord: VENDOR_CATEGORY_REC;
    }
}