# Introduction

As we've seen in the last [post](https://dev.to/jinssj3/dropzone-ui-the-new-way-of-providing-drag-and-drop-file-uploads-in-react-app-5djd), [Dropzone UI](https://www.npmjs.com/package/@dropzone-ui/react) is a complete set of react components that allows developers to spend less time in coding a drag and drop component for file uploads on React apps.

In this post we'll check the File life cicly process and how powerful is one of the components that come inside this amazing library: `<FileItem/>`

# High-level file life cycle process

To work with [`dropzone-ui`](https://www.npmjs.com/package/@dropzone-ui/react) we can summarize the file life cycle in 5 main activities:

1.  Create react app (however you can also start with next.js)

2.  Install Dropzone-ui

3.  Configure Components

4.  Drop Files

5.  Validate Files

6.  Show validated files

7.  Clean File List

8.  Upload files

9.  Get result of upload process

In this post we'll focus on activity number 3, since it´s more related with `FileItem` component. The validation activity will be covered in other post, but we can assume that we want to validate files to have as valid only image files. This is set in `accept`, a `Dropzone` component prop.

## Validated files

First, it is necesary to understand what kind of props are reqires in `FileItem` component:

## Beautiful by default

FileItem is beautiful by default since it was built following Material Design guidelines and all the icons comes from [Google's Material Icons](https://fonts.google.com/icons).

## Default file type preview

Another aspect that stands out, is that `FileItem` provides a default file preview when file type is not an image.

## Image file preview

Of course, it also provides image previews when the given file is an image.

The default image file type previews were made checking the file `mime type`.

![Image description](https://user-images.githubusercontent.com/43678736/139614260-602b512c-cf78-48fe-ae57-1057e7ec8135.gif)

Acording to [MDN](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type), _MIME type_ (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled `audio/ogg`, or an image file `image/png`).

It serves the same purpose as filename extensions traditionally do on Windows. The name originates from the MIME standard originally used in E-Mail.

In a nutshell, the `mime type` an attrribute that describes the file content. In node.js the `File`object has an attribute called `type` that returns the mime type of a file. The full list considered for this task comes from the Common MIME types list from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types):
imagennn

## Multilanguage support

In this library, both `<Dropzone/>` and `<FileItem/>` provides a way to translate all the possible labels into other languages. Currently, the supported languages are: `Spanish`,`Portuguese`,`French`, `Chinese`, `Russian` and, of course, `English`.

## Installation

The installation processis quite easy, once you created a react app, you just need to install @dropzone-ui/react as an [npm dependency](https://www.npmjs.com/package/@dropzone-ui/react).

For uploading files, peer dependency [axios](https://www.npmjs.com/package/axios) must be also installed together with `dropzone-ui`.

```sh
// with npm
npm i @dropzone-ui/react axios
```

```sh
// with yarn
yarn add @dropzone-ui/react axios
```

# Usage and examples

In order to understand properly how to work with dropzone-ui `FileItem`, let's check the process in high level.

We will check how to use this component and how its behavior change due to its props in simple samples.

## 1) Basic example with no image preview

In this sample code (taken from [`codesandbox`](https://codesandbox.io/s/dropzone-ui-file-item-with-no-image-preview-14i2m)) we are telling the component that we don´t want it to provide the image preview in case of image files (e.g. png or jpeg images):

```jsx
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { useState } from "react";
export default function App() {
  const [files, setFiles] = useState([]);
  const updateFiles = ([...files,...incommingFiles]) => {
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      onClean
    >
      {files.map((file) => (
        <FileItem
          {...file}
          key={file.id}
          onDelete={onDelete}
          info
        />
      ))}
    </Dropzone>
  );
}
```

The result, after dropping some files id the following:
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9x5i600zfb9ceonede4.png)

As you can see, the first 2 files are images and the default icon is showed. The image preview is not generated because we didn´t include the ``. This can be useful when there is no need to show the image and also when you think you can experiment performance issues due to internet connection or the web page is already heavy.

# Conclusion

In conclusion, this is an amazing library for drag and drop files with image previews. This time we've seen `FileItem` component in deep. Next posts will show more about this great package. You can find more info in the documentation https://www.npmjs.com/package/dropzone-ui.
