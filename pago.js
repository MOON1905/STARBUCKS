document.addEventListener("DOMContentLoaded",function(){

const producto=JSON.parse(localStorage.getItem("productoSeleccionado"));

if(producto){
document.getElementById("productoPago").innerHTML=`
<h3>${producto.nombre}</h3>
<p>${producto.precio}</p>
`;
}

});

document.getElementById("formPago").addEventListener("submit",function(e){
e.preventDefault();
alert("Pago realizado con éxito ☕✨");
localStorage.removeItem("productoSeleccionado");
window.location.href="index.html";
});