import { ContentView } from "ui/content-view";
export declare class AudioPlot extends ContentView {
    private _color;
    private _fill;
    private _mirror;
    private _plotType;
    private _ios;
    constructor();
    readonly _nativeView: any;
    plotColor: string;
    fill: boolean;
    mirror: boolean;
    plotType: string;
    bufferData: any;
}
