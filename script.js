let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

function PratoEscolhido(classe, nomePrato) {
    pratoSelecionado = nomePrato;

    const Selecionado = document.querySelector('.Prato .chosen');
    
    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const pratoEscolhido = document.querySelector(classe);
    pratoEscolhido.classList.add("chosen");

    FecharPedido()
}

function BebidaEscolhida(classe, nomeBebida) {
    bebidaSelecionada = nomeBebida;

    const Selecionado = document.querySelector('.Bebida .chosen');

    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const bebidasEscolhida = document.querySelector(classe);
    bebidasEscolhida.classList.add("chosen");

    FecharPedido()
}

function SobremesaEscolhida(classe, nomeSobremesa) {
    sobremesaSelecionada = nomeSobremesa;

    const Selecionado = document.querySelector('.Sobremesa .chosen');

    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const sobremesaEscolhida = document.querySelector(classe);
    sobremesaEscolhida.classList.add("chosen");

    FecharPedido()
}

function FecharPedido(pratoSelecionado) {
    if(pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        const BotaoCompra = document.querySelector('.buying');
        BotaoCompra.classList.remove('hidden');

        const BotaoCompra2 = document.querySelector('.on-hold')
        BotaoCompra2.classList.add('hidden')
    }

    // const FinalPrice = document.querySelector(".prato .chosen") + document.querySelector(".Bebida .chosen") + document.querySelector(".Sobremesa .chosen");
}