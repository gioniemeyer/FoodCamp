let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;

function PratoEscolhido(classe, nomePrato) {
    pratoSelecionado = nomePrato;

    const Selecionado = document.querySelector('.Prato .chosen');
    
    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const pratoEscolhido = document.querySelector(classe);
    pratoEscolhido.classList.add("chosen");

    precoPrato = document.querySelector('.Prato .chosen p span').innerHTML;
    precoPrato = precoPrato.replace(',','.');
    precoPrato = parseFloat(precoPrato)

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

    precoBebida = document.querySelector('.Bebida .chosen p span').innerHTML;
    precoBebida = precoBebida.replace(',','.');
    precoBebida = parseFloat(precoBebida);

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

    precoSobremesa = document.querySelector('.Sobremesa .chosen p span').innerHTML;
    precoSobremesa = precoSobremesa.replace(',','.');
    precoSobremesa = parseFloat(precoSobremesa);

    FecharPedido()
}

function FecharPedido(pratoSelecionado) {
    if(pratoSelecionado !== null && bebidaSelecionada !== null && sobremesaSelecionada !== null) {
        const BotaoCompra = document.querySelector('.buying');
        BotaoCompra.classList.remove('hidden');

        const BotaoCompra2 = document.querySelector('.on-hold')
        BotaoCompra2.classList.add('hidden')
    }
}

function EfetuarPedido() {

    const precoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

    const mensagem = 'Olá, gostaria de fazer o pedido:\n- Prato: ' + pratoSelecionado + '\n- Bebida: ' + bebidaSelecionada + '\n - Sobremesa: ' + sobremesaSelecionada + '\n Total: R$ ' + precoTotal
    const linkwpp = document.querySelector('.wpp-pedido');

    linkwpp.href = 'https://wa.me/5521993399575?text=' + encodeURIComponent(mensagem);
}