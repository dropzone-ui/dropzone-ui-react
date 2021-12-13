# Change Log

<p align="center">
<img align="center" height="120" src="https://user-images.githubusercontent.com/43678736/132112022-0ca409ae-cca2-43c8-be89-110376260a3f.png" alt="dropone-ui-logo">

<h1 align="center">  Dropzone-UI</h1>

</p>

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="6.4.0"></a>

## [6.4.0](https://github.com/dropzone-ui/react-dropzone/releases/tag/v6.4.0) (2021-12-12)

## 🧪 New features

- \<FileItem/\>: Added `onWatch` prop. This prop provides an event handler for allowing full screen video previews. It works like `onSee` prop. It returns as first parameter the file object. If `onWatch` is present, file is `valid` and file type is `video`, `FileItem` will display the `play` button.
- \<VideoPreview/\>: Added new component`VideoPreview`. This component is quite similar to `FullScreenPreview`. As the name sugests, this component is meant to be used to show video previews. Supported videos are the default supported videos by a [`<video/>`](https://www.w3schools.com/tags/tag_video.asp) tag (mp4, ogg, webm). First prop `videoSource` can be a `File` object or a `URI string` representation. Works in the same way as `FullScreenPreview`, it rcieves a `onClose` prop and an `open` prop.
  It also recieves `autoplay` and `controls` props like classic html [`<video/>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attributes) tag.

## 🐛 Fixes or improvements

- \<FullScreenPreview/>: Improved media query style.

## 📚 Improved documentation.

- Added documentation about new prop on `FileItem`.
- Added documentation about new component `VideoPreview`.

<a name="6.3.6"></a>

## [6.3.6](https://github.com/dropzone-ui/react-dropzone/releases/tag/v6.3.6) (2021-07-12)

## 🧪 New features

- \<FileItem/\>: Added `resultOnToolip` prop. This prop provides another hover interaction. If present or `true`, FileItem will show the file validation status and the upload status on a nice tooltip. Otherwhise, if not present, false or undefined, FileItem will display the result on the InfoLayer. Special thanks to @mateusmx, 👏 who suggested this feature🧪.

- \<Dropzone/\>: Added `disableScroll` prop. This prop disables the css property `overflow: auto` in FileItemContainer inside Dropzone, when it displays the FileItem list inside of it. It also disables the `maxHeight` property and forces the `view` prop to be `"grid"`. The purpose of this special prop is to allow FileItemContainer to grow at the same time FileItem list increases and prevent triggering scrollbars.

## 🐛 Fixes or improvements

- \<Dropzone/>: Fixed issue in FileItemContainer that made it to overflow the size of Dropzone.

## 📚 Improved documentation.

- Added documentation about this new features

<a name="6.2.0"></a>

## [6.2.0](https://github.com/dropzone-ui/react-dropzone/releases/tag/v6.2.0) (2021-26-11)

### New features

- \<FileItem/\>: Added `alwaysActive` prop. This prop provides hover interaction. If false (by default), FileItem will hide the main layer with all the buttons except the file validation status and the upload status. If true, main layer will be visible all the time.
- \<FileItem/\>: Added `elevation` prop. This prop provides the user to decide about the shadow and border on the `FileItem` container.
- `Webpage` in beta version was released. You can visit [dropzone-ui.com](http://www.dropzone-ui.com). In there you can find a nice code generator.

### Fixesor improvements

- \<Dropzone/\>: Fixed Spanish translation on footer.
- \<Dropzone/\>: Hide "view" button when view prop is provided.
- \<Dropzone/\>: Fix issue that hides dropzone label when FileItems are outside.
- \<Dropzone/\>: Fixed minor issues on minHeight.
- \<FileItem/\>: Hide "delete" button when onDelete prop is not provided
- \<FileItem/\>: Change `word-break` css propertie from `break-all` to `break-word`;

### Future feature

- \<FileItem/\>: Show `upload status` on hover event.

<a name="5.5.6"></a>

## [5.5.6](https://github.com/dropzone-ui/react-dropzone/releases/tag/v5.3.0) (2021-26-11)

- 🧪 Added Localization support for ✨ **Russian** and **Chinese** ✨.
- 🐛 Fixed small bugs.
- 📚 Improved documentation.

<a name="3.0.1"></a>

## [3.0.1](https://github.com/dropzone-ui/dropzone-ui/compare/v2.8.1...v3.0.1) (2021-10-11)

### Features

- Translation support for `Russian` :ru: and also simplified and traditional `Chinese` :cn: .
- File Item component can show image directly from url.
- Minor bugs on Dropzone useStyle hook fixed.

<a name="3.0.1"></a>

## [3.0.1](https://github.com/dropzone-ui/dropzone-ui/compare/v2.8.1...v3.0.1) (2021-10-11)

### Features

- Translation support for `Portuguese`.
  <a name="2.8.1"></a>

## [2.8.1](https://github.com/dropzone-ui/dropzone-ui/compare/v2.8.1...v2.1.1) (2021-10-08)

### Features

- Translation support for `French`.

<a name="2.1.1"></a>

## [2.1.1](https://github.com/dropzone-ui/dropzone-ui/compare/v2.1.1...v2.0.0) (2021-10-01)

### Features

- Fixed issue on tsconfig.json that affected build process

<a name="2.1.0"></a>

## [2.1.0](https://github.com/dropzone-ui/dropzone-ui/compare/v2.1.0...v2.0.0) (2021-09-28)

### Features

- Add preventDefault function on InputButton component
- Improve Readme.md
- Add Openbase badge
- Improve description

<a name="2.0.0"></a>

## [2.0.0](https://github.com/dropzone-ui/dropzone-ui/compare/v2.0.0...v1.2.10) (2021-09-21)

### Features

- Improve Readme.md
- Add localization for `Spanish` and `English`
- Add Readme_es.md file

<a name="1.2.10"></a>

## [1.2.10](https://github.com/dropzone-ui/dropzone-ui/compare/v1.0.1...v1.0.2) (2021-09-21)

### Features

- Improve Readme.md
- Add quiality badge
  <a name="1.2.9"></a>

## [1.2.9](https://github.com/dropzone-ui/dropzone-ui/compare/v1.0.1...v1.0.2) (2021-09-12)

### Features

- Release Input File Button
- Release FileItemContainer Compnent
- Improve API doc for all components (now arranged alphabetically)

<a name="1.1.28"></a>

## [1.1.28](https://github.com/dropzone-ui/dropzone-ui/compare/v1.0.1...v1.0.2) (2021-09-09)

### Features

- Minor bug fixed, upload status not hiding on info open fixed

<a name="1.0.28"></a>

## [1.0.28](https://github.com/dropzone-ui/dropzone-ui/compare/v1.0.1...v1.0.2) (2021-09-08)

### Features

- added readme status badges

- Add Travis ci and coveralls integration

- update README description
- Dropzone, FileItem and FullScreenImage components released

<a name="1.0.1"></a>

## [1.0.1](https://github.com/dropzone-ui/dropzone-ui/compare/v1.0.0...v1.0.1) (2021-08-28)

### Features

- README improvements

<a name="1.0.0"></a>

# [1.0.0](https://github.com/dropzone-ui/dropzone-ui/compare/v0.1.2...v1.0.0) (2021-08-28)
