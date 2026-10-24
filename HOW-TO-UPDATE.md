# Personal website: how to update it

Plain HTML and CSS, hosted free on GitHub Pages. No build step: edit a file, commit, push.

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| About (story, skills, experience, education) | `about.html` |
| Projects list | `projects/index.html` |
| Case studies | `projects/*.html` (unchanged from the old site) |
| Teaching | `teaching.html` |
| Writing list | `writing/index.html` |
| A post | `writing/beat-the-baseline-first.html` |
| Now | `now.html` (change the "Last updated" date when you edit it) |
| Contact form | `contact.html` |
| Not found | `404.html` |

Styles: `assets/css/style.css` (original design) + `assets/css/site.css` (new pages, mobile menu).
Script: `assets/js/site.js` (mobile menu, form thank-you message).

## Add a new post
1. Copy `writing/beat-the-baseline-first.html` to `writing/your-slug.html` and replace the title, date, description and body.
2. Add it to the top of the list in `writing/index.html` and swap it into "Latest writing" on `index.html`.
3. Add its URL to `sitemap.xml`.

## Contact form (one-time step)
The form uses FormSubmit (free, no account). The first time someone submits it, FormSubmit
emails vusizwe@rocketmail.com an activation link. Send yourself a test message from the live
site and click that link; after that, messages arrive normally.

## Publishing
This folder is a full copy of the `vusumuzinkosi.github.io` repo. To publish, replace the
contents of your local clone with these files (or clone the repo and copy them in), then commit
and push to `main`. The existing GitHub Actions workflow deploys it.
