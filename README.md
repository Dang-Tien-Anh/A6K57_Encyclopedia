# My Wiki

A tiny Wikipedia-style website with only our own content.
Plain HTML and CSS. No tools, no build step, nothing automatic.

## Put it online (GitHub Pages)

1. Create a new repository on GitHub and upload all these files.
2. Go to **Settings → Pages**.
3. Under "Branch", pick `main` and folder `/ (root)`, then **Save**.
4. After a minute your site is at `https://YOUR-NAME.github.io/REPO-NAME/`.

## Add an article (3 steps)

1. Copy `pages/template.html` and rename it, e.g. `pages/cat.html` (named after the English word).
   Use lowercase letters and `-` only, no spaces or accents in file names.
2. Fill in the blanks. Put your image in the `images/` folder.
3. Open `index.html` and add ONE line for your article in the list, in alphabetical order:
   `<li><a href="pages/cat.html">Cat (Con mèo)</a></li>`

## Rules so we don't fight each other

- **One article = one file.** Only edit your own file.
- Never edit someone else's article without telling them. Use a new branch and a pull request for that.
- In `index.html`, only add your own line. Don't reorder or change other lines.
- Before you start working, always **pull** the latest version first.
- Commit small and often, with a clear message like `Add article: Con mèo`.

## Folders

- `index.html` – home page with the article list and search
- `style.css` – all the colors and layout (light and dark colors are at the top)
- `theme.js` – the light/dark button, about 15 lines
- `pages/` – one HTML file per article
- `images/` – pictures used by articles

## Pages that still have blanks

Pages made from the Word file may contain a yellow `TODO: add ...` (missing source, pronunciation, etc.).
To find them all: search the `pages/` folder for `TODO`. Replace the yellow part with the real text and remove the `<span class="todo">` tags around it.
