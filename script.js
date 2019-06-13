var estudiante = {
    nombre: null,
    edad: null,
    semestre: null,
    calculo: null,
    programacion_1: null,
    paginas_web: null,
    promedio: null
};

function sacarPromedio(){
    estudiante.nombre = prompt("Ingresa tu nombre");
    estudiante.edad = parseInt(prompt("Edad"));
    estudiante.semestre = parseInt(prompt("Semestre"));
    estudiante.calculo = parseFloat(prompt("Calificación Cálculo"));
    estudiante.programacion_1 = parseFloat(prompt("Calificación Programación 1"));
    estudiante.paginas_web = parseFloat(prompt("Califiación Páginas Web"));

    estudiante.promedio = ((estudiante.calculo + estudiante.programacion_1 + estudiante.paginas_web) / 3).toFixed(1);
    llenandoCampos();
    cambiandoEstilos();
}

function llenandoCampos(){
    var prom = document.getElementById("promedio");
    var tabla = document.getElementById("datos").childNodes[1].childNodes[2];

    tabla.childNodes[1].innerHTML = estudiante.nombre;
    tabla.childNodes[3].innerHTML = estudiante.edad;
    tabla.childNodes[5].innerHTML = estudiante.semestre;
    tabla.childNodes[7].innerHTML = estudiante.calculo;
    tabla.childNodes[9].innerHTML = estudiante.programacion_1;
    tabla.childNodes[11].innerHTML = estudiante.paginas_web;
    prom.innerHTML = estudiante.promedio;
}

function cambiandoEstilos(){
    if(estudiante.promedio >= 7){
        document.getElementById("half22").style.backgroundColor = "#009432";
        document.getElementById("status").innerHTML = "Usted ha aprobado";
    } else{
        document.getElementById("half22").style.backgroundColor = "#EA2027";
        document.getElementById("status").innerHTML = "Usted ha Reprobado";
    }
    document.getElementById("promedio").style.color = "#ecf0f1";
    document.getElementById("promedio1").style.color = "#ecf0f1";
    document.getElementById("status").style.color = "#ecf0f1";
}