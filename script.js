let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => {
    if (num2 === 0) {
        console.error("No se puede dividir entre cero");
        return "Error";
    }
    return num1 / num2;
};

let operador1 = "";
let operacion = "";
let operador2 = "";

let operate = (operador1, operacion, operador2) => {
    operador1 = parseFloat(operador1);
    operador2 = parseFloat(operador2);

    if (isNaN(operador1) || isNaN(operador2)) {
        console.error("Los operadores no son números válidos");
        return "Error";
    }

    switch (operacion) {
        case "+":
            return sumar(operador1, operador2);
        case "-":
            return restar(operador1, operador2);
        case "*":
            return multiplicar(operador1, operador2);
        case "/":
            return dividir(operador1, operador2);
        default:
            console.error("Operación no válida");
            return "Operación no válida";
    }
};

const display = document.querySelector('.display input');

const actualizarDisplay = (valor) => {
    display.value += valor;
};

const limpiarDisplay = () => {
    display.value = "";
    operador1 = "";
    operacion = "";
    operador2 = "";
};

const botones = document.querySelectorAll('.buttons button');
botones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const valor = e.target.innerText;

        if (valor === "C") {
            limpiarDisplay();
        } else if (valor === "=") {
            operador2 = display.value;
            const resultado = operate(operador1, operacion, operador2);
            display.value = resultado;
            operador1 = resultado;
            operacion = "";
            operador2 = "";
        } else if (["+", "-", "*", "/"].includes(valor)) {
            if (operador1 === "") {
                operador1 = display.value;
                operacion = valor;
                display.value += valor;
            } else {
                alert("Ya has seleccionado una operación");
            }
        } else {
            actualizarDisplay(valor);
        }
    });
}
);