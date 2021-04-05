let Meal = null;
let Drink = null;
let Dessert = null;
let MealPrice = 0;
let DrinkPrice = 0;
let DessertPrice = 0;

function ChosenMeal(classe, nomePrato) {
    Meal = nomePrato;

    const Selecionado = document.querySelector('.Prato .chosen');
    
    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const ChosenMeal = document.querySelector(classe);
    ChosenMeal.classList.add("chosen");

    MealPrice = document.querySelector('.Prato .chosen p span').innerHTML;
    MealPrice = MealPrice.replace(',','.');
    MealPrice = parseFloat(MealPrice)

    CloseOrder()
}

function ChosenDrink(classe, nomeBebida) {
    Drink = nomeBebida;

    const Selecionado = document.querySelector('.Bebida .chosen');

    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const ChosenDrink = document.querySelector(classe);
    ChosenDrink.classList.add("chosen");

    DrinkPrice = document.querySelector('.Bebida .chosen p span').innerHTML;
    DrinkPrice = DrinkPrice.replace(',','.');
    DrinkPrice = parseFloat(DrinkPrice);

    CloseOrder()
}

function ChosenDessert(classe, nomeSobremesa) {
    Dessert = nomeSobremesa;

    const Selecionado = document.querySelector('.Sobremesa .chosen');

    if(Selecionado !== null) {
        Selecionado.classList.remove('chosen');
    }

    const ChosenDessert = document.querySelector(classe);
    ChosenDessert.classList.add("chosen");

    DessertPrice = document.querySelector('.Sobremesa .chosen p span').innerHTML;
    DessertPrice = DessertPrice.replace(',','.');
    DessertPrice = parseFloat(DessertPrice);

    CloseOrder()
}

function CloseOrder(Meal) {
    if(Meal !== null && Drink !== null && Dessert !== null) {
        const BotaoCompra = document.querySelector('.buying');
        BotaoCompra.classList.remove('hidden');

        const BotaoCompra2 = document.querySelector('.on-hold')
        BotaoCompra2.classList.add('hidden')
    }
}

function CheckOut() {

    const precoTotal = (MealPrice + DrinkPrice + DessertPrice).toFixed(2);

    const mensagem = 'Olá, gostaria de fazer o pedido:\n- Prato: ' + Meal + '\n- Bebida: ' + Drink + '\n - Sobremesa: ' + Dessert + '\n Total: R$ ' + precoTotal
    const linkwpp = document.querySelector('.wpp-pedido');

    linkwpp.href = 'https://wa.me/5521979412966?text=' + encodeURIComponent(mensagem);
}