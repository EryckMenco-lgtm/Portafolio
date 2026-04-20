const inputTexto = document.getElementById("inputTexto");
const btnAgregar = document.getElementById("btnAgregar");
const listaContenedor = document.getElementById("listaContenedor");

btnAgregar.addEventListener("click", function () {
    const texto = inputTexto.value.trim();

    if (texto === "") {
        alert("Escribe tu contenido");
        return;
    }

    const nuevoItem = document.createElement("div");
    nuevoItem.classList.add("item");
    nuevoItem.textContent = texto;

    listaContenedor.appendChild(nuevoItem);

    inputTexto.value = "";
});