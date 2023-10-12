const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado"){
    activarDarkMode();
} else{
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})


const txtOp1 = document.getElementById("operador1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("operador2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)   

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break
            case "-":
                resultado = op1 - op2
                break
            case "*":
                resultado = op1*op2
                break
            case "/":
                resultado = op1/op2
                break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
        }else{
        pResultado.style = "color:red"
        pResultado.innerText = "calculo imposible"
    }
}