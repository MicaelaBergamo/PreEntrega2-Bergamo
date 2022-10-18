let precioTotal = 0

const carrito = []

const carritoFinal= []

function sumador(a){precioTotal=precioTotal+stock[a].precio;} //funcion para que sume el precio de cada producto seleccionado

const stock = [ // array de objetos para el stock de productos
{
    tipo:"pintura",
    precio:6000
},
{   
    tipo:"xilografia",
    precio:6000
},
{
    tipo:"dibujo",
    precio:1000
},
{
    tipo:"ceramica",
    precio:4000
},
{
    tipo:"ropa intervenida",
    precio:2000
}
]

let productoSeleccionado = (prompt("Ingrese el articulo que desea comprar ('Pintura' 'Xilografia' 'Dibujo' 'Ceramica' 'Ropa intervenida'). Para salir de la tienda, ingrese 'salir'."))



if (productoSeleccionado !== "salir") 
{ 

do{
    let productoSeleccionado2 = productoSeleccionado.toLowerCase();

switch (productoSeleccionado2) { // switch para que se sume cada producto seleccionado al array que actua como carrito temporal (mientras el usuario siga seleccionando)
    case "pintura": carrito.push(stock[0]); sumador(0); alert("Seleccionaste "+ stock[0].tipo + "con un precio de "+ stock[0].precio + ". Precio total: $" + precioTotal); break;

    case "xilografia": carrito.push(stock[1]); sumador(1); alert("Seleccionaste "+ stock[1].tipo + "con un precio de "+ stock[1].precio + ". Precio total: $" + precioTotal); break;

    case "dibujo": carrito.push(stock[2]); sumador(2); alert("Seleccionaste "+ stock[2].tipo + "con un precio de "+ stock[2].precio + ". Precio total: $" + precioTotal); break;

    case "ceramica": carrito.push(stock[3]); sumador(3); alert("Seleccionaste "+ stock[3].tipo + "con un precio de "+ stock[3].precio + ". Precio total: $" + precioTotal); break;

    case "ropa intervenida": carrito.push(stock[4]); sumador(4); alert("Seleccionaste "+ stock[4].tipo + "con un precio de "+ stock[4].precio + ". Precio total: $" + precioTotal); break;

    default: break;
}

productoSeleccionado = (prompt("Ingrese otro articulo que desea comprar ('Pintura' 'Xilografia' 'Dibujo' 'Ceramica' 'Ropa intervenida'). Para salir de la tienda, ingrese 'salir'."))

}while (productoSeleccionado !== "salir") 

}


if (carrito !== []){
    carrito.forEach((producto) =>  // por cada producto seleccionado se va agregando al array que funciona como carrito final
        carritoFinal.push(producto.tipo));
    ;  
    alert("Sus productos seleccionados son: " + carritoFinal + ". Con un precio total de: $" + precioTotal)
}

alert("Muchas gracias por su compra! El valor total es de $"+ precioTotal)

//una vez el usuario elige salir, se le pregunta si paga en cuotas o al contado, si es al contado se termina la compra con el ultimo alert, si elige "en cuotas" entra en el switch para que le muestre el precio en cada caso
let pago = (prompt("Desea efectuar su pago en cuotas o al contado? (cuotas/al contado)"))
if (pago == "cuotas"){
    let cuota = parseInt(prompt("En cuantas cuotas desea realizar el pago? (6 o 12)"))
    switch (cuota) {
        case 6:
            alert("Precio de las cuotas: " + precioTotal*1.15/6 + ". Precio final: " + precioTotal*1.15)
            break;
        case 12:
            alert("Precio de las cuotas: " + precioTotal*1.15/12 + ". Precio final: " + precioTotal*1.15)
            break;
    }
    alert("Muchas gracias por su compra!")
}
    else if (pago == "al contado"){
        alert("Muchas gracias por su compra!")
}
