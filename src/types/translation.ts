export interface TranslationResponse {
    translatedText: string;
    error: string | null;
}

export interface TranslationRequest {
    type: 'TRANSLATE_SUBTITLE';
    text: string;
    targetLanguage: string;
} 