# Pooja Sachan – Portfolio Website

A responsive personal portfolio built with only **HTML5, CSS3 and Vanilla JavaScript**.
No build step. Works directly on GitHub Pages.

## Folder structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg                 (your photo)
│   │   └── project-ai-healthcare.jpg   (project cover – placeholder, replace with a screenshot)
│   ├── documents/
│   │   └── resume.pdf                  (auto-made from your details – replace with your own)
│   └── certificates/
│       └── ai-literacy-ibm-skillsbuild.pdf
└── README.md
```

## Deploy on GitHub Pages

1. Sign in to GitHub and click **New repository**. Name it e.g. `portfolio` (or `poojasachan123.github.io` for a root URL). Keep it **Public**.
2. Click **uploading an existing file**, then drag in everything *inside* the `portfolio` folder (`index.html`, `css`, `js`, `assets`, `README.md`). `index.html` must be at the top level of the repository.
3. Click **Commit changes**.
4. Go to **Settings → Pages**. Under **Build and deployment → Source**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Wait 1–2 minutes. Your site will be live at `https://poojasachan123.github.io/portfolio/`.

## How to edit

All text is in `index.html`. Search for the comments that start with `EDIT:`.

- **Photo:** replace `assets/images/profile.jpg` (keep the same file name).
- **Resume:** replace `assets/documents/resume.pdf` with your own PDF (same name).
- **Project image:** replace `assets/images/project-ai-healthcare.jpg` with a screenshot of your project.
- **Project GitHub link:** in the Projects section, put your link in the "View Code" button's `href` and delete the word `hidden` from that line.
- **Colors:** change the variables at the top of `css/style.css`.
- **Phone number is public** on the website. To hide it, delete the Phone card in the Contact section of `index.html`.

## Add a new project

Copy the whole `<article class="card project-card reveal"> ... </article>` block in the Projects section, paste it below, and change the text, image path and tags.

## Add a new certificate

Copy one `<article class="card cert reveal"> ... </article>` block in the Certifications section and change the name, issuer and year. Put the PDF in `assets/certificates/` and link to it like the AI Literacy one.

## Remove a section

Delete the whole `<section id="...">` block and its link in the navbar. (Training, Certifications and Projects also hide themselves automatically if they have no cards.)
