interface Settings {
    targetLanguage: string;
    fontSize: number;
    fontColor: string;
}

// Initialize settings
const defaultSettings: Settings = {
    targetLanguage: 'en',
    fontSize: 16,
    fontColor: '#ffffff'
};

// Load settings from storage
chrome.storage.sync.get(defaultSettings, (items) => {
    const settings: Settings = {
        targetLanguage: items.targetLanguage as string,
        fontSize: items.fontSize as number,
        fontColor: items.fontColor as string
    };

    const targetLanguageSelect = document.getElementById('targetLanguage') as HTMLSelectElement;
    const fontSizeInput = document.getElementById('fontSize') as HTMLInputElement;
    const fontColorInput = document.getElementById('fontColor') as HTMLInputElement;

    targetLanguageSelect.value = settings.targetLanguage;
    fontSizeInput.value = settings.fontSize.toString();
    fontColorInput.value = settings.fontColor;

    // Save settings when changed
    targetLanguageSelect.addEventListener('change', () => {
        chrome.storage.sync.set({ targetLanguage: targetLanguageSelect.value });
    });

    fontSizeInput.addEventListener('change', () => {
        chrome.storage.sync.set({ fontSize: parseInt(fontSizeInput.value) });
    });

    fontColorInput.addEventListener('change', () => {
        chrome.storage.sync.set({ fontColor: fontColorInput.value });
    });
}); 