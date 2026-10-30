const incrementarBtn = document.querySelector("#incrementarBtn");
const totalRotulo = document.querySelector("#total");

let contador = 0;

//METODOS

function incrementarContador() {
    contador++;
}

function decrementarContador() {
    contador--;
}

function mostrarParaTela(){
    totalRotulo.textContent = contador;   
}

function setItem(){
    localStorage.setItem("contador", contador);
}

function teste(){
    incrementarContador();
    mostrarParaTela();
    setItem();
}

function carregarDados(){
    contador = Number(localStorage.getItem("contador"));
    totalRotulo.textContent = contador;
}

//EVENTOS - fix
window.addEventListener("load", carregarDados);
incrementarBtn.addEventListener("wheel",function(event){
    if(event.deltaY < 0) incrementarContador();
    else if (event.deltaY > 0) decrementarContador();
});