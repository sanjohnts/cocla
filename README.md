# COCLA website (React + Vite)

A React version of `~/Documents/html/cocla-website/index.html`. It looks and works exactly the same.

## Run it in VS Code
Open this folder in VS Code, then in the terminal:

```bash
npm install      # first time only
npm run dev      # opens a local preview, usually http://localhost:5173
```

## Make the files to upload
```bash
npm run build
```
Upload everything inside `dist/` to the web host. Paths are relative, so `dist/` also works from a sub-folder.

## Where things are
| What | File |
|---|---|
| All text: courses, steps, students, sectors, events, FAQ, phone, links | `src/data/site.js` |
| Colours, fonts, layout (copied 1:1 from the static page) | `src/styles/global.css` |
| Page title, description, Google data (JSON-LD), fonts | `index.html` |
| Photos | `public/assets/` |
| One component per section | `src/components/` |
| Drawings (Fuji scene, window, sakura sprite) and icons | `src/components/svg/` |

## Behaviour
- **Forms:** the counselling form and the free-guide pop-up open WhatsApp (+91 82817 69555) with the visitor's details. There are no phone-call links.
- **Guide pop-up:** opens once per visit on desktop when the mouse heads for the top of the window (after 5 s). It also opens from the "free Japan career guide" links.
- **Photos:** `hero.jpg`, `about-wood.jpg` / `about-wood-mobile.jpg` and `counselling-room.jpg` sit over drawings. If a photo file is missing, the drawing shows instead.
- **Course arrows:** they start scrolling on the next frame (`requestAnimationFrame`), because a smooth scroll started inside React's click handling gets cancelled.
