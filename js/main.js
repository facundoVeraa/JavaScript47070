/*const puntaje = "1000";

if (puntaje == 1000){
        console.log ("es igual")
}*/

/*let NombreUsuario = prompt ("ingresar nombre de usuario")

if (NombreUsuario == ""){
        alert("no ingresaste nombre de usuario");
}
else{
        alert("nombre de usuario ingresado" + NombreUsuario);
}*/

/*const num1 = 10;
const num2 = 5;

let resultado = num1<num2
console.log(resultado);
console.log(typeof resultado);*/

/*for (let i=0; i<=10; i++) {
        console.log("el valor de x es" + i)
}*/



/*let edad = prompt ("Ingresa tu edad")

if (edad <= 18){
        console.log("Podes ingresar al sitio")
}
else (edad  >= 18);{
        console.log("No poder ingresar al sitio")
}*/






/*let añoNacimiento = prompt("dame tu año de nacimiento");
let añoActual = 2023;

let edad = 2023 - añoNacimiento;
let mayor;
if (edad >= 18) {
        mayor = true;
} else {
        mayor = false;
}
if (mayor == true) {
        console.log("podes ingresar");
} else{
        console.log("no podes ingresar");
}*/

/*for(let i=0; i<=10; i+=1){
        console.log("el valor de i es " + i)    
}*/

//ENTREGA 1

let comando
while (comando != 'Salir') {
        comando = prompt('ingrese comando :\n\n-Enviar consulta\n-Parciales\n-Promedio notas\n-Salir');

        switch (comando) {
        case 'Enviar consulta':
                let profesor = prompt("Ingrese nombre del profesor");
                let consulta = prompt("Ingrese su consulta sobre el parcial");
                 alert("Consulta enviada a,  " + profesor);
                break;
        case 'Parciales':
                for (let i = 1; i <= 3; i++) {
                alert("Parcial N°" + i);
                }
                break;
        case 'Promedio notas':
                let notaPrimerParcial = parseInt(prompt("Ingrese la nota obtenida en el 1° parcial"));
                let notaSegundoParcial = parseInt(prompt("Ingrese la nota obtenida en el 2° parcial"));
                let notaTercerParcial = parseInt(prompt("Ingrese la nota obtenida en el 3° parcial"));
                let suma = notaPrimerParcial + notaSegundoParcial + notaTercerParcial;
                let promedio = suma / 3;
                alert("Su promedio es " + promedio);
        if (promedio <= 3) {
                alert("Estas desaprobado!")
                }
        else if (promedio >= 4) {
                alert("Estas aprobado!")
                }
        break;
        } 
}