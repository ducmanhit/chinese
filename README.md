# Beginner Chinese Learning

A simple static website for a beginner Chinese learning project.

This project intentionally uses only:

- HTML
- CSS
- Vanilla JavaScript
- JSON data files

There are no frameworks, build tools, package managers, or external libraries.

## Project Structure

```text
index.html
css/
  style.css
js/
  app.js
data/
  pinyin.json
  hsk1.json
assets/
  icons/
  images/
  audio/
README.md
```

## File Guide

## Current UI

The homepage uses a modern learning dashboard layout with:

- Sidebar navigation
- Top header with search, theme toggle, and profile button
- Continue Learning
- Learning Path
- Pinyin lesson cards
- Vocabulary cards
- Flashcard review
- Quiz preview
- Learning progress cards
- Right-side progress panel

## File Guide

`index.html`

The main page of the website. It contains the learning dashboard structure and
links to the stylesheet in `css/style.css` and the JavaScript file in
`js/app.js`.

`css/style.css`

The stylesheet for the full interface. It contains responsive layout rules,
typography, colors, cards, buttons, hover states, progress visuals, and the
flashcard flip animation.

`js/app.js`

Small vanilla JavaScript for UI-only controls, including the theme toggle,
favorite buttons, flashcard flip state, and quiz feedback.

`data/pinyin.json`

A placeholder JSON data file for future pinyin content.

`data/hsk1.json`

A placeholder JSON data file for future HSK 1 vocabulary content.

`assets/icons/`

Folder for future icon files.

`assets/images/`

Folder for future image files.

`assets/audio/`

Folder for future pronunciation audio files.

## How To Open

Open `index.html` directly in a browser.
