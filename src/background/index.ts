// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.type === 'TRANSLATE_SUBTITLE') {
        // TODO: Implement translation service
        console.log('Translation requested:', message.text);
        sendResponse({ translatedText: message.text }); // Placeholder response
    }
    return true; // Keep the message channel open for async response
}); 