export function convertToBase64(photoData) {
    const blob = new Blob([photoData]);
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = () => { reject("Failed to read file"); };
        reader.onabort = () => { reject("Aborted read file"); };
        reader.onload = function (event) {
            const base64 = event.target.result;
            resolve(base64);
        };
        reader.readAsDataURL(blob);
    });
}

export function convertToArrayBuffer(file) {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = () => { reject("Failed to read file"); };
        reader.onabort = () => { reject("Aborted read file"); };
        reader.onload = function (event) {
            resolve(event.target.result);
        };
        reader.readAsArrayBuffer(file);
    });
}