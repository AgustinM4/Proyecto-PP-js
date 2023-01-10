let nombreDeUsuario = prompt("Para sacar turno ingrese un nuevo nombre de usuario")
let contraseñaNueva = prompt("Ahora ingrese una contraseña númerica")
contraseñaNueva = typeof Number

while(contraseñaNueva == typeof Object){
    alert("La contraseña debe ser númerica")
    contraseñaNueva = prompt("ahora ingrese una contraseña numerica")
}


//do {
//    if (contraseñaNueva != Number)
//        alert("ingrese una contraseña númerica")
//        contraseñaNueva = prompt ("Ahora ingrese una contraseña númerica")
//} while (contraseñaNueva != Number);


for(let turno = 1; turno <= 10; turno++){
    let ingresarNombre = prompt("Ingrese su nombre");
    alert(" turno N° "+turno+" nombre: "+ingresarNombre);
    if(turno == 7){
        alert("Lo lamentamos, no hay mas turnos disponibles.")
        break;
    }
}

