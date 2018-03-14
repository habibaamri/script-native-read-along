export declare class TNSEZRecorder {
    private _delegate;
    constructor();
    delegate(): any;
    record(filePath: string): void;
    stop(): void;
    finish(): void;
    isRecording(): boolean;
    deviceInputs(): Array<any>;
    setDevice(device: any): void;
}
