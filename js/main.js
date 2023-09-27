const NWA = ["Ice Cube", "Dr Dre", "Eazy e", "Mc Ren", "Dj Yella"];
console.log("1986, se forma el grupo")
console.log(NWA)

NWA.shift();
console.log("1989, se divide el grupo")
console.log(NWA);

NWA.shift();
console.log("1992, se divide el grupo")
console.log(NWA);

NWA.push("Ice Cube", "Dr Dre");
        console.log("1995, Se reune el grupo")
        console.log(NWA)

const rapero1 = {
        nombre:"Ice Cube",
        edad:17,
        nacimiento:1969,
}
const rapero2 = {
        nombre:"Eazy e",
        edad:22,
        nacimiento:1964,
}
const rapero3 = {
        nombre:"Dr Dre",
        edad:21,
        nacimiento:1965,
}
const rapero4 = {
        nombre:"Mc Ren",
        edad:17,
        nacimiento:1969,
}
const rapero5 = {
        nombre:"Dj Yella",
        edad:19,
        nacimiento:1967,
}

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