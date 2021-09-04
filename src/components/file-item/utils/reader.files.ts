/**
 * @deprecated use readImagePromise() instead.
 * 
 * Read an image and returns the URL expresion in base 64
 * @param file the image file
 * @param afterRead a function of what to do when load finishes
 */
export const readImage = (file: File, afterRead: Function) => {
    const reader = new FileReader();
    reader.onload = function () {
        // convert image file to base64 string
        afterRead(reader.result);
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}
/**
 * 
 * @param base64Str 
 * @param maxWidth 
 * @param maxHeight 
 * @returns 
 */
export function resizeImage(
    base64Str: string,
    maxWidth = 135,
    maxHeight = 120
): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
        try {
            let img: HTMLImageElement = new Image();
            img.src = base64Str;
            img.onload = () => {
                let canvas = document.createElement('canvas');
                const MAX_WIDTH = maxWidth;
                const MAX_HEIGHT = maxHeight;
                let width = img.width;
                let height = img.height;

                if (maxWidth > width && maxHeight > height) {
                    resolve(base64Str);
                } else
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }
                canvas.width = width
                canvas.height = height
                let ctx = canvas.getContext('2d')
                if (ctx) {
                    ctx.drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL());

                } else {
                    console.error("An error ocurred when trying to make a thumnail");
                    reject(undefined);
                }

            }
        } catch (error) {
            console.error("An error ocurred when trying to make a thumnail");
            reject(undefined);
        }

    })
}
/**
 * Reads an image file in a promise way, so you can use await.
 * If other kind of file is sent, this function will read it anyway
 * and will return a string that contains the URL representation
 * @param file File image object
 * @returns data URL of the image file
 */
export const readImagePromise = (file: File): Promise<string | undefined> => {
    return new Promise<string | undefined>((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result as string);
            }
            reader.readAsDataURL(file);
        } catch (error) {
            reject(undefined);
        }
    });
}

