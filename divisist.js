//Conseguir la definitiva
let calcularDefinitiva = (primerPrevio,segundoPrevio,tercerPrevio,previoFinal) => {
    let definitiva = (primerPrevio + segundoPrevio + tercerPrevio) / 3 * 0.7 + previoFinal * 0.3;
    return Number(definitiva.toFixed(1));
};
//Enviar el objeto al arreglo de materias
let guardarAsignatura = (asignatura,primerPrevio,segundoPrevio,tercerPrevio,previoFinal,definitiva) => {
    let datosAsignatura = {
        asignatura,
        primerPrevio,
        segundoPrevio,
        tercerPrevio,
        previoFinal,
        definitiva
    };
    materias.push(datosAsignatura);
    localStorage.setItem("notas", JSON.stringify(materias));
};
//Enviar el arreglo de materias al local Storage
let almacenar = (element) => {
    localStorage.setItem("notas",JSON.stringify(element));
};
//Hacer la tabla
let entablar = () => {
    let tabla = ``
    materias.forEach(element => {
        if(element.definitiva < 3){
            tabla += `
            <tr style="background-color: red">
                <td>${element.asignatura}</td>
                <td>${element.primerPrevio}</td>
                <td>${element.segundoPrevio}</td>
                <td>${element.tercerPrevio}</td>
                <td>${element.previoFinal}</td>
                <td>${element.definitiva}</td>
            </tr>`
        } else if(element.definitiva < 4) {
            tabla += `
            <tr style="background-color: yellow">
                <td>${element.asignatura}</td>
                <td>${element.primerPrevio}</td>
                <td>${element.segundoPrevio}</td>
                <td>${element.tercerPrevio}</td>
                <td>${element.previoFinal}</td>
                <td>${element.definitiva}</td>
            </tr>`
        } else {
            tabla += `
            <tr style="background-color: green">
                <td>${element.asignatura}</td>
                <td>${element.primerPrevio}</td>
                <td>${element.segundoPrevio}</td>
                <td>${element.tercerPrevio}</td>
                <td>${element.previoFinal}</td>
                <td>${element.definitiva}</td>
            </tr>`
        };
    });
    document.getElementById("tabla").innerHTML = tabla;
};
//Cargar la tabla
let materias = JSON.parse(localStorage.getItem("notas")) ?? [];
entablar();
almacenar(materias);
//Validacion y envio de formulario
document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault       
    let asignatura = document.getElementById("asignatura");
    let primerPrevio = document.getElementById("primerPrevio");
    let segundoPrevio = document.getElementById("segundoPrevio");
    let tercerPrevio = document.getElementById("tercerPrevio");
    let previoFinal = document.getElementById("previoFinal");
    notas = [primerPrevio.valueAsNumber,segundoPrevio.valueAsNumber, tercerPrevio.valueAsNumber, previoFinal.valueAsNumber];
    //Validar si los datos ingresados son validos
    if(asignatura.value == null || asignatura.value == 0){
        alert("El nombre de asignatura no es valido");
        return false;
    };
    if(primerPrevio.valueAsNumber == null || primerPrevio.valueAsNumber <= 0 || isNaN(primerPrevio.valueAsNumber)){
        alert("Nota invalida");
        return false;
    };
    if(segundoPrevio.valueAsNumber == null || segundoPrevio.valueAsNumber <= 0 || isNaN(segundoPrevio.valueAsNumber)){
        alert("Nota invalida");
        return false;
    };
    if(tercerPrevio.valueAsNumber == null || tercerPrevio.valueAsNumber <= 0 || isNaN(tercerPrevio.valueAsNumber)){
        alert("Nota invalida");
        return false;
    };
    if(previoFinal.valueAsNumber == null || previoFinal.valueAsNumber <= 0 || isNaN(previoFinal.valueAsNumber)){
        alert("Nota invalida");
        return false;
    };
    //Uso de las funciones necesarias
    let definitiva = calcularDefinitiva(primerPrevio.valueAsNumber,segundoPrevio.valueAsNumber,tercerPrevio.valueAsNumber,previoFinal.valueAsNumber);
    guardarAsignatura(asignatura.value,primerPrevio.valueAsNumber,segundoPrevio.valueAsNumber,tercerPrevio.valueAsNumber,previoFinal.valueAsNumber,definitiva);
});
