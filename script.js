function PratoEscolhido() {

    const escolhido = document.querySelector(".prato");
    escolhido.classList.add("green-border");

    const icone = document.querySelector("ion-icon");
    icone.classList.remove("hidden");
}

function BebidaEscolhida() {

    const escolhido = document.querySelector(".Bebida");
    escolhido.classList.add("green-border");

    const icone = document.querySelector("ion-icon");
    icone.classList.remove("hidden");
}

function SobremesaEscolhida() {

    const escolhido = document.querySelector(".Sobremesa");
    escolhido.classList.add("green-border");

    const icone = document.querySelector("ion-icon");
    icone.classList.remove("hidden");
}

// function FecharPedido() {
//     const FinalPrice = document.querySelector("price");
// }