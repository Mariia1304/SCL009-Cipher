let cifrado;
let decifrado;
let charCode;
let charCodeNew;
window.cipher = {
    encode: (offset, string) => {
        cifrado = '';
        for (let i = 0; i < string.length; i++) {
            //obtenemos number de cahrcode por cada caracter en texto ingresado
            charCode = string.charCodeAt(i);
            //en caso si numero de charcode esta entre 65 hasta 90
            if (charCode >= 65 && charCode <= 90) {
                if (offset >= 0) {
                    //vamos a usar formula que va a codificar(osea devolver nuevo number)
                    charCodeNew = (charCode - 65 + offset) % 26 + 65;
                    //y despues obtenemos el significado de nuevo number
                    charCodeNew = String.fromCharCode(charCodeNew);
                    // aqui estamos agregando cada nuevo caracter cifrado
                    cifrado = cifrado + charCodeNew;
                    //cifrado = cifrado.toLowerCase();
                } else {
                    charCodeNew = (charCode - 90 + offset) % 26 + 90;
                    charCodeNew = String.fromCharCode(charCodeNew);
                    cifrado = cifrado + charCodeNew;
                }
            } else if (charCode >= 97 && charCode <= 122) {
                if (offset >= 0) {
                    //vamos a usar formula que va a codificar(osea devolver nuevo number)
                    charCodeNew = (charCode - 97 + offset) % 26 + 97;
                    //y despues obtenemos el significado de nuevo number
                    charCodeNew = String.fromCharCode(charCodeNew);
                    // aqui estamos agregando cada nuevo caracter cifrado
                    cifrado = cifrado + charCodeNew;
                    //cifrado = cifrado.toLowerCase();
                } else {
                    charCodeNew = (charCode - 122 + offset) % 26 + 122;
                    charCodeNew = String.fromCharCode(charCodeNew);
                    cifrado = cifrado + charCodeNew;
                }
            } else {
                //en caso si number de cararcter no esta dentro 65 -90 no lo vamos a cifrar(por mientras)
                charCode = String.fromCharCode(charCode);
                cifrado = cifrado + charCode;
            }
        }
        return (cifrado);
    },
    decode: (offset, string) => {
        decifrado = '';
        for (let i = 0; i < string.length; i++) {
            charCode = string.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                if (offset >= 0) {
                    charCodeNew = (charCode - 90 - offset) % 26 + 90;
                    charCodeNew = String.fromCharCode(charCodeNew);
                    decifrado = decifrado + charCodeNew;
                } else {
                    charCodeNew = (charCode - 65 - offset) % 26 + 65;
                    charCodeNew = String.fromCharCode(charCodeNew);
                    decifrado = decifrado + charCodeNew;
                }
            } else if (charCode >= 97 && charCode <= 122) {
                if (offset >= 0) {
                    charCodeNew = (charCode - 122 - offset) % 26 + 122;
                    charCodeNew = String.fromCharCode(charCodeNew);
                    decifrado = decifrado + charCodeNew;
                } else {
                    charCodeNew = (charCode - 97 - offset) % 26 + 97;
                    charCodeNew = String.fromCharCode(charCodeNew);
                    decifrado = decifrado + charCodeNew;
                }
            } else {
                charCode = String.fromCharCode(charCode);
                decifrado = decifrado + charCode;
            }
        }
        return (decifrado);
    }
};