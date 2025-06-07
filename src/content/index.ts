import './content.css';

class SubtitleOverlay {
    private overlay: HTMLDivElement;
    private settings: {
        targetLanguage: string;
        fontSize: number;
        fontColor: string;
    };

    constructor() {
        this.overlay = this.createOverlay();
        this.settings = {
            targetLanguage: 'en',
            fontSize: 16,
            fontColor: '#ffffff'
        };
        this.loadSettings();
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