"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var OrderEventType;
(function (OrderEventType) {
    OrderEventType[OrderEventType["CANCEL"] = 0] = "CANCEL";
    OrderEventType[OrderEventType["CREATE"] = 1] = "CREATE";
    OrderEventType[OrderEventType["PAY"] = 2] = "PAY";
    OrderEventType[OrderEventType["UNDERWRITE"] = 3] = "UNDERWRITE";
    OrderEventType[OrderEventType["TAKE_EFFECT"] = 4] = "TAKE_EFFECT";
    OrderEventType[OrderEventType["EXPIRED"] = 5] = "EXPIRED";
    OrderEventType[OrderEventType["UPDATE"] = 10] = "UPDATE";
    OrderEventType[OrderEventType["ADD_DRIVER"] = 11] = "ADD_DRIVER";
    OrderEventType[OrderEventType["DELETE_DRIVER"] = 12] = "DELETE_DRIVER";
    OrderEventType[OrderEventType["SET_DRIVING_VIEW"] = 13] = "SET_DRIVING_VIEW";
})(OrderEventType = exports.OrderEventType || (exports.OrderEventType = {}));
