const audio = new Audio('./statics/sound/alarma.mp3')
const reloj = document.getElementById("reloj");
const aceptar = document.getElementById("aceptar");//declaramos el boton iniciar
const iniciar = document.getElementById("iniciar");//declaramos el boton iniciar
const detener = document.getElementById("detener");//declaramos el boton iniciar
let horas 
let minutos
let segund
let repetidora

function declararImputs(){
    horas = document.getElementById("horas").value;
    minutos = document.getElementById("minutos").value;
    segundos = document.getElementById("segundos").value;
    if(horas > 59 )
        horas = 59;
    if(minutos > 59)
        minutos = 59;
    if(segundos > 59)
        segundos = 59;
    if(horas < 0 || horas == '')
        horas = 0;
    if(minutos < 0 || minutos == '')
        minutos = 0;
    if(segundos < 0 || segundos == '')
        segundos = 0;
};

function guardarInputs(){ //impresion de horas

    if(horas>9)
        reloj.innerHTML = `<p class="numerito">${horas}:</p>`;
    if(horas<=9)
        reloj.innerHTML = `<p class="numerito">0${horas}:</p>`



    if(minutos>9)
        reloj.innerHTML += `<p class="numerito">${minutos}:</p>`;
    if(minutos<=9)
        reloj.innerHTML += `<p class="numerito">0${minutos}:</p>`


    if(segundos>9)
        reloj.innerHTML += `<p class="numerito">${segundos}</p>`;
    if(segundos<=9)
        reloj.innerHTML += `<p class="numerito">0${segundos}</p>`


    
};

function repetidor() {
    repetidora = setInterval(contador, 1000);
}

function contador() {
    if(segundos > 0){
        segundos--;
    }else{
        if(minutos > 0){
            segundos = 59;
            minutos--;
        }else{
            if(horas > 0 ){
                segundos = 59;
                minutos = 59;
                horas--;
            }else{
                console.log("Acabo el tiempo")
                audio.play();
            }
        }
    }
    
    guardarInputs();
}


detener.addEventListener("click", (evento) => {
    clearInterval(repetidora);
    location.reload();
});

aceptar.addEventListener("click", (evento) => {
    declararImputs();
    guardarInputs();
});
console.log(horas)
iniciar.addEventListener("click", (evento) => {
    //if((horas == '' && minutos =='' && segundos =='') || (horas == 0 && minutos == 0 && segundos == 0) )
        //clearInterval(repetidora);
    //else
        repetidor();
});
