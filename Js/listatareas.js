const contenidoInput = document.getElementById("contenido");
const agregarBtn = document.getElementById("agregarBtn");
const seccion = document.getElementById("tareas");
const info = document.getElementById("info");

let completados = 0;
let total = 0;

function actualizarContador() {
    info.textContent = total + " tareas - " + completados + " completadas";
}

function agregar() {
    const texto = contenidoInput.value;

 if (texto.trim() === "") {
    alert("Llena los campos");
    info.innerText = "Llena los campos.";
    return;
    }

    if (texto.trim() === "") return;

    total += 1;

    const tarea = document.createElement("div");
    seccion.appendChild(tarea);

    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    tarea.appendChild(casilla);

    casilla.addEventListener("click", function() {
        if (casilla.checked === true) {
            completados += 1;
        } else {
            completados -= 1;
        }
        actualizarContador();

        console.log("Completados:", completados);
    });

    const parrafo = document.createElement("p");
    parrafo.textContent = texto;
    tarea.appendChild(parrafo);

    const boton = document.createElement("button");
    boton.innerText = "Eliminar";
    tarea.appendChild(boton);

    boton.addEventListener("click", function() {
        if (casilla.checked) {
            completados -= 1;
        }
        total -= 1;
        tarea.remove();
        actualizarContador();
    });

    contenidoInput.value = "";
    actualizarContador();
}

agregarBtn.addEventListener("click", agregar);
