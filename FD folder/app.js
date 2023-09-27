let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 19,
        name:'Masala Dosa',
        image: 'dosa1.jpeg',
        price: 75
    },
    {
        id: 20,
        name:'Thattu ildly',
        image: 'thatuu.jpeg',
        price: 95
    },
    
    {
        id: 1,
        name: 'Briyani',
        image: 'briyani.jpeg',
        price:  300
    },
    {
        id: 2,
        name: 'IDLI SET 2',
        image: 'idli.jpeg',
        price: 85
    },
    {
        id: 3,
        name: 'POORI ',
        image: 'poori.jpeg',
        price: 157
    },
    {
        id: 4,
        name: 'VEG THALI',
        image: 'veg thali.PNG',
        price: 413
    },
    {
        id: 5,
        name: 'IDDIYAPPAM',
        image: 'iddiyappam.jpeg',
        price: 90
    },
    {
        id: 6,
        name: 'PANNER TIKKA',
        image: 'pannertikka.jpeg',
        price: 154
    },
    {
        id: 7,
        name: 'CHICKEN BRIYANI',
        image:'mutton-Combo.PNG',
        price: 1500
    },
    {
        id: 8,
        name:'Paroota',
        image: 'paroota.jpeg',
        price: 35
    },
    {
        id: 9,
        name:'Pizza',
        image: '6.PNG',
        price: 149
    },
    {
        id: 10,
        name:'Meals',
        image: 'meals.jpeg',
        price: 200
    },
    {
        id: 11,
        name:'PanniPoori',
        image: 'panipoori.jpeg',
        price: 75
    },
    {
        id: 12,
        name:'Samosa',
        image: 'samosa.jpeg',
        price: 25
    },
    {
        id: 13,
        name:'Fish Fry',
        image: 'fish fry.jpeg',
        price: 160
    },
    {
        id: 16,
        name:'Fried Rice',
        image: 'friedrice.jpeg',
        price: 70
    },
    {
        id: 17,
        name:'Chicken 65',
        image: 'chicken65.jpeg',
        price: 35
    },
    {
        id: 18,
        name:'Chettinad Mutton Chukka',
        image: 'muuton.jpeg',
        price: 185
    },
    {
        id: 14,
        name:'Fresh Orange Juice',
        image: 'orange juice.jpeg',
        price: 155
    },
    {
        id: 15,
        name:'Rose Milk',
        image: 'rosemilk.jpeg',
        price: 50
    },
    {
        id: 21,
        name:'Ice-cream',
        image: 'icecream.jpeg',
        price: 100
    },
   


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}