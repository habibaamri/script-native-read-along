"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linearprogressbar_common_1 = require("./linearprogressbar.common");
var color_1 = require("tns-core-modules/color");
var Linearprogressbar = (function (_super) {
    __extends(Linearprogressbar, _super);
    function Linearprogressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Linearprogressbar.prototype.createNativeView = function () {
        this._nativeView = new android.widget.ProgressBar(this._context, null, android.R.attr.progressBarStyleHorizontal);
        this.setBarColor(this.barColor);
        this.setIndeterminate(this.indeterminate);
        return this._nativeView;
    };
    Linearprogressbar.prototype.setBarColor = function (color) {
        if (!this._nativeView) {
            return;
        }
        if (!color_1.Color.isValid(color)) {
            color = '#00F';
        }
        this._setBarColor(color);
        this._nativeView.getIndeterminateDrawable().setColorFilter(new color_1.Color(color).android, android.graphics.PorterDuff.Mode.SRC_IN);
    };
    Linearprogressbar.prototype.setIndeterminate = function (indeterminate) {
        if (!this._nativeView) {
            return;
        }
        this._setIndeterminate(indeterminate);
        this._nativeView.setIndeterminate(indeterminate);
    };
    return Linearprogressbar;
}(linearprogressbar_common_1.Common));
exports.Linearprogressbar = Linearprogressbar;
//# sourceMappingURL=linearprogressbar.js.map