"use strict";
var content_view_1 = require("ui/content-view");
var color_1 = require("color");
var AudioPlot = (function (_super) {
    __extends(AudioPlot, _super);
    function AudioPlot() {
        var _this = _super.call(this) || this;
        console.log('--------- AudioPlot ---------');
        _this._ios = EZAudioPlot.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
        return _this;
    }
    Object.defineProperty(AudioPlot.prototype, "_nativeView", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlot.prototype, "plotColor", {
        set: function (value) {
            this._color = value;
            this._ios.color = new color_1.Color(value).ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlot.prototype, "fill", {
        set: function (value) {
            this._fill = value;
            this._ios.shouldFill = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlot.prototype, "mirror", {
        set: function (value) {
            this._mirror = value;
            this._ios.shouldMirror = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlot.prototype, "plotType", {
        set: function (type) {
            this._plotType = type;
            switch (type) {
                case 'buffer':
                    this._ios.plotType = EZPlotTypeBuffer;
                    break;
                case 'rolling':
                    this._ios.plotType = EZPlotTypeRolling;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioPlot.prototype, "bufferData", {
        set: function (data) {
            this._ios.updateBufferWithBufferSize(data.buffer, data.bufferSize);
        },
        enumerable: true,
        configurable: true
    });
    return AudioPlot;
}(content_view_1.ContentView));
exports.AudioPlot = AudioPlot;
//# sourceMappingURL=audioplot.js.map