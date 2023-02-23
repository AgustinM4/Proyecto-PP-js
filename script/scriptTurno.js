const opcionesClinica = opcionesTurno.filter(turno => turno.categoria == 'CLINICA');


for (let item of opcionesClinica) {

    let select = document.getElementById('clinica')
    select.innerHTML += `<option>${item.nombre}</option>`
}

const OpcionesFecha = opcionesTurno.filter(turno => turno.categoria == 'FECHA');

for (let item of OpcionesFecha) {

    let select = document.getElementById('fecha')
    select.innerHTML += `<option>${item.nombre}</option>`
}

const opcionesHorario = opcionesTurno.filter(turno => turno.categoria == 'HORA');

for (let item of opcionesHorario) {

    let select = document.getElementById('horario')
    select.innerHTML += `<option>${item.nombre}</option>`
}






