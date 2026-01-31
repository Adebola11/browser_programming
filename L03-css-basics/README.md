# Lecture 03 - CSS Basics

## What I implemented this lecture
- Created external CSS file (css/style.css) and linked it to HTML
- Applied typography basics: readable font family, line height, and hierarchical font sizes
- Implemented spacing using both margin and padding for different elements
- Styled header and footer with subtle background colors and padding
- Converted the footer navigation list from vertical bullets to horizontal links without underlines
- Made images responsive using max-width: 100% to prevent overflow
- Constrained main content width and centered it using max-width and margin: 0 auto
- Maintained semantic HTML structure without major modifications

## CSS selectors I used
1. **Element selector**: `body`, `h1`, `h2`, `p`, `img`, `section` - Applied base styling to HTML elements
2. **Group selector**: `header, footer` and `img, iframe` - Applied same styles to multiple elements
3. **Descendant selector**: `nav ul`, `nav li`, `nav a` - Targeted navigation items specifically
4. **Class selector**: `.skip-link` - Styled the accessibility skip link
5. **ID selector**: `#main`, `#portfolio-heading` - Targeted specific unique sections
6. **Pseudo-class**: `a:hover`, `nav a:hover`, `.skip-link:focus` - Interactive states for links

## One thing I struggled with
- Understanding when to use margin versus padding for spacing elements, especially deciding between using margin-bottom on sections versus padding inside containers.
  I resolved this by remembering that margin creates space outside the element (between sections) while padding creates space inside (within the section boundaries).

## One improvement I want to do next
- Add media queries to make the layout fully responsive for mobile devices, and perhaps add a hamburger menu for the navigation on smaller screens.
- I also want to experiment with CSS Grid or Flexbox for more sophisticated layouts in future lectures.
