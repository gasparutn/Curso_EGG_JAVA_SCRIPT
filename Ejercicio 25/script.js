function getFormValores() {
    let formulario = document.getElementById("form1");
    console.log(formulario[1]);

    /* Un formulario puede ser visto como un vector con sus etiquetas como elementos. */

    alert(`El nombre es ${formulario.elements[0].value}`)
    alert(`El apellido es ${formulario.elements[1].value}`)

}
getFormValores()
