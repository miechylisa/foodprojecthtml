# Design Choices and Technical Rationale

## 1. Purpose and Scope
This document describes the principal technical and design decisions used in `foodprojecthtml`, which now functions as a professional student-profile website. The repository name is intentionally unchanged to preserve GitHub continuity and link stability.

The implementation goals were:
- retain the original simple project structure
- improve content professionalism
- maintain low technical overhead
- ensure clear responsiveness across mobile, tablet, and laptop devices

## 2. Architectural Decisions

### 2.1 Static, Three-File Architecture
The project uses a compact architecture:
- `index.html`: structure and content
- `styles.css`: presentation and responsive behavior
- `script.js`: client-side interactivity

This approach was selected to maximize readability and long-term maintainability while avoiding unnecessary operational complexity.

### 2.2 No Framework or Build Pipeline
No framework, package dependency, or compilation step is required for runtime. This decision supports:
- direct editing and immediate verification
- straightforward GitHub Pages deployment
- minimal onboarding burden for future contributors

The trade-off is that large-scale feature expansion would eventually benefit from modular tooling; however, for current scope, native web technologies are sufficient and preferable.

### 2.3 Client-Side Interaction Model
Filtering behavior is implemented through `data-category` attributes and class-based visibility toggling. This method was chosen because it is:
- semantically explicit
- computationally lightweight for current data size
- easy to extend when introducing additional profile categories

## 3. Visual Design Decisions

### 3.1 Deliberately Restrained Aesthetic
The previous gradient-centric style was replaced with a simpler visual language intended to resemble a conventional 2019 professional website:
- flat colors
- moderate contrast
- subtle borders and shadows
- minimal animation

This improves formality and reduces stylistic noise, which is appropriate for a student profile context.

### 3.2 Typography and Readability
The stylesheet uses a system-safe sans-serif stack (`Arial, sans-serif`) to prioritize:
- broad device compatibility
- predictable rendering
- straightforward maintenance

Typography scale was reduced from decorative sizing to practical document-style hierarchy.

### 3.3 Component Consistency
Buttons, cards, and section blocks use uniform radius, border weight, and spacing logic. This choice improves:
- visual coherence
- scanning speed for recruiters or academic reviewers
- ease of future style updates

## 4. Responsive Strategy

### 4.1 Mobile-First Implementation
The responsive system is explicitly mobile-first:
- base rules target mobile viewports
- tablet adaptation begins at `min-width: 768px`
- laptop adaptation begins at `min-width: 1024px`

This improves first-load usability on small screens and aligns with modern browsing behavior.

### 4.2 Progressive Layout Expansion
Layout scales as follows:
- mobile: single-column grids
- tablet: two-column grids for content density
- laptop: three-column grids for efficient information display

This progression avoids abrupt layout shifts and keeps information hierarchy stable across devices.

## 5. Performance Considerations

### 5.1 Dependency-Free Delivery
Because the site is static and dependency-free:
- network requests remain minimal
- deployment remains robust
- performance variance across environments is reduced

### 5.2 Modest Motion Usage
Animation is intentionally limited to lightweight transitions and short fade effects, balancing responsiveness with visual clarity.

## 6. Accessibility and Semantics
The markup preserves semantic sectioning (`header`, `nav`, `section`, `footer`) and predictable heading order. While this is not a full accessibility audit, it establishes a sound baseline for:
- assistive technology interpretation
- document structure clarity
- future incremental accessibility improvements

## 7. Trade-Offs
The simplified architecture introduces known constraints:
- no backend persistence
- no authentication or protected content
- no advanced component isolation

These constraints are accepted for current scope because the project objective is a lightweight, maintainable, professional profile presentation.

## 8. Suggested Evolution Path
If scope expands, recommended incremental improvements are:
1. Introduce structured profile data (JSON or CMS-backed source).
2. Add automated accessibility checks.
3. Add unit-tested interaction modules if JavaScript complexity increases.
4. Introduce build tooling only when modularization becomes necessary.

## 9. Document Metadata
- Version: 2.0
- Last Updated: February 2026
- Context: Refactored from food-menu prototype to professional student profile
