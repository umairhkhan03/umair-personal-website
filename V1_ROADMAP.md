# V1 Roadmap - Personal Website Enhancements

## Overview
V1 focuses on adding delightful interactions, external integrations, and design polish to create a more engaging personal website experience.

---

## Features

### 1. Landing Page Animations
**Goal**: Add subtle, meaningful animations to the home page without overwhelming the minimalist design

**Implementation Ideas**:
- Gentle fade-in animations for widgets on scroll
- Smooth parallax effects for content sections
- Micro-interactions on hover (card lifts, subtle scale changes)
- Staggered loading animations for the "Latest" cards
- Text reveal animations for the hero section

**Technical Approach**:
- Use Framer Motion for declarative animations
- CSS transitions for simple hover effects
- Intersection Observer API for scroll-triggered animations

---

### 2. Goodreads Integration
**Goal**: Automatically sync reading list with Goodreads account

**Features**:
- Display currently reading books with real-time progress
- Show reading history
- Sync reading wishlist
- Display book covers and ratings
- Link to Goodreads profile

**Technical Approach**:
- Goodreads API (or alternative like Open Library API if Goodreads API is limited)
- Cache data to reduce API calls
- Update on a schedule (daily/weekly) rather than real-time
- Fallback to manual JSON if API fails

---

### 3. Interactive Flower Garden
**Goal**: Create a playful, human interaction element where visitors can "plant" flowers in a shared garden

**Concept**:
A digital flower garden where each visitor can plant a flower that persists for others to see. This creates a collaborative, living element on the website that grows with each visitor.

**Features**:
- Click to plant a flower anywhere in a designated garden area
- Flowers have subtle animations (sway, grow)
- Different flower types/colors randomly assigned
- Flowers fade after a certain time period (e.g., 30 days) to keep it fresh
- Optional: visitors can leave a brief message with their flower
- View counter showing total flowers planted
- Gentle decay system so the garden doesn't become overwhelming

**Technical Approach**:
- Canvas API or SVG for rendering flowers
- Backend (Firebase/Supabase) for persisting flower data
- Rate limiting to prevent spam (1 flower per visitor per day)
- Cleanup job to remove old flowers
- Responsive design for mobile planting
- Accessibility: keyboard navigation for planting

**Design Considerations**:
- Keep it minimal and aligned with overall aesthetic
- Flowers should be abstract/geometric rather than photorealistic
- Muted color palette that matches the site theme
- Optional toggle to hide/show for users who prefer pure minimalism

**Alternative Ideas**:
- Stars in a night sky instead of flowers
- Stones in a zen garden
- Notes on a message board
- Pixels in a collaborative art piece

---

### 4. Design Improvements
**Goal**: Refine visual design and enhance user experience

**Areas to Focus**:
- Typography refinements (font pairings, sizing, line height)
- Color palette adjustments for better contrast/readability
- Improved mobile experience
- Loading states and skeleton screens
- Better error handling UI
- Enhanced 404 page with personality
- Dark mode toggle (if not already implemented)
- Print stylesheet for blog posts

---

### 5. Performance Optimizations
**Goal**: Ensure fast load times and smooth interactions

**Optimizations**:
- Image lazy loading and optimization
- Code splitting for routes
- Font loading optimization
- Service worker for offline capability
- Reduce bundle size
- Implement proper caching strategies

---

## Priority Ranking

1. **High Priority**:
   - Landing page animations
   - Design improvements

2. **Medium Priority**:
   - Interactive Flower Garden

---

## Timeline Estimate

- **Phase 1** (1-2 weeks): Animations + Design polish
- **Phase 2** (2-3 weeks): Interactive Garden feature

---

## Notes

- All features should maintain the minimalist aesthetic
- Prioritize meaningful interactions over flashy effects
- Test thoroughly on mobile devices
- Ensure accessibility standards are met
- Keep bundle size in check

