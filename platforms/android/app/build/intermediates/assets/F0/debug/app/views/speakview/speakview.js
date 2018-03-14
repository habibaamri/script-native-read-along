// Page loaded
function pageLoaded() {

}
exports.pageLoaded = pageLoaded;

var TextToSpeech = require("nativescript-texttospeech");
// Call the `speak` method passing the SpeakOptions object
TextToSpeech.speak(speakOptions).then(() => {
    // everything is fine
}, (err) => {
    // oops, something went wrong!
});
