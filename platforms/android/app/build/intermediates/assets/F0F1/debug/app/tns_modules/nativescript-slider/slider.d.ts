import common = require("./slider-common");
import style = require("ui/styling/style");
export declare class Slider extends common.Slider {
    private _supressNativeValue;
    private _android;
    private _changeListener;
    static draggedEvent: string;
    _createUI(): void;
    readonly android: android.widget.SeekBar;
    _setNativeValuesSilently(newValue: number, newMaxValue: number): void;
}
export declare class SliderStyler implements style.Styler {
    private static setColorProperty(view, newValue);
    private static resetColorProperty(view, nativeValue);
    private static setBackgroundAndBorderProperty(view, newValue);
    private static resetBackgroundAndBorderProperty(view, nativeValue);
    static registerHandlers(): void;
}
