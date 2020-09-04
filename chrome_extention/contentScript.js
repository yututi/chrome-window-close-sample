console.log("contentscript load")

window.addEventListener("message", function (event) {
    this.console.log(event)
    if (event.data.type) {
        chrome.extension.sendMessage({"type": "window_close"}, function() {
        });
    }
}, false);