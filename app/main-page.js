var frameModule = require("ui/frame");

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = {};
}

exports.tapAction = function() {
    frameModule.topmost().navigate("views/secondview/secondview");
}

exports.version0 = function() {
    frameModule.topmost().navigate("views/version0View/version0");
}
