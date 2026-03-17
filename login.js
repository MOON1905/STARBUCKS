function generarCaptcha(){
const chars="ABCDEFGHJKLMNPQRSTUVWXYZ123456789";
let captcha="";
for(let i=0;i<5;i++){
captcha+=chars[Math.floor(Math.random()*chars.length)];
}
document.getElementById("captchaTexto").innerText=captcha;
localStorage.setItem("captcha",captcha);
}

generarCaptcha();

document.getElementById("formLogin").addEventListener("submit",function(e){
e.preventDefault();

const captchaGuardado=localStorage.getItem("captcha");
const captchaIngresado=document.getElementById("captchaInput").value;

if(captchaGuardado!==captchaIngresado){
alert("Captcha incorrecto");
generarCaptcha();
return;
}

alert("Login exitoso");
window.location.href="index.html";
});

function mostrarLogin(){
document.getElementById("formLogin").classList.remove("oculto");
document.getElementById("formRegistro").classList.add("oculto");
}

function mostrarRegistro(){
document.getElementById("formRegistro").classList.remove("oculto");
document.getElementById("formLogin").classList.add("oculto");
}