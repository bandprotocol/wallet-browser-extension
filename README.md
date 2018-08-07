<div align="center">
  <h1>
    Band Protocol Browser Wallet
  </h1>

  <p>
    <strong>Official Browser Extensions for Band Chain</strong>

[![Code Style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Dependency Status](https://david-dm.org/bandprotocol/wallet-browser-extension.svg)](https://david-dm.org/bandprotocol/wallet-browser-extension)
[![devDependency Status](https://david-dm.org/bandprotocol/wallet-browser-extension/dev-status.svg)](https://david-dm.org/bandprotocol/wallet-browser-extension#info=devDependencies)
  </p>
</div>

Similarly to MetaMask, BandMask allows developers to build dApp UI on website. It exposes instance of Band Protocol Client to the web, and allows the dApp to communicate with blockchain without having to manage user wallet credentials itself.

<div align="center">
  <img width="210px" src="resources/screenshot-1.png" alt="Mockup" />&nbsp;<img width="210px" src="resources/screenshot-2.png" alt="Mockup" />&nbsp;<img width="210px" src="resources/screenshot-3.png" alt="Mockup" />&nbsp;<img width="210px" src="resources/screenshot-4.png" alt="Mockup" />&nbsp;
</div>

# Installation

```sh
$> yarn install
$> yarn build
```

### Load the extension in Chrome & Opera

1.  Open Chrome/Opera browser and navigate to chrome://extensions
2.  Select "Developer Mode" and then click "Load unpacked extension..."
3.  From the file browser, choose to `extension-boilerplate/build/chrome` or (`extension-boilerplate/build/opera`)

### Load the extension in Firefox

1.  Open Firefox browser and navigate to about:debugging
2.  Click "Load Temporary Add-on" and from the file browser, choose `extension-boilerplate/build/firefox`

# Developing

The following tasks can be used when you want to start developing the extension and want to enable live reload -

- `npm run chrome-watch`
- `npm run opera-watch`
- `npm run firefox-watch`

# Packaging

Run `npm run dist` to create a zipped, production-ready extension for each browser. You can then upload that to the appstore.

# Special Thanks

Thank you Bharani for providing a fantastic Boilerplate for this extension.

