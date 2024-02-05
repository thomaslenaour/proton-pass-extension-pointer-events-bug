## Information

This is an example project that showcases the pointer event bug associated with the Popup on the Proton Pass Extension.

## Installation

First, run the development server:

```bash
pnpm install
pnpm dev
```

## Steps to reproduce

1. Click on the button to open the modal
2. Imagine we have a form with an input (with type `email`) inside the modal. The Proton Pass extension detect it (as it should).
3. Click on the Proton Pass icon to fill the input with the email address. (the popup appears as it should)
4. We can't click on the options of the popup because the pointer events are not being detected and because the modal (below) has a `pointer-events: none` style.

### Addition context

- OS : macOS Sonomo 13.1
- Chrome : 121.0.6167.139 (Official Build) (x86_64)
