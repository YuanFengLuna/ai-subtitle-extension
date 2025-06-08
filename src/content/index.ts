import './content.css';

class SubtitleOverlay {
    private overlay: HTMLDivElement;
    private settings: {
        targetLanguage: string;
        fontSize: number;
        fontColor: string;
    };
    private lastSubtitle: string = '';

    constructor() {
        this.overlay = this.createOverlay();
        this.settings = {
            targetLanguage: 'en',
            fontSize: 16,
            fontColor: '#ffffff'
        };
        this.loadSettings();
        this.setupYouTubeObserver();
    }

    private createOverlay(): HTMLDivElement {
        const overlay = document.createElement('div');
        overlay.className = 'ai-subtitle-overlay';
        return overlay;
    }

    private loadSettings(): void {
        const defaultSettings = {
            targetLanguage: 'en',
            fontSize: 16,
            fontColor: '#ffffff'
        };

        chrome.storage.sync.get(defaultSettings, (items) => {
            this.settings = {
                targetLanguage: items.targetLanguage as string,
                fontSize: items.fontSize as number,
                fontColor: items.fontColor as string
            };
            this.updateOverlayStyle();
        });
    }

    private updateOverlayStyle(): void {
        this.overlay.style.fontSize = `${this.settings.fontSize}px`;
        this.overlay.style.color = this.settings.fontColor;
    }

    private setupYouTubeObserver(): void {
        // Create a MutationObserver to watch for subtitle changes
        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    this.checkForSubtitles();
                }
            }
        });

        // Start observing the document body for changes
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    private checkForSubtitles(): void {
        // Look for YouTube's subtitle container
        const subtitleContainer = document.querySelector('.ytp-caption-segment');
        if (subtitleContainer) {
            const subtitleText = subtitleContainer.textContent || '';
            if (subtitleText && subtitleText !== this.lastSubtitle) {
                this.lastSubtitle = subtitleText;
                this.translateAndShow(subtitleText);
            }
        }
    }

    private translateAndShow(text: string): void {
        // Send message to background script for translation
        chrome.runtime.sendMessage(
            {
                type: 'TRANSLATE_SUBTITLE',
                text: text,
                targetLanguage: this.settings.targetLanguage
            },
            (response) => {
                if (response && !response.error) {
                    this.show(response.translatedText);
                } else {
                    console.error('Translation error:', response?.error);
                    this.show(text); // Show original text if translation fails
                }
            }
        );
    }

    public show(text: string): void {
        this.overlay.textContent = text;
    }

    public hide(): void {
        this.overlay.textContent = '';
    }

    public attachToDocument(): void {
        if (!document.body.contains(this.overlay)) {
            document.body.appendChild(this.overlay);
        }
    }
}

// Initialize subtitle overlay
const subtitleOverlay = new SubtitleOverlay();

// Attach overlay to document on load
subtitleOverlay.attachToDocument();

// Placeholder for future subtitle logic
// subtitleOverlay.show(''); 