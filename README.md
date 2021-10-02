:rocket: [Spanish](./README_ES.md)

<p align="center">
<img align="center" height="128" src="https://user-images.githubusercontent.com/43678736/132112022-0ca409ae-cca2-43c8-be89-110376260a3f.png" alt="dropone-ui-logo">

<h1 align="center">  Dropzone-UI </h1>

[React](https://reactjs.org/) set of components for a complete file upload management awith image previews on user inteface. There already exists some very good libraries; However, **inspired** in those ones, there was created something **new** and **more powerful**. Google's Material design principles were also considered in development. Indeed, icons come from [Material design icons](https://fonts.google.com/icons).

</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dropzone-ui/react/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@dropzone-ui/react.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/dropzone-ui/react)
[![dependencies Status](https://status.david-dm.org/gh/dropzone-ui/react.svg)](https://david-dm.org/dropzone-ui/react)
[![Build Status](https://app.travis-ci.com/dropzone-ui/react.svg?branch=master)](https://app.travis-ci.com/dropzone-ui/react)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/context:javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/dropzone-ui/react/badge.svg)](https://snyk.io/test/github/dropzone-ui/react)
[![Package Quality](https://packagequality.com/shield/dropzone-ui.svg)](https://packagequality.com/#?package=dropzone-ui)
[![Rate on Openbase](https://badges.openbase.com/js/rating/@dropzone-ui/react.svg)](https://openbase.com/js/@dropzone-ui/react?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)
[![install size](https://packagephobia.com/badge?p=@dropzone-ui/react)](https://packagephobia.com/result?p=@dropzone-ui/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Sample result:

On `Drag`, `Drop`, `Upload` and ful  screen preview. (also changing view mode from `grid` to `list`).

Did you like the project? Don't forget to give us a :star: star on :octocat: [github](https://github.com/dropzone-ui/dropzone-ui) :D

<p align="center">
<img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642335-dc7e7ceb-ae86-4f81-8625-4ee28dc5f593.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642336-e295d84d-d950-43b2-b9fc-0529b4ecfe46.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642339-2cd996a3-7754-46c9-89ed-56291972154f.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642341-b1eb2bfe-8134-4cdf-a808-62b14058b4c1.png" alt="dropone-ui-logo">

</p>

<p align="center">
<img align="center" width="70%" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5wxk14o6zhloz2z3zypy.png" alt="dropone-ui-logo">
</p>

## Installation

@dropzone-ui/react is available as an [npm package](https://www.npmjs.com/package/@dropzone-ui/react).

For uploading files, peer dependency [axios](https://www.npmjs.com/package/axios) must be installed in conjuction with `dropzone-ui`.

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
| Name | Codesandbox link |
|-|-|
|Dropzone Basic example|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-3j01v?file=/src/index.js)|
|Dropzone Complete example|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/complete-946hz?file=/src/index.js)|
|File item props|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fileitem-props-o0w5x)|
|No preview FileItem|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/no-preview-14i2m) |
|InputFileButton & FileItemContainer|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inputbutton-example-poqsn?file=/src/App.js)|
|Server side example for upload a file | https://github.com/dropzone-ui/file-upload-server-side/tree/main/expressjs |

# Dropzone UI react Components API

- [\<Dropzone/>](#dropzone-api)
- [\<FileItem />](#fileitem-api)
- [\<FullScreenPreview />](#fullscreenpreview-api)
- [\<FileItemContainer />](#fileitemcontainer-api)
- [\<InputButton />](#inputbutton-api)

## Dropzone API

### Props

| Name                                                                                                                              | Type                             | Default                                                   | Description                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept                                                                                                                            | `string`                         | `undefined`                                               | A string that contains list of mime types or file extentions(`.extention`) separated by commas, wich is compared with the file attributes in order to determine whether that file is valid or not E.G.: `"image/\*, application/pdf, .psd"` |
| behaviour                                                                                                                         | `"add"` \| `"replace"`           | `"add"`                                                   | The behaviuor on drop files. `"add"` option will make `Dropzone` to add files to the current file list. `"replace"` option will make `Dropzone` to replace the current list of files                                                        |
| children                                                                                                                          | `node`                           | `true`                                                    | The content of the component. Normally a list of `FileItem` components or a label                                                                                                                                                           |
| clickable                                                                                                                         | `boolean`                        | `true`                                                    | If true, the dropzone component itself will be clickable                                                                                                                                                                                    |
| config                                                                                                                            | Object                           | { headers: { "content-type": "multipart/form-data;", }, } | Extra configuration for uploading, normally an object with headers or bearer token-                                                                                                                                                         |
| fakeUploading                                                                                                                     | `boolean`                        | `undefined`                                               | If true, this flag will make dropzone to simulate a server upload. Use only in development.                                                                                                                                                 |
| footer                                                                                                                            | `boolean`                        | `true`                                                    | if true, shows the dropzone footer                                                                                                                                                                                                          |
| header                                                                                                                            | `boolean`                        | `true`                                                    | if true, shows the dropzone header                                                                                                                                                                                                          |
| label                                                                                                                             | `string`                         | "Drop your files here"                                    | Label to place when no files selected                                                                                                                                                                                                       |
| localization [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](https://img.shields.io/badge/new-feature-green) | `"EN-en"` \| `"ES-es"`           | `"EN-en"`                                                 | The language to present labels. Only English and Spanish are suported for now.                                                                                                                                                              |
| method                                                                                                                            | `"POST"` \| `"PUT"` \| `"PATCH"` | `"POST"`                                                  | The method for uploading.                                                                                                                                                                                                                   |
| maxFiles                                                                                                                          | `number`                         | 7                                                         | Max `number` of files to be accepted. If the value is 1, will click event dialog to allow just asingle file                                                                                                                                 |
| maxFileSize                                                                                                                       | `number`                         | `undefined`                                               | max file size allowed in bytes. if not preent, will not be considered on validating the file                                                                                                                                                |
| maxHeight                                                                                                                         | `string`                         | "500px"                                                   | The max height of the container in string format. e.g. '50vh' , '20%', '40em', '1rem'                                                                                                                                                       |
| onChange                                                                                                                          | `Function`                       | `undefined`                                               | The onChange event occurs when the value of the file list is changed                                                                                                                                                                        |
| onChangeView                                                                                                                      | `Function`                       | `undefined`                                               | Event that ocurs when view mode has changed. First parameter is the current view mode. the selected view mode                                                                                                                               |
| onDrop                                                                                                                            | `Function`                       | `undefined`                                               | The onDrop event occurs when files are dropped indide the Dropzone. Normally used for retrieving the new files dropped                                                                                                                      |
| uploadOnDrop                                                                                                                      | `boolean`                        | `false`                                                   | If true, onDrop event will return the list of files, but also will upload the files if url was set, and also config                                                                                                                         |
| url                                                                                                                               | `string`                         | `undefined`                                               | The url endpoint to upload the files                                                                                                                                                                                                        |
| validator                                                                                                                         | (f: File) => boolean             | undefined                                                 | must be a function that recieves as first parameter a File Object and must return a boolean value. This function will be used instead of the default validator                                                                              |
| view                                                                                                                              | `"grid"` \| `"list"`             | `"grid"`                                                  | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page.                                                                                                            |
| value                                                                                                                             | `FIleValidated[]`                | [ ]                                                       | The current list of Files                                                                                                                                                                                                                   |

## FileItem API

### Props

| Name                                                                                                                              | Type                                                     | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                        |     |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| file                                                                                                                              | `File`                                                   | `undefined` | The actual file                                                                                                                                                                                                                                                                                                                                                                                                                    |
| hd                                                                                                                                | `boolean`                                                | `undefined` | If present, preview on full screen will be presented in the real image resolution                                                                                                                                                                                                                                                                                                                                                  |
| id                                                                                                                                | `string` \| `number`                                     | `undefined` | identifier for the file                                                                                                                                                                                                                                                                                                                                                                                                            |
| info                                                                                                                              | `boolean`                                                | `false`     | If present, the info layer and the info button will ve visible                                                                                                                                                                                                                                                                                                                                                                     |
| localization [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](https://img.shields.io/badge/new-feature-green) | `"EN-en"` \| `"ES-es"`                                   | `"EN-en"`   | The language to present labels. Only English and Spanish are suported for now.                                                                                                                                                                                                                                                                                                                                                     |
| onDelete                                                                                                                          | `Function`                                               | `undefined` | A `Function` of what to do when close button is pressed or clicked                                                                                                                                                                                                                                                                                                                                                                 |
| onSee                                                                                                                             | `Function`                                               | `undefined` | A `Function` of what to do when "see" button is pressed or clicked. Returns as first parameter the image url. If `hd` present, will return the image url in the real quality. Otherwise, will return a minimized image with less resolution in order to save memory.                                                                                                                                                               |
| preview                                                                                                                           | `boolean`                                                | `false`     | If present, and if `onSee` present, "see" button will be visible and on click will trigger `onSee` function                                                                                                                                                                                                                                                                                                                        |
| uploadMessage                                                                                                                     | `string`                                                 | `undefined` | The message to display when server responds                                                                                                                                                                                                                                                                                                                                                                                        |
| uploadStatus                                                                                                                      | `undefined` \| `"uploading"` \| `"success"` \| `"error"` | `undefined` | The status of the upload process                                                                                                                                                                                                                                                                                                                                                                                                   |
| valid                                                                                                                             | `boolean`                                                | `false`     | whether to show a "valid" or "rejected" message ("valid", "denied"). By default valid is `false` (if not present, it's `false` too)This value will affect preview behaviour. If not valid, the preview will not be shown, nor the view button even when `onSee` and `preview` props are present. The functionality to allow to show preview despite of a not valid image file, is a feature that will be added in future releases. |

## FullScreenPreview API

### Props

| Name      | Type       | Default     | Description                                                       |
| --------- | ---------- | ----------- | ----------------------------------------------------------------- |
| imgSource | `string`   | `undefined` | The url string representation of the image                        |
| onClose   | `Function` | `undefined` | A function that describes the close behaviour                     |
| openImage | `boolean`  | `false`     | Flag that indicates whether to open the image preview or close it |

## FileItemContainer API

### Props

| Name     | Type                 | Default  | Description                                                                                                                                                          |
| -------- | -------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children | `node`               | `true`   | The content of he component. Normally a list of `FileItem`. By default `Dropzone` component already uses this component for containing the `FileItem` list children. |
| view     | `"grid"` \| `"list"` | `"grid"` | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page.                                     |

## InputButton API

### Props

| Name        | Type                                                         | Default        | Description                                                                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept      | `string`                                                     | `undefined`    | A string that contains list of mime types or file extentions(`.extention`) separated by commas, wich is compared with the file attributes in order to determine whether that file is valid or not E.G.: `"image/\*, application/pdf, .psd"` |
| color       | `string`                                                     | `"#071e25"`    | The main color for the button. (e.g. "#FFFFFF", "rgb(255,12,45)")                                                                                                                                                                           |
| disabled    | `boolean`                                                    | `false`        | whether the button will be disabled or not                                                                                                                                                                                                  |
| id          | `string`                                                     | `undefined`    | the id of the component                                                                                                                                                                                                                     |
| label       | `string`                                                     | "Browse ..."   | If given, this label will be showed inside the button                                                                                                                                                                                       |
| maxFileSize | `number`                                                     | `undefined`    | max file size allowed in bytes                                                                                                                                                                                                              |
| multiple    | `boolean`                                                    | `false`        | whether to accept multiple files or not                                                                                                                                                                                                     |
| onChange    | `Function`                                                   | `undefined`    | What to do after selecting the files. Returns the File[] as first parameter                                                                                                                                                                 |
| style       | `React.CSSProperties`                                        | {}             | the in-line style object                                                                                                                                                                                                                    |
| text        | `"uppercase"` \| `"capitalize"` \| `"lowercase"` \| `"none"` | `"capitalize"` | The text transform for the text inside the button label                                                                                                                                                                                     |
| textColor   | `string`                                                     | "white"        | The font color in case variant is `"contained"`                                                                                                                                                                                             |
| validator   | (f: `File`) => `boolean`                                     | `undefined`    | Must be a function that recieves as first parameter a File Object and must return a boolean value. This function will be used instead of the default validator                                                                              |
| variant     | `"text"` \| `"outlined"` \| `"contained"`                    | `"contained"`  | The variant of the button                                                                                                                                                                                                                   |

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
