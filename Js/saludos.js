window.onload = function() {

    const nombre = prompt("Escribe tu Nombre");
    const edad = prompt("Escribe tu Edad");
    const resultado = document.getElementById("resultado");

  function saludar() {
        if (nombre === "" || nombre === null || edad === "" || edad === null) {
            resultado.innerText = "Por favor reinicia la pagina, llena los campos y intente de nuevo";
            alert("Llena los campos");
            return;
        }
        if (isNaN(edad)) {
            resultado.innerText = "Por favor reinicia la pagina y ingresa una edad válida.";
            alert("Por favor ingresa una edad válida.");
            return;
        }
        let mensaje = "Te damos la bienvenida " + nombre + ". ";
        mensaje += "Es un verdadero placer tenerte en nuestro portafolio. Saber que tienes " + edad + " años,  ";

        if (edad < 18) {
            mensaje += "Y que eres un menor de edad.";
        } else if (edad >= 18 && edad < 60) {
            mensaje += "Y que ya eres un adulto.";
        } else {
            mensaje += "Y que eres de avanzada edad";
        }

        resultado.innerText = mensaje + " estás en una etapa llena de oportunidades para aprender, crear y crecer. Me alegra tenerte aquí visitando mi portafolio. En este espacio podrás ver algunos de mis proyectos, ideas y el trabajo que he venido desarrollando. Espero que disfrutes el recorrido tanto como yo disfruté creándolo. ¡Gracias por estar aquí!";
    }

saludar();
}
