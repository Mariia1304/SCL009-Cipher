let cifrado;
let decifrado;
let charCode;
let charCodeNew;
window.cipher = {
    encode: (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            //obtenemos nuer de cahrcode por cada caracter en texto ingresado
            charCode = string.charCodeAt(i);
            //en caso si numero de charcode esta entre 65 hasta 90
            if (charCode >= 65 && charCode <= 90) {
                //vamos a usar formula que va a codificar(osea devolver nuevo number)
                charCodeNew = (charCode - 65 + offset) % 26 + 65;
                //y despues obtenemos el significado de nuevo number
                charCodeNew = String.fromCharCode(charCodeNew);
                // aqui estamos agregando cada nuevo caracter cifrado
                cifrado = cifrado + charCodeNew;
            } else {
                //en caso si number de cararcter no esta dentro 65 -90 no lo vamos a cifrar(por mientras)
                charCode = String.fromCharCode(charCode);
                cifrado = cifrado + charCode;
            }
        }
        return (cifrado);
    },
    decode: (offset, string) => {
        for (let i = 0; i < string.length; i++) {
            charCode = string.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCodeNew = (charCode + 65 - offset) % 26 + 65;
                charCodeNew = String.fromCharCode(charCodeNew);
                decifrado = decifrado + charCodeNew;
            } else {
                charCode = String.fromCharCode(charCode);
                decifrado = decifrado + charCode;
            }
        }
        return (decifrado);
    }
};