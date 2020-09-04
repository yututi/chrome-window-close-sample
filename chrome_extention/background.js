
chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
    if (request.type == "window_close") {
        const getInfo = {
            populate: true,
            windowTypes: ['normal', 'popup', 'devtools']
        }
        chrome.windows.getCurrent(getInfo, currWindow => {
            chrome.windows.remove(currWindow.id);
        })
    }
});
