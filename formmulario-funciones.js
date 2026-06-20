let calificacion 
function calcularCalificacion() {
    let calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    let calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    let calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    let calificacion4 = parseFloat(document.getElementById("calificacion4").value);
    let calificacion5 = parseFloat(document.getElementById("calificacion5").value);
    calificacion = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5) / 5;
    document.getElementById("resultado").innerHTML = "La calificación final es: " + calificacion.toFixed(2);
}
const resultado = document.getElementById("resultado");
if (calificacion >= 100) {
    resultado.innerHTML += "<br>¡Excelente!";
} else if (calificacion >= 80) {
    resultado.innerHTML += "<br>¡Muy bien!";
} else if (calificacion >= 60) {
    resultado.innerHTML += "<br>¡Bien!";
} else {
    resultado.innerHTML += "<br>¡Necesitas mejorar!";
}       
