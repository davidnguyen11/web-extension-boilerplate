# Web Extension Boilerplate

Web Extension Boilerplate provide the skeleton to start developing web extension

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

## Load package to Chrome

1. On the browser's URL address bar
2. Enter `chrome://extensions/`
3. Switch to "**Developer mode**"
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

Check here for more detail: [https://developer.chrome.com/extensions/getstarted](https://developer.chrome.com/extensions/getstarted)

## Load package to Edge

1. On the browser's URL address bar
2. Enter `edge://extensions/`
3. Turn on `Developer mode`
4. Load extension by clicking "**Load unpacked**"
5. Browse to `dist/` in source code
6. Done!

## Load package to Firefox

1. On the browser's URL address bar
2. Enter `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on...**
4. Browser to your `manifest.json` & click **Open**
5. Done!

Check here for more detail: [https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

