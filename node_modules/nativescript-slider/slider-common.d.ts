import view = require("ui/core/view");
import definition = require("nativescript-slider");
import dependencyObservable = require("ui/core/dependency-observable");
export declare class Slider extends view.View implements definition.Slider {
    static valueProperty: dependencyObservable.Property;
    static minValueProperty: dependencyObservable.Property;
    static maxValueProperty: dependencyObservable.Property;
    constructor();
    value: number;
    minValue: number;
    maxValue: number;
}
