export const locals: string[] = ["EN-en", "ES-es"];

interface LocalizationGroupItem {
  [place: string]: LocalizationItem;
}

interface LocalizationItem {
  [component: string]: string;
}

const labels: LocalizationGroupItem = {
  "EN-en": {
    DropZoneInput: "Browse your files...",
  },
  "ES-es": {
    DropZoneInput: "Busca tus archivos...",
  },
};
export const localization = (component: string, localization?: string) => {
  return labels[localization || "EN-en"][component];
};
