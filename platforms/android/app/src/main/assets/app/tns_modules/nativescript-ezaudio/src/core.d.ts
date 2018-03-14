export declare class EZNotificationObserver extends NSObject {
    private _onReceiveCallback;
    static new(): EZNotificationObserver;
    initWithCallback(onReceiveCallback: (notification: NSNotification) => void): EZNotificationObserver;
    onReceive(notification: NSNotification): void;
    static ObjCExposedMethods: {
        "onReceive": {
            returns: any;
            params: typeof NSNotification[];
        };
    };
}
