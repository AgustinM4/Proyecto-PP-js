const categorias = ['CLINICA', 'FECHA', 'HORA'];

const opcionesTurno = [];

const turnos = [];


class selectTurno {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.categoria = categoria;
    }
}

class Turno {
    constructor(id, nombre, DNI, orden, total) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.DNI = parseInt(DNI);
        this.orden = orden; //array productos pedidos!
        this.total = this.orden.reduce((sum, item) => sum + item.precio, 0);
    }
}


opcionesTurno.push(new selectTurno(1, 'Clínica IMA', 500, categorias[0]));
opcionesTurno.push(new selectTurno(2, 'Clínica Estrada', 500, categorias[0]));
opcionesTurno.push(new selectTurno(3, '15/6/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(4, '16/6/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(5, '17/8/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(6, '18/9/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(7, '16:30 Hs', 200, categorias[2]));
opcionesTurno.push(new selectTurno(8, '17:00 Hs', 300, categorias[2]));
opcionesTurno.push(new selectTurno(9, '18:30 Hs', 200, categorias[2]));
opcionesTurno.push(new selectTurno(10, '19:00 Hs', 300, categorias[2]));
opcionesTurno.push(new selectTurno(11, '19:30 Hs', 200, categorias[2]));
opcionesTurno.push(new selectTurno(12, '20:00 Hs', 300, categorias[2]));

// Funciones para obtener datos del form

function obtenerNombre() {
    let obtenerN = document.getElementById('ingresoNombre').value;
    return obtenerN;
}

function obtenerDNI() {
    let obtenerC = document.getElementById('ingresoDNI').value;
    return obtenerC;
}

// Toastify nombre

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

// Funcion con método

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
    let pedido = new Turno(turnos.length , obtenerNombre(), obtenerDNI(), obtenerTurno())
    turnos.push(pedido);

    let pedidoStorage = JSON.parse(localStorage.getItem('comandas')) || [];

    pedidoStorage.push(pedido);

    let pedidoStorageJSON = JSON.stringify(pedidoStorage);

    localStorage.setItem('comandas', pedidoStorageJSON) || [];




    let listaOrden = "";
    pedido.orden.forEach(item => {
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
// Fetch

let url = 'http://api.weatherapi.com/v1/current.json?key=23fc3ba8bf934f2d8f8195549221103&q=Ushuaia&aqi=no';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    document.getElementById('wx').innerHTML = `<p>Actualmente la temperatura en la ciudad de Ushuaia es de ${data.current.temp_c}º</p><p>La velocidad del viento es de ${data.current.wind_kph}km/h y proviene de los ${data.current.wind_degree}º</p><img src=${data.current.condition.icon}>`;

}

