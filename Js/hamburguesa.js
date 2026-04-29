const button = document.getElementById("header-menu")
const header = document.getElementById("header")

function mostrar() {
    header.classList.toggle("abierto")
}

button.addEventListener("click", mostrar)
