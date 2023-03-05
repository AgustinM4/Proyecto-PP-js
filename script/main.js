const categorias = ['CLINICA', 'FECHA', 'HORA'];
const opcionesTurno = [];
const turnos = [];

class selectTurno {
    constructor(id, nombre, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.categoria = categoria;
    }
}

class Turno {
    constructor(id, nombre, DNI, orden) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.DNI = parseInt(DNI);
        this.orden = orden;
    }
}

opcionesTurno.push(new selectTurno(1, 'Clínica IMA', categorias[0]));
opcionesTurno.push(new selectTurno(2, 'Clínica Estrada', categorias[0]));
opcionesTurno.push(new selectTurno(3, '15/6/2023', categorias[1]));
opcionesTurno.push(new selectTurno(4, '16/6/2023', categorias[1]));
opcionesTurno.push(new selectTurno(5, '17/8/2023', categorias[1]));
opcionesTurno.push(new selectTurno(6, '18/9/2023', categorias[1]));
opcionesTurno.push(new selectTurno(7, '16:30 Hs', categorias[2]));
opcionesTurno.push(new selectTurno(8, '17:00 Hs', categorias[2]));
opcionesTurno.push(new selectTurno(9, '18:30 Hs', categorias[2]));
opcionesTurno.push(new selectTurno(10, '19:00 Hs', categorias[2]));
opcionesTurno.push(new selectTurno(11, '19:30 Hs', categorias[2]));
opcionesTurno.push(new selectTurno(12, '20:00 Hs', categorias[2]));


function obtenerNombre() {
    let obtenerN = document.getElementById('ingresoNombre').value;
    return obtenerN;
}

function obtenerDNI() {
    let obtenerC = document.getElementById('ingresoDNI').value;
    return obtenerC;
}

function toastiNombre() {
    let nombreToasti = document.getElementById('ingresoNombre').value;
    Toastify({
        text: `Bienvenido/a ${nombreToasti}!`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #9b8b3e, #088200)",
        },
    }).showToast();
}


let nombreForm = document.getElementById('submitNombre');
nombreForm.onclick = () => {
    toastiNombre();
}

function obtenerDato(id) {
    let dato = document.getElementById(id).value;
    return opcionesTurno.find(item => item.nombre == dato);
}

function obtenerTurno() {
    const datosTurno = [obtenerDato('clinica'),
    obtenerDato('fecha'),,
    obtenerDato('horario')];
    return datosTurno;
}

function crearTurno() {
    let turnn = new Turno(turnos.length , obtenerNombre(), obtenerDNI(), obtenerTurno())
    turnos.push(turnn);
    let pedidoStorage = JSON.parse(localStorage.getItem('comandas')) || [];
    pedidoStorage.push(turnn);
    let pedidoStorageJSON = JSON.stringify(pedidoStorage);
    localStorage.setItem('comandas', pedidoStorageJSON) || [];
    let listaOrden = "";
    turnn.orden.forEach(item => {
        listaOrden += `<li>${item.nombre}</li>`;
    });
    let divReporte = document.getElementById('pedir')
    divReporte.innerHTML = `<div>DATOS DE SU TURNO: <ul>${listaOrden}</ul></div>`
}

let pedidoForm = document.getElementById("pedirComanda");
pedidoForm.onclick = () => {
    crearTurno();
    Toastify({
        text: `Turno reservado`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #9b8b3e, #088200)",
        },
    }).showToast();
}

function recogerDatos() {
    let DNI = document.getElementById('ingresoDNI').value;
    let cubArray = JSON.parse(localStorage.getItem("personaDNI")) || [];
    cubArray.push(DNI);
    let cubArrayJSON = JSON.stringify(cubArray);
    localStorage.setItem("personaDNI", cubArrayJSON) || [];

    Toastify({
        text: `DNI Ingresado : ${DNI}`,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
            background: "linear-gradient(to right, #9b8b3e, #088200)",
        },
    }).showToast();

    let reporteTitulo = document.getElementById('titulo')
    reporteTitulo.innerHTML = `<h3>DNI N°: ${DNI}</h3>`
}

let dniForm = document.getElementById("submitDNI");
dniForm.onclick = () => {
    recogerDatos()
}

const lista = document.querySelector('#listado')

fetch('https://api.fabianjanuszewski.com/34165/item', {
        method: 'POST',
        body: JSON.stringify({
            itemId: '300',
            student: "Agustin",
            direccionIma: "Flores de Estrada 5248, Remedios de Escalada",
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

    fetch('https://api.fabianjanuszewski.com/34165/item/300')
    .then((response) => response.json())
    .then((data) => console.log(data))
    