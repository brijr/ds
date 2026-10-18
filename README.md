# ds

One CSS file for typography, spacing, and layout, plus one button and plain form fields.

**Site:** [ds.brijr.dev](https://ds.brijr.dev) · **Demo:** [ds.brijr.dev/demo](https://ds.brijr.dev/demo/)

Built from [bridger.to](https://bridger.to) and [Craft](https://craft-ds.com). Every class has one behavior: spacing, line height, and columns adapt to the content and the space around them, and everything sits on a 4px grid. System fonts only, so nothing loads and nothing shifts.

## What's in it

- **Type.** A small scale set by element: h1 is 24px, h2 is 20px, everything else is 16px, with 14px meta (`.ds-small`) and 12px labels (`.ds-label`). Line spacing follows the element: 20px for single lines, 24px for paragraphs and prose.
- **Layout.** One centered 512px column on every page. `.ds-stack`, `.ds-row`, `.ds-cluster`, `.ds-aside`, and `.ds-grid` space themselves by context, so there are no sizes to pick.
- **Prose.** `.ds-prose` styles everything markdown can produce: headings, lists, code, quotes, tables, figures.
- **Button and forms.** One filled 40px button (`<button>` or `.ds-button`). Text inputs, selects, and textareas fill the width at 40px; `.ds-field` pairs a label with its control.
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

## Deploy

The site is a static Cloudflare Worker on the WIP account, served at `ds.brijr.dev`.

```sh
npx wrangler deploy
```

`.assetsignore` keeps the README, config, and `examples/` off the site.
