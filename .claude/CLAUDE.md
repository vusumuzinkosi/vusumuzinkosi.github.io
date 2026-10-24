# Working on Vusumuzi's portfolio

These are the owner's standing instructions for any work on this portfolio and the related repositories:
vusumuzinkosi.github.io (this site), vusumuzinkosi (GitHub profile README), portfolio-chatbot-api (site chatbot),
and the project repos eskom-demand-forecasting, fraud-detection-mobile-money, churn-prediction-revenue-at-risk,
ab-test-landing-page and customer-segmentation-rfm.

## Git workflow
- Never commit straight to `main`. Work on a branch, open a pull request, and **ask before merging**.
- Commit as the owner: `Vusumuzi Goodman Nkosi <72538429+vusumuzinkosi@users.noreply.github.com>`.
- Do **not** add `Co-Authored-By` or `Claude-Session` lines, or any AI attribution, to commits or pull requests.
  The repositories' contributor lists must show only the owner.
- After merging to this repo, check the "Deploy static content to Pages" run and report whether it succeeded.

## Keep everything in step
When a project, skill or detail changes, update every place it appears:
the site (`index.html` and the case study in `projects/`), `README.md`, the resume PDF
(`assets/Vusumuzi_Nkosi_Resume.pdf`, kept to two pages), the GitHub profile README, and the chatbot's knowledge
in `portfolio-chatbot-api/api/chat.js`.

## Accuracy
- Take every number and claim from the project repositories' READMEs; never invent results.
- The datasets are public or simulated and the South African clients are imagined framings; say so where relevant.
- The STADIO capstone (cap182-capstone) is not listed as a portfolio project.
- Power BI is not listed as a skill.

## Site conventions
- Professional tone: no emojis or casual phrasing.
- When `style.css`, `project.css`, `main.js`, `chatbot.js` or the resume change, bump the `?v=` version on their links
  so browsers fetch the new files.
- Charts go in `assets/images/projects/` as WebP; keep images small.
- Test new or changed pages at desktop and phone widths (no errors, no broken images, no sideways scroll) before
  opening the pull request.
