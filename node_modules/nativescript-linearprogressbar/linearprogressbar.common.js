"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var view_2 = require("tns-core-modules/ui/core/view");
exports.indeterminateProperty = new view_2.Property({ name: 'indeterminate', defaultValue: false, valueConverter: view_2.booleanConverter, valueChanged: _onIndeterminateChanged });
exports.barColorProperty = new view_2.Property({ name: 'barColor', defaultValue: '#0000FF', valueChanged: _onBarColorChanged });
var Common = (function (_super) {
    __extends(Common, _super);
    function Common() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Common.prototype[exports.indeterminateProperty.getDefault] = function () {
        this.indeterminate = false;
        return false;
    };
    Common.prototype[exports.barColorProperty.getDefault] = function () {
        this.barColor = '#0000FF';
        return '#0000FF';
    };
    Common.prototype._setBarColor = function (color) {
        this.barColor = color;
    };
    Common.prototype._setIndeterminate = function (indeterminate) {
        this.indeterminate = indeterminate;
    };
    return Common;
}(view_1.View));
exports.Common = Common;
function _onIndeterminateChanged(target, oldValue, newValue) {
    target.setIndeterminate(newValue);
}
function _onBarColorChanged(target, oldValue, newValue) {
    target.setBarColor(newValue);
}
exports.indeterminateProperty.register(Common);
exports.barColorProperty.register(Common);
//# sourceMappingURL=linearprogressbar.common.js.map