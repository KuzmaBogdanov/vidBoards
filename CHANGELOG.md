# Changelog

## [1.4.0] — 2026-07-24

### Added
- **Delete source** — new context-menu item on cards ("Delete source") removes the card from the board and sends the source file to the OS Recycle Bin, with a confirmation dialog. Works for single cards and multi-selection.
- **Fast source delete** — new setting in Settings → Appearance: when enabled, Shift+Delete / Shift+Backspace deletes the selected card(s) and their source file(s) instantly, without a confirmation dialog.

## [1.3.0] — 2026-06-17

### Added
- **Recent Projects** — app now tracks the last 30 opened projects from any folder on the PC, sorted by last-opened date (most recent at top).
- **All Projects: sort** — sort by date or A–Z, persisted between sessions.
- **All Projects: folder hint** — "?" icon shows the exact path of the app's default projects folder.
- **Search placeholder** — reflects the active view (Recent / All Projects / Trash).
- **Persist toolbar state** — Snap, Opt and Loop button states are now saved and restored across app restarts.
- **Ctrl + scroll wheel** — holds Ctrl while scrolling to zoom 3× faster (relative to the zoom speed set in Settings).

### Fixed
- **Video playback overlay** — circle icon is hidden while a video plays; reappears as a play icon when paused, stopped, or ended.

---

## [1.1.0] — 2026-06-16

### Added
- **Ctrl+V paste — files** — paste media files from clipboard onto the canvas (copied file from Explorer lands under the cursor)
- **Ctrl+V paste — screenshot** — paste a screenshot or image copied from browser directly onto the canvas; saved to `~/Documents/VidBoards/pasted/`
- **Ctrl+V paste — text** — pasting text while focus is on the canvas creates a Label element with that text at the cursor position
- **Zoom speed setting** — new control in Settings → Appearance: scroll wheel step from 1% to 30% (default 8%), persisted across sessions
- **Reset zoom to 100%** — clicking the zoom percentage indicator in the toolbar resets zoom to 100% centered on screen
- **Developer links in About** — links to developer site (kuzmabogdanov.ru), Telegram (t.me/ShangTsungVibes) and GitHub repository
- **Auto-update** — app checks for a new version once on startup; if available, a banner appears in the home screen sidebar with "What's New" and "Update" buttons. Download is manual and confirmed; update installs after an app restart

### Improved
- **Zoom range** expanded from 30%–250% to 5%–800%
- **Grid performance** — adaptive grid step: at low zoom levels the grid spacing doubles automatically, eliminating lag and visual artifacts at ≤13% zoom
- **Settings layout** — unit labels (% and sec) moved to the left of input controls for consistent right-edge alignment
- **Settings order** — Appearance section reordered: Theme → Grid → Zoom Speed → Sequence Image Duration → Project Preview
- Number inputs in settings now have properly centered text (browser spinners removed from `input[type=number]`)

### Fixed
- **Card resize** — resizing a card via the resize handle no longer crops or distorts the video. The ratio calculation previously included the 32px footer; now uses the correct video aspect ratio
- **Subpixel rendering** — eliminated dark stripes and gaps inside cards at fractional zoom levels (Math.round on all CSS px values + overflow:hidden on card-thumb)
- **Card border-radius** — card-inner border-radius now scales with zoom, preventing content clipping at very low zoom levels
- **Settings persistence** — all settings (theme, language, grid, preview mode, seq duration, zoom speed) are now saved in a single unified `persist()` call

---

## [1.0.0] — 2026-06-03

- Initial public release
