let nombreDeUsuario = prompt("Para sacar turno ingrese un nuevo nombre de usuario")
let contraseñaNueva = Number(prompt("Ahora ingrese una contraseña númerica"))


while(isNaN(contraseñaNueva) || contraseñaNueva === 0){
    alert("La contraseña debe ser númerica")
    contraseñaNueva = Number(prompt("ahora ingrese una contraseña numerica"))
}


for(let turno = 1; turno <= 10; turno++){
    let ingresarNombre = prompt("Ingrese su nombre");
    alert(" turno N° "+turno+" nombre: "+ingresarNombre);
    if(turno == 7){
        alert("Lo lamentamos, no hay mas turnos disponibles.")
        break;
    }
}

asd