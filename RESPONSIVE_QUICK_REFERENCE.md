# 🚀 Quick Reference - Responsive Design Patterns

## Mobile-First Media Queries

```css
/* ✅ CORRECT - Mobile First */
.element {
  /* Base styles for mobile (0-767px) */
  padding: 1rem;
}

@media (min-width: 768px) {
  .element {
    /* Tablet and up */
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop and up */
    padding: 3rem;
  }
}
```

```css
/* ❌ AVOID - Desktop First */
.element {
  padding: 3rem; /* Desktop */
}

@media (max-width: 1024px) {
  .element {
    padding: 2rem; /* Tablet */
  }
}

@media (max-width: 768px) {
  .element {
    padding: 1rem; /* Mobile */
  }
}
```

---

## Responsive Units

### Typography
```css
/* ✅ Use clamp() for fluid typography */
font-size: clamp(1rem, 2vw + 0.5rem, 2rem);
/*             min   preferred    max */

/* ✅ Use rem for consistent scaling */
font-size: 1.5rem; /* 24px if base is 16px */

/* ❌ Avoid fixed pixels */
font-size: 24px;
```

### Spacing
```css
/* ✅ Use design tokens */
padding: var(--spacing-md);
margin-bottom: var(--spacing-lg);

/* ✅ Use rem units */
padding: 1rem 1.5rem;

/* ❌ Avoid fixed pixels */
padding: 16px 24px;
```

### Widths
```css
/* ✅ Percentage or viewport units */
width: 100%;
max-width: 50rem; /* 800px */

/* ✅ Fluid sizing */
width: clamp(20rem, 80%, 60rem);

/* ❌ Fixed pixels */
width: 800px;
```

---

## Common Responsive Patterns

### Container
```css
.container {
  width: 100%;
  max-width: 75rem; /* 1200px */
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
}
```

### Grid Layout
```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: single column */
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
    gap: var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}
```

### Flexbox Layout
```css
.flex-container {
  display: flex;
  flex-direction: column; /* Mobile: stack vertically */
  gap: var(--spacing-md);
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row; /* Tablet+: horizontal */
    gap: var(--spacing-lg);
  }
}
```

---

## Touch-Friendly Components

### Buttons
```css
button {
  min-height: 2.75rem; /* 44px - minimum touch target */
  min-width: 2.75rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

button:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

button:active {
  transform: scale(0.98); /* Visual feedback */
}
```

### Links
```css
a {
  min-height: 2.75rem;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

---

## Images

### Responsive Images
```jsx
<img 
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  loading="lazy"
  width="800"
  height="600"
  style={{ maxWidth: '100%', height: 'auto' }}
/>
```

### CSS
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

---

## Animations

### Performance-Optimized
```css
/* ✅ Animate transform and opacity (GPU-accelerated) */
.element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.element:hover {
  transform: translateY(-0.25rem);
  opacity: 0.8;
}

/* ❌ Avoid animating layout properties */
.element {
  transition: height 0.3s ease; /* Triggers layout recalculation */
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Common Breakpoints

```css
/* Extra Small (xs) - 0-639px */
/* Base styles, no media query */

/* Small (sm) - 640px+ */
@media (min-width: 640px) { }

/* Medium (md) - 768px+ */
@media (min-width: 768px) { }

/* Large (lg) - 1024px+ */
@media (min-width: 1024px) { }

/* Extra Large (xl) - 1280px+ */
@media (min-width: 1280px) { }

/* 2X Large (2xl) - 1536px+ */
@media (min-width: 1536px) { }
```

---

## Accessibility Checklist

- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- [ ] ARIA labels on interactive elements
- [ ] Focus indicators visible and clear
- [ ] Touch targets minimum 44x44px
- [ ] Color contrast ratios meet WCAG AA (4.5:1 for text)
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Alt text on all images

---

## Testing Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Browser DevTools

### Responsive Design Mode
- **Chrome/Edge:** F12 → Device Toolbar (Ctrl+Shift+M)
- **Firefox:** F12 → Responsive Design Mode (Ctrl+Shift+M)
- **Safari:** Develop → Enter Responsive Design Mode

### Test Viewports
- Mobile: 375x667 (iPhone SE)
- Mobile: 390x844 (iPhone 12/13)
- Tablet: 768x1024 (iPad)
- Desktop: 1280x720
- Large: 1920x1080

---

## Common Issues & Solutions

### Issue: Horizontal scrolling on mobile
```css
/* Solution */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

* {
  box-sizing: border-box;
}
```

### Issue: Text too small on mobile
```css
/* Solution: Use relative units */
body {
  font-size: 100%; /* 16px base */
}

p {
  font-size: 1rem; /* Respects user preferences */
}
```

### Issue: Images breaking layout
```css
/* Solution */
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Issue: Fixed elements covering content
```css
/* Solution: Add padding to body */
body {
  padding-top: 4rem; /* Height of fixed header */
}

header {
  position: fixed;
  top: 0;
  height: 4rem;
}
```

---

## Performance Tips

1. **Lazy load images:**
```jsx
<img loading="lazy" src="..." alt="..." />
```

2. **Use `clamp()` instead of multiple media queries:**
```css
/* ✅ One line */
font-size: clamp(1rem, 2vw + 0.5rem, 2rem);

/* ❌ Multiple media queries */
font-size: 1rem;
@media (min-width: 768px) { font-size: 1.5rem; }
@media (min-width: 1024px) { font-size: 2rem; }
```

3. **Minimize layout shifts:**
```css
/* Set explicit dimensions */
.carousel-card {
  width: 260px;
  height: 340px;
  aspect-ratio: 260 / 340;
}
```

---

## Resources

- [Can I Use](https://caniuse.com/) - Browser compatibility
- [MDN Web Docs](https://developer.mozilla.org/) - Documentation
- [Web.dev](https://web.dev/) - Best practices
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility

---

**Last Updated:** February 2026
