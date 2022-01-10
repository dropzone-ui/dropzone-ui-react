:rocket: [Spanish README](./README_ES.md)

# Dropzone UI

The `best` and most complete, `easy to use`, file upload library for [React](https://reactjs.org/) apps.

:zap: Live demo and code generator : [dropzone-ui.com](http://www.dropzone-ui.com)

:heart: it ?, :star: it on :octocat: [Github](https://github.com/dropzone-ui/dropzone-ui) :D or :bird: [Tweet](https://twitter.com/intent/tweet?text=With%20@dropzone_ui,%20my%20@reactjs%20%20web%20app%20becomes%20more%20powerful.%20Thanks,%20@JinJoseManuel%20%F0%9F%A4%A9) about it.

<p align="center">
  <img src="https://user-images.githubusercontent.com/43678736/147796764-b6a271a0-f29c-47be-a521-22c2f734e874.png" alt="dropone-ui-logo" width="256" height="auto" align="center">   
</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dropzone-ui/react/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@dropzone-ui/react.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/@dropzone-ui/react)
[![Rate on Openbase](https://badges.openbase.com/js/rating/@dropzone-ui/react.svg)](https://openbase.com/js/@dropzone-ui/react?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)
[![Node.js CI](https://github.com/dropzone-ui/react-dropzone/actions/workflows/node.js.yml/badge.svg)](https://github.com/dropzone-ui/dropzone-ui-react)
[![Build Status](https://app.travis-ci.com/dropzone-ui/dropzone-ui-react.svg?branch=master)](https://app.travis-ci.com/dropzone-ui/dropzone-ui-react)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/alerts/)
[![Known Vulnerabilities](https://snyk.io/test/github/dropzone-ui/react/badge.svg)](https://snyk.io/test/github/dropzone-ui/react)
[![Package Quality](https://packagequality.com/shield/dropzone-ui.svg)](https://packagequality.com/#?package=dropzone-ui)
[![install size](https://packagephobia.com/badge?p=@dropzone-ui/react)](https://packagephobia.com/result?p=@dropzone-ui/react)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dropzone-ui/react.svg)](http://isitmaintained.com/project/dropzone-ui/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub Repo stars](https://img.shields.io/github/stars/dropzone-ui/react?label=Star%20me%20please%20:D&style=social)](https://github.com/dropzone-ui/react)
[![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fwellyshen%2Freact-cool-img)](https://twitter.com/intent/tweet?text=With%20@dropzone_ui,%20my%20@reactjs%20%20web%20app%20becomes%20more%20powerful.%20Thanks,%20@JinJoseManuel%20%F0%9F%A4%A9)

## Sample result:

On `Drag`, `Drop`, `Upload` and full screen `preview`. (also changing view mode from `grid` to `list`).

<p align="center">
<a href="https://github.com/dropzone-ui/react#readme">
<img align="center" width="100%" src="https://user-images.githubusercontent.com/43678736/139614260-602b512c-cf78-48fe-ae57-1057e7ec8135.gif" alt="dropone-ui-preview">
</a>

</p>

Did you like the project? Please don't forget to give us a :star: star on :octocat: [GitHub](https://github.com/dropzone-ui/dropzone-ui) :D

## Key Features

- :white_check_mark: File validation: Validate files before uploading.
- :art: File Image previews: See a thumbnail preview
- :framed_picture: Full screen image previews: Add more interacion with a full screen preview of images
- :movie_camera: Full screen video previews. Play the video before uploading. [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](https://github.com/dropzone-ui/react-dropzone/releases/tag/v6.4.0)
- :eyes: status visualization: validation and upload status is shown on a [Tooltip](https://codesandbox.io/s/dropzone-ui-fileitem-resultontooltip-h6hu7) or on [Info Layer](https://codesandbox.io/s/dropzone-ui-fileitem-resultontooltip-h6hu7).
- :airplane: File upload: Upload valid files to a server.
- :performing_arts: Out of the box design and style.
- :cake: Easy to use. Probably, this is the killer feature you are looking for in a package.

## Main Content

Ordered by use:

- :books: [\<Full Documentation\>](#dropzone-ui-react-components-api)

- :performing_arts: [\<Examples and use cases\>](#Usage-and-examples)

- :computer: [\<Server side implementation/>](#uploading)

- :earth_americas: [\<Localization\>](#localization)

- [Code generator](#code-generator)

## Code generator

Want to generate the code that fits your needs? Just interact with the code generator [here](http://dropzone-ui.com/).

## Requirement

`@dropzone-ui/react` is based on [React Hooks](https://reactjs.org/docs/hooks-intro.html). It requires `react v16.8+`.

`@dropzone-ui/react` uses [axios](https://reactjs.org/docs/hooks-intro.html) for uploading files. It requires `axios v0.24.0+`.

## Installation

@dropzone-ui/react is available as an [npm package](https://www.npmjs.com/package/axios).

For uploading files, peer dependency [axios](https://www.npmjs.com/package/axios) must be also installed together with `dropzone-ui`.

```sh
// with npm
npm i @dropzone-ui/react axios
```

```sh
// with yarn
yarn add @dropzone-ui/react axios
```

## Usage and examples

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileItem } from "@dropzone-ui/react";
Function App() {
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file) => (
        <FileItem {...file} preview />
      ))}
    </Dropzone>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

Yes, it's really all you need to get started as you can see in these live and interactive demos:

| Name                                                                                                                             | Codesandbox link                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dropzone Basic example                                                                                                           | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-3j01v?file=/src/index.js)                              |
| Dropzone Complete example                                                                                                        | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/complete-946hz?file=/src/index.js)                           |
| File item props                                                                                                                  | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fileitem-props-o0w5x)                                        |
| VideoPreview [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com)                    | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-ui-videopreview-6m6he?file=/src/App.js)             |
| FileItem `alwaysActive` Prop [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com)    | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/alwaysactive-w15h3)                                          |
| FileItem `resultOnTooltip` Prop [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com) | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-ui-fileitem-resultontooltip-h6hu7?file=/src/App.js) |
| FileItem with no image preview                                                                                                   | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-ui-file-item-with-no-image-preview-14i2m)           |
| InputFileButton & FileItemContainer                                                                                              | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inputbutton-example-poqsn?file=/src/App.js)                  |
| `localización`: multilanguage example                                                                                            | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/localization-6ew1i?file=/src/App.js)                         |
| File Item `imageUrl` and synthetic files                                                                                         | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/imageurl-to-fileitem-m4801?file=/src/App.js)                 |
| Default previews extensive list                                                                                                  | [![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/defautl-preview-extensive-list-hrwm5?file=/src/App.js)       |

# Uploading

Dropzone-ui provides a way to upload files to a server. However, in case you want to make your own upload function, you can take the files that Dropzone `onChange` event returns.

For uploading files through dropzone-ui, you should follow at least this guidelines:

- Server Endpoint should get the file from `req.files.file`.
- Server Response should follow the [`DropzoneUIResponse`](#dropzoneuiresponse) structure for returning a response.

## Server example

Bellow, there is an example built in [Express.js](https://www.npmjs.com/package/express) wich you can use to create your own server side implementation. Other languages implementations are in construction.

The complete code can be found [here](https://github.com/dropzone-ui/file-upload-server-side#readme).

<a href="https://github.com/dropzone-ui/file-upload-server-side#readme">
<img src="https://i.cloudup.com/zfY6lL7eFa-300x300.png" width="120px" height="35px" alt="server"/>
</a>

```js
const express = require("express");
const fileUpload = require("express-fileupload");
// ... some code
app.post("/upload-my-file", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "There was no file found in request",
        payload: {},
      });
    } else {
      //Use the name of the input field (i.e. "file") to retrieve the uploaded file
      let file = req.files.file;
      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      file.mv("./uploads/" + file.name);
      //send response
      res.send({
        status: true,
        message: "File was uploaded successfuly",
        payload: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
          path: "/files/uploads/",
          url: "https://my-ftp-server.com/bjYJGFYgjfVGHVb",
        },
      });
    }
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Unexpected problem",
      payload: {},
    });
  }
});
```

# Localization

Dropzone-ui is available in different languages. So far, we only support `English`, `Spanish`, `French` and `Portuguese`. In next releases this list will be increased.

| Language                                 | Code    | Example                |
| ---------------------------------------- | ------- | ---------------------- |
| English :us: :uk:                        | `EN-en` | localization="`EN-en`" |
| Spanish :peru: :mexico: :argentina: :es: | `ES-es` | localization="`ES-es`" |
| Fench :fr:                               | `FR-fr` | localization="`FR-fr`" |
| Portuguese :brazil: :portugal:           | `PT-pt` | localization="`PT-pt`" |
| Russian :ru:                             | `RU-ru` | localization="`RU-ru`" |
| Chinese(simplified) :cn:                 | `ZH-cn` | localization="`ZH-cn`" |
| Chinese(traditional) :cn:                | `ZH-hk` | localization="`ZH-hk`" |

# Dropzone UI react Components API

- [< Dropzone />](#dropzone-api)
- [< FileItem />](#fileitem-api)
- [< FullScreenPreview />](#fullscreenpreview-api)
- [< VideoPreview />](#videopreview-api)
  [![new-component](https://img.shields.io/badge/new-component-green.svg)](http://www.dropzone-ui.com)
- [< FileItemContainer />](#fileitemcontainer-api)
- [< InputButton />](#inputbutton-api)
- [Special Types](#special-types-api)

## Dropzone API

### Props

| Name                                                                                                           | Type                                                                                 | Default                                                   | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept                                                                                                         | `string`                                                                             | `undefined`                                               | The accept attribute value is a string that defines the file types the `Dropzone` should accept. This string is a comma-separated list of unique file type specifiers, wich is compared with the file attributes in order to determine whether that file is valid or not: `"image/*, application/pdf, .psd"`. More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) . |
| behaviour                                                                                                      | `"add"` \| `"replace"`                                                               | `"add"`                                                   | The behaviour on drop files. `"add"` option will make `Dropzone` to add files to the current file list. `"replace"` option will make `Dropzone` to replace the current list of files                                                                                                                                                                                                                            |
| children                                                                                                       | `node`                                                                               | `true`                                                    | The content of the component. Normally a list of `FileItem` components or a label                                                                                                                                                                                                                                                                                                                               |
| clickable                                                                                                      | `boolean`                                                                            | `true`                                                    | If true, the dropzone component itself will be clickable                                                                                                                                                                                                                                                                                                                                                        |
| config                                                                                                         | Object                                                                               | { headers: { "content-type": "multipart/form-data;", }, } | Extra configuration for uploading, normally an object with headers or bearer token-                                                                                                                                                                                                                                                                                                                             |
| disableScroll [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com) | `boolean`                                                                            | `undefined`                                               | if present or `true`, removes scrolls and sets the `Dropzone` content (FileItemContainer) in a `grid` view. It also disables `maxHeight` prop. Only `minHeight` prop will work. This feature was added to work together with `resultOnTooltip` prop of `FileItem`. If not present or `false` , FileItemContainer will set csss property `"overflow"` as `"auto"`.                                               |
| fakeUploading                                                                                                  | `boolean`                                                                            | `undefined`                                               | If true, this flag will make dropzone to simulate a server upload. Use only in development.                                                                                                                                                                                                                                                                                                                     |
| footer                                                                                                         | `boolean`                                                                            | `true`                                                    | if true, shows the dropzone footer                                                                                                                                                                                                                                                                                                                                                                              |
| header                                                                                                         | `boolean`                                                                            | `true`                                                    | if true, shows the dropzone header                                                                                                                                                                                                                                                                                                                                                                              |
| label                                                                                                          | `string`                                                                             | "Drop your files here"                                    | Label to place when no files selected                                                                                                                                                                                                                                                                                                                                                                           |
| localization                                                                                                   | `"EN-en"` \| `"ES-es"` \| `"FR-fr"` \| `"PT-pt"`\| `"RU-ru"`\| `"ZH-cn"`\| `"ZH-hk"` | `"EN-en"`                                                 | The language to present labels. So far, only `English`, `Portuguese`, `French`,`Russian`, `Chinese` (simplifyed and traditional) and `Spanish` are suported.                                                                                                                                                                                                                                                    |
| method                                                                                                         | `"POST"` \| `"PUT"` \| `"PATCH"`                                                     | `"POST"`                                                  | The method for uploading.                                                                                                                                                                                                                                                                                                                                                                                       |
| maxFiles                                                                                                       | `number`                                                                             | `undefined`                                               | Max `number` of files to be accepted. If the value is 1, click event dialog will allow just a select a single file. (`multiple` prop on input tag will be false). If not set, vlidation will not consider a max amount of files and user will be allowed to drop or select `Infinity` files.                                                                                                                    |
| maxFileSize                                                                                                    | `number`                                                                             | `undefined`                                               | max file size allowed in bytes. if not preent, will not be considered on validating the file                                                                                                                                                                                                                                                                                                                    |
| minHeight                                                                                                      | `string`                                                                             | "280px"                                                   | The min height of the container in string format. e.g. '50vh' , '20%', '40em', '1rem' . This not consider the space for Footer and Header.                                                                                                                                                                                                                                                                      |
| maxHeight                                                                                                      | `string`                                                                             | "450px"                                                   | The max height of the container in string format. e.g. '50vh' , '20%', '40em', '1rem'. This not consider the space for Footer and Header.                                                                                                                                                                                                                                                                       |
| onChange                                                                                                       | (files: `FileValidated[]` ) => `void`                                                | `undefined`                                               | Probably one of the most important methods. The `onChange` event occurs when the value of the file list is changed. Returns as first paramater a list of [FileValidated](#filevalidated) . This event is also triggered when upload starts and when upload finishes for each file in order to update the props on very FIleItem                                                                                 |
| onChangeView                                                                                                   | `Function`                                                                           | `undefined`                                               | Event that ocurs when view mode has changed. First parameter is the current view mode.                                                                                                                                                                                                                                                                                                                          |
| onDrop                                                                                                         | (filesDropped: `FileValidated[]`)=> `void`                                           | `undefined`                                               | The onDrop event occurs when files are dropped indide the Dropzone or selected from file dialog. Normally used for retrieving the new files dropped as a list of [FileValidated](#filevalidated)                                                                                                                                                                                                                |
| onUploadStart                                                                                                  | (files: `FileValidated[]`) => `void`                                                 | `undefined`                                               | This event is triggered when upload process starts. Returns as first parameter the list of [FileValidated](#filevalidated) that will be uploaded. Unlike Onchange, onUploadStart will only return a list of files thta are candidates to be uploaded, in case they are valid or upload status is "error"                                                                                                        |
| onUploadFinish                                                                                                 | onUploadFinish?: ( responses: `FileDuiResponse[]` ) => `void`;                       | `undefined`                                               | This event returns as first aparameter the list of responses for each file after upload process. Responses are instances of [`FileDuiResponse`](#fileduiresponse).                                                                                                                                                                                                                                              |
| uploadOnDrop                                                                                                   | `boolean`                                                                            | `false`                                                   | If true, onDrop event will return the list of files, but also will upload the files if url was set, and also config                                                                                                                                                                                                                                                                                             |
| url                                                                                                            | `string`                                                                             | `undefined`                                               | The url endpoint to upload the files. Server response must match [DropzoneUIResponse](#dropzoneuiresponse) structure                                                                                                                                                                                                                                                                                            |
| validator                                                                                                      | (f: `File`) => `CustomValidateFileResponse`                                          | `undefined`                                               | Must be a function that recieves as first parameter a File Object instance and must return a [CustomValidateFileResponse](#customvalidatefileresponse) object with 2 fields: valid (boolean value) and `errors` a string array of errors. This function will be used instead of the default validator.                                                                                                          |
| view                                                                                                           | `"grid"` \| `"list"`                                                                 | `"grid"`                                                  | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page. If not given, `Dropzone` component will show "change view" button. If `view` is given, it´ll be hidden.                                                                                                                                                                        |
| value                                                                                                          | `FIleValidated[]`                                                                    | [ ]                                                       | The current list of Files                                                                                                                                                                                                                                                                                                                                                                                       |

## FileItem API

### Props

| Name                                                                                                             | Type                                                                                 | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alwaysActive [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com)    | `boolean`                                                                            | `false`     | Flag that makes all buttons visible. If false, the buttons and info will be visible on hover                                                                                                                                                                                                                                                                                                                                       |
| file                                                                                                             | `File`                                                                               | `undefined` | The actual `File` object instance                                                                                                                                                                                                                                                                                                                                                                                                  |
| errors                                                                                                           | `string[]`                                                                           | `undefined` | The list of errors according to the validation criteria or custom validation function given.                                                                                                                                                                                                                                                                                                                                       |
| elevation [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com)       | `"1"` \| `"2"` \| `"3"` \| `"4"` \| `1` \| `2` \| `3` \| `4` \| `false`              | `undefined` | Shadow depth for the FileItem container.                                                                                                                                                                                                                                                                                                                                                                                           |
| hd                                                                                                               | `boolean`                                                                            | `undefined` | If present, preview on full screen will be presented in the real image resolution                                                                                                                                                                                                                                                                                                                                                  |
| id                                                                                                               | `string` \| `number`                                                                 | `undefined` | identifier for the file                                                                                                                                                                                                                                                                                                                                                                                                            |
| info                                                                                                             | `boolean`                                                                            | `false`     | If present, the info layer and the info button will ve visible                                                                                                                                                                                                                                                                                                                                                                     |
| imageUrl                                                                                                         | `string`                                                                             | `undefined` | A string base64 representation or web url of the image that will be set to the `"src"` prop of an `<img/>` tag `<img src={imageUrl} />`. If given, FileItem componnet will use this image instead of reading the image file.                                                                                                                                                                                                       |
| localization                                                                                                     | `"EN-en"` \| `"ES-es"` \| `"FR-fr"` \| `"PT-pt"`\| `"RU-ru"`\| `"ZH-cn"`\| `"ZH-hk"` | `"EN-en"`   | The language to present labels. So far, only `English`, `Portuguese`, `French`,`Russian`, `Chinese` (simplifyed and traditional) and `Spanish` are suported.                                                                                                                                                                                                                                                                       |
| onDelete                                                                                                         | (id: `number` \| `string` \| `undefined`) => `void`                                  | `undefined` | This event is triggered when close button is pressed or clicked. Returns as first parameter the if of the corresponding `FileItem` . If not given, `"delete"` button will not be visible.                                                                                                                                                                                                                                          |
| onSee                                                                                                            | `Function`                                                                           | `undefined` | This event is triggered when "see" button is pressed or clicked. Returns as first parameter the image url in string format. Normally used in `FullScreenPeview` component. If `hd` present, will return the image url in the real quality. Otherwise, will return a minimized image with less resolution in order to save memory.                                                                                                  |
| onWatch [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com)         | `Function`                                                                           | `undefined` | This event is triggered when "play" button is pressed or clicked. Returns as first parameter the video file object. Normally used in `VideoPreview` component.                                                                                                                                                                                                                                                                     |
| preview                                                                                                          | `boolean`                                                                            | `false`     | If present, and if `onSee` present, "see" button will be visible and on click will trigger `onSee` function                                                                                                                                                                                                                                                                                                                        |
| resultOnTooltip [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com) | `boolean`                                                                            | `undefined` | Where to display result of validation: on InfoLayer or in Tooltip when user hovers the FileItem.                                                                                                                                                                                                                                                                                                                                   |
| uploadMessage                                                                                                    | `string`                                                                             | `undefined` | The message to display when server responds. The server response should follow the structure of an instance of [DropzoneUIResponse](#dropzoneuiresponse)                                                                                                                                                                                                                                                                           |
| uploadStatus                                                                                                     | `undefined` \| `"uploading"` \| `"success"` \| `"error"`                             | `undefined` | The status of the upload process                                                                                                                                                                                                                                                                                                                                                                                                   |
| valid                                                                                                            | `boolean`                                                                            | `false`     | whether to show a "valid" or "rejected" message ("valid", "denied"). By default valid is `false` (if not present, it's `false` too)This value will affect preview behaviour. If not valid, the preview will not be shown, nor the view button even when `onSee` and `preview` props are present. The functionality to allow to show preview despite of a not valid image file, is a feature that will be added in future releases. |

## FullScreenPreview API

### Props

| Name      | Type       | Default     | Description                                                       |
| --------- | ---------- | ----------- | ----------------------------------------------------------------- |
| imgSource | `string`   | `undefined` | The url string representation of the image                        |
| onClose   | `Function` | `undefined` | A function that describes the close behaviour                     |
| openImage | `boolean`  | `false`     | Flag that indicates whether to open the image preview or close it |

## VideoPreview API

### Props

| Name        | Type       | Default     | Description                                                                                                                                                                                                                                                                                               |
| ----------- | ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| videoSource | `string`   | `undefined` | The video source in `string` format or `File` object. When a File object is given `VideoPreview` component will check if video type is included in the supported formats. (`video/mp4`, `video/ogg`, `video/webm`). Normally used with `FileItem` component when returns this value in `onWatch` handler. |
| onClose     | `Function` | `undefined` | A function that describes the close behaviour                                                                                                                                                                                                                                                             |
| openVideo   | `boolean`  | `undefined` | Flag that indicates whether to open the video preview or close it                                                                                                                                                                                                                                         |
| autoplay    | `boolean`  | `undefined` | Flag that indicates whether to play automatically the video or not.                                                                                                                                                                                                                                       |
| controls    | `boolean`  | `undefined` | Flag that indicates whether to display the controls in the video player or not.                                                                                                                                                                                                                           |

## FileItemContainer API

### Props

| Name                                                                                                           | Type                 | Default     | Description                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children                                                                                                       | `node`               | `true`      | The content of he component. Normally a list of `FileItem`. By default `Dropzone` component already uses this component for containing the `FileItem` list children.                                                                            |
| view                                                                                                           | `"grid"` \| `"list"` | `"grid"`    | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page.                                                                                                                |
| disableScroll [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](http://www.dropzone-ui.com) | `boolean`            | `undefined` | if present or `true`, removes scrolls and sets the `FileItemContainer` in a `grid` view. It also disables `maxHeight` prop. Only `minHeight` prop will work. This feature was added to work together with `resultOnTooltip` prop of `FileItem`. |

## InputButton API

### Props

| Name        | Type                                                         | Default        | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| accept      | `string`                                                     | `undefined`    | The accept attribute value is a string that defines the file types the `InputButton` should accept. This string is a comma-separated list of unique file type specifiers, wich is compared with the file attributes in order to determine whether that file is valid or not: `"image/*, application/pdf, .psd"`. More info on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) . |
| color       | `string`                                                     | `"#071e25"`    | The main color for the button. (e.g. "#FFFFFF", "rgb(255,12,45)")                                                                                                                                                                                                                                                                                                                                                  |
| disabled    | `boolean`                                                    | `false`        | whether the button will be disabled or not                                                                                                                                                                                                                                                                                                                                                                         |
| id          | `string`                                                     | `undefined`    | the id of the component                                                                                                                                                                                                                                                                                                                                                                                            |
| label       | `string`                                                     | "Browse ..."   | If given, this label will be showed inside the button                                                                                                                                                                                                                                                                                                                                                              |
| maxFileSize | `number`                                                     | `undefined`    | max file size allowed in bytes                                                                                                                                                                                                                                                                                                                                                                                     |
| multiple    | `boolean`                                                    | `false`        | whether to accept multiple files or not                                                                                                                                                                                                                                                                                                                                                                            |
| onChange    | `Function`                                                   | `undefined`    | What to do after selecting the files. Returns the File[] as first parameter                                                                                                                                                                                                                                                                                                                                        |
| style       | `React.CSSProperties`                                        | {}             | the in-line style object                                                                                                                                                                                                                                                                                                                                                                                           |
| text        | `"uppercase"` \| `"capitalize"` \| `"lowercase"` \| `"none"` | `"capitalize"` | The text transform for the text inside the button label                                                                                                                                                                                                                                                                                                                                                            |
| textColor   | `string`                                                     | "white"        | The font color in case variant is `"contained"`                                                                                                                                                                                                                                                                                                                                                                    |
| validator   | (f: `File`) => `CustomValidateFileResponse`                  | `undefined`    | Must be a function that recieves as first parameter a File Object instance and must return a [CustomValidateFileResponse](#customvalidatefileresponse) object with 2 fields: valid (boolean value) and `errors` a string array of errors. This function will be used instead of the default validator.                                                                                                             |
| variant     | `"text"` \| `"outlined"` \| `"contained"`                    | `"contained"`  | The variant of the button                                                                                                                                                                                                                                                                                                                                                                                          |

# Special Types Api

## FileValidated

This is the file structure that is used in `onChange` event from Dropzone. This object contains all the required props to work dynamically with `FileItem` component.

```jsx
export enum UPLOADSTATUS {
    uploading = "uploading",
    success = "success",
    error = "error"
}
export interface FileValidated {
    file: File;
    valid: boolean;
    id: number| string | undefined;
    errors?: string[];
    uploadMessage?: string;
    uploadStatus?: undefined | UPLOADSTATUS;
}
```

## FileDuiResponse

This is the object structure for responses thatcomes from server when Dropzone `onUploadFinish` event is triggeed. This event returns an array of `FileDuiResponse` objects

```jsx
export interface FileDuiResponse {
  id: number | string | undefined;
  serverResponse: DropzoneUIResponse | {};
}
```

## DropzoneUIResponse

This is the response structure for each file that server must send when Dropzone perfoms the upload process.

```jsx
export interface DropzoneUIResponse {
  status: boolean;
  message: string;
  payload: any;
}
```

## UploadPromiseAxiosResponse

This is the response object after uploading each file.

```jsx
export interface UploadPromiseAxiosResponse {
  serverResponse: FileDuiResponse;
  uploadedFile: FileValidated;
}
```

## CustomValidateFileResponse

This is the response structure for each file that server must send when Dropzone performs the upload process.

```jsx
export interface CustomValidateFileResponse {
  valid: boolean;
  errors?: string[];
}
```

## Supporters

### :clap: Stargazers

[![Stargazers repo roster for @dropzone-ui/dropzone-ui-react](https://reporoster.com/stars/dropzone-ui/dropzone-ui-react)](https://github.com/dropzone-ui/dropzone-ui-react/stargazers)

### :clap: Forkers

[![Forkers repo roster for @dropzone-ui/dropzone-ui-react](https://reporoster.com/forks/dropzone-ui/dropzone-ui-react)](https://github.com/dropzone-ui/dropzone-ui-react/network/members)

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

<p align="center"><a href="https://github.com/dropzone-ui/react-dropzone#"><img src="http://randojs.com/images/barsSmallTransparentBackground.gif" alt="Animated footer bars" width="100%"/></a></p>

<br/>
<p align="center"><a href="https://github.com/dropzone-ui/react-dropzone#readme"><img src="http://randojs.com/images/backToTopButtonTransparentBackground.png" alt="Back to top" height="28"/></a></p>
