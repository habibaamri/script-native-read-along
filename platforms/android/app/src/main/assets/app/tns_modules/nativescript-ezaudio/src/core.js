"use strict";
var EZNotificationObserver = (function (_super) {
    __extends(EZNotificationObserver, _super);
    function EZNotificationObserver() {
        return _super.apply(this, arguments) || this;
    }
    EZNotificationObserver.new = function () {
        return _super.new.call(this);
    };
    EZNotificationObserver.prototype.initWithCallback = function (onReceiveCallback) {
        this._onReceiveCallback = onReceiveCallback;
        return this;
    };
    EZNotificationObserver.prototype.onReceive = function (notification) {
        this._onReceiveCallback(notification);
    };
    return EZNotificationObserver;
}(NSObject));
EZNotificationObserver.ObjCExposedMethods = {
    "onReceive": { returns: interop.types.void, params: [NSNotification] }
};
exports.EZNotificationObserver = EZNotificationObserver;
//# sourceMappingURL=core.js.map