// import { Field, Record, Type } from '../record'
//
// type FieldValue = Date | number | string | string[] | boolean;
//
// interface GetSublistValueOptions_SO_ab {
//     /** The internal ID of the sublist. */
//     sublistId: 'accountingbookdetail';
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string | 'accountingbook' | 'exchangerate' | 'revreconrevcommitment' | 'tranisvsoebundle';
//     /** The line number for the field. */
//     line: number;
// }
//
// interface GetSublistValueOptions_SO_item {
//     /** The internal ID of the sublist. */
//     sublistId: 'item';
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string | 'altsalesamt' | 'amortizationperiod' | 'amortizationtype' | 'amount' | 'billvariancestatus' | 'catchupperiod' | 'chargetype' | 'commitinventory' | 'costestimate' | 'costestimaterate' | 'costestimatetype' | 'createdpo' | 'createpo' | 'createwo' | 'daysbeforeexpiration' | 'deferrevrec' | 'description' | 'excludefromraterequest' | 'expectedshipdate' | 'fromjob' | 'giftcertfrom' | 'giftcertmessage' | 'giftcertrecipientemail' | 'giftcertrecipientname' | 'id' | 'inventorydetail' | 'isclosed' | 'isestimate' | 'istaxable' | 'isvsoebundle' | 'item' | 'itemfulfillmentchoice' | 'itemsubtype' | 'itemtype' | 'licensecode' | 'line' | 'linenumber' | 'locationautoassigned' | 'matrixtype' | 'noautoassignlocation' | 'options' | 'orderpriority' | 'porate' | 'povendor' | 'price' | 'printitems' | 'quantity' | 'quantityavailable' | 'quantitybackordered' | 'quantitybilled' | 'quantitycommitted' | 'quantityfulfilled' | 'quantityrevcommitted' | 'rate' | 'rateschedule' | 'revrecenddate' | 'revrecschedule' | 'revrecstartdate' | 'shipaddress' | 'shipcarrier' | 'shipmethod' | 'subscription' | 'taxcode' | 'taxrate1' | 'units' | 'vsoeallocation' | 'vsoeamount' | 'vsoedeferral' | 'vsoedelivered' | 'vsoeisestimate' | 'vsoepermitdiscount' | 'vsoeprice' | 'vsoesopgroup';
//     /** The line number for the field. */
//     line: number;
// }
//
// interface GetSublistValueOptions_SO_partners {
//     /** The internal ID of the sublist. */
//     sublistId: 'partners';
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string | 'contribution' | 'id' | 'isprimary' | 'partner' | 'partnerrole' | 'transaction';
//     /** The line number for the field. */
//     line: number;
// }
//
// interface GetSublistValueOptions_SO_promotions {
//     /** The internal ID of the sublist. */
//     sublistId: 'promotions';
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string | 'cannotbecombined' | 'couponcode' | 'discount' | 'discountrate' | 'muccpromocodeinstance' | 'promocode' | 'purchasediscount' | 'shippingdiscount';
//     /** The line number for the field. */
//     line: number;
// }
//
// interface GetSublistValueOptions_SO_sales {
//     /** The internal ID of the sublist. */
//     sublistId: 'salesteam';
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string | 'contribution' | 'employee' | 'id' | 'isprimary' | 'issalesrep' | 'salesrole' | 'transaction';
//     /** The line number for the field. */
//     line: number;
// }
//
// interface GetSublistValueOptions_SO_ship {
//     /** The internal ID of the sublist. */
//     sublistId: 'shipgroup';
//     /** The internal ID of a standard or custom sublist field. */
//     fieldId: string | 'destinationaddress' | 'handlingrate' | 'id' | 'shippingcarrier' | 'shippingmethod' | 'shippingrate' | 'sourceaddress' | 'weight';
//     /** The line number for the field. */
//     line: number;
// }
//
// interface GetFieldOptions_SO {
//     /** The internal ID of a standard or custom body field. */
//     fieldId: string | "allowemptycards" | "althandlingcost" | "altsalestotal" | "altshippingcost" | "authcode" | "balance" | "billaddr1" | "billaddr2" | "billaddr3" | "billaddress" | "billaddressee" | "billaddresslist" | "billattention" | "billcity" | "billcountry" | "billingaddress" | "billingschedule" | "billisresidential" | "billphone" | "billstate" | "billzip" | "ccapproved" | "ccavsstreetmatch" | "ccavszipmatch" | "ccexpiredate" | "cchold" | "ccholdetails" | "cciavsmatch" | "ccname" | "ccnumber" | "ccprocessoraccount" | "ccsecuritycode" | "ccsecuritycodematch" | "ccstreet" | "cczipcode" | "class" | "consolidatebalance" | "couponcode" | "createddate" | "createdfrom" | "creditcard" | "creditcardprocessor" | "currency" | "currencyname" | "currencysymbol" | "customercode" | "customform" | "debitcardissueno" | "deferredrevenue" | "department" | "discountitem" | "discountrate" | "discounttotal" | "draccount" | "email" | "enddate" | "entity" | "entitynexus" | "estgrossprofit" | "estgrossprofitpercent" | "exchangerate" | "excludecommission" | "externalid" | "fob" | "fxaccount" | "getauth" | "giftcertapplied" | "handlingcost" | "handlingtax1rate" | "handlingtaxcode" | "ignoreavs" | "ignorecsc" | "inputpnrefnum" | "intercostatus" | "intercotransaction" | "isbasecurrency" | "isdefaultshippingrequest" | "ismultishipto" | "ispurchasecard" | "isrecurringpayment" | "istaxable" | "lastmodifieddate" | "leadsource" | "linkedtrackingnumbers" | "location" | "memo" | "message" | "messagesel" | "muccpromocodeinstance" | "nexus" | "onetime" | "opportunity" | "orderstatus" | "otherrefnum" | "overridehold" | "overrideholdchecked" | "overrideshippingcost" | "partner" | "paymenteventdate" | "paymenteventholdreason" | "paymenteventpurchasedatasent" | "paymenteventresult" | "paymenteventtype" | "paymenteventupdatedby" | "paymentmethod" | "paypalauthid" | "paypalprocess" | "paypalstatus" | "paypaltranid" | "pnrefnum" | "promocode" | "promocodepluginimpl" | "recognizedrevenue" | "recurannually" | "recurmonthly" | "recurquarterly" | "recurweekly" | "returntrackingnumbers" | "revcommitstatus" | "revenuestatus" | "revreconrevcommitment" | "saleseffectivedate" | "salesgroup" | "salesrep" | "shipaddr1" | "shipaddr2" | "shipaddr3" | "shipaddress" | "shipaddressee" | "shipaddresslist" | "shipattention" | "shipcity" | "shipcomplete" | "shipcountry" | "shipdate" | "shipisresidential" | "shipmethod" | "shipoverride" | "shipphone" | "shippingaddress" | "shippingcost" | "shippingcostoverridden" | "shippingtax1rate" | "shippingtaxcode" | "shipstate" | "shipzip" | "softdescriptor" | "source" | "startdate" | "status" | "statusRef" | "subsidiary" | "subtotal" | "syncpartnerteams" | "syncsalesteams" | "taxitem" | "taxrate" | "taxtotal" | "terms" | "threedstatuscode" | "tobeemailed" | "tobefaxed" | "tobeprinted" | "total" | "totalcostestimate" | "trandate" | "tranid" | "tranisvsoebundle" | "unbilledorders" | "validfrom" | "vsoeautocalc";
// }
//
// // interface GetCurrentSublistValueOptions {
// //     /** The internal ID of the sublist. */
// //     sublistId: string;
// //     /** The internal ID of a standard or custom sublist field. */
// //     fieldId: string;
// // }
// //
// // interface GetFieldOptions {
// //     /** The internal ID of a standard or custom body field. */
// //     fieldId: string;
// // }
// //
// // interface RecordGetLineCountOptions {
// //     /** The internal ID of the sublist. */
// //     sublistId: string;
// // }
//
// export interface CopyLoadOptions_SO {
//     /**
//      * The record type.
//      */
//         type: Type.SALES_ORDER;
//     /**
//      * The internal ID of the existing record instance in NetSuite.
//      */
//     id: number | string;
//     /**
//      * Determines whether the new record is dynamic. If set to true, the record is created in dynamic mode. If set to false, the record is created in standard mode. By default, this value is false.
//      * - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in standard mode, the record’s body fields and sublist line items are not sourced, calculated, and validated until the record is saved (submitted) with Record.save(options).
//      * - When you work with a record in standard mode, you do not need to set values in any particular order. After submitting the record, NetSuite processes the record’s body fields and sublist line items in the correct order, regardless of the organization of your script.
//      * - When a SuiteScript 2.0 script creates, copies, loads, or transforms a record in dynamic mode, the record’s body fields and sublist line items are sourced, calculated, and validated in real-time. A record in dynamic mode emulates the behavior of a record in the UI.
//      * - When you work with a record in dynamic mode, it is important that you set values in the same order you would within the UI. If you fail to do this, your results may not be accurate.
//      */
//     isDynamic?: boolean;
//     /**
//      * Name-value pairs containing default values of fields in the new record.
//      */
//     defaultValue?: any;
// }
//
// export interface SalesOrder extends Record {
//     /** Returns the value of a sublist field. */
//     getSublistValue(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): FieldValue;
//     //getSublistValue(sublistId: string, fieldId: string, line: number): FieldValue;
//     /** Returns a field object from a sublist. */
//     getSublistField(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): Field;
//     /** Returns the value of a sublist field in a text representation. */
//     getSublistText(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): string;
//     /** Returns a value indicating whether the associated sublist field contains a subrecord. */
//     hasSublistSubrecord(options: GetSublistValueOptions_SO_ab | GetSublistValueOptions_SO_item | GetSublistValueOptions_SO_partners | GetSublistValueOptions_SO_promotions | GetSublistValueOptions_SO_sales | GetSublistValueOptions_SO_ship): boolean;
//     /** Returns the text representation of a field value. */
//     getText(options: GetFieldOptions_SO): string | string[];
//     getText(fieldId: string): string | string[];
//     /** Returns the value of a field. */
//     getValue(options: GetFieldOptions_SO): FieldValue;
//     getValue(fieldId: string): FieldValue;
//     testFunc(options: 'bingo') : FieldValue;
// }