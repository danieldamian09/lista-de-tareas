(function () {
    
    // variables
    var lista = document.getElementById('lista'),
        tareaInput = document.getElementById('tareaInput'),
        btnNuevaTarea = document.getElementById('btn-agregar');

    // funciones y eventos
    // funciones

    var agregarTarea = function () {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement('li'),
            enlace = document.createElement('a'),
            contenido = document.createTextNode(tarea);

            if (tarea == "") {
                tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
                tareaInput.className = "error";
                return false;
            }

            // agrgamos el contenido al enlace
            enlace.appendChild(contenido);
            // establecemos un atributo href
            enlace.setAttribute("href", "#");
            // agrgamos el elemento "a" al "li"
            nuevaTarea.appendChild(enlace);
            // agrgamos el elemento "li" a la lista
            lista.appendChild(nuevaTarea);

            // para limpiar el input
            tareaInput.value = "";

            for (let i = 0; i <= lista.children.length - 1; i++) {
                lista.children[i].addEventListener("click", function(){
                    this.parentNode.removeChild(this);
                });
            }
    }

    var comprobarInput = function () {
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea ");
    }

    var eliminarTarea = function () {
        this.parentNode.removeChild(this);
    }

    // eventos:

    // evento para agrgar tarea:
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // evento para comprobar input
    tareaInput.addEventListener("click", comprobarInput);






    // borrando elementos de la lista
    for (let i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }



}())