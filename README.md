# Music Fox 🎶

Get the lyrics of your favourite songs, details about the artists and much more.

## Create a new vite project using

`npm create vite@latest`

## Install Redux Toolkit

`npm install @reduxjs/toolkit react-redux`

## Install Material UI Library using

```
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

## Adding env to the project ([VITE DOCS](https://vitejs.dev/guide/env-and-mode.html))

-   Create a new .env file in the root of the project
    > project/.env
-   Create new variables starting with
    > VITE\_
-   How to access it in code
    > console.log(import.meta.env.VITE_SOME_KEY)

```
#.env file
VITE_SOME_KEY=123
```

> **⚠️ You may get a CORS block error while testing on localhost. To bypass this, you need to disable Same-Origin Policy in your browser. You may follow the instructions [here](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome).**

> **Open 'Run' and type this to open a new instance of chrome with disabled same origin policy:**

    chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security

## Install Github Pages for hosting

```
npm install gh-pages --save-dev
```

## Build and Deployment

🚩 Follow this when deploying for the first time

-   Setup Single Page Apps for GitHub Pages

    > https://github.com/rafgraph/spa-github-pages

-   Go to your `vite.config.js` file. And add your base url to it.

    > export default defineConfig({
    > base: '/project-name/', ⬅️
    > plugins: [react()],
    > });

-   Create deployment script for future deployment in package.json

    > "deploy":"npm run build && git add dist -f && git commit -m'hosting' && git subtree push --prefix dist origin gh-pages"

-   Now build the project

    > npm run build

-   Add _/dist_ folder into your repo

    > git add dist -f

-   Commit the changes

    > git commit -m "Adding dist"

-   Push the dist to a new gh-pages branch

    > git subtree push --prefix dist origin gh-pages

-   Deployment Complete ✅

---

🚩 Follow this when updating the deployed project

-   Commit and Push the current chages to the master branch
-   Now run the `npm run deploy`
