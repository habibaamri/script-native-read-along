"use strict";
var observable_1 = require("data/observable");
var TNSEZRecorderDelegate = (function (_super) {
    __extends(TNSEZRecorderDelegate, _super);
    function TNSEZRecorderDelegate() {
        var _this = _super.apply(this, arguments) || this;
        _this.isRecording = false;
        return _this;
    }
    TNSEZRecorderDelegate.prototype.initRecorder = function () {
        var _this = this;
        this.initSession();
        this._recordingSession.requestRecordPermission(function (allowed) {
            if (allowed) {
                _this.microphone = EZMicrophone.microphoneWithDelegate(_this);
                _this.setupEvents();
            }
        });
    };
    TNSEZRecorderDelegate.prototype.initSession = function () {
        this._recordingSession = AVAudioSession.sharedInstance();
        var errorRef = new interop.Reference();
        this._recordingSession.setCategoryError(AVAudioSessionCategoryPlayAndRecord, errorRef);
        if (errorRef) {
            console.log("setCategoryError: " + errorRef.value);
        }
        this._recordingSession.setActiveError(true, null);
    };
    TNSEZRecorderDelegate.prototype.toggleRecord = function (filePath) {
        if (this.isRecording) {
            this.microphone.stopFetchingAudio();
            this.finish();
        }
        else {
            this.initSession();
            this.microphone.startFetchingAudio();
            this.recorder = EZRecorder.recorderWithURLClientFormatFileTypeDelegate(NSURL.fileURLWithPath(filePath), this.microphone.audioStreamBasicDescription(), EZRecorderFileTypeM4A, this);
        }
        this.isRecording = !this.isRecording;
    };
    TNSEZRecorderDelegate.prototype.finish = function () {
        this.recorder.closeAudioFile();
    };
    TNSEZRecorderDelegate.prototype.microphoneHasBufferListWithBufferSizeWithNumberOfChannels = function (microphone, bufferList, bufferSize, numberOfChannels) {
        if (this.isRecording) {
            this.recorder.appendDataFromBufferListWithBufferSize(bufferList, bufferSize);
        }
    };
    TNSEZRecorderDelegate.prototype.recorderUpdatedCurrentTime = function (recorder) {
        var formattedCurrentTime = recorder.formattedCurrentTime;
        console.log("recording time: " + formattedCurrentTime);
        if (this.audioEvents) {
            this._recordTimeEvent.data.time = formattedCurrentTime;
            this.audioEvents.notify(this._recordTimeEvent);
        }
    };
    TNSEZRecorderDelegate.prototype.microphoneHasAudioReceivedWithBufferSizeWithNumberOfChannels = function (microphone, buffer, bufferSize, numberOfChannels) {
        if (this.audioEvents) {
            this._bufferEvent.data.buffer = buffer.value;
            this._bufferEvent.data.bufferSize = bufferSize;
            this.audioEvents.notify(this._bufferEvent);
        }
    };
    TNSEZRecorderDelegate.prototype.microphoneChangedDevice = function (device) {
        console.log("Changed input device: " + device);
    };
    TNSEZRecorderDelegate.prototype.microphoneChangedPlayingState = function (mic, isPlaying) {
        console.log("microphone changed state: " + isPlaying);
    };
    TNSEZRecorderDelegate.prototype.recorderDidClose = function (recorder) {
        this.recorder.delegate = undefined;
    };
    TNSEZRecorderDelegate.prototype.setupEvents = function () {
        this.audioEvents = new observable_1.Observable();
        this._bufferEvent = {
            eventName: 'audioBuffer',
            data: {
                buffer: 0,
                bufferSize: 0
            }
        };
        this._recordTimeEvent = {
            eventName: 'recordTime',
            data: {
                time: 0
            }
        };
    };
    return TNSEZRecorderDelegate;
}(NSObject));
TNSEZRecorderDelegate.ObjCProtocols = [EZRecorderDelegate, EZMicrophoneDelegate];
var TNSEZRecorder = (function () {
    function TNSEZRecorder() {
        this._delegate = new TNSEZRecorderDelegate();
        this._delegate.initRecorder();
    }
    TNSEZRecorder.prototype.delegate = function () {
        return this._delegate;
    };
    TNSEZRecorder.prototype.record = function (filePath) {
        this._delegate.toggleRecord(filePath);
    };
    TNSEZRecorder.prototype.stop = function () {
        this._delegate.toggleRecord();
    };
    TNSEZRecorder.prototype.finish = function () {
        this._delegate.finish();
    };
    TNSEZRecorder.prototype.isRecording = function () {
        return this._delegate.isRecording;
    };
    TNSEZRecorder.prototype.deviceInputs = function () {
        return EZAudioDevice.inputDevices;
    };
    TNSEZRecorder.prototype.setDevice = function (device) {
        this._delegate.microphone.setDevice(device);
    };
    return TNSEZRecorder;
}());
exports.TNSEZRecorder = TNSEZRecorder;
//# sourceMappingURL=recorder.js.map