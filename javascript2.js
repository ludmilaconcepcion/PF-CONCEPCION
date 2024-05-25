/*let serviciosDisponibles = [
    {id:12, nombre: "Limpieza empresarial", precio: 35000 },
    {id:20, nombre: "Limpieza para el hogar/jardinería", precio: 20000 },
    {id:15, nombre: "Limpieza de vehículos", precio: 15000 }
];


serviciosDisponibles = JSON.parse(serviciosDisponibles);

function Servicios(total) {
    let opcionProducto = Number(prompt(servicios));
    let selectedService = serviciosDisponibles.find(servicio => servicio.nombre === opcionProducto);
    
    if (selectedService) {
        let cantidad = Number(prompt("Ingresar cantidad de servicios"));
        total += cantidad * selectedService.precio;
    } else {
        alert("Opción de servicio no válida");
    }
    
    return total;
}

let mensaje = "Ingrese una opcion:\n1 - agregar servicios al carrito\n2 - consultar total\n3 - Finalizar cotizacion\n0 - para salir"
let opcion 
let servicios = "Seleccione un servicio\n1 - Limpieza empresarial $35000\n2 - Limpieza para el hogar,jardineria $20000\n3 - limpieza vehiculos $15000\n3"
let total = 0


do { 
        opcion = Number(prompt(mensaje))
        if (opcion === 1) {
            total = agregarproductoalcarrito (total)
        } else if (opcion === 2 ) {
            alert("El total de la cotizacion al momento es : " + total)
            
        } else if (opcion === 3) {
            alert("El total de la cotizacion al momento es: " + total)
            total = 0
        }
    } while (opcion !== 1 && opcion !== 3)
       
    function Servicios(total) {  
        
        let opcionProducto = Number(prompt(servicios)) 
        if (opcionProducto === 1) {
            let cantidad = Number(prompt("Ingresar cantidad de servicios"))
            total = total + cantidad * 35000 
            total += cantidad * 35000

        } else if (opcionProducto === 2) {
            let cantidad = Number(prompt("Ingresar cantidad de servicios"))
            total = total + cantidad * 20000 

        } else if (opcionProducto === 3) {
                let cantidad = Number(prompt("Ingresar cantidad de servicios"))
                total = total + cantidad * 15000
            }
            return total
    }*/
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('input[type="button"]');
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            switch (button.value) {
                case "Limpieza empresarial":
                    makeAjaxRequest("Limpieza empresarial");
                    break;
                case "Limpieza para el hogar/jardineria":
                    makeAjaxRequest("Limpieza para el hogar/jardineria");
                    break;
                case "Limpieza de vehiculos":
                    makeAjaxRequest("Limpieza de vehiculos");
                    break;
                default:
                    alert("Servicio no reconocido");
                    break;
            }
        });
    });
});

function makeAjaxRequest(service) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            alert("Has seleccionado el servicio de " + response);
        }
    };
}