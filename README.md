:rocket: [Spanish README](./README_ES.md)

# Dropzone UI

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dropzone-ui/react/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@dropzone-ui/react.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/@dropzone-ui/react)
[![Rate on Openbase](https://badges.openbase.com/js/rating/@dropzone-ui/react.svg)](https://openbase.com/js/@dropzone-ui/react?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)
[![kandi X-Ray](https://kandi.openweaver.com/badges/xray.svg)](https://kandi.openweaver.com/typescript/dropzone-ui/dropzone-ui-react)
[![Node.js CI](https://github.com/dropzone-ui/react-dropzone/actions/workflows/node.js.yml/badge.svg)](https://github.com/dropzone-ui/dropzone-ui-react)
[![Build Status](https://app.travis-ci.com/dropzone-ui/dropzone-ui-react.svg?branch=master)](https://app.travis-ci.com/dropzone-ui/dropzone-ui-react)
[![Known Vulnerabilities](https://snyk.io/test/github/dropzone-ui/react/badge.svg)](https://snyk.io/test/github/dropzone-ui/react)
[![Package Quality](https://packagequality.com/shield/dropzone-ui.svg)](https://packagequality.com/#?package=dropzone-ui)
[![install size](https://packagephobia.com/badge?p=@dropzone-ui/react)](https://packagephobia.com/result?p=@dropzone-ui/react)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dropzone-ui/react.svg)](http://isitmaintained.com/project/dropzone-ui/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub Repo stars](https://img.shields.io/github/stars/dropzone-ui/react?label=Star%20me%20please%20:D&style=social)](https://github.com/dropzone-ui/react)

Thank you so much for using dropzone-ui/react ❤️ !

Dropzone UI has grown very fast and has exceeded its original scope. That's why we find reasonable to rebrand it and create a new package taking the best of this one and adding more features and new components. This new package is here and its name is Files UI ⚡.
In an very near future we'll stop giving support to dropzone-ui, so we enforce you to upgrade to this new package. In the meanwhile this package will become a wrapper for files-ui.

:zap: Live demos and full documentation : [files-ui.com](https://files-ui.vercel.app)

:heart: it ?, support us by giving a :star: on :octocat: [Github](https://github.com/files-ui/files-ui-react) :D

<p align="center">
<a href="https://www.files-ui.com">
  <img src="https://user-images.githubusercontent.com/43678736/225168231-35d7dc8d-f89e-43a1-8ce9-441bd59a74df.png"  align="center">   
</a>
</p>

## Important

From now on [@files-ui/react](https://www.npmjs.com/package/@files-ui/react) is the only dependency. Check out the changelog file to know what's new.

## Sample result:

This is a small part of what you can find on files-ui :eyes:

<p align="center">
<a href="https://www.files-ui.com">
<img src="https://user-images.githubusercontent.com/43678736/228052494-99d970c0-1eb7-42c6-b22c-8c2295b8dc4a.gif"  width="80%" alt="fui-logo"/>
</a>
</p>

- More previews [here](#more-previews).

## Requirement

`@dropzone-ui/react` is based on [React Hooks](https://reactjs.org/docs/hooks-intro.html). It requires `react v16.8+`.

## Installation

@dropzone-ui/react is available as an [npm package](https://www.npmjs.com/package/@dropzone-ui/react).

```sh
// with npm
npm i @dropzone-ui/react
```

```sh
// with yarn
yarn add @dropzone-ui/react
```

## Usage and examples

Here is a quick example to get you started, **it's all you need**:

```jsx
import * as React from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";

function App() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file) => (
        <FileMosaic {...file} preview />
      ))}
    </Dropzone>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

Yes, it's really all you need to get started as you can see in these live and interactive demos:

| Basic Sample :cake:                                                                                                                      | Advanced Sample :hammer:                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-demo-js-blssi1?file=/src/App.js) | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/advanced-demo-js-6euo8j?file=/src/App.js) |

## API documentation

The complete documentation of every component has been moved to files-ui.com [API page](https://www.files-ui.com/api/dropzone).

However if you are still using dropzone-ui version 6.7.0 or lower, you can find the documentation and demos here:

- ⚡ [Samples](https://www.npmjs.com/package/@dropzone-ui/react/v/6.7.20?activeTab=readme#Usage-and-examples)
- 📚 [Docs](https://www.npmjs.com/package/@dropzone-ui/react/v/6.7.20#dropzone-ui-react-components-api).

## Supporters

Special thanks to these amazing people :star: :

### :clap: Stargazers

[![Stargazers repo roster for @dropzone-ui/dropzone-ui-react](https://reporoster.com/stars/dropzone-ui/dropzone-ui-react)](https://github.com/dropzone-ui/dropzone-ui-react/stargazers)

### :clap: Forkers

[![Forkers repo roster for @dropzone-ui/dropzone-ui-react](https://reporoster.com/forks/dropzone-ui/dropzone-ui-react)](https://github.com/dropzone-ui/dropzone-ui-react/network/members)

## More Previews

<details>
  <summary>Image full screen preview 🖼️ </summary>
  <p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066199-fb7a5bd3-9c7e-4f72-b0ef-7f11d236d38e.png" alt="Image full screen preview" width="100%"/></p>

</details>
<details>
 <summary>Video full screen preview 🎞️ </summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066195-62063300-21e0-48fd-80d8-31b566562fde.png" alt="Video full screen preview" width="100%"/></p>
</details>

<details>
 <summary>FileCard, FileInputButton and Avatar preview 🎴 </summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228063876-5b6d00fe-f0ba-453f-a7ce-c44ba7444417.png" alt="Video full screen preview" width="100%"/></p>

</details>

<details>
 <summary>DarkMode 🌙 🌞 </summary> 
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228063883-569ca6f1-6959-45bc-9882-2c447162a00f.png" alt="darkmode 1 preview" width="100%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066720-e0bb96ac-3c00-4aa6-80b9-e0b4d0c5f947.png" alt="darkmode 2 preview" width="100%"/></p>
</details>

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

<p align="center"><a href="https://github.com/dropzone-ui/react-dropzone#"><img src="http://randojs.com/images/barsSmallTransparentBackground.gif" alt="Animated footer bars" width="100%"/></a></p>

<br/>
<p align="center"><a href="https://github.com/dropzone-ui/react-dropzone#readme"><img src="http://randojs.com/images/backToTopButtonTransparentBackground.png" alt="Back to top" height="28"/></a></p>
