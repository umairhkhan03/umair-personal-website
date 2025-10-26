# V0 Backlog - Future Enhancements

Features that didn't make it into the initial MVP but could be added later.

---

## Multi-Language Support
**Goal**: Support English, Urdu, and Arabic languages across the entire website

**Features**:
- Language switcher in navbar or footer
- Full translation of UI elements
- Proper RTL (right-to-left) support for Urdu and Arabic
- Language-specific content routing (e.g., `/ar/blog`, `/ur/poetry`)
- Persistent language preference (localStorage)
- Separate content files for each language
- Font optimization for Arabic/Urdu scripts (Noto Nastaliq Urdu, etc.)

**Technical Approach**:
- i18next for translation management
- React i18next for React integration
- Direction switching (LTR/RTL) based on language
- Locale-based date formatting
- Translation files in JSON format
- Dynamic import of language files for better performance

**Content Strategy**:
- Mark which content is available in which languages
- Fallback to English if translation not available
- Option to write blog posts/poetry in multiple languages
- Language indicator on content cards

**Design Considerations**:
- Language switcher that's discoverable but not intrusive
- Ensure all fonts support required character sets
- Test layout with RTL to ensure no breaking
- Consider different text lengths in translations

---

## Why Backlog?

Multi-language support is a significant undertaking that requires:
- Translating all UI elements
- Creating content in multiple languages
- Testing RTL layouts extensively
- Font licensing/optimization for Arabic/Urdu scripts

This is best tackled after the core site is stable and has some content.

---

## Implementation Notes

When ready to implement:
1. Start with UI translation only (keep content in English initially)
2. Test RTL layout thoroughly
3. Add Urdu/Arabic content gradually
4. Consider hiring a translator for quality
5. Budget 3-4 weeks for full implementation

