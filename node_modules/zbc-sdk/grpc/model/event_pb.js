// source: model/event.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.model.EventType', null, global);
/**
 * @enum {number}
 */
proto.model.EventType = {
  EVENTANY: 0,
  EVENTSENDZBCTRANSACTION: 1,
  EVENTNODEREGISTRATIONTRANSACTION: 2,
  EVENTUPDATENODEREGISTRATIONTRANSACTION: 3,
  EVENTREMOVENODEREGISTRATIONTRANSACTION: 4,
  EVENTCLAIMNODEREGISTRATIONTRANSACTION: 5,
  EVENTSETUPACCOUNTDATASETTRANSACTION: 6,
  EVENTREMOVEACCOUNTDATASETTRANSACTION: 7,
  EVENTREWARD: 8,
  EVENTAPPROVALESCROWTRANSACTION: 9,
  EVENTMULTISIGNATURETRANSACTION: 10,
  EVENTFEEVOTECOMMITTRANSACTION: 11,
  EVENTFEEVOTEREVEALTRANSACTION: 12,
  EVENTLIQUIDPAYMENTTRANSACTION: 13,
  EVENTLIQUIDPAYMENTPAIDTRANSACTION: 14,
  EVENTLIQUIDPAYMENTSTOPTRANSACTION: 15,
  EVENTESCROWEDTRANSACTION: 16
};

goog.object.extend(exports, proto.model);
