# AI Subtitle Translation Chrome Extension

A Chrome extension that automatically adds AI-translated subtitles as an overlay on video content. This extension enhances the viewing experience by providing real-time translation of video content in the user's preferred language.

## Features

- Automatic subtitle detection and extraction from video content (in progress)
- Real-time AI-powered translation (planned)
- Customizable subtitle appearance (font, size, color, position)
- Support for multiple languages
- Non-intrusive overlay that doesn't interfere with video playback
- Works on major video platforms (YouTube, Netflix, etc.)

## Current Progress

- ✅ Project structure and build system (Vite + TypeScript) set up
- ✅ Chrome extension manifest and icons configured
- ✅ Popup UI for language, font size, and color selection implemented
- ✅ Settings are stored and loaded using Chrome storage
- ✅ Overlay infrastructure is in place: overlay is attached to the document body and ready to display subtitles
- ✅ All debug/test code has been cleaned up
- ⬜️ Subtitle extraction from video (YouTube) **not yet implemented**
- ⬜️ AI translation integration **not yet implemented**
- ⬜️ Real-time subtitle display and updates **not yet implemented**

## Next Steps

1. **Subtitle Extraction**
   - Implement logic to extract subtitles (closed captions) from YouTube videos (or other platforms)
2. **AI Translation Integration**
   - Integrate with an AI translation API (e.g., OpenAI, Google Translate)
   - Send extracted subtitles for translation and display the result in the overlay
3. **Dynamic Overlay Updates**
   - Update the overlay in real time as the video plays and new subtitles appear
4. **Testing and Refinement**
   - Test on multiple platforms and video sites
   - Refine overlay positioning and appearance as needed

## Technical Implementation Steps

### 1. Project Setup
- [x] Initialize Chrome extension project structure
- [x] Set up manifest.json with necessary permissions
- [x] Configure build system (Vite + TypeScript)
- [x] Set up development environment

### 2. Core Components
- [x] Content Script
  - [x] Overlay management
  - [ ] Subtitle extraction (next)
- [x] Background Script
  - [x] API communication (scaffolded)
  - [ ] Translation service integration (next)
- [x] Popup UI
  - [x] Language selection
  - [x] Settings management
  - [x] Extension status

### 3. AI Integration
- [ ] Set up translation API service
- [ ] Implement translation request handling
- [ ] Add caching mechanism for performance
- [ ] Error handling and fallback options

### 4. UI/UX Implementation
- [x] Design and implement subtitle overlay
- [x] Create settings interface
- [x] Add customization options
- [ ] Implement responsive design

### 5. Testing & Optimization
- [ ] Unit tests
- [ ] Integration tests
- [ ] Performance optimization
- [ ] Cross-platform testing

### 6. Deployment
- [ ] Chrome Web Store preparation
- [ ] Documentation
- [ ] Release management

## Project Structure
```
ai-subtitle-extension/
├── src/
│   ├── content/         # Content scripts (overlay logic here)
│   ├── background/      # Background scripts
│   ├── popup/           # Extension popup UI
│   ├── services/        # API and translation services
│   └── utils/           # Utility functions
├── public/              # Static assets (icons)
├── dist/                # Build output
├── tests/               # Test files
└── manifest.json        # Extension manifest
```

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build the extension: `npm run build`
5. Load the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

MIT License - see LICENSE file for details
