
function saludar(){
   alert("Hola bienvenido")
}


let total = 0
let cantProductos = 4
function pedirProductos(){
    for(let i = 1; i <= cantProductos; i++ ){
    productoIngresado = parseInt(prompt("Ingrese el valor del producto n°" + i))
    //el total comienza en 0 y por cada producto que ingreso se va acumulando el total
    total = total + productoIngresado
    console.log(`el total parcial es ${total}`)
}
console.log(`El total es ${total}`)


if(total < 500){
    console.log("Esta barato")
}else if(total >= 2000){
    console.log("Esta caro")
}else if(promedio >= 5000){
    console.log("Esta muy caro")

} 
}

//invoco la función
saludar();
pedirProductos();


