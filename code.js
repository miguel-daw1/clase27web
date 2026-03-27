const texto = document.getElementById("titulo")
const sonido = document.getElementById("sonido")
const boton = document.getElementById("btn")
/*cada que presione el boton
se reproduzca el sonido */
boton.addEventListener("click",()=>{
 sonido.play()
})
