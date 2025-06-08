# AI Subtitle Translation Chrome Extension

A Chrome extension that automatically adds AI-translated subtitles as an overlay on video content. This extension enhances the viewing experience by providing real-time translation of video content in the user's preferred language.

## Features

- Automatic subtitle detection and extraction from YouTube video captions
- Real-time AI-powered translation using DeepL API
- Customizable subtitle appearance (font, size, color, position)
- Support for multiple languages (DeepL supported)
- Non-intrusive overlay that doesn't interfere with video playback
- Works on major video platforms (YouTube supported; others planned)

## Current Progress

- ✅ Project structure and build system (Vite + TypeScript) set up
- ✅ Chrome extension manifest and icons configured
- ✅ Popup UI for language, font size, and color selection implemented
- ✅ Settings are stored and loaded using Chrome storage
- ✅ Overlay infrastructure is in place: overlay is attached to the document body and ready to display subtitles
- ✅ Subtitle extraction from YouTube's built-in captions implemented
- ✅ DeepL translation integration implemented
- ✅ Real-time subtitle display and updates implemented
- ⬜️ Subtitle extraction from other platforms (Netflix, etc.)
- ⬜️ AI speech-to-text fallback (planned)
- ⬜️ Batch translation, caching, and latency improvements (planned)

## Next Steps

1. **Platform Support**
   - Add subtitle extraction for other platforms (Netflix, etc.)
2. **Performance Improvements**
   - Implement batching and caching to reduce latency and API usage
   - Optionally fetch and translate full subtitle transcripts in advance
3. **Speech-to-Text Fallback**
   - Use AI speech-to-text if no subtitles are available
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
  - [x] Subtitle extraction (YouTube)
- [x] Background Script
  - [x] DeepL translation service integration
- [x] Popup UI
  - [x] Language selection
  - [x] Settings management
  - [x] Extension status

### 3. AI Integration
- [x] Set up DeepL translation API service
- [x] Implement translation request handling
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
- [ ] Performance optimization (batching, caching)
- [ ] Cross-platform testing

### 6. Deployment
- [ ] Chrome Web Store preparation
- [ ] Documentation
- [ ] Release management

## Environment Setup

1. **Create a `.env` file in your project root:**
   ```
   VITE_DEEPL_API_KEY=your_deepl_api_key_here
   ```
   - Get your DeepL API key from https://www.deepl.com/pro-api
   - **Do not commit your `.env` file to version control!**

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start development server:**
   ```
   npm run dev
   ```

4. **Build the extension:**
   ```
   npm run build
   ```

5. **Load the extension in Chrome:**
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory

## Usage Notes

- **You must enable subtitles (CC) on YouTube videos** for the extension to detect and translate them.
- The overlay will show the translated subtitle above the video controls.
- Subtitle lines may be short due to YouTube's segment structure.
- There may be a slight delay due to translation API calls.

## Limitations & Future Improvements

- Only works with YouTube's built-in subtitles for now
- Subtitle lines may be short and split awkwardly
- Some latency due to real-time translation
- No caching or batching yet (planned)
- No speech-to-text fallback yet (planned)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

MIT License - see LICENSE file for details
