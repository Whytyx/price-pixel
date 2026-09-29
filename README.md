# Price Pixel

## V1.0.1 — Dynamic Island / safe-area layout
- `env(safe-area-inset-top)` clears iPhone Dynamic Island / notch
- Main content vertically centered (`flex` + `safe center` / `margin-block: auto`), still scrollable when taller than screen
- `env(safe-area-inset-bottom)` for home indicator

## V1.0.0 — Cost-per-unit / value comparison calculator
Pixel-art Thai UI calculator for shopping value.

### Features
- **คำนวณ (Single)** — price + quantity + unit → baht per g / kg / ml / L / pcs (auto convert within family)
- **เทียบ (Compare)** — Product A vs B cards, unit prices, green highlight + Thai winner label
- Instant calc on input change
- Mobile-first PWA (manifest + service worker + icons)
- Theme: thick borders, Press Start 2P + Kanit, chunky buttons, retro palette

**Live:** https://whytyx.github.io/price-pixel/
