# Jardin Obscur — HTML, CSS & JavaScript

A responsive perfume landing page built with plain HTML, CSS and vanilla JavaScript. It needs no build step and no dependencies.

## Run

Open `index.html` in a browser, or serve the folder with any static server:

```sh
python3 -m http.server 8000
```

## Structure

- `index.html`: page markup and all static sections.
- `css/style.css`: colors, typography, layout, breakpoints and component styles.
- `js/data.js`: product names, prices, categories, scent notes and testimonials.
- `js/main.js`: the interactive parts: the best-seller carousel, catalog filters, product dialog, shopping bag with the WINTER15 discount, testimonial switcher, mobile menu and newsletter form. It also includes the inline Lucide icons.
- `images/`: generated perfume photography.
- `favicon.svg`: the brand favicon.
- `IMAGE-PROMPTS.json`: the prompts used to generate each image.

## Preview boundaries

This is a frontend-only site. Checkout, payments, inventory and email delivery are not connected. The newsletter form shows a preview message and does not send or save an address. The bag resets on reload.
