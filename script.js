function PratoEscolhido() {

    const prato_escolhido = document.querySelector(".prato");
    prato_escolhido.classList.add("green-border");

    const icone = document.querySelector("ion-icon");
    icone.classList.remove("hidden");
}

function BebidaEscolhida() {

    const bebida_escolhida = document.querySelector(".Bebida");
    bebida_escolhida.classList.add("green-border");

    const icone_bebida = document.querySelector(".Bebida ion-icon");
    icone_bebida.classList.remove("hidden");
}

function SobremesaEscolhida() {

    const sobremesa_escolhida = document.querySelector(".Sobremesa");
    sobremesa_escolhida.classList.add("green-border");

    const icone_sobremesa = document.querySelector(".Sobremesa ion-icon");
    icone_sobremesa.classList.remove("hidden");
}

function FecharPedido() {
    const FinalPrice = document.querySelector(".prato .chosen") + document.querySelector(".Bebida .chosen") + document.querySelector(".Sobremesa .chosen");
}