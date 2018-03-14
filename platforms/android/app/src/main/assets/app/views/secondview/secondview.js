
// Page loaded
function pageLoaded(args) {

}
exports.pageLoaded = pageLoaded;



var ns_audio = require("nativescript-audio");
var player = new ns_audio.TNSPlayer();
var playerOptions = {
        audioFile: "http://www.noiseaddicts.com/samples_1w72b820/2514.mp3",
        loop: false,
        completeCallback: function () {
            console.log('completePlayer')
        },
        errorCallback: function (errorObject) {
            console.log(JSON.stringify(errorObject));
        },
        infoCallback: function (args) {
            console.log(JSON.stringify(args));
        }
    };

player.playFromUrl(playerOptions)
        .then(function (res) {
            console.log(res);
        })
        .catch(function () {
            console.log("didn't work...");
        })
/* Pause Audio */
function pause(args) {
     if (player != undefined) {
         player.pause();

        }
    }
exports.pause = pause;

/* Play Audio */
function play(args) {
     if (player != undefined) {
         player.play();
        }
    }
exports.play = play;

/* Play Audio */
function restart(args) {
     if (player != undefined) {
         player.play();
        }
    }
exports.restart = restart;



function changeColor(args) {
   var btn = args.object;
   btn.backgroundColor = "#3489db";
}
exports.changeColor=changeColor;



var nativescript_audio_1 = require("nativescript-audio");
var YourClass = (function () {
    function YourClass() {
        var _this = this;
        this._player = new nativescript_audio_1.TNSPlayer();
        this._player.initFromFile({
          //  audioFile: '../../audio/angel.mp3',
            audioFile: "http://www.noiseaddicts.com/samples_1w72b820/2514.mp3",
            loop: false,

          //  completeCallback: this._trackComplete.bind(this),
          //  errorCallback: this._trackError.bind(this)
        }).then(function () {
            _this._player.getAudioTrackDuration().then(function (duration) {
                // iOS: duration is in seconds
                // Android: duration is in milliseconds
                console.log("song duration:", duration);
            });
        });
    }
    YourClass.prototype.togglePlay = function () {
        if (this._player.isAudioPlaying()) {
            this._player.pause();
        }
        else {
            this._player.play();
        }
    };
    return YourClass;
}());
exports.YourClass = YourClass;

function dragged(args){
   var newValue = args.newValue;
   var object = args.object;
   player.getAudioTrackDuration()
          .then(function(duration){
                                    console.log(duration);});
}

exports.dragged=dragged;
var observable = require("data/observable");
var time = (function (_super) {
    __extends(time, _super);
    function time() {
      player.getAudioTrackDuration()
             .then(function(duration){ console.log(duration);});
      this.set("audioDuration",duration);}
    }
    )(observable.Observable);
exports.time = time;
var observable = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
        this.set("progress", 10);
    }
    HelloWorldModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("progress", this.progress+5);
            this.set("message", this.counter + " taps left");
        }
    };
    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
