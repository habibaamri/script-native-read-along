
var color_1 = require("color");
var view = require("ui/html-view");
var htmlView = new view.HtmlView();
var timer = require("timer");
var coreView = require("ui/core/view");

var observable = require("data/observable");
var observableArray = require("data/observable-array");
var testModel = new observableArray.ObservableArray();
var model = require("./models/testModel");
var buttonModule=require("ui/button");
var animate=require("ui/animation");
var ns_audio = require("nativescript-audio");
var player = new ns_audio.TNSPlayer();
var page;
var color =new color_1.Color("#B76769");
var sync;
htmlView.html = '<Strong>test html view</Strong>';


var playerOptions = {
        audioFile: '~/audio/testAudio.mp3',
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

function listViewItemTap(args) {
    var itemIndex = args.index;
    var object = args.object;
    console.log(itemIndex);
}
exports.listViewItemTap = listViewItemTap;
function test(args) {
    console.log(args.object.get('id'));
}
exports.test = test;
/* Play Audio */
function play(args) {

     if (player != undefined) {
         player.play();
         sync();
        }
    }
exports.play = play;

/* Pause Audio */
function pause(args) {
     if (player != undefined) {
         player.pause();
        }
    }
exports.pause = pause;

/* Restart Audio */
function restart(args) {
     if (player != undefined) {
         player.play();
        }
        sync();
    }
exports.restart = restart;
var dialog = require("nativescript-dialog");

function onTap(args) {
  /*  console.log("onTap id: "  + args.object.get("text"));
      alert(args.object.get("text"));

if(platform.device.os === platform.platformNames.ios){

} else if(platform.device.os === platform.platformNames.android){}*/
  dialog.show({
    title: "Loading...",
    message: args.object.get("text"),
    okButtonText: "Translate",
    cancelButtonText: "Cancel",
  }
  ).then(function(r){ console.log("Result: " + r); },
  function(e){console.log("Error: " + e)});
}
exports.onTap=onTap;
var array = new observableArray.ObservableArray();
 array.push( [
   { "id" : 1, "item": "In", "begin" : "0.775", "end": "0.929","color":"#fff"},
 	{ "id" : 2, "item": "those", "begin" : "0.929", "end": "1.209","color":"#fff"},
 	{ "id" : 3, "item": "days", "begin" : "1.218", "end": "1.508","color":"#fff"},
 	{ "id" : 4, "item": "a", "begin" : "1.508", "end": "1.639","color":"#fff"},
 	{ "id" : 5, "item": "decree", "begin" : "1.639", "end": "2.164","color":"#fff"},
 	{ "id" : 6, "item": "went", "begin" : "2.165", "end": "2.356","color":"#fff"},
 	{ "id" : 7, "item": "out", "begin" : "2.355", "end": "2.58","color":"#fff"},
 	{ "id" : 8, "item": "from", "begin" : "2.583", "end": "2.828","color":"#fff"},
 	{ "id" : 9, "item": "Caesar", "begin" : "2.828", "end": "3.266","color":"#fff"},
 	{ "id" : 10, "item": "Augustus", "begin" : "3.267", "end": "3.904","color":"#fff"},
 	{ "id" : 11, "item": "that", "begin" : "4.03", "end": "4.196","color":"#fff"},
 	{ "id" : 12, "word": "all", "begin" : "4.216", "end": "4.484","color":"#fff"},
 	{ "id" : 13, "item": "the", "begin" : "4.486", "end": "4.597","color":"#fff"},
  { "id" : 14, "item": "world", "begin" : "4.594", "end": "5.005","color":"#fff"},
  { "id" : 15, "item": "should", "begin" : "5.006", "end": "5.211","color":"#fff"},
  { "id" : 16, "item": "be", "begin" : "5.211", "end": "5.345","color":"#fff"},
  { "id" : 17, "item": "registered", "begin" : "5.344", "end": "5.873","color":"#fff"},
  { "id" : 18, "item": "This", "begin" : "6.675", "end": "6.876","color":"#fff"},
  { "id" : 19, "item": "was", "begin" : "6.876", "end": "7","color":"#fff"},
  { "id" : 20, "item": "the", "begin" : "7",  "duration" : "0.11",  "end":"7.11","color":"#fff"},
  { "id" : 21, "item": "first", "begin" : "7.11", "end": "7.431","color":"#fff"},
  { "id" : 22, "item": "registration", "begin" : "7.431", "end": "8.193","color":"#fff"},
  { "id" : 23, "item": "when", "begin" : "8.193", "end": "8.357","color":"#fff"},
  { "id" : 24, "item": "Quirinius", "begin" : "8.357", "end": "8.831","color":"#fff"},
  { "id" : 25, "item": "was", "begin" : "8.834", "end": "9.04","color":"#fff"},
  { "id" : 26, "item": "governor", "begin" : "9.041", "end": "9.379","color":"#fff"},
  { "id" : 27, "item": "of", "begin" : "9.379", "end": "9.461","color":"#fff"},
  { "id" : 28, "item": "Syria", "begin" : "9.46", "end": "9.937","color":"#fff"},
  { "id" : 29, "item": "And", "begin" : "10.676", "end": "10.795","color":"#fff"},
  { "id" : 30, "item": "all", "begin" : "10.794", "end": "11.034","color":"#fff"},
  { "id" : 31, "item": "went", "begin" : "11.034", "end": "11.22","color":"#fff"},
  { "id" : 32, "item": "to", "begin" : "11.22", "end": "11.307","color":"#fff"},
  { "id" : 33, "item": "be", "begin" : "11.307", "end": "11.446","color":"#fff"},
  { "id" : 34, "item": "registered", "begin" : "11.446", "end": "12.038","color":"#fff"},
  { "id" : 35, "item": "each", "begin" : "12.284", "end": "12.535","color":"#fff"},
  { "id" : 36, "item": "to", "begin" : "12.572", "end": "12.665","color":"#fff"},
  { "id" : 37, "item": "his", "begin" : "12.665", "end": "12.799","color":"#fff"},
  { "id" : 38, "item": "own", "begin" : "12.799", "end": "13.074","color":"#fff"},
  { "id" : 39, "item": "town", "begin" : "13.074", "end": "13.541","color":"#fff"},
  { "id" : 40, "item": "And", "begin" : "14.369", "end": "14.553","color":"#fff"},
  { "id" : 41, "item": "Joseph", "begin" : "14.553", "end": "14.911","color":"#fff"},
  { "id" : 42, "item": "also", "begin" : "14.911", "end": "15.262","color":"#fff"},
  { "id" : 43, "item": "went", "begin" : "15.262", "end": "15.39","color":"#fff"},
  { "id" : 44, "item": "up", "begin" : "15.39", "end": "15.542","color":"#fff"},
  { "id" : 45, "item": "from", "begin" : "15.595", "end": "15.81","color":"#fff"},
  { "id" : 46, "item": "Galilee", "begin" : "15.811", "end": "16.352","color":"#fff"},
  { "id" : 47, "item": "from", "begin" : "16.557", "end": "16.631","color":"#fff"},
  { "id" : 48, "item": "the", "begin" : "16.632", "end": "16.753","color":"#fff"},
  { "id" : 49, "item": "town", "begin" : "16.752", "end": "16.988","color":"#fff"},
  { "id" : 50, "item": "of", "begin" : "16.988", "end": "17.085","color":"#fff"},
  { "id" : 51, "item": "Nazareth", "begin" : "17.085", "end": "17.644","color":"#fff"},
  { "id" : 52, "item": "to", "begin" : "17.966", "end": "18.12","color":"#fff"},
  { "id" : 53, "item": "Judea", "begin" : "18.12", "end": "18.695","color":"#fff"},
  { "id" : 54, "item": "to", "begin" : "18.823", "end": "18.952","color":"#fff"},
  { "id" : 55, "item": "the", "begin" : "18.952", "end": "19.011","color":"#fff"},
  { "id" : 56, "item": "city", "begin" : "19.011", "end": "19.321","color":"#fff"},
  { "id" : 57, "item": "of", "begin" : "19.321", "end": "19.487","color":"#fff"},
  { "id" : 58, "item": "David", "begin" : "19.487", "end": "19.88","color":"#fff"},
  { "id" : 59, "item": "which", "begin" : "20.029", "end": "20.19","color":"#fff"},
  { "id" : 60, "item": "is", "begin" : "20.19", "end": "20.299","color":"#fff"},
  { "id" : 61, "item": "called", "begin" : "20.321", "end": "20.628","color":"#fff"},
  { "id" : 62, "item": "Bethlehem", "begin" : "20.628", "end": "21.27","color":"#fff"},
  { "id" : 63, "item": "because", "begin" : "21.76", "end": "22.077","color":"#fff"},
  { "id" : 64, "item": "he", "begin" : "22.077", "end": "22.193","color":"#fff"},
  { "id" : 65, "item": "was", "begin" : "22.193", "end": "22.297","color":"#fff"},
  { "id" : 66, "item": "of", "begin" : "22.297", "end": "22.463","color":"#fff"},
  { "id" : 67, "item": "the", "begin" : "22.463", "end": "22.522","color":"#fff"},
  { "id" : 68, "item": "house", "begin" : "22.522", "end": "22.934","color":"#fff"},
  { "id" : 69, "item": "and", "begin" : "22.935", "end": "23.09","color":"#fff"},
  { "id" : 70, "item": "lineage", "begin" : "23.09", "end": "23.474","color":"#fff"},
  { "id" : 71, "item": "of", "begin" : "23.474", "end": "23.649","color":"#fff"},
  { "id" : 72, "item": "David", "begin" : "23.648", "end": "24.069","color":"#fff"},
  { "id" : 73, "item": "to", "begin" : "24.714", "end": "24.841","color":"#fff"},
  { "id" : 74, "item": "be", "begin" : "24.84", "end": "25.012","color":"#fff"},
  { "id" : 75, "item": "registered", "begin" : "25.013", "end": "25.543","color":"#fff"},
  { "id" : 76, "item": "with", "begin" : "25.543", "end": "25.668","color":"#fff"},
  { "id" : 77, "item": "Mary", "begin" : "25.668", "end": "26.183","color":"#fff"},
  { "id" : 78, "item": "his", "begin" : "26.183", "end": "26.355","color":"#fff"},
  { "id" : 79, "item": "betrothed", "begin" : "26.355", "end": "26.962","color":"#fff"},
  { "id" : 80, "item": "who", "begin" : "27.134", "end": "27.257","color":"#fff"},
  { "id" : 81, "item": "was", "begin" : "27.257", "end": "27.423","color":"#fff"},
  { "id" : 82, "item": "with", "begin" : "27.423", "end": "27.59","color":"#fff"},
  { "id" : 83, "item": "child", "begin" : "27.59", "end": "28.103","color":"#fff"},
  { "id" : 84, "item": "And", "begin" : "29.448", "end": "29.609","color":"#fff"},
  { "id" : 85, "item": "while", "begin" : "29.609", "end": "29.971","color":"#fff"},
  { "id" : 86, "item": "they", "begin" : "29.97", "end": "30.129","color":"#fff"},
  { "id" : 87, "item": "were", "begin" : "30.129", "end": "30.295","color":"#fff"},
  { "id" : 88, "item": "there", "begin" : "30.295", "end": "30.731","color":"#fff"},
  { "id" : 89, "item": "the", "begin" : "31.072", "end": "31.231","color":"#fff"},
  { "id" : 90, "item": "time", "begin" : "31.231", "end": "31.662","color":"#fff"},
  { "id" : 91, "item": "came", "begin" : "31.662", "end": "31.939","color":"#fff"},
  { "id" : 92, "item": "for", "begin" : "31.939", "end": "32.1","color":"#fff"},
  { "id" : 93, "item": "her", "begin" : "32.1", "end": "32.193","color":"#fff"},
  { "id" : 94, "item": "to", "begin" : "32.193", "end": "32.3","color":"#fff"},
  { "id" : 95, "item": "give", "begin" : "32.299", "end": "32.532","color":"#fff"},
  { "id" : 96, "item": "birth", "begin" : "32.522", "end": "32.874","color":"#fff"},
  { "id" : 97, "item": "And", "begin" : "33.972", "end": "34.105","color":"#fff"},
  { "id" : 98, "item": "she", "begin" : "34.105", "end": "34.318","color":"#fff"},
  { "id" : 99, "item": "gave", "begin" : "34.318", "end": "34.595","color":"#fff"},
  { "id" : 100, "item": "birth", "begin" : "34.596", "end": "34.849","color":"#fff"},
  { "id" : 101, "item": "to", "begin" : "34.888", "end": "34.957","color":"#fff"},
  { "id" : 102, "item": "her", "begin" : "34.957", "end": "35.128","color":"#fff"},
  { "id" : 103, "item": "firstborn", "begin" : "35.128", "end": "35.73","color":"#fff"},
  { "id" : 104, "item": "son", "begin" : "35.73", "end": "36.29","color":"#fff"},
  { "id" : 105, "item": "and", "begin" : "36.491", "end": "36.657","color":"#fff"},
  { "id" : 106, "item": "wrapped", "begin" : "36.657", "end": "36.999","color":"#fff"},
  { "id" : 107, "item": "him", "begin" : "36.998", "end": "37.151","color":"#fff"},
  { "id" : 108, "item": "in", "begin" : "37.152", "end": "37.271","color":"#fff"},
  { "id" : 109, "item": "swaddling", "begin" : "37.271", "end": "37.821","color":"#fff"},
  { "id" : 110, "item": "cloths", "begin" : "37.82", "end": "38.362","color":"#fff"},
  { "id" : 111, "item": "and", "begin" : "38.644", "end": "38.798","color":"#fff"},
  { "id" : 112, "item": "laid", "begin" : "38.798", "end": "39.085","color":"#fff"},
  { "id" : 113, "item": "him", "begin" : "39.085", "end": "39.261","color":"#fff"},
  { "id" : 114, "item": "in", "begin" : "39.261", "end": "39.348","color":"#fff"},
  { "id" : 115, "item": "a", "begin" : "39.348", "end": "39.44","color":"#fff"},
  { "id" : 116, "item": "manger", "begin" : "39.44", "end": "40.044","color":"#fff"},
  { "id" : 117, "item": "because", "begin" : "40.182", "end": "40.459","color":"#fff"},
  { "id" : 118, "item": "there", "begin" : "40.46", "end": "40.591","color":"#fff"},
  { "id" : 119, "item": "was", "begin" : "40.591", "end": "40.742","color":"#fff"},
  { "id" : 120, "item": "no", "begin" : "40.742", "end": "40.955","color":"#fff"},
  { "id" : 121, "item": "place", "begin" : "40.975", "end": "41.287","color":"#fff"},
  { "id" : 122, "item": "for", "begin" : "41.287", "end": "41.408","color":"#fff"},
  { "id" : 123, "item": "them", "begin" : "41.408", "end": "41.566","color":"#fff"},
  { "id" : 124, "item": "in", "begin" : "41.566", "end": "41.682","color":"#fff"},
  { "id" : 125, "item": "the", "begin" : "41.683", "end": "41.794","color":"#fff"},
  { "id" : 126, "item": "inn", "begin" : "41.794", "end": "42.2","color":"#fff"},
  { "id" : 127, "item": "And", "begin" : "43.166", "end": "43.31","color":"#fff"},
  { "id" : 128, "item": "in", "begin" : "43.309", "end": "43.398","color":"#fff"},
  { "id" : 129, "item": "the", "begin" : "43.398", "end": "43.5","color":"#fff"},
  { "id" : 130, "item": "same", "begin" : "43.5", "end": "43.829","color":"#fff"},
  { "id" : 131, "item": "region", "begin" : "43.829", "end": "44.235","color":"#fff"},
  { "id" : 132, "item": "there", "begin" : "44.236", "end": "44.382","color":"#fff"},
  { "id" : 133, "item": "were", "begin" : "44.382", "end": "44.464","color":"#fff"},
  { "id" : 134, "item": "shepherds", "begin" : "44.463", "end": "44.958","color":"#fff"},
  { "id" : 135, "item": "out", "begin" : "44.959", "end": "45.113","color":"#fff"},
  { "id" : 136, "item": "in", "begin" : "45.112", "end": "45.216","color":"#fff"},
  { "id" : 137, "item": "the", "begin" : "45.216", "end": "45.31","color":"#fff"},
  { "id" : 138, "item": "field", "begin" : "45.311", "end": "45.872","color":"#fff"},
  { "id" : 139, "item": "keeping", "begin" : "45.954", "end": "46.249","color":"#fff"},
  { "id" : 140, "item": "watch", "begin" : "46.249", "end": "46.583","color":"#fff"},
  { "id" : 141, "item": "over", "begin" : "46.583", "end": "46.756","color":"#fff"},
  { "id" : 142, "item": "their", "begin" : "46.756", "end": "46.863","color":"#fff"},
  { "id" : 143, "item": "flock", "begin" : "46.863", "end": "47.264","color":"#fff"},
  { "id" : 144, "item": "by", "begin" : "47.264", "end": "47.388","color":"#fff"},
  { "id" : 145, "item": "night", "begin" : "47.388", "end": "47.762","color":"#fff"},
  { "id" : 146, "item": "And", "begin" : "48.751", "end": "48.895","color":"#fff"},
  { "id" : 147, "item": "an", "begin" : "48.895", "end": "49.071","color":"#fff"},
  { "id" : 148, "item": "angel", "begin" : "49.071", "end": "49.48","color":"#fff"},
  { "id" : 149, "item": "of", "begin" : "49.479", "end": "49.588","color":"#fff"},
  { "id" : 150, "item": "the", "begin" : "49.588", "end": "49.722","color":"#fff"},
  { "id" : 151, "item": "Lord", "begin" : "49.722", "end": "49.955","color":"#fff"},
  { "id" : 152, "item": "appeared", "begin" : "49.955", "end": "50.446","color":"#fff"},
  { "id" : 153, "item": "to", "begin" : "50.446", "end": "50.553","color":"#fff"},
  { "id" : 154, "item": "them", "begin" : "50.553", "end": "50.863","color":"#fff"},
  { "id" : 155, "item": "and", "begin" : "51.164", "end": "51.29","color":"#fff"},
  { "id" : 156, "item": "the", "begin" : "51.29", "end": "51.476","color":"#fff"},
  { "id" : 157, "item": "glory", "begin" : "51.476", "end": "51.966","color":"#fff"},
  { "id" : 158, "item": "of", "begin" : "51.967", "end": "52.096","color":"#fff"},
  { "id" : 159, "item": "the", "begin" : "52.095", "end": "52.187","color":"#fff"},
  { "id" : 160, "item": "Lord", "begin" : "52.187", "end": "52.548","color":"#fff"},
  { "id" : 161, "item": "shone", "begin" : "52.548", "end": "52.957","color":"#fff"},
  { "id" : 162, "item": "around", "begin" : "52.957", "end": "53.393","color":"#fff"},
  { "id" : 163, "item": "them", "begin" : "53.393", "end": "53.623","color":"#fff"},
  { "id" : 164, "item": "and", "begin" : "53.899", "end": "54.001","color":"#fff"},
  { "id" : 165, "item": "they", "begin" : "54.001", "end": "54.085","color":"#fff"},
  { "id" : 166, "item": "were", "begin" : "54.085", "end": "54.177","color":"#fff"},
  { "id" : 167, "item": "filled", "begin" : "54.177", "end": "54.578","color":"#fff"},
  { "id" : 168, "item": "with", "begin" : "54.578", "end": "54.878","color":"#fff"},
  { "id" : 169, "item": "fear", "begin" : "54.878", "end": "55.359","color":"#fff"},
  { "id" : 170, "item": "And", "begin" : "55.998", "end": "56.105","color":"#fff"},
  { "id" : 171, "item": "the", "begin" : "56.104", "end": "56.213","color":"#fff"},
  { "id" : 172, "item": "angel", "begin" : "56.213", "end": "56.565","color":"#fff"},
  { "id" : 173, "item": "said", "begin" : "56.565", "end": "56.795","color":"#fff"},
  { "id" : 174, "item": "to", "begin" : "56.795", "end": "56.897","color":"#fff"},
  { "id" : 175, "item": "them", "begin" : "56.897", "end": "57.145","color":"#fff"},
  { "id" : 176, "item": "Fear", "begin" : "57.858", "end": "58.185","color":"#fff"},
  { "id" : 177, "item": "not", "begin" : "58.185", "end": "58.566","color":"#fff"},
  { "id" : 178, "item": "for", "begin" : "58.767", "end": "58.883","color":"#fff"},
  { "id" : 179, "item": "behold", "begin" : "58.883", "end": "59.586","color":"#fff"},
  { "id" : 180, "item": "I", "begin" : "60.051", "end": "60.323","color":"#fff"},
  { "id" : 181, "item": "bring", "begin" : "60.323", "end": "60.511","color":"#fff"},
  { "id" : 182, "item": "you", "begin" : "60.512", "end": "60.75","color":"#fff"},
  { "id" : 183, "item": "good", "begin" : "60.75", "end": "60.998","color":"#fff"},
  { "id" : 184, "item": "news", "begin" : "60.998", "end": "61.591","color":"#fff"},
  { "id" : 185, "item": "of", "begin" : "61.749", "end": "61.927","color":"#fff"},
  { "id" : 186, "item": "great", "begin" : "61.927", "end": "62.299","color":"#fff"},
  { "id" : 187, "item": "joy", "begin" : "62.299", "end": "62.921","color":"#fff"},
  { "id" : 188, "item": "that", "begin" : "63.247", "end": "63.361","color":"#fff"},
  { "id" : 189, "item": "will", "begin" : "63.361", "end": "63.532","color":"#fff"},
  { "id" : 190, "item": "be", "begin" : "63.532", "end": "63.701","color":"#fff"},
  { "id" : 191, "item": "for", "begin" : "63.701", "end": "63.852","color":"#fff"},
  { "id" : 192, "item": "all", "begin" : "63.852", "end": "64.167","color":"#fff"},
  { "id" : 193, "item": "the", "begin" : "64.167", "end": "64.316","color":"#fff"},
  { "id" : 194, "item": "people", "begin" : "64.316", "end": "64.797","color":"#fff"},
  { "id" : 195, "item": "For", "begin" : "65.384", "end": "65.55","color":"#fff"},
  { "id" : 196, "item": "unto", "begin" : "65.55", "end": "65.867","color":"#fff"},
  { "id" : 197, "item": "you", "begin" : "65.867", "end": "65.988","color":"#fff"},
  { "id" : 198, "item": "is", "begin" : "65.988", "end": "66.161","color":"#fff"},
  { "id" : 199, "item": "born", "begin" : "66.162", "end": "66.449","color":"#fff"},
  { "id" : 200, "item": "this", "begin" : "66.449", "end": "66.751","color":"#fff"},
  { "id" : 201, "item": "day", "begin" : "66.751", "end": "67.067","color":"#fff"},
  { "id" : 202, "item": "in", "begin" : "67.067", "end": "67.141","color":"#fff"},
  { "id" : 203, "item": "the", "begin" : "67.142", "end": "67.211","color":"#fff"},
  { "id" : 204, "item": "city", "begin" : "67.211", "end": "67.491","color":"#fff"},
  { "id" : 205, "item": "of", "begin" : "67.491", "end": "67.664","color":"#fff"},
  { "id" : 206, "item": "David", "begin" : "67.664", "end": "68.125","color":"#fff"},
  { "id" : 207, "item": "a", "begin" : "68.34", "end": "68.427","color":"#fff"},
  { "id" : 208, "item": "Savior", "begin" : "68.426", "end": "69.115","color":"#fff"},
  { "id" : 209, "item": "who", "begin" : "69.353", "end": "69.479","color":"#fff"},
  { "id" : 210, "item": "is", "begin" : "69.479", "end": "69.663","color":"#fff"},
  { "id" : 211, "item": "Christ", "begin" : "69.663", "end": "70.074","color":"#fff"},
  { "id" : 212, "item": "the", "begin" : "70.075", "end": "70.221","color":"#fff"},
  { "id" : 213, "item": "Lord", "begin" : "70.22", "end": "70.748","color":"#fff"},
  { "id" : 214, "item": "And", "begin" : "71.32", "end": "71.493","color":"#fff"},
  { "id" : 215, "item": "this", "begin" : "71.493", "end": "71.684","color":"#fff"},
  { "id" : 216, "item": "will", "begin" : "71.684", "end": "71.815","color":"#fff"},
  { "id" : 217, "item": "be", "begin" : "71.815", "end": "71.919","color":"#fff"},
  { "id" : 218, "item": "a", "begin" : "71.919", "end": "71.954","color":"#fff"},
  { "id" : 219, "item": "sign", "begin" : "71.954", "end": "72.415","color":"#fff"},
  { "id" : 220, "item": "for", "begin" : "72.415", "end": "72.577","color":"#fff"},
  { "id" : 221, "item": "you", "begin" : "72.577", "end": "73.013","color":"#fff"},
  { "id" : 222, "item": "you", "begin" : "73.352", "end": "73.471","color":"#fff"},
  { "id" : 223, "item": "will", "begin" : "73.471", "end": "73.565","color":"#fff"},
  { "id" : 224, "item": "find", "begin" : "73.565", "end": "73.964","color":"#fff"},
  { "id" : 225, "item": "a", "begin" : "73.963", "end": "74.104","color":"#fff"},
  { "id" : 226, "item": "baby", "begin" : "74.105", "end": "74.568","color":"#fff"},
  { "id" : 227, "item": "wrapped", "begin" : "74.818", "end": "75.234","color":"#fff"},
  { "id" : 228, "item": "in", "begin" : "75.234", "end": "75.38","color":"#fff"},
  { "id" : 229, "item": "swaddling", "begin" : "75.381", "end": "75.983","color":"#fff"},
  { "id" : 230, "item": "cloths", "begin" : "75.982", "end": "76.48","color":"#fff"},
  { "id" : 231, "item": "and", "begin" : "76.48", "end": "76.665","color":"#fff"},
  { "id" : 232, "item": "lying", "begin" : "76.665", "end": "77.024","color":"#fff"},
  { "id" : 233, "item": "in", "begin" : "77.024", "end": "77.116","color":"#fff"},
  { "id" : 234, "item": "a", "begin" : "77.116", "end": "77.19","color":"#fff"},
  { "id" : 235, "item": "manger", "begin" : "77.19", "end": "77.807","color":"#fff"},
  { "id" : 236, "item": "And", "begin" : "78.542", "end": "78.703","color":"#fff"},
  { "id" : 237, "item": "suddenly", "begin" : "78.703", "end": "79.327","color":"#fff"},
  { "id" : 238, "item": "there", "begin" : "79.327", "end": "79.5","color":"#fff"},
  { "id" : 239, "item": "was", "begin" : "79.501", "end": "79.707","color":"#fff"},
  { "id" : 240, "item": "with", "begin" : "79.706", "end": "79.902","color":"#fff"},
  { "id" : 241, "item": "the", "begin" : "79.902", "end": "80.038","color":"#fff"},
  { "id" : 242, "item": "angel", "begin" : "80.038", "end": "80.516","color":"#fff"},
  { "id" : 243, "item": "a", "begin" : "80.516", "end": "80.675","color":"#fff"},
  { "id" : 244, "item": "multitude", "begin" : "80.675", "end": "81.307","color":"#fff"},
  { "id" : 245, "item": "of", "begin" : "81.307", "end": "81.409","color":"#fff"},
  { "id" : 246, "item": "the", "begin" : "81.408", "end": "81.48","color":"#fff"},
  { "id" : 247, "item": "heavenly", "begin" : "81.48", "end": "81.867","color":"#fff"},
  { "id" : 248, "item": "host", "begin" : "81.867", "end": "82.256","color":"#fff"},
  { "id" : 249, "item": "praising", "begin" : "82.657", "end": "83.127","color":"#fff"},
  { "id" : 250, "item": "God", "begin" : "83.126", "end": "83.475","color":"#fff"},
  { "id" : 251, "item": "and", "begin" : "83.475", "end": "83.566","color":"#fff"},
  { "id" : 252, "item": "saying", "begin" : "83.566", "end": "84.074","color":"#fff"},
  { "id" : 253, "item": "Glory", "begin" : "84.905", "end": "85.413","color":"#fff"},
  { "id" : 254, "item": "to", "begin" : "85.413", "end": "85.591","color":"#fff"},
  { "id" : 255, "item": "God", "begin" : "85.591", "end": "85.943","color":"#fff"},
  { "id" : 256, "item": "in", "begin" : "85.943", "end": "86.022","color":"#fff"},
  { "id" : 257, "item": "the", "begin" : "86.022", "end": "86.079","color":"#fff"},
  { "id" : 258, "item": "highest", "begin" : "86.079", "end": "86.659","color":"#fff"},
  { "id" : 259, "item": "and", "begin" : "87.058", "end": "87.224","color":"#fff"},
  { "id" : 260, "item": "on", "begin" : "87.224", "end": "87.404","color":"#fff"},
  { "id" : 261, "item": "earth", "begin" : "87.404", "end": "87.789","color":"#fff"},
  { "id" : 262, "item": "peace", "begin" : "88.025", "end": "88.363","color":"#fff"},
  { "id" : 263, "item": "among", "begin" : "88.363", "end": "88.634","color":"#fff"},
  { "id" : 264, "item": "those", "begin" : "88.634", "end": "88.948","color":"#fff"},
  { "id" : 265, "item": "with", "begin" : "88.948", "end": "89.113","color":"#fff"},
  { "id" : 266, "item": "whom", "begin" : "89.113", "end": "89.31","color":"#fff"},
  { "id" : 267, "item": "he", "begin" : "89.31", "end": "89.466","color":"#fff"},
  { "id" : 268, "item": "is", "begin" : "89.466", "end": "89.626","color":"#fff"},
  { "id" : 269, "item": "pleased", "begin" : "89.626", "end": "90.341","color":"#fff"},
  { "id" : 270, "item": "When", "begin" : "91.824", "end": "91.969","color":"#fff"},
  { "id" : 271, "item": "the", "begin" : "91.969", "end": "92.086","color":"#fff"},
  { "id" : 272, "item": "angels", "begin" : "92.086", "end": "92.482","color":"#fff"},
  { "id" : 273, "item": "went", "begin" : "92.482", "end": "92.64","color":"#fff"},
  { "id" : 274, "item": "away", "begin" : "92.64", "end": "92.896","color":"#fff"},
  { "id" : 275, "item": "from", "begin" : "92.896", "end": "93.111","color":"#fff"},
  { "id" : 276, "item": "them", "begin" : "93.112", "end": "93.3","color":"#fff"},
  { "id" : 277, "item": "into", "begin" : "93.3", "end": "93.569","color":"#fff"},
  { "id" : 278, "item": "heaven", "begin" : "93.569", "end": "94.028","color":"#fff"},
  { "id" : 279, "item": "the", "begin" : "94.204", "end": "94.269","color":"#fff"},
  { "id" : 280, "item": "shepherds", "begin" : "94.269", "end": "94.758","color":"#fff"},
  { "id" : 281, "item": "said", "begin" : "94.758", "end": "94.994","color":"#fff"},
  { "id" : 282, "item": "to", "begin" : "94.994", "end": "95.098","color":"#fff"},
  { "id" : 283, "item": "one", "begin" : "95.098", "end": "95.226","color":"#fff"},
  { "id" : 284, "item": "another", "begin" : "95.226", "end": "95.709","color":"#fff"},
  { "id" : 285, "item": "Let", "begin" : "96.508", "end": "96.644","color":"#fff"},
  { "id" : 286, "item": "us", "begin" : "96.644", "end": "96.82","color":"#fff"},
  { "id" : 287, "item": "go", "begin" : "96.82", "end": "96.959","color":"#fff"},
  { "id" : 288, "item": "over", "begin" : "96.959", "end": "97.124","color":"#fff"},
  { "id" : 289, "item": "to", "begin" : "97.124", "end": "97.28","color":"#fff"},
  { "id" : 290, "item": "Bethlehem", "begin" : "97.281", "end": "97.76","color":"#fff"},
  { "id" : 291, "item": "and", "begin" : "97.76", "end": "97.84","color":"#fff"},
  { "id" : 292, "item": "see", "begin" : "97.84", "end": "98.152","color":"#fff"},
  { "id" : 293, "item": "this", "begin" : "98.152", "end": "98.462","color":"#fff"},
  { "id" : 294, "item": "thing", "begin" : "98.462", "end": "98.715","color":"#fff"},
  { "id" : 295, "item": "that", "begin" : "98.715", "end": "98.808","color":"#fff"},
  { "id" : 296, "item": "has", "begin" : "98.808", "end": "98.942","color":"#fff"},
  { "id" : 297, "item": "happened", "begin" : "98.942", "end": "99.458","color":"#fff"},
  { "id" : 298, "item": "which", "begin" : "99.642", "end": "99.85","color":"#fff"},
  { "id" : 299, "item": "the", "begin" : "99.85", "end": "99.963","color":"#fff"},
  { "id" : 300, "item": "Lord", "begin" : "99.964", "end": "100.204","color":"#fff"},
  { "id" : 301, "item": "has", "begin" : "100.203", "end": "100.333","color":"#fff"},
  { "id" : 302, "item": "made", "begin" : "100.333", "end": "100.558","color":"#fff"},
  { "id" : 303, "item": "known", "begin" : "100.558", "end": "100.839","color":"#fff"},
  { "id" : 304, "item": "to", "begin" : "100.839", "end": "100.924","color":"#fff"},
  { "id" : 305, "item": "us", "begin" : "100.924", "end": "101.277","color":"#fff"},
  { "id" : 306, "item": "And", "begin" : "101.996", "end": "102.124","color":"#fff"},
  { "id" : 307, "item": "they", "begin" : "102.124", "end": "102.293","color":"#fff"},
  { "id" : 308, "item": "went", "begin" : "102.293", "end": "102.572","color":"#fff"},
  { "id" : 309, "item": "with", "begin" : "102.572", "end": "102.702","color":"#fff"},
  { "id" : 310, "item": "haste", "begin" : "102.702", "end": "103.168","color":"#fff"},
  { "id" : 311, "item": "and", "begin" : "103.168", "end": "103.285","color":"#fff"},
  { "id" : 312, "item": "found", "begin" : "103.285", "end": "103.644","color":"#fff"},
  { "id" : 313, "item": "Mary", "begin" : "103.644", "end": "103.999","color":"#fff"},
  { "id" : 314, "item": "and", "begin" : "103.999", "end": "104.168","color":"#fff"},
  { "id" : 315, "item": "Joseph", "begin" : "104.168", "end": "104.584","color":"#fff"},
  { "id" : 316, "item": "and", "begin" : "104.584", "end": "104.716","color":"#fff"},
  { "id" : 317, "item": "the", "begin" : "104.716", "end": "104.855","color":"#fff"},
  { "id" : 318, "item": "baby", "begin" : "104.855", "end": "105.193","color":"#fff"},
  { "id" : 319, "item": "lying", "begin" : "105.193", "end": "105.55","color":"#fff"},
  { "id" : 320, "item": "in", "begin" : "105.55", "end": "105.606","color":"#fff"},
  { "id" : 321, "item": "a", "begin" : "105.606", "end": "105.664","color":"#fff"},
  { "id" : 322, "item": "manger", "begin" : "105.664", "end": "106.231","color":"#fff"},
  { "id" : 323, "item": "And", "begin" : "107.011", "end": "107.184","color":"#fff"},
  { "id" : 324, "item": "when", "begin" : "107.184", "end": "107.383","color":"#fff"},
  { "id" : 325, "item": "they", "begin" : "107.382", "end": "107.503","color":"#fff"},
  { "id" : 326, "item": "saw", "begin" : "107.503", "end": "107.849","color":"#fff"},
  { "id" : 327, "item": "it", "begin" : "107.849", "end": "108.085","color":"#fff"},
  { "id" : 328, "item": "they", "begin" : "108.382", "end": "108.534","color":"#fff"},
  { "id" : 329, "item": "made", "begin" : "108.534", "end": "108.744","color":"#fff"},
  { "id" : 330, "item": "known", "begin" : "108.744", "end": "109.117","color":"#fff"},
  { "id" : 331, "item": "the", "begin" : "109.117", "end": "109.188","color":"#fff"},
  { "id" : 332, "item": "saying", "begin" : "109.188", "end": "109.612","color":"#fff"},
  { "id" : 333, "item": "that", "begin" : "109.611", "end": "109.713","color":"#fff"},
  { "id" : 334, "item": "had", "begin" : "109.714", "end": "109.848","color":"#fff"},
  { "id" : 335, "item": "been", "begin" : "109.848", "end": "110.037","color":"#fff"},
  { "id" : 336, "item": "told", "begin" : "110.037", "end": "110.41","color":"#fff"},
  { "id" : 337, "item": "them", "begin" : "110.411", "end": "110.591","color":"#fff"},
  { "id" : 338, "item": "concerning", "begin" : "110.591", "end": "111.093","color":"#fff"},
  { "id" : 339, "item": "this", "begin" : "111.092", "end": "111.228","color":"#fff"},
  { "id" : 340, "item": "child", "begin" : "111.228", "end": "111.912","color":"#fff"},
  { "id" : 341, "item": "And", "begin" : "112.668", "end": "112.82","color":"#fff"},
  { "id" : 342, "item": "all", "begin" : "112.82", "end": "113.156","color":"#fff"},
  { "id" : 343, "item": "who", "begin" : "113.157", "end": "113.294","color":"#fff"},
  { "id" : 344, "item": "heard", "begin" : "113.294", "end": "113.565","color":"#fff"},
  { "id" : 345, "item": "it", "begin" : "113.565", "end": "113.827","color":"#fff"},
  { "id" : 346, "item": "wondered", "begin" : "113.827", "end": "114.273","color":"#fff"},
  { "id" : 347, "item": "at", "begin" : "114.273", "end": "114.386","color":"#fff"},
  { "id" : 348, "item": "what", "begin" : "114.387", "end": "114.563","color":"#fff"},
  { "id" : 349, "item": "the", "begin" : "114.563", "end": "114.641","color":"#fff"},
  { "id" : 350, "item": "shepherds", "begin" : "114.641", "end": "115.146","color":"#fff"},
  { "id" : 351, "item": "told", "begin" : "115.147", "end": "115.492","color":"#fff"},
  { "id" : 352, "item": "them", "begin" : "115.492", "end": "115.81","color":"#fff"},
  { "id" : 353, "item": "But", "begin" : "116.538", "end": "116.726","color":"#fff"},
  { "id" : 354, "item": "Mary", "begin" : "116.726", "end": "117.202","color":"#fff"},
  { "id" : 355, "item": "treasured", "begin" : "117.201", "end": "117.572","color":"#fff"},
  { "id" : 356, "item": "up", "begin" : "117.572", "end": "117.732","color":"#fff"},
  { "id" : 357, "item": "all", "begin" : "117.731", "end": "117.972","color":"#fff"},
  { "id" : 358, "item": "these", "begin" : "117.973", "end": "118.255","color":"#fff"},
  { "id" : 359, "item": "things", "begin" : "118.254", "end": "118.787","color":"#fff"},
  { "id" : 360, "item": "pondering", "begin" : "119.178", "end": "119.715","color":"#fff"},
  { "id" : 361, "item": "them", "begin" : "119.715", "end": "119.854","color":"#fff"},
  { "id" : 362, "item": "in", "begin" : "119.854", "end": "119.952","color":"#fff"},
  { "id" : 363, "item": "her", "begin" : "119.952", "end": "120.132","color":"#fff"},
  { "id" : 364, "item": "heart", "begin" : "120.133", "end": "120.661","color":"#fff"},
  { "id" : 365, "item": "And", "begin" : "121.551", "end": "121.636","color":"#fff"},
  { "id" : 366, "item": "the", "begin" : "121.636", "end": "121.707","color":"#fff"},
  { "id" : 367, "item": "shepherds", "begin" : "121.707", "end": "122.136","color":"#fff"},
  { "id" : 368, "item": "returned", "begin" : "122.136", "end": "122.795","color":"#fff"},
  { "id" : 369, "item": "glorifying", "begin" : "123.144", "end": "123.893","color":"#fff"},
  { "id" : 370, "item": "and", "begin" : "123.893", "end": "124.151","color":"#fff"},
  { "id" : 371, "item": "praising", "begin" : "124.151", "end": "124.714","color":"#fff"},
  { "id" : 372, "item": "God", "begin" : "124.715", "end": "125.092","color":"#fff"},
  { "id" : 373, "item": "for", "begin" : "125.092", "end": "125.339","color":"#fff"},
  { "id" : 374, "item": "all", "begin" : "125.339", "end": "125.556","color":"#fff"},
  { "id" : 375, "item": "they", "begin" : "125.556", "end": "125.723","color":"#fff"},
  { "id" : 376, "item": "had", "begin" : "125.723", "end": "125.92","color":"#fff"},
  { "id" : 377, "item": "heard", "begin" : "125.92", "end": "126.249","color":"#fff"},
  { "id" : 378, "item": "and", "begin" : "126.249", "end": "126.368","color":"#fff"},
  { "id" : 379, "item": "seen", "begin" : "126.368", "end": "126.959","color":"#fff"},
  { "id" : 380, "item": "as", "begin" : "127.239", "end": "127.393","color":"#fff"},
  { "id" : 381, "item": "it", "begin" : "127.394", "end": "127.467","color":"#fff"},
  { "id" : 382, "item": "had", "begin" : "127.467", "end": "127.64","color":"#fff"},
  { "id" : 383, "item": "been", "begin" : "127.641", "end": "127.815","color":"#fff"},
  { "id" : 384, "item": "told", "begin" : "127.815", "end": "128.125","color":"#fff"},
  { "id" : 385, "item": "them", "begin" : "128.125", "end": "128.374","color":"#fff"}

] );

function playFromFile(){
}
exports.playFromFile=playFromFile;


var currentTime = -1;
exports.pageLoaded = function(args) {
      page=args.object;
      page.bindingContext = { myItems: array };

      player.playFromFile(playerOptions)
           .then(function (res) {
               sync = function(){
                 if(!player.isAudioPlaying())return;
                 console.log("::::::::sync::::::::");
                 timer.setTimeout(function(){
                    array.forEach(function(entry) {

                      //console.log("entry.begin "+ entry.begin);
                      //console.log("player.currentTime =  "+ player.currentTime/1000);
                       if(entry.begin < player.currentTime/1000){
                           //console.log("ok");

                           //return {
                             //entry.item = "OK";

                             var lbl = coreView.getViewById(args.object.parent, entry.id);
                             //console.log("::" + lbl);

                             lbl.backgroundColor = new color_1.Color("lightgray");
                             //entry.color=new color_1.Color("lightgray");

                           //};

                       }else{
         //console.log(entry.end+"end");
         return {};
         }

       });
       sync();
     } , 50);

     }
     sync();
       console.log(res);
     })
         .catch(function () {
                     console.log("didn't work...");
         })

//      page.bindingContext = { myItems: array };

}
