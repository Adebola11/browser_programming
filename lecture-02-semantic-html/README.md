# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
- Created semantic HTML portfolio with proper structure
- Implemented skip navigation for accessibility
- Used semantic elements: header, main, section, article, figure, figcaption, nav, footer
- Added embedded video using iframe
- Added handwritten circuit calculations image
- Created logical heading hierarchy (h1 → h2 → h3)

## 2. Semantic decisions I made (REQUIRED)

### Decision 1
- **Element(s) used:** `&lt;article&gt;` for portfolio projects
- **Where in the page:** Inside Portfolio section, wrapping each project
- **Why this element is semantically correct:** Article represents self-contained content that could stand alone. Each project has its own heading, description, images, and links.

### Decision 2
- **Element(s) used:** `&lt;figure&gt;` and `&lt;figcaption&gt;`
- **Where in the page:** Wrapping the handwritten circuit image and YouTube video
- **Why this element is semantically correct:** These elements explicitly associate media content with its caption, helping screen readers understand the relationship.

### Decision 3
- **Element(s) used:** `&lt;nav&gt;` in footer for social links
- **Where in the page:** Footer section containing LinkedIn, GitHub, Email links
- **Why this element is semantically correct:** Nav identifies a block of major navigation links, helping assistive technology users identify this as a navigation landmark.

## 3. Accessibility considerations
- **Skip link:** Added "Skip to content" link for keyboard users
- **Alt text:** All images include descriptive alt text
- **Heading hierarchy:** Proper nesting (h1 for name, h2 for sections, h3 for subsections)
- **ARIA labels:** Used aria-labelledby to connect sections with headings

## 4. What I learned
- Importance of semantic HTML for accessibility
- Proper use of figure/figcaption for media
- Difference between section and article elements
- ARIA attributes enhance semantic meaning

## 5. What I still need to improve
- Testing with actual screen readers
- More complex ARIA attributes for dynamic content

## 6. Notes about AI usage
- **Tool used:** GitHub Copilot for HTML structure suggestions
- **What I accepted as-is:** Basic HTML5 boilerplate
- **What I modified manually:** All semantic element choices, alt text, ARIA attributes, content structure
