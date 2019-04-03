 //declarando variables globales
 let text;
 let offset;
 let returnEncode;
 let returnDecode;
 const btnLimpiar = document.getElementById('limpiar');
 const btnDCifrar = document.getElementById('btnDCifr');
 const btnCifrar = document.getElementById('btnCifr');
 const alertOffset = document.getElementById('alert2');
 const alertText = document.getElementById('alert');
 const campOffset = document.getElementById('offset');
 const campInput = document.getElementById('input');
 const campOutput = document.getElementById('output');
 //poner focus en primer textarea
 campInput.focus();
 //escuchamos eventos de dom
 btnCifrar.addEventListener('click', () => {
     takeValue();
     //validacion de datos
     if (offset == '' && text.length == 0) {
         alertOffset.innerHTML = '<p style="color:red;">Dale offset!</p>';
         alertText.innerHTML = '<p style="color:red;">hay que llenar el campo!</p>';
         //volvemos a poner focus en primera textarea
         campInput.focus();
     } else if (offset == '' && text.length !== 0) {
         alertText.style.display = 'none';
         alertOffset.innerHTML = '<p style="color:red;">Dale offset:)!</p>';
         campOffset.value = '';
         campOffset.focus();
     } else if (offset !== '' && text.length == 0) {
         alertOffset.style.display = 'none';
         alertText.innerHTML = '<p style="color:red;">hay que llenar el campo!</p>';
         campInput.focus();
     } else {
         alertOffset.style.display = 'none';
         alertText.style.display = 'none';
         //convertemos valor de offset en number
         offset = parseInt(offset);
         //variable que recibe  return encode
         returnEncode = window.cipher.encode(offset, text);
         //vaciamos campos de input y offset
         campInput.value = '';
         campOffset.value = '';
         //imprimimos cipher
         campOutput.value = returnEncode;
         //ponemos focus en input vacio
         campInput.focus();
     }
 });
 //escuchamos eventos de dom
 btnDCifrar.addEventListener('click', () => {
     takeValue();
     if (offset == '' && text.length == 0) {
         alertOffset.innerHTML = '<p style="color:red;">Dale offset!</p>';
         alertText.innerHTML = '<p style="color:red;">hay que llenar el campo!</p>';
         campInput.focus();
     } else if (offset == '' && text.length !== 0) {
         alertText.style.display = 'none';
         alertOffset.innerHTML = '<p style="color:red;">Dale offset:)!</p>';
         campOffset.value = '';
         campOffset.focus();
     } else if (offset !== '' && text.length == 0) {
         alertOffset.style.display = 'none';
         alertText.innerHTML = '<p style="color:red;">hay que llenar el campo!</p>';
         campInput.focus();
     } else {
         offset = parseInt(offset);
         alertOffset.style.display = 'none';
         alertText.style.display = 'none';
         //variable que recibe  return decode
         returnDecode = window.cipher.decode(offset, text);
         campInput.value = '';
         campOffset.value = '';
         campOutput.value = returnDecode;
         campInput.focus();
     }
 });
 btnLimpiar.addEventListener('click', () => {
     campInput.value = '';
     campOffset.value = '';
     campOutput.value = '';
     location.reload();
 });
 const takeValue = () => {
     //sacamos valor de texto ingresado y lo guardamos dentro de variable text
     text = campInput.value;
     //convertimos caracteres de string en mayusculas
     text = text.toUpperCase().trim();
     //sacamos valor de offset(string por mientras)
     offset = campOffset.value;
 }