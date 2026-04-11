# Landing-Page-V1

This repository is already structured as a static website and is compatible with GitHub Pages:

- `index.html` is at the repository root.
- `styles.css` and `script.js` are referenced with relative paths.
- There are no framework-specific build requirements.

## GitHub Pages deployment (recommended)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml` that deploys the site automatically.

### One-time setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.

### Ongoing deploys

- Every push to the `main` branch triggers a fresh deployment.
- You can also manually trigger deployment from **Actions → Deploy static site to GitHub Pages**.

## Local preview

Because this is a plain static site, you can preview by opening `index.html` directly or by serving the folder with any simple static server.
