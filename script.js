const habitosLista=[
"Beber suficiente agua",
"Dormir entre 7 y 9 horas",
"Comer frutas",
"Comer verduras",
"Hacer ejercicio",
"Caminar al aire libre",
"Evitar exceso de azúcar",
"Reducir comida rápida",
"Desayunar",
"Buena higiene",
"Leer",
"Aprender algo nuevo",
"Practicar gratitud",
"Meditar",
"Escuchar música relajante",
"Organizar tu día",
"Pensar positivo",
"Resolver rompecabezas"
]

let seleccionados=0

function cargarHabitos(){

let cont=document.getElementById("habitos")

cont.innerHTML=""

for(let i=0;i<6;i++){

let random=habitosLista[Math.floor(Math.random()*habitosLista.length)]

let div=document.createElement("div")

div.className="habito"

div.innerText=random

div.onclick=function(){

div.classList.toggle("activo")

if(div.classList.contains("activo")){

seleccionados++

}else{

seleccionados--

}

actualizarProgreso()

}

cont.appendChild(div)

}

}

function actualizarProgreso(){

let progreso=(seleccionados/6)*100

document.getElementById("progreso").style.width=progreso+"%"

document.getElementById("porcentaje").innerText=Math.round(progreso)+"%"

document.getElementById("totalHabitos").innerText=seleccionados

}

function guardarPerfil(){

let nombre=document.getElementById("nombre").value

localStorage.setItem("nombre",nombre)

document.getElementById("saludo").innerText="Bienvenido "+nombre

}

function cargarPerfil(){

let nombre=localStorage.getItem("nombre")

if(nombre){

document.getElementById("saludo").innerText="Bienvenido "+nombre

}

}

function responder(text){

text=text.toLowerCase()

if(text.includes("hola")) return "Hola, puedo ayudarte con hábitos saludables."

if(text.includes("agua")) return "Beber agua cada día mejora tu energía."

if(text.includes("ejercicio")) return "30 minutos diarios de ejercicio ayudan a tu salud."

if(text.includes("dormir")) return "Dormir 7 a 9 horas mejora tu concentración."

if(text.includes("motivacion")) return "La disciplina diaria crea grandes resultados."

return "Pregúntame sobre hábitos, salud o motivación."

}

function enviar(){

let input=document.getElementById("userInput")

let chat=document.getElementById("chatBox")

let mensaje=input.value

if(mensaje==="") return

chat.innerHTML+="<p><b>Tú:</b> "+mensaje+"</p>"

let respuesta=responder(mensaje)

chat.innerHTML+="<p><b>Asistente:</b> "+respuesta+"</p>"

input.value=""

chat.scrollTop=chat.scrollHeight

}

cargarPerfil()

cargarHabitos()