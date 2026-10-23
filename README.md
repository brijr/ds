# ds

One CSS file for typography, spacing, and layout, plus one button and plain form fields.

**Site:** [ds.brijr.dev](https://ds.brijr.dev) · **Demo:** [ds.brijr.dev/demo](https://ds.brijr.dev/demo/)

Built from [bridger.to](https://bridger.to) and [Craft](https://craft-ds.com). Every class has one behavior: spacing, line height, and columns adapt to the content and the space around them, and everything sits on a 4px grid. System fonts only, so nothing loads and nothing shifts.

## What's in it

- **Type.** A small scale set by element: body text starts at 20px (1.25rem). h1 is 36px on 40px lines, h2 is 24px, everything else is 20px, with 16px meta (`.ds-small`) and 14px labels (`.ds-label`). Line spacing follows the element: 24px for single lines, 28px for paragraphs and prose.
- **Layout.** A twelve-column canvas with 24px gutters. Every block starts at column 1. Normal blocks fill the first six columns from 768px, up to 660px wide. Put `.ds-wide` on a direct child of `.ds-container` for eight columns (ten on tablets), or `.ds-full` for all twelve. Phones use the available reading width. Major blocks sit 48–72px apart. Local `.ds-grid` layouts split into six/six tracks; `.ds-aside` and `.ds-masthead` use four/eight, stacking below 408px of their own available width.
- **Prose.** `.ds-prose` styles everything markdown can produce: headings, lists, code, quotes, tables, figures.
- **Button and forms.** One filled 48px button (`<button>` or `.ds-button`). Text inputs, selects, and textareas fill the width at 48px; `.ds-field` pairs a label with its control.
- **Color.** Neutral grays with light and dark modes that follow the system. Every color is a `--ds-*` variable.

## Use it

```html
<link rel="stylesheet" href="https://ds.brijr.dev/ds.css">
```

Or copy [`ds.css`](ds.css) into your project. To change colors, override the `--ds-*` variables in `:root`:

```css
:root {
  --ds-primary: light-dark(#2563eb, #60a5fa);
}
```

## Text and wider media

Keep media as a sibling of text, directly inside the page container:

```html
<div class="ds-container">
  <section class="ds-prose">Text fills the reading span.</section>
  <figure class="ds-wide">
    <img src="image.jpg" alt="Describe the image" />
  </figure>
  <div class="ds-full">An animation or other full-width element</div>
</div>
```

At 1280px and above, spans are 6 / 8 / 12. From 768px, they are 6 / 10 / 12. Below 768px, they share one reading width. The canvas tops out at 1344px plus page padding, so text tops out at 660px.

The homepage and demo's geometric image and animated bars are examples. Their artwork lives in `assets/grid-study.svg` and `showcase.css`; the grid itself is entirely in `ds.css`. The animation has a pause control and honors reduced motion.

## Build with an agent

The rules for using ds.css are written at the top of the file. Paste this into any coding agent:

```
Build this site with ds.css: https://ds.brijr.dev/ds.css

Open that link and read the "RULES FOR AGENTS" comment at the top of the file before writing any markup. Follow the rules exactly.

- Link the file in every page: <link rel="stylesheet" href="https://ds.brijr.dev/ds.css">
- Build layout only from the ds classes in the rules. Don't set font sizes, spacing, widths, or colors yourself.
- To change colors, only override the --ds-* variables in :root.
- Write no other CSS unless something truly can't be done with ds.css. If you add any, use only var(--ds-*) tokens and tell me what you added and why.

Keep the content and images I give you. The design comes from the structure, not from extra styling.
```

See the [demo](https://ds.brijr.dev/demo/) for every element with its class name.

## Files

- `ds.css`: the design system
- `index.html`: the homepage
- `demo/index.html`: every styled element
- `404.html`: not-found page
- `showcase.css`: example animation, separate from the design system
- `assets/grid-study.svg`: geometric image used to demonstrate wide media

## Deploy

The site is a static Cloudflare Worker on the WIP account, served at `ds.brijr.dev`.

```sh
npx wrangler deploy
```

`.assetsignore` keeps the README, config, and `examples/` off the site.
