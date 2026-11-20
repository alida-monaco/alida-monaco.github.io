# Values As Vision — website

A static site (plain HTML, CSS, and a little JavaScript; no build step) for the Values As Vision program.

## Publish on GitHub Pages
1. Create a new GitHub repository (e.g. `values-as-vision`).
2. Upload **the contents of this folder** (not the folder itself) to the repository root, so `index.html` sits at the top level.
3. In the repo, go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/<repo-name>/`.

For a custom domain, add it under Settings → Pages and add a `CNAME` file containing the domain.

## Structure
- `index.html`, `problem.html`, `approach.html`, `pilots.html`, `team.html`, `gallery.html`, `get-involved.html`, `404.html`
- `css/style.css` — all styling; brand colors are CSS variables at the top (`--gold`, `--green`, `--brown`, `--blue`)
- `js/main.js` — mobile menu, scroll reveal, photo lightbox
- `images/` — optimized photos (JPG, max 1400px)

## Editing
Open any `.html` file in a text editor. To change the contact email, search for `alidabmonaco@gmail.com`.
To add a photo to the gallery, drop it in `images/` and copy one `<button>…</button>` line in `gallery.html`.
