function PratoEscolhido(classe) {

    const selecionado = document.querySelector('.Prato .chosen');

    if(selecionado !== null) {
        selecionado.classList.remove('chosen')
    }

    const prato_escolhido = document.querySelector(classe);
    prato_escolhido.classList.add("chosen");
}

function BebidaEscolhida(classe) {

    const selecionado = document.querySelector('.Bebida .chosen');

    if(selecionado !== null) {
        selecionado.classList.remove('chosen')
    }

    const bebida_escolhida = document.querySelector(classe);
    bebida_escolhida.classList.add("chosen");
}

function SobremesaEscolhida(classe) {

    const selecionado = document.querySelector('.Sobremesa .chosen');

    if(selecionado !== null) {
        selecionado.classList.remove('chosen')
    }

    const sobremesa_escolhida = document.querySelector(classe);
    sobremesa_escolhida.classList.add("chosen");
}

function FecharPedido() {
    const FinalPrice = document.querySelector(".prato .chosen") + document.querySelector(".Bebida .chosen") + document.querySelector(".Sobremesa .chosen");
}