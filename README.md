# Web Extension Boilerplate

<div align="center">
  <img width="300" src="https://user-images.githubusercontent.com/6290720/99679424-47673b80-2abf-11eb-9c2f-e7b2b3411d24.png" />
  <br />
  <br />
</div>

Web Extension Boilerplate provide the skeleton to start developing web extension

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/davidnguyen179/web-extension-boilerplate/pulls)
![ci/cd](https://github.com/davidnguyen179/web-extension-boilerplate/workflows/ci/cd/badge.svg)

## Development

```bash
npm i
```

**Chrome**

```bash
npm run dev-chrome
```

**Edge**

```bash
npm run dev-edge
```

**Firefox**

```bash
npm run dev-firefox
```

## Production

```bash
npm i
```

**Chrome**

```bash
npm run chrome
```

**Edge**

```bash
npm run edge
```

**Firefox**

```bash
npm run firefox
```

## Load package to browsers

**Chrome**

1. On the browser's URL address bar
2. Enter `chrome://extensions/`
3. Switch to "**Developer mode**"
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

Check here for more detail: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

**Edge**

1. On the browser's URL address bar
2. Enter `edge://extensions/`
3. Turn on `Developer mode`
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

**Firefox**

1. On the browser's URL address bar
2. Enter `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on...**
4. Browser to your `manifest.json` & click **Open**
5. Done!

Check here for more detail: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Showcase

This boilerplate is used to develop [Spotify Web Extension](https://spotify-extension.netlify.app/)

