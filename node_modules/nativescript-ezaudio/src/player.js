"use strict";
var observable_1 = require("data/observable");
var core_1 = require("./core");
var TNSEZAudioDelegate = (function (_super) {
    __extends(TNSEZAudioDelegate, _super);
    function TNSEZAudioDelegate() {
        return _super.apply(this, arguments) || this;
    }
    TNSEZAudioDelegate.prototype.initPlayer = function (emitEvents) {
        this.player = EZAudioPlayer.sharedAudioPlayer();
        this.player.delegate = this;
        this.setupNotifications();
        if (emitEvents) {
            this.setupEvents();
        }
    };
    TNSEZAudioDelegate.prototype.audioPlayerPlayedAudioWithBufferSizeWithNumberOfChannelsInAudioFile = function (player, buffer, bufferSize, numberOfChannels, audioFile) {
        if (this.audioEvents) {
            this._bufferEvent.data.buffer = buffer.value;
            this._bufferEvent.data.bufferSize = bufferSize;
            this.audioEvents.notify(this._bufferEvent);
        }
    };
    TNSEZAudioDelegate.prototype.audioPlayerUpdatedPositionInAudioFile = function (player, framePosition, audioFile) {
        if (this.audioEvents) {
            this._positionEvent.data.position = framePosition;
            this.audioEvents.notify(this._positionEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didChangeAudioFile = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._changeAudioFileEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didChangeOutputDevice = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._changeOutputEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didChangePan = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._changePanEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didChangePlayState = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._changePlayStateEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didChangeVolume = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._changeVolumeEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didReachEndOfFile = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._reachedEndEvent);
        }
    };
    TNSEZAudioDelegate.prototype.didSeek = function (notification) {
        if (this.audioEvents) {
            this.audioEvents.notify(this._seekedEvent);
        }
    };
    TNSEZAudioDelegate.prototype.addNotificationObserver = function (notificationName, onReceiveCallback) {
        var observer = core_1.EZNotificationObserver.new().initWithCallback(onReceiveCallback);
        NSNotificationCenter.defaultCenter().addObserverSelectorNameObject(observer, "onReceive", notificationName, this.player);
        this._observers.push(observer);
        return observer;
    };
    TNSEZAudioDelegate.prototype.removeNotificationObserver = function (observer, notificationName) {
        var index = this._observers.indexOf(observer);
        if (index >= 0) {
            this._observers.splice(index, 1);
            NSNotificationCenter.defaultCenter().removeObserverNameObject(observer, notificationName, this.player);
        }
    };
    TNSEZAudioDelegate.prototype.setupNotifications = function () {
        this._observers = new Array();
        this.addNotificationObserver("EZAudioPlayerDidChangeAudioFileNotification", this.didChangeAudioFile.bind(this));
        this.addNotificationObserver("EZAudioPlayerDidChangeOutputDeviceNotification", this.didChangeOutputDevice.bind(this));
        this.addNotificationObserver("EZAudioPlayerDidChangePanNotification", this.didChangePan.bind(this));
        this.addNotificationObserver("EZAudioPlayerDidChangePlayStateNotification", this.didChangePlayState.bind(this));
        this.addNotificationObserver("EZAudioPlayerDidChangeVolumeNotification", this.didChangeVolume.bind(this));
        this.addNotificationObserver("EZAudioPlayerDidReachEndOfFileNotification", this.didReachEndOfFile.bind(this));
        this.addNotificationObserver("EZAudioPlayerDidSeekNotification", this.didSeek.bind(this));
    };
    TNSEZAudioDelegate.prototype.setupEvents = function () {
        this.audioEvents = new observable_1.Observable();
        this._bufferEvent = {
            eventName: 'audioBuffer',
            data: {
                buffer: 0,
                bufferSize: 0
            }
        };
        this._positionEvent = {
            eventName: 'position',
            data: {
                position: 0
            }
        };
        this._reachedEndEvent = {
            eventName: 'reachedEnd'
        };
        this._changeAudioFileEvent = {
            eventName: 'changeAudioFile'
        };
        this._changeOutputEvent = {
            eventName: 'changeOutput'
        };
        this._changePanEvent = {
            eventName: 'changePan'
        };
        this._changeVolumeEvent = {
            eventName: 'changeVolume'
        };
        this._changePlayStateEvent = {
            eventName: 'changePlayState'
        };
        this._seekedEvent = {
            eventName: 'seeked'
        };
    };
    return TNSEZAudioDelegate;
}(NSObject));
TNSEZAudioDelegate.ObjCProtocols = [EZAudioPlayerDelegate];
var TNSEZAudioPlayer = (function () {
    function TNSEZAudioPlayer(emitEvents) {
        this._audioFileLoaded = false;
        this._playing = false;
        this._delegate = new TNSEZAudioDelegate();
        this._delegate.initPlayer(emitEvents);
    }
    TNSEZAudioPlayer.prototype.delegate = function () {
        return this._delegate;
    };
    TNSEZAudioPlayer.prototype.togglePlay = function (fileName, reloadTrack) {
        if (!this._audioFileLoaded || reloadTrack) {
            this._playbackSession = AVAudioSession.sharedInstance();
            var errorRef = new interop.Reference();
            this._playbackSession.setCategoryError(AVAudioSessionCategoryPlayback, errorRef);
            if (errorRef) {
                console.log("setCategoryError: " + errorRef.value);
            }
            this._playbackSession.setActiveError(true, null);
            this.loadAndPlayAudioFile(fileName);
        }
        else if (this._playing) {
            this.pause();
        }
        else {
            this._delegate.player.play();
            this._playing = true;
        }
    };
    TNSEZAudioPlayer.prototype.pause = function () {
        this._delegate.player.pause();
        this._playing = false;
    };
    TNSEZAudioPlayer.prototype.isPlaying = function () {
        return this._playing;
    };
    TNSEZAudioPlayer.prototype.duration = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.duration;
        }
        else {
            return 0;
        }
    };
    TNSEZAudioPlayer.prototype.formattedDuration = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.formattedDuration;
        }
        else {
            return '00:00';
        }
    };
    TNSEZAudioPlayer.prototype.totalFrames = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.totalFrames;
        }
        else {
            return 0;
        }
    };
    TNSEZAudioPlayer.prototype.formattedCurrentTime = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.formattedCurrentTime;
        }
        else {
            return '00:00';
        }
    };
    TNSEZAudioPlayer.prototype.setCurrentTime = function (time) {
        if (this._audioFileLoaded) {
            this._delegate.player.setCurrentTime(time);
        }
        else {
            this.noFileError();
        }
    };
    TNSEZAudioPlayer.prototype.seekToFrame = function (frame) {
        if (this._audioFileLoaded) {
            this._delegate.player.seekToFrame(frame);
        }
        else {
            this.noFileError();
        }
    };
    TNSEZAudioPlayer.prototype.volume = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.volume;
        }
        else {
            return 0;
        }
    };
    TNSEZAudioPlayer.prototype.setVolume = function (volume) {
        if (this._audioFileLoaded) {
            if (volume >= 0 || volume <= 1) {
                this._delegate.player.setVolume(volume);
            }
            else {
                console.log('Volume must be >= 0 or <= 1.');
            }
        }
        else {
            this.noFileError();
        }
    };
    TNSEZAudioPlayer.prototype.pan = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.pan;
        }
        else {
            return 0;
        }
    };
    TNSEZAudioPlayer.prototype.setPan = function (pan) {
        if (this._audioFileLoaded) {
            if (pan >= -1 || pan <= 1) {
                this._delegate.player.setPan(pan);
            }
            else {
                console.log('Pan must be >= -1 or <= 1.');
            }
        }
        else {
            this.noFileError();
        }
    };
    TNSEZAudioPlayer.prototype.device = function () {
        if (this._audioFileLoaded) {
            return this._delegate.player.device;
        }
        else {
            return 0;
        }
    };
    TNSEZAudioPlayer.prototype.loadAndPlayAudioFile = function (file) {
        var soundPath = file;
        if (file.indexOf('/') !== 0) {
            var fileParts = file.split('.');
            var filePath = fileParts[0];
            var fileExt = fileParts[1];
            soundPath = NSBundle.mainBundle().pathForResourceOfType(filePath, fileExt);
        }
        var url = NSURL.fileURLWithPath(soundPath);
        this._currentAudioFile = EZAudioFile.audioFileWithURL(url);
        this._delegate.player.playAudioFile(this._currentAudioFile);
        this._audioFileLoaded = true;
        this._playing = true;
    };
    TNSEZAudioPlayer.prototype.noFileError = function () {
        console.log('No audio file loaded.');
    };
    return TNSEZAudioPlayer;
}());
exports.TNSEZAudioPlayer = TNSEZAudioPlayer;
//# sourceMappingURL=player.js.map