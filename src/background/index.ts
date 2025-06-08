import { TranslationService } from '../services/translation';
import { TranslationRequest } from '../types/translation';

// Initialize translation service
const translationService = new TranslationService();

// Listen for installation
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message: TranslationRequest, _sender, sendResponse) => {
    if (message.type === 'TRANSLATE_SUBTITLE') {
        // Handle translation request
        translationService.translate(message.text, message.targetLanguage)
            .then(response => {
                if (response.error) {
                    console.error('Translation error:', response.error);
                }
                sendResponse(response);
            })
            .catch(error => {
                console.error('Translation error:', error);
                sendResponse({
                    translatedText: message.text,
                    error: error.message
                });
            });
    }
    return true; // Keep the message channel open for async response
}); 