const categorias = ['CLINICA', 'FECHA', 'HORA', 'POSTRES'];

const opcionesTurno = [];

const turnos = [];


class selectTurno {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

class Turno {
    constructor(id, nombre, cubiertos, orden, total) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.cubiertos = parseInt(cubiertos);
        this.orden = orden; //array productos pedidos!
        this.total = this.orden.reduce((sum, item) => sum + item.precio, 0);
    }
}


opcionesTurno.push(new selectTurno(1, 'Clínica IMA', 500, categorias[0]));
opcionesTurno.push(new selectTurno(2, 'Clínica Estrada', 500, categorias[0]));
opcionesTurno.push(new selectTurno(3, '15/6/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(4, '16/6/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(3, '17/8/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(4, '18/9/2023', 2000, categorias[1]));
opcionesTurno.push(new selectTurno(5, '16:30 Hs', 200, categorias[2]));
opcionesTurno.push(new selectTurno(6, '17:00 Hs', 300, categorias[2]));
opcionesTurno.push(new selectTurno(5, '18:30 Hs', 200, categorias[2]));
opcionesTurno.push(new selectTurno(6, '19:00 Hs', 300, categorias[2]));
opcionesTurno.push(new selectTurno(5, '19:30 Hs', 200, categorias[2]));
opcionesTurno.push(new selectTurno(6, '20:00 Hs', 300, categorias[2]));
opcionesTurno.push(new selectTurno(7, 'FLAN', 500, categorias[3]));
opcionesTurno.push(new selectTurno(8, 'HELADO', 500, categorias[3]));


// Funciones para obtener datos del form

function obtenerNombre() {
    let obtenerN = document.getElementById('ingresoNombre').value;
    return obtenerN;
}

function obtenerCubiertos() {
    let obtenerC = document.getElementById('ingresoCubiertos').value;
    return obtenerC;
}

// Toastify nombre

function toastiNombre() {

    let nombreToasti = document.getElementById('ingresoNombre').value;

    Toastify({
        text: `Bienvenidx ${nombreToasti}!`,
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

function obtenerPedido() {
    const pedido = [obtenerDato('clinica'),
    obtenerDato('fecha'),
    obtenerDato('postre'),
    obtenerDato('horario')];
    return pedido;
}

function crearPedido() {
    let pedido = new Turno(turnos.length , obtenerNombre(), obtenerCubiertos(), obtenerPedido())
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
    divReporte.innerHTML = `<div>Usted ha ordenado: <ul>${listaOrden}</ul>
                            <span class="total">El total a pagar es: $${pedido.total}</span>
                            </div>`

    console.log("pedido: ", pedido);
    console.log("pedidos: ", turnos);
}

let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    crearPedido();
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

function mostrar() {
    document.getElementById('resumen').style.display = 'block';
}

let evento = document.getElementById('evento');
evento.onclick = () => {
    mostrar()
}

let refresh = document.getElementById("refresh");

refresh.onclick = () => {
    location.reload()
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

