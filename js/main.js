const Parciales = ["Facundo", "Gabriel", "Francisco", "Lorenzo", "Jeremias"];
console.log("Matematica discreta, alumnos")
console.log(Parciales)

Parciales.splice(0, 3);
console.log("aprobados de 1° parcial")
console.log(Parciales);

Parciales.unshift("Facundo, Gabriel, Fracisco");
Parciales.splice(1, 4);
console.log("aprobados de 2° parcial")
console.log(Parciales);

Parciales.push("Lorenzo");
        console.log("aprobados de 3° parcial")
        console.log(Parciales)

let alumnos = [
        {nombre:"Facundo", edad:18, promedio:8},
        {nombre:"Gabriel", edad:22, promedio:5},
        {nombre:"Francisco", edad:19, promedio:8},
        {nombre:"Lorenzo", edad:21, promedio:7},
        {nombre:"Jeremias", edad:19, promedio:6},
];

let promedioOcho = alumnos.filter(function(alumno){
        return alumno.promedio === 8
});
console.log(promedioOcho)

let edad = alumnos.find(function(alumno){
        return alumno.edad === 19
});
console.log(edad)

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