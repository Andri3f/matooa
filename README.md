# matooa

Frontend starter / project template based on Gulp and Webpack.

matooa is a frontend project template built on top of the fls-start starter.
It provides a modular JavaScript structure, SCSS styles, and ready-to-use HTML pages
for both development and production builds.

This template can be used as a personal starter or as a base for building responsive frontend websites.

---

## Features

- Modular vanilla JavaScript architecture (`src/js`)
- SCSS source styles with build pipeline (compile, autoprefix, minify)
- Webpack dev server with hot module replacement
- Gulp tasks for assets:
  - SVG sprites
  - fonts
  - image optimization and WebP
  - ZIP and FTP deploy
- Example HTML pages included:
  - index.html
  - home.html
  - product.html
  - setting.html
- Common UI modules included (lazy loading, sliders, popups, gallery)
- Based on fls-start template (documentation links available in code)

---

## Tech stack

- JavaScript (ES modules)
- SCSS
- HTML
- Minimal PHP (optional)

Build tools:
- Gulp
- Webpack

---

## Requirements

- Node.js 16.x or newer
- npm (this repository uses npm scripts)
- Git

---

## Quick start

Clone the repository:

bash
git clone https://github.com/Andri3f/matooa.git
cd matooa
Install dependencies:

bash
Copy code
npm run start
This script runs:

bash
Copy code
npm i --legacy-peer-deps
Start development server:

bash
Copy code
npm run dev
Gulp builds assets and then webpack-dev-server starts.
Open the address printed by webpack (usually http://localhost:8080).

npm scripts
npm run start
Install dependencies using legacy peer deps resolution.

npm run dev
Development mode: run gulp and start webpack dev server.

npm run build
Production build using Gulp and Webpack.

npm run sprite
Generate SVG sprites.

npm run fonts
Process fonts and generate required formats.

npm run deploy
Deploy build via FTP.

npm run zip
Create ZIP archive for deployment.

npm run devbuild
Build with additional flags (for example --nowebp).

npm run tmp
Run alternate gulpfile (gulpfile.tmp.js).

npm run bem
Run fls-bemtree-from-html.

Project structure
text
Copy code
package.json
gulpfile.js
config/
src/
  index.html
  home.html
  product.html
  setting.html
  scss/
  js/
    app.js
    files/
    libs/
  img/
  iconsfont/
  fonts/
JavaScript modules
The main entry point is src/js/app.js.

Most functionality is split into modules located in:

src/js/files

src/js/libs

Only imported and executed modules are included in the final bundle.

Example usage in app.js:

js
Copy code
flsFunctions.isWebp();
flsFunctions.menuInit();

flsForms.formFieldsInit({});
flsForms.formSubmit();

import './files/sliders.js';
import './files/script.js';
Customization
Styles
Edit src/scss/style.scss and partials inside src/scss/.

HTML
Edit existing pages in src/*.html or create new ones.

Images
Add images to src/img/. Gulp handles optimization and WebP generation.

Fonts
Add raw font files to src/fonts/ and run:

bash
Copy code
npm run fonts
When adding or removing third-party libraries, keep package.json,
webpack config and gulp config in sync.

Build and production
Create a production-ready build:

bash
Copy code
npm run build
The output path is defined in gulp and webpack configuration files.

Available deploy options:

FTP deploy (npm run deploy)

ZIP archive (npm run zip)

Documentation
Documentation links for fls-start modules are referenced in src/js/app.js

Gulp task definitions are located in gulpfile.js

Recommended workflow
npm run start

npm run dev

Edit source files in src/

npm run build

Deploy using ZIP or FTP
