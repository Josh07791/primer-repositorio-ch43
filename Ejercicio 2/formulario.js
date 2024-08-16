//Se cambiaron la declaracion de las variables de var a const y se cambia el # por un . y form se modifica a formulario
const formulario = document.querySelector(".formulario") 

//se mete dentro de un addEventListener y la e que estaba como parametro se modifica a event
formulario.addEventListener('submit', function(event) { 
  //Se cambia el e por un event
  event.preventDefault(); 
  
  const n = formulario.elements[0]
  const e = formulario.elements[1]
  const na = formulario.elements[2]

  const nombre = n.value
  const edad = e.value

  const i = na.selectedIndex
  const nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
})

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //se tiene que agregar el id en el html de la etiqueta <div>
  const lista = document.getElementById("lista-de-invitados") 

  const elementoLista = document.createElement("div")
  //se cambia added por add
elementoLista.classList.add("elemento-lista") 
lista.appendChild(elementoLista)

//arriba de este codigo se elimino un codigo practicamente identico pero sin la funcion
function crearElemento(descripcion, valor) { 
const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
  botonBorrar.addEventListener('click',  function() {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
      })
}