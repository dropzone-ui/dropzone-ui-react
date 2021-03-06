:rocket:[English](https://github.com/dropzone-ui/dropzone-ui#readme)

<p align="center">
<img align="center" with="128px" height="128px" src="https://user-images.githubusercontent.com/43678736/132112022-0ca409ae-cca2-43c8-be89-110376260a3f.png" alt="dropone-ui-logo">

<h1 align="center">  Dropzone-UI </h1>

</p>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dropzone-ui/react/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@dropzone-ui/react.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/@dropzone-ui/react)
[![Rate on Openbase](https://badges.openbase.com/js/rating/@dropzone-ui/react.svg)](https://openbase.com/js/@dropzone-ui/react?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)
[![Build Status](https://app.travis-ci.com/dropzone-ui/react.svg?branch=master)](https://app.travis-ci.com/dropzone-ui/react)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/dropzone-ui/dropzone-ui.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/dropzone-ui/dropzone-ui/alerts/)
[![Known Vulnerabilities](https://snyk.io/test/github/dropzone-ui/react/badge.svg)](https://snyk.io/test/github/dropzone-ui/react)
[![Package Quality](https://packagequality.com/shield/dropzone-ui.svg)](https://packagequality.com/#?package=dropzone-ui)
[![install size](https://packagephobia.com/badge?p=@dropzone-ui/react)](https://packagephobia.com/result?p=@dropzone-ui/react)
[![dependencies Status](https://status.david-dm.org/gh/dropzone-ui/react.svg)](https://david-dm.org/dropzone-ui/react)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dropzone-ui/react.svg)](http://isitmaintained.com/project/dropzone-ui/react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Dropzone UI es un peque??o set de componentes [React](https://reactjs.org/) para manejar cargas de archivo y vista previa de im??genes en la interfaz gr??fica. Ya existen algunas buenas librer??as; Sin embargo, **inspirados** en aquellas, hemos creado algo **nuevo** y m??s **potente**. Los principios de Google Material Design fueron considerados en el desarrollo. De hecho, todos los iconos vienen de [Material design icons](https://fonts.google.com/icons).

## Nota
Es posible que, eventualmente, este archivo no tenga las ??ltimas actualizaciones. De ser as??, por favor revisa la version en [ingl??s](https://github.com/dropzone-ui/dropzone-ui#readme).
## Ejemplo de resultado:

En operaciones `Drag`, `Drop` ,`Upload`, y vista previa en pantalla completa. (tambi??n cambiando el modo de vista de `grid` a `list`).

??Te gust?? el proyecto? No olvides regalarnos una :star: estrella en :octocat: [github](https://github.com/dropzone-ui/dropzone-ui) :D

<p align="center">
<img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642335-dc7e7ceb-ae86-4f81-8625-4ee28dc5f593.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642336-e295d84d-d950-43b2-b9fc-0529b4ecfe46.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642339-2cd996a3-7754-46c9-89ed-56291972154f.png" alt="dropone-ui-logo"><img align="center" width="35%" src="https://user-images.githubusercontent.com/43678736/132642341-b1eb2bfe-8134-4cdf-a808-62b14058b4c1.png" alt="dropone-ui-logo">

</p>

</p>

<p align="center">
<img align="center" width=70%" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5wxk14o6zhloz2z3zypy.png" alt="dropone-ui-logo">
</p>

## Instalaci??n

@dropzone-ui/react est?? disponible como un [paquete npm](https://www.npmjs.com/package/@dropzone-ui/react).
Para subir archivos a un servidor, la dependencia peer [axios](https://www.npmjs.com/package/axios) debe ser instalada en conjunto con `dropzone-ui`

```sh
// con npm
npm i @dropzone-ui/react axios
```

```sh
// con yarn
yarn add @dropzone-ui/react axios
```

## Uso y ejemplos

Aqu?? hay un ejemplo r??pido para que te inicies, **es todo lo que necesitas**:

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

Si, esto es todo lo que necesitas para iniciarte como puedes observar en estos demos interactivos:
| Nombre | Enlace a Codesandbox |
|-|-|
|Dropzone Ejemplo b??sico|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-3j01v?file=/src/index.js)|
|Dropzone Ejemplo completo|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/complete-946hz?file=/src/index.js)|
|props de FileItem|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/fileitem-props-o0w5x)|
|FileItem sin vista previa de imagen|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dropzone-ui-file-item-with-no-image-preview-14i2m) |
|InputFileButton & FileItemContainer|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inputbutton-example-poqsn?file=/src/App.js)|
|Ejemplo de `localizaci??n`|[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/localization-6ew1i?file=/src/App.js)|
|Ejemplo de servidor de carga de archivos | https://github.com/dropzone-ui/file-upload-server-side/tree/main/expressjs |
# Localizaci??n

Dropzone-ui est?? disponible en diferentes lenguajes. Hasta ahora, solo est??n disponibles `Ingl??s`, `Espa??ol`, `Franc??s` y `Portugu??s`. Sin embargo, pretendemos expandirnos a m??s idiomas.

| Idioma                              | C??digo  | Ejemplo                |
| ----------------------------------- | ------- | ---------------------- |
| Ingl??s :us: :uk:                    | `EN-en` | localization="`EN-en`" |
| Espa??ol :peru: :mexico: :argentina: | `ES-es` | localization="`ES-es`" |
| Frances :fr:                        | `FR-fr` | localization="`FR-fr`" |
| Portugu??s :brazil: :portugal:       | `PT-pt` | localization="`PT-pt`" |

# API de los Componentes Dropzone-UI

- [\<Dropzone/>](#dropzone-api)
- [\<FileItem />](#fileitem-api)
- [\<FullScreenPreview />](#fullscreenpreview-api)
- [\<FileItemContainer />](#fileitemcontainer-api)
- [\<InputButton />](#inputbutton-api)

## Dropzone API

### Props

| Nombre                                                                                                                            | Tipo                                           | valor por defecto                                         | Descripci??n                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept                                                                                                                            | `string`                                       | `undefined`                                               | Es una cadena de caracteres que contiene una lista de mime types y extenciones de archivo (`.extension`) separados por comas, el cual se compara con los atributos de un archivo para determinar si es v??lido o no. P.E.: `"image/\*, application/pdf, .psd"` |
| behaviour                                                                                                                         | `"add"` \| `"replace"`                         | `"add"`                                                   | EL comportamiento al soltar archivos (onDrop). Si el valor es `"add"` , este atributo har?? que el `Dropzone` agregue archivos. Si el valor es `"replace"`, la `Dropzone` reemplazar?? la lista de archivos actual.                                             |
| children                                                                                                                          | `node`                                         | `true`                                                    | El contenido del componente. Normalmente una lista de componentes `FileItem` o una etiqueta                                                                                                                                                                   |
| clickable                                                                                                                         | `boolean`                                      | `true`                                                    | Si es verdadero, el componente ser?? clickeable                                                                                                                                                                                                                |
| config                                                                                                                            | Object                                         | { headers: { "content-type": "multipart/form-data;", }, } | Configuraci??n ectra para la subida de archivos, normalmente un objeto con cabeceras o token bearer                                                                                                                                                            |
| fakeUploading                                                                                                                     | `boolean`                                      | `undefined`                                               | Si es verdadera, esta bandera har?? que la dropzone simule la subida de archivos. Usarlo ??nicamente en desarrollo.                                                                                                                                             |
| footer                                                                                                                            | `boolean`                                      | `true`                                                    | Si es verdadero, muestra el footer del componente                                                                                                                                                                                                             |
| header                                                                                                                            | `boolean`                                      | `true`                                                    | Si es verdadero, muestra el la cabecera del componente                                                                                                                                                                                                        |
| label                                                                                                                             | `string`                                       | "Drop your files here"                                    | Etiqueta o texto a mostrar cuando no hay archivos soltados o seleccionados                                                                                                                                                                                    |
| localization [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](https://img.shields.io/badge/new-feature-green) | `"EN-en"` \| `"ES-es"`\| `"FR-fr"` \|`"PT-pt"` | `"EN-en"`                                                 | El idioma en el cual se presentan las etiquetas. Solo est??n soportados `ingles`, `franc??s`, `portugu??s` y `espa??ol` por ahora.                                                                                                                                |
| method                                                                                                                            | `"POST"` \| `"PUT"` \| `"PATCH"`               | `"POST"`                                                  | El tipo de m??todo HTTP para subir el archivo                                                                                                                                                                                                                  |
| maxFiles                                                                                                                          | `number`                                       | 7                                                         | Max `number` of files to be accepted. If the value is 1, will click event dialog to allow just asingle file                                                                                                                                                   |
| maxFileSize                                                                                                                       | `number`                                       | `undefined`                                               | Tama??o m??ximo de archivo admitido. Si no esta presente, no ser?? considerado el tama??o del archivo enla validaci??n.                                                                                                                                            |
| maxHeight                                                                                                                         | `string`                                       | "500px"                                                   | El tama??o m??ximo del contenedor en formato string. p.e. `'50vh' , '20%', '40em', '1rem'`                                                                                                                                                                      |
| onChange                                                                                                                          | `Function`                                     | `undefined`                                               | El evento `onChange` ocurre cuando el valor de la lista de archivos cambia.                                                                                                                                                                                   |
| onChangeView                                                                                                                      | `Function`                                     | `undefined`                                               | El evento `onChangeView` ocurre cuando el modo de vista ha cambiado. El primer par??metro es el valor actual de tipo de vista (`view`)                                                                                                                         |
| onDrop                                                                                                                            | `Function`                                     | `undefined`                                               | El evento `onDrop` es disparado cuando se sueltan archivos al interior de la dropzone. Normalmente se utiliza para recibir los nuevos archivos que fueron soltados.                                                                                           |
| uploadOnDrop                                                                                                                      | `boolean`                                      | `false`                                                   | Si es verdadero, el evento `onDrop` retirnar?? una lista de archivos, pero tambi??n subir?? los archivos si es que la url fue dada                                                                                                                               |
| url                                                                                                                               | `string`                                       | `undefined`                                               | La url o endpoint hacia donde subir los archivos                                                                                                                                                                                                              |
| validator                                                                                                                         | `(f: File) => boolean`                         | undefined                                                 | Debe ser una funci??n que reciba como primer par??metro un objeto `File` y debe retornar un valor booleano. Esta func??n ser?? empleada en lugar del validador por defecto.                                                                                       |
| view                                                                                                                              | `"grid"` \| `"list"`                           | `"grid"`                                                  | `grid` mustra los archivos en una distribucion de grilla. `list` mostra?? los items en una lista horizontal. Conveniente para guardar espacio en la p??gina.                                                                                                    |
| value                                                                                                                             | `FIleValidated[]`                              | [ ]                                                       | La lista actual de archivos                                                                                                                                                                                                                                   |

## FileItem API

### Props

| Name                                                                                                                              | Type                                                     | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |     |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| file                                                                                                                              | `File`                                                   | `undefined` | El archivo en si mismo. (objeto `File`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| hd                                                                                                                                | `boolean`                                                | `undefined` | Si est?? presente, la vista previa en pantalla completa ser?? presentada en la resoluci??n real de la imagen                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| id                                                                                                                                | `string` \| `number`                                     | `undefined` | identificador del archivo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| info                                                                                                                              | `boolean`                                                | `false`     | Si est?? presente, el boton de "info" y la capa de informaci??n ser??n visibles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| localization [![new-feature](https://img.shields.io/badge/new-feature-green.svg)](https://img.shields.io/badge/new-feature-green) | `"EN-en"` \| `"ES-es"` \|`"FR-fr"` \|`"PT-pt"`           | `"EN-en"`   | El idioma en el cual se presentan las etiquetas. Solo est??n soportados `ingles`, `franc??s`, `portugu??s` y `espa??ol` por ahora.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| onDelete                                                                                                                          | `Function`                                               | `undefined` | Una funcion `Function` que describe que hacer cuando el boton "close" ha sido clickeado o presionado.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| onSee                                                                                                                             | `Function`                                               | `undefined` | Una funci??n `Function` que describe que hacer cuando el bot??n "see" es presionado o clickeado. Retorna como primer par??metro la url de la imagen en formato `string`. Si adem??s, el prop `hd` est?? presente, esta funci??n retornar??la url de la imagen en su calidad m??xima. De otra forma, retornar?? una imagen con la resolucion minimizada en aras de mejorar el rendimiento.                                                                                                                                                                  |
| preview                                                                                                                           | `boolean`                                                | `false`     | Si esta presente, y si `onSee` est?? presente, el bot??n "see" ser?? visible y dispara?? la funci??n `onSee`                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| uploadMessage                                                                                                                     | `string`                                                 | `undefined` | El mensaje para mostrar cuando el servidor responda.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| uploadStatus                                                                                                                      | `undefined` \| `"uploading"` \| `"success"` \| `"error"` | `undefined` | El estado del proceso de subida de archivo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| valid                                                                                                                             | `boolean`                                                | `false`     | Indica si mostrar un mensaje de valido o rechazado ("valid", "denied"). Por defecto el valor de `valid` es `false` (si no est?? presente, tambi??n es `false`) Este valor afecta el comportamento de la vista previa. Si no es valido el archivo, la vista previa no ser?? mostrada, tampoco el bot??n para abrir la vista previa, a??n cuando `onSee` y `preview` est??n presentes. La funcionalidad para ??permitir mostrar la vista previa, a??n cuando el archivo de imagen es no valido, es una caracteristica que se agregar?? en futuras versiones. |

## FullScreenPreview API

### Props

| Name      | Type       | Default     | Description                                                       |
| --------- | ---------- | ----------- | ----------------------------------------------------------------- |
| imgSource | `string`   | `undefined` | La representacionen string-url de la imagen                       |
| onClose   | `Function` | `undefined` | Funcion que describe el comportamiento al cerrar la vista previa. |
| openImage | `boolean`  | `false`     | Flag que inica si abrir o cerrar la vista previa                  |

## FileItemContainer API

### Props

| Name     | Type                 | Default  | Description                                                                                                                                                                                     |
| -------- | -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children | `node`               | `true`   | El contenido del componente. Normalmente una lista de `FileItem` components. Por defecto, el componente `Dropzone` ya utiliza este componente para contener la lista de componentes `FileItem`. |
| view     | `"grid"` \| `"list"` | `"grid"` | `grid` mustra los archivos en una distribucion de grilla. `list` mostrar?? los items en una lista horizontal. Conveniente para guardar espacio en la p??gina.                                     |

## InputButton API

### Props

| Name        | Type                                                         | Default        | Description                                                                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accept      | `string`                                                     | `undefined`    | Es una cadena de caracteres que contiene una lista de mime types y extenciones de archivo (`.extension`) separados por comas, el cual se compara con los atributos de un archivo para determinar si es v??lido o no. P.E.: `"image/\*, application/pdf, .psd"` |
| color       | `string`                                                     | `"#071e25"`    | El color principal del bot??n. (p.e. "#FFFFFF", "rgb(255,12,45)")                                                                                                                                                                                              |
| disabled    | `boolean`                                                    | `false`        | define si el bot??n estar?? deshabilitado o no.                                                                                                                                                                                                                 |
| id          | `string`                                                     | `undefined`    | el id del componente                                                                                                                                                                                                                                          |
| label       | `string`                                                     | "Browse ..."   | Si est?? presente, tomara este valor como la etiqueta del bot??n                                                                                                                                                                                                |
| maxFileSize | `number`                                                     | `undefined`    | Tama??o m??ximo de archivo permitido en bytes                                                                                                                                                                                                                   |
| multiple    | `boolean`                                                    | `false`        | Si esta presente o es verdadero, aceptar?? multiples archivos.                                                                                                                                                                                                 |
| onChange    | `Function`                                                   | `undefined`    | Funci??n que describe que hacer luego de seleccionar los archivos. Retorna un objeto File[] como primer par??metro                                                                                                                                              |
| style       | `React.CSSProperties`                                        | {}             | El estilo objeto de estilo in-line                                                                                                                                                                                                                            |
| text        | `"uppercase"` \| `"capitalize"` \| `"lowercase"` \| `"none"` | `"capitalize"` | La transformaci??n del texto dentro del bot??n.                                                                                                                                                                                                                 |
| textColor   | `string`                                                     | "white"        | El color de la letra en caso la variante (`variant`) sea `"contained"`                                                                                                                                                                                        |
| validator   | (f: `File`) => `boolean`                                     | `undefined`    | Debe ser una funci??n que reciba como primer par??metro un objeto `File` y debe retornar un valor booleano. Esta funci??n, si est?? presente, ser?? usada en lugar de la funci??n de validaci??n por defecto.                                                        |
| variant     | `"text"` \| `"outlined"` \| `"contained"`                    | `"contained"`  | La variante del bot??n                                                                                                                                                                                                                                         |

## License

Este proyecto est?? licenciado bajo los terminos de la
[Licencia MIT](/LICENSE).
