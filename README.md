# ds

One CSS file for typography, spacing, and layout. Nothing else.

**Site:** [ds.brijr.dev](https://ds.brijr.dev) · **Demo:** [ds.brijr.dev/demo](https://ds.brijr.dev/demo/)

Built from [bridger.to](https://bridger.to) and [Craft](https://craft-ds.com). Every class has one behavior: spacing, line height, and columns adapt to the content and the space around them, and everything sits on a 4px grid. System fonts only, so nothing loads and nothing shifts.

## Use it

```html
<link rel="stylesheet" href="https://ds.brijr.dev/ds.css">
```

Or copy [`ds.css`](ds.css) into your project.

To build with an AI agent, give it `ds.css` and ask it to follow the rules at the top of the file. They cover the page structure, which class to use for what, and what to avoid.

To change colors, override the `--ds-*` variables in `:root`.

## Files

- `ds.css` — the design system
- `index.html` — the homepage
- `demo/index.html` — every styled element
- `404.html` — not-found page

## Deploy

The site is a static Cloudflare Worker on the WIP account, served at `ds.brijr.dev`.

```sh
npx wrangler deploy
```
