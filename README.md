<p align="center">
<img align="center" height="150" src="https://user-images.githubusercontent.com/43678736/132112022-0ca409ae-cca2-43c8-be89-110376260a3f.png" alt="dropone-ui-logo">

<h1 align="center">  Dropzone UI </h1>

</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dropzone-ui/dropzone-ui/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/dropzone-ui.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/dropzone-ui)
[![dependencies Status](https://status.david-dm.org/gh/dropzone-ui/dropzone-ui.svg)](https://david-dm.org/dropzone-ui/dropzone-ui)
[![Build Status](https://www.travis-ci.com/dropzone-ui/dropzone-ui.svg?branch=master)](https://www.travis-ci.com/dropzone-ui/dropzone-ui)
[![install size](https://packagephobia.com/badge?p=dropzone-ui)](https://packagephobia.com/result?p=dropzone-ui)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/context:javascript)
[![Known Vulnerabilities](https://snyk.io/test/github/dropzone-ui/dropzone-ui/badge.svg)](https://snyk.io/test/github/dropzone-ui/dropzone-ui)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Description

Dropzone UI is a mini set of [React](https://reactjs.org/) components for mamanging file uploads. Components were made following some of the good google's Material design principles.

## Sample result:

On Dragging



<p align="center">
<img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642335-dc7e7ceb-ae86-4f81-8625-4ee28dc5f593.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642336-e295d84d-d950-43b2-b9fc-0529b4ecfe46.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642339-2cd996a3-7754-46c9-89ed-56291972154f.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642341-b1eb2bfe-8134-4cdf-a808-62b14058b4c1.png" alt="dropone-ui-logo">

</p>

## Installation

Dropzone-ui is available as an [npm package](https://www.npmjs.com/package/dropzone-ui).

For uploading files, peer dependency [axios](https://www.npmjs.com/package/axios) must be installed together

```sh
// with npm
npm i dropzone-ui axios
```

```sh
// with yarn
yarn add dropzone-ui axios
```

## Usage and examples

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileItem } from "dropzone-ui";
`Function` App() {
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
| Name | Go |
|-|-|
|Basic example|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-3j01v?file=/src/index.js)|
|Complete example|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/complete-946hz?file=/src/index.js)|

# Dropzone UI Components API

- [\<Dropzone/>](#dropzone-api)
- [\<FileItem />](#fileitem-api)
- [\<FullScreenPreview />](#fullscreenpreview-api)

## Dropzone API

### Props

| Name          | Type                 | Default                                                   | Description                                                                                                                                                                                          |
| ------------- | -------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children      | node                 | true                                                      | The content of he component. Normally a list of `FileItem` or a label                                                                                                                                |
| onChange      | `Function`           | `undefined`                                               | The onChange event occurs when the value of the file list is changed                                                                                                                                 |
| onDrop        | `Function`           | `undefined`                                               | The onDrop event occurs when files are dropped indide the Dropzone. Normally used for retrieving the new files dropped                                                                               |
| value         | FIleValidated[]      | [ ]                                                       | The current list of Files                                                                                                                                                                            |
| header        | `boolean`            | true                                                      | if true, shows the dropzone header                                                                                                                                                                   |
| footer        | `boolean`            | true                                                      | if true, shows the dropzone footer                                                                                                                                                                   |
| maxHeight     | string               | 500px                                                     | The max height of the container in string format. e.g. '50vh' , '20%', '40em', '1rem'                                                                                                                |
| accept        | string               | `undefined`                                               | The default implementation of accept checks the file's mime type or extension against this list. This is a comma separated list of mime types or file extensions. Eg.: image/\*,application/pdf,.psd |
| label         | string               | "Drop your files here"                                    | Label to place when no files selected                                                                                                                                                                |
| behaviour     | add \| replace       | add                                                       | The behaviuor on drop files                                                                                                                                                                          |
| fakeUploading | `boolean`            | `undefined`                                               | If true, this flag will make dropzone to simulate a server upload. Use only in development.                                                                                                          |
| view          | "grid"\"list"        | "grid"                                                    | `grid` will display files in a grid layout. `list` will display files in a horizontal list. Convenient for saving space in page.                                                                     |
| onChangeView  | `Function`           | `undefined`                                               | Event that ocurs when view mode has changed. First parameter is the current view mode. the selected view mode                                                                                        |
| url           | string               | `undefined`                                               | The url endpoint to upload the files                                                                                                                                                                 |
| method        | POST \| PUT \| PATCH | POST                                                      | The method for uploading.                                                                                                                                                                            |
| config        | Object               | { headers: { "content-type": "multipart/form-data;", }, } | Extra configuration for uploading, normally an object with headers or bearer token-                                                                                                                  |
| uploadOnDrop  | `boolean`            | `false`                                                   | If true, onDrop event will return the list of files, but also will upload the files if url was set, and also config                                                                                  |
| maxFiles      | `number`             | 7                                                         | Max `number` of files to be accepted. If the value is 1, will click event dialog to allow just asingle file                                                                                          |
| maxFileSize   | `number`             | `undefined`                                               | max file size allowed in bytes. if not preent, will not be considered on validating the file                                                                                                         |
| clickable     | `boolean`            | true                                                      | If true, the dropzone component itself will be clickable                                                                                                                                             |

## FileItem API

### Props

| Name          | Type                                               | Default     | Description                                                                                                                                                                                                                          |                         |
| ------------- | -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| file          | File                                               | `undefined` | The actual file                                                                                                                                                                                                                      |
| id            | string                                             | `number`    | `undefined`                                                                                                                                                                                                                          | identifier for the file |
| valid         | `boolean`                                          | `false`     | whether to show a valid or rejected message ("valid", "denied") by def. valid is `false` (if not present, it's `false` too)This value wil affect preview behaviour, If not valid, the preview will not be shown, nor the view button |
| uploadMessage | string                                             | `undefined` | The message to display when server responds                                                                                                                                                                                          |
| uploadStatus  | `undefined` \| "uploading" \| "success" \| "error" | `undefined` | The status of the upload process                                                                                                                                                                                                     |
| onDelete      | `Function`                                         | `undefined` | A `Function` of what to do when close button is pressed or clicked                                                                                                                                                                   |
| onSee         | `Function`                                         | `undefined` | A function of what to do when "see" button is pressed or clicked                                                                                                                                                                     |
| preview       | `boolean`                                          | `false`     | `undefined`                                                                                                                                                                                                                          |
| info          | `boolean`                                          | `false`     | whether to show the info layer or not also whether to make visible the info button or not                                                                                                                                            |
| hd            | `boolean`                                          | `undefined` | If present, preview on full screen will be presented in the real image resolution                                                                                                                                                    |

## FullScreenPreview API

### Props

| Name      | Type       | Default   | Description                                   |
| --------- | ---------- | --------- | --------------------------------------------- |
| imgSource | `string`   | undefined | The url string representation of the image    |
| openImage | `boolean`  | false     | Whether to open the image preview             |
| onClose   | `Function` | undefined | A function that describes the close behaviour |

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
