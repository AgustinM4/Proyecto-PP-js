let nombreDeUsuario = prompt("Para sacar turno ingrese un nuevo nombre de usuario")
let contraseñaNueva = Number(prompt("Ahora ingrese una contraseña númerica"))

while(isNaN(contraseñaNueva) || contraseñaNueva === 0){
    alert("La contraseña debe ser númerica")
    contraseñaNueva = Number(prompt("ahora ingrese una contraseña númerica"))
}

for(let turno = 1; turno <= 10; turno++){
    let ingresarNombre = prompt("Ingrese su nombre");
    alert(" turno N° "+turno+" nombre: "+ingresarNombre);
    if(turno == 7){
        alert("Lo lamentamos, no hay mas turnos disponibles.")
        break;
    }
}

class Turno{
    constructor(turno, fecha, horario, clinica,) {
        this.turno = turno;
        this.fecha = fecha;
        this.horario  = horario;
        this.clinica = clinica
    }
}

const turno1 = new Turno("turno otorgado N° 1", "15/6/2023", "11:30 hs", "Clínica Estrada");
const turno2 = new Turno("turno otorgado N° 2", "15/6/2023", "12:00 hs", "Clinica IMA");
const turno3 = new Turno("turno otorgado N° 3", "15/6/2023", "12:30 hs", "Clínica Estrada");
const turno4 = new Turno("turno otorgado N° 4", "15/6/2023", "13:00 hs", "Clinica IMA");
const turno5 = new Turno("turno otorgado N° 5", "15/6/2023", "13:30 hs", "Clínica Estrada");
const turno6 = new Turno("turno otorgado N° 6", "15/6/2023", "14:00 hs", "Clinica IMA");
const turno7 = new Turno("Turno otorgado N° 7", "15/6/2023", "14:30 hs", "Clínica Estrada");

const arrayA = [turno1, turno2, turno3, turno4, turno5, turno6, turno7];
let msj = "";
	for (let index = 0; index < 7; index++) {
    msj += `Turno ${index + 1} asignado en la ${arrayA[index].clinica} el dia ${arrayA[index].fecha} a las ${arrayA[index].horario}\n`;
    // msj += `Turno ${index + 1} asignado a ${arrayA[index].paciente} en la ${arrayA[index].clinica} el dia ${arrayA[index].fecha} a las ${arrayA[index].horario}\n`;
	}
	alert(msj);



// const arrayA = [turno1, turno2, turno3, turno4, turno5, turno6, turno7];
// for (let index = 0 ; index < 7; index++){
//     for(let clave in arrayA[index]) {
//         alert(arrayA[index][clave])
//     }
// }


