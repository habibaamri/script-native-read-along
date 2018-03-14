
// Page loaded
function pageLoaded() {

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

/* test sound
var sound = require("nativescript-sound");

exports.tap = function() {
    sound.play("../../audio/angel.mp3");
};
*/

/* test slider*/

function dragged(args){
  //var newValue=play.getAudioTrackDuration;
   let newValue = args.newValue;
   let object = args.object;
}

exports.dragged=dragged;
