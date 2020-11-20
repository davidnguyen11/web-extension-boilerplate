# Web Extension Boilerplate

<div align="center">
  <img width="300" src="https://user-images.githubusercontent.com/6290720/99804359-3d584200-2b7e-11eb-9cff-a2d7e207415e.png" />
  <br />
  <br />
</div>

This boilerplate provides a skeleton to start developing cross-browser web extensions.

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

1. Go to the browser's URL address bar
2. Enter `chrome://extensions/`
3. Switch to "**Developer mode**"
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

Check here for more detail: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

**Edge**

1. Go to the browser's URL address bar
2. Enter `edge://extensions/`
3. Turn on `Developer mode`
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

**Firefox**

1. Go to the browser's URL address bar
2. Enter `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on...**
4. Browse to your `manifest.json` & click **Open**
5. Done!

Check here for more details: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## Privacy Policy file

Web stores require you to describe what the extension is or if you collect data of users. You also need to describe why you do that.

Make sure you include this file when you publish an extension, the web store may ask you to upload it.

**Note:** If you don't know how to write a privacy policy file, you can look at the [existing one](https://github.com/davidnguyen179/web-extension-boilerplate/blob/main/PRIVACY_POLICY.txt) attached on this repository.

## Badges

You can add badges to your project to indicate the version or to show how many users use your extension here:

- [https://shields.io/](https://shields.io/)

## CI/CD with github action

You can modify the `.github/workflows` to show the CI/CD flow.

- [https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs](https://docs.github.com/en/free-pro-team@latest/actions/guides/building-and-testing-nodejs)

## How to publish web extension

| Browsers       | Web store                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Chrome         | [https://developer.chrome.com/webstore/publish](https://developer.chrome.com/webstore/publish)                                                                                                 |
| Microsoft Edge | [https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension](https://docs.microsoft.com/en-us/microsoft-edge/extensions-chromium/publish/publish-extension) |
| Firefox        | [https://extensionworkshop.com/documentation/publish/submitting-an-add-on](https://extensionworkshop.com/documentation/publish/submitting-an-add-on)                                           |

## References

- Develop your first Chrome extension & Chromium Edge: [https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)
- Develop your first Firefox add-on: [https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- If you have any Chrome extension issues, you can post it here: [https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions)
- [Jack and Amy Dev youtube channel](https://www.youtube.com/channel/UCVj3dGw75v8aHFYD6CL1tFg), which explains some common mistakes made when developing Chrome extensions.

## Showcase

This boilerplate was used to develop [Spotify Web Extension](https://spotify-extension.netlify.app/)
