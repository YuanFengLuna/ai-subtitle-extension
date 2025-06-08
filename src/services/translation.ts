import { TranslationResponse } from '../types/translation';

export class TranslationService {
    private apiKey: string;
    private apiEndpoint: string;

    constructor() {
        this.apiKey = import.meta.env.VITE_DEEPL_API_KEY;
        if (!this.apiKey) {
            console.error('DeepL API key is not set. Please check your .env file.');
        }
        this.apiEndpoint = 'https://api-free.deepl.com/v2/translate';
    }

    async translate(text: string, targetLanguage: string): Promise<TranslationResponse> {
        if (!this.apiKey) {
            return {
                translatedText: text,
                error: 'API key not configured. Please check your settings.'
            };
        }

        try {
            // Convert language code to DeepL format if needed
            const targetLang = this.normalizeLanguageCode(targetLanguage);

            const formData = new URLSearchParams();
            formData.append('auth_key', this.apiKey);
            formData.append('text', text);
            formData.append('target_lang', targetLang);

            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(
                    `Translation API error: ${response.statusText}${
                        errorData ? ` - ${JSON.stringify(errorData)}` : ''
                    }`
                );
            }

            const data = await response.json();
            return {
                translatedText: data.translations[0].text,
                error: null
            };
        } catch (error) {
            console.error('Translation error:', error);
            return {
                translatedText: text, // Return original text on error
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }

    private normalizeLanguageCode(lang: string): string {
        // DeepL uses different language codes than standard ISO codes
        const languageMap: { [key: string]: string } = {
            'en': 'EN-US',
            'es': 'ES',
            'fr': 'FR',
            'de': 'DE',
            'it': 'IT',
            'pt': 'PT',
            'nl': 'NL',
            'pl': 'PL',
            'ru': 'RU',
            'ja': 'JA',
            'zh': 'ZH',
            'ko': 'KO',
            // Add more mappings as needed
        };

        // Convert to lowercase for case-insensitive matching
        const normalizedLang = lang.toLowerCase();
        return languageMap[normalizedLang] || lang.toUpperCase();
    }
} 