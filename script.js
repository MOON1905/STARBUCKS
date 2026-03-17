const bebidas = {

caliente:[
{nombre:"Latte Clásico",precio:"$85 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FLatte_0.jpeg&w=256&q=75"},
{nombre:"Pistaccio hot chocolate",precio:"$75 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FPistachio-Hot-Chocolate-2026-Mug-MOP-1500x1500.jpeg&w=256&q=75"},
{nombre:"Pistaccio Velvet Latte",precio:"$90 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FPistachio-Velvet-Latte-2026-Mug-MOP-1500x1500.jpeg&w=256&q=75"}
],

frio:[
{nombre:"Iced Vainilla Latte",precio:"$85 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FIced-Ube-Latte-MOP-1500x1500.jpeg&w=256&q=75"},
{nombre:"Ice chai Latte Tea",precio:"$70 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FIced-Chai-Latte.jpeg&w=256&q=75"},
{nombre:"Peach Iced tea",precio:"$95 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2Fassets%2F582a154157b021100c64cc4057bc61c0.jpg&w=256&q=75"}
],

te:[
{nombre:"Té Chai latte",precio:"$80 MXN",img:"https://www.starbucks.es/sites/starbucks-es-pwa/files/styles/c10_2_col_text_560x467/public/2021-11/Classic%20Chai%20Tea%20Latte.jpeg.webp?h=8a7fc05e&itok=_ejhukyf"},
{nombre:"Té Verde Matcha",precio:"$85 MXN",img:"https://www.starbucks.es/sites/starbucks-es-pwa/files/styles/c10_2_col_text_560x467/public/2021-11/Matcha%20Green%20Tea%20Latte.jpeg.webp?h=8a7fc05e&itok=LDnTgW1e"}
],

coldbrew:[
{nombre:"Cold Brew Clásico",precio:"$80 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2Fassets%2F478a358cfea7341d124149a3df1a30dd.jpg&w=256&q=75"},
{nombre:"Cold Brew Latte",precio:"$90 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2Fassets%2Ffe223fe00d0f571255446c2c9545f83e.jpg&w=750&q=75"}
],

frappuccino:[
{nombre:"Frappuccino Caramelo",precio:"$95 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2Fassets%2Fc7d83252d8fd206f3e7b479f85584d59_3.jpg&w=256&q=75"},
{nombre:"Frappuccino Mocha",precio:"$100 MXN",img:"https://www.starbucks.es/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FMocha-Frappuccino_0.jpeg&w=256&q=75"}
]

};

function mostrarBebidas(tipo){

const contenedor=document.getElementById("bebidasResultado");
contenedor.innerHTML="";

bebidas[tipo].forEach((bebida,index)=>{

const card=document.createElement("div");
card.classList.add("bebida-card");
card.style.animationDelay=`${index*0.15}s`;

card.innerHTML=`
<img src="${bebida.img}">
<h3>${bebida.nombre}</h3>
<p><strong>${bebida.precio}</strong></p>
<button class="btn-primary" onclick="ordenar('${bebida.nombre}','${bebida.precio}')">
Ordenar
</button>
`;

contenedor.appendChild(card);

});

setTimeout(()=>{
contenedor.scrollIntoView({behavior:"smooth"});
},200);

}

function ordenar(nombre,precio){

localStorage.setItem("producto",nombre);
localStorage.setItem("precio",precio);

window.location.href="pago.html";

}

function verRecompensas(){
window.location.href="login.html";
}