var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.tapAction = function() {
    frameModule.topmost().navigate("views/secondview/secondview");
}

exports.speakAction = function() {
    frameModule.topmost().navigate("views/speakview/speakview");
}
