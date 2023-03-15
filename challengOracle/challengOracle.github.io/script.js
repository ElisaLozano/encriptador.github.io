const inputTexto = document.querySelector(".texto")
const mensaje = document.querySelector(".mensaje")


function btnEncriptar(){
    const txtEncriptado = encriptar(inputTexto.value)
    mensaje.value = txtEncriptado;
   mensaje.style.backgroundImage = "none";
    inputTexto.value =""  

}
function encriptar(encriptarTxt){
    let arr = [["a", "ak"],["e", "enter"],["i", "imes"],["o", "ober"],["u","ufat"]];
     encriptarTxt = encriptarTxt.toLowerCase();

for(let i = 0; i < arr.length; i++){
    if(encriptarTxt.includes(arr[i][0])){
       encriptarTxt = encriptarTxt.replaceAll
      (arr[i][0],arr[i][1])  
    }
}
return encriptarTxt;
}

function btnDesencriptar(){
    const txtEncriptado = desencriptar(inputTexto.value) 
    mensaje.value = txtEncriptado;
   mensaje.style.backgroundImage = "none";
    inputTexto.value =""
}

function desencriptar(desencriptarTxt){
    let arr = [["a", "ak"],["e", "enter"],["i", "imes"],["o", "ober"],["u","ufat"]];
     desencriptarTxt = desencriptarTxt.toLowerCase();

for(let i = 0; i < arr.length; i++){
    if(desencriptarTxt.includes(arr[i][1])){
       desencriptarTxt = desencriptarTxt.replaceAll
       (arr[i][1],arr[i][0])  
    }
}
return desencriptarTxt;
}
    
function btnCopiar(){
    mensaje.select ();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.style.backgroundImage = "";
    mensaje.value="" 
alert("Texto Copiado");
}



