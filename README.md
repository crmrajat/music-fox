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

    `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`

## Build and Deployment
