# Instructure UI Learning App

This is a demo app to go along with a theoretical guide that I imagine would guide people towards 
learning [Instructure UI](https://instructure.design), possibly while they are also learning React. 

The idea was to extend the simple App.js/Banner.js page created by [Instui-CLI](https://instructure.design/#instui-cli)
into something with more stuff to examine and hack up while getting a sort-of-organized tour of the 
Instructure UI components. 

## Why?  
At InstructureCon 2019 I gave informal feedback to Steve Townsend that there needed to be tutorials 
on Instructure UI because -- at least for the potential adopters that work in educational IT 
departments (i.e. university or school district sys admin/developers) -- deciding to check out 
the library meant that a) they knew or wanted to learn React and b) they were ready to start 
digging in to the documentation for [Instructure UI](https://instructure.design), which isn't particularly
friendly for the uninitiated. 

Full disclosure, I'm imagining this guide and apparently simultaneously wishing it into existence because it would have
been really helpful for me, especially now and in the future. 

This is a roundabout way of admitting that I don't really know what I'm doing when it comes to React. 
But I think I'm getting the hang of it, sort of. 

## About 
This project was created with [Instructure UI](https://instructure.design) using 
[Instui-CLI](https://instructure.design/#instui-cli) via npx:

```
npx @instructure/instui-cli create app --name MyInstuiApp
``` 

and then invoking the following commands after
realizing that I didn't have all of the @instructure packages installed:

```bash
 yarn add @instructure/ui-text-input
 yarn add @instructure/ui-form-field
 yarn add @instructure/ui-alerts
 yarn add @instructure/ui-select
 yarn add @instructure/ui-tabs
 # .... etc ....
```

In order to run it yourself, the commands are a little different, because `yarn add` added the packages I installed to 
[package.json](package.json), so once you've forked this repo you should be able to just import components you want to 
check out without having to `yarn add` them yourself. 

If you end up with an error 
when in your js file from the line 

```javascript 1.6
import { WhaChaMaCallIt } from '@instructure/ui-whatsits-and-whosits'
```

then a quick `yarn add @instructure/ui-whatsits-and-whosits`in your terminal should hopefully fix the problem - but maybe
check [package.json](package.json) first and see what version of Instructure UI this app is using
(first release uses 6.7.0) and make sure that the `ui-whatsits-and-whosits` package was available with that release. 

## The rest of the Instui-CLI generated README.md

Instructure UI has a number of beautiful and accessible React components with
baked-in styles and theming and helpful utility functions.

For easy setup, we've included all of our build presets. This includes
configurations for webpack, babel, eslint, etc, and allows you to start developing
immediately.

To get started, you can import and compose existing components from our library.
We've included a few commonly used ones already to render the landing page.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open
[http://0.0.0.0:3000](http://0.0.0.0:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the
console.

### `yarn build`

Builds the app for production and outputs it to the `__build__` directory.

### `yarn lint`

Lints the app for eslint errors.

### `yarn lint:fix`

Fixes linting errors that can be automatically corrected.

### `yarn clean`

Clean by removing any build or cache related files and directories.

### `yarn open:sandbox`

If your project is hosted in a public [GitHub](http://github.com) repository,
you can open it with [codesandbox](https://codesandbox.io). To try it out:
  * Push your latest changes to a GitHub repo
  * Run `yarn open:sandbox` in the terminal

A chrome window should open up codesandbox with your project source.

## Theming
See [ui-themeable](https://instructure.design/#ui-themeable) for a more
comprehensive theming guide.

All components in our library are [themeable](https://instructure.design/#ui-themeable)
which allows you to create a custom look and feel for your application. This app
is pre-configured with our [canvas](https://instructure.design/#canvas) theme
which is also the default for our documentation. If you want to create your own
theme from scratch, you can do so using the
[ThemeRegistry](https://instructure.design/#ThemeRegistry) `registerTheme` method.
You can then replace this import in `src/App.js`

```js
import '@instructure/canvas-theme'
```

with your custom theme.

> **_NOTE:_**  You should have a theme imported if you are using Instructure UI components. You can replace this import with a different theme, but deleting it entirely may cause some components to have errors and possibly not render.

Alternatively, if you want to continue using the `canvas` theme as your default
with some overrides instead of creating an entirely new one, you can use the
[ApplyTheme](https://instructure.design/#ApplyTheme) component.

You can also make your custom built components in this app themeable. The `Banner`
component located in the source directory, for example, is already using
[themeable](https://instructure.design/#themeable) for styling.
