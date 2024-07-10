
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let shift = 3;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            encryptedText += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedText += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            encryptedText += inputText.charAt(i);
        }
    }

    document.getElementById('encryptedText').value = encryptedText;
}


function decryptText() {
    let encryptedText = document.getElementById('encryptedText').value;
    let shift = 3;
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            decryptedText += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decryptedText += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            decryptedText += encryptedText.charAt(i);
        }
    }

    document.getElementById('decryptedText').value = decryptedText;
}
