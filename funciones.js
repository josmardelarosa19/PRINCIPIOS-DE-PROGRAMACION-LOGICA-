/* =========================
   ESTILOS (JSS)
========================= */

document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.background =
"linear-gradient(to bottom,#7ec850,#4f8a10)";
document.body.style.fontFamily = "Arial";

/* Calculadora */

const calculadora = document.querySelector(".calculadora");

calculadora.style.width = "380px";
calculadora.style.padding = "20px";
calculadora.style.background = "#8B5A2B";
calculadora.style.border = "8px solid #3E2723";
calculadora.style.borderRadius = "10px";
calculadora.style.boxShadow = "0 0 20px black";

/* Barra */

const barra = document.querySelector(".barra-titulo");

barra.style.background = "#4CAF50";
barra.style.color = "white";
barra.style.textAlign = "center";
barra.style.padding = "10px";
barra.style.fontSize = "22px";
barra.style.fontWeight = "bold";
barra.style.marginBottom = "15px";
barra.style.border = "3px solid #2E7D32";

/* Inputs */

document.querySelectorAll("input").forEach(input => {

    input.style.width = "100%";
    input.style.height = "45px";
    input.style.marginBottom = "10px";
    input.style.fontSize = "18px";
    input.style.paddingLeft = "10px";
    input.style.boxSizing = "border-box";
    input.style.border = "3px solid #2E7D32";

});

/* Filas */

document.querySelectorAll(".fila").forEach(fila => {

    fila.style.display = "flex";
    fila.style.gap = "10px";
    fila.style.marginBottom = "10px";

});

/* Botones */

document.querySelectorAll("button").forEach(btn => {

    btn.style.flex = "1";
    btn.style.height = "50px";
    btn.style.background = "#757575";
    btn.style.color = "white";
    btn.style.fontSize = "22px";
    btn.style.fontWeight = "bold";
    btn.style.border = "3px solid #424242";
    btn.style.cursor = "pointer";

    btn.addEventListener("mouseenter", () => {
        btn.style.background = "#616161";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.background = "#757575";
    });

});

/* Resultado */

const resultadoDiv = document.getElementById("resultado");

resultadoDiv.style.background = "white";
resultadoDiv.style.border = "3px solid #2E7D32";
resultadoDiv.style.padding = "10px";
resultadoDiv.style.minHeight = "80px";
resultadoDiv.style.fontSize = "18px";

/* =========================
   OPERACIONES
========================= */

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){

    if(b === 0){
        throw new Error("No se puede dividir entre cero");
    }

    return a/b;
}

/* =========================
   PRIMO
========================= */

function esPrimo(numero){

    numero = Math.abs(numero);

    if(numero < 2){
        return false;
    }

    for(let i=2;i<=Math.sqrt(numero);i++){

        if(numero % i === 0){
            return false;
        }

    }

    return true;
}

/* =========================
   CALCULADORA
========================= */

function calcular(operacion){

    const valor1 =
    document.getElementById("num1").value;

    const valor2 =
    document.getElementById("num2").value;

    if(valor1 === "" || valor2 === ""){

        resultadoDiv.innerHTML =
        "⚠️ Ingresa ambos números";

        return;
    }

    const a = Number(valor1);
    const b = Number(valor2);

    let resultado;

    try{

        switch(operacion){

            case "sumar":
                resultado = sumar(a,b);
                break;

            case "restar":
                resultado = restar(a,b);
                break;

            case "multiplicar":
                resultado = multiplicar(a,b);
                break;

            case "dividir":
                resultado = dividir(a,b);
                break;
        }

        let paridad;

        if(Number.isInteger(resultado)){

            paridad =
            resultado % 2 === 0
            ? "Par"
            : "Impar";

        }else{

            paridad = "Decimal";
        }

        let primo =
        esPrimo(resultado)
        ? "Primo"
        : "No primo";

        resultadoDiv.innerHTML = `
            <strong>Resultado:</strong> ${resultado}<br>
            <strong>Paridad:</strong> ${paridad}<br>
            <strong>Clasificación:</strong> ${primo}
        `;

    }catch(error){

        resultadoDiv.innerHTML =
        "❌ " + error.message;
    }
}