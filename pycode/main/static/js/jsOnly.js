var burger = document.getElementsByClassName("burger");
var header = document.getElementsByClassName('header');
var body = document.getElementsByTagName('body');
var goods = document.getElementById('goods');

for (i = 0; i < burger.length; i++) {
    burger[i].addEventListener('click', function () {
        this.classList.toggle('active');
        header[0].classList.toggle('active');
        body[0].classList.toggle('lock');
    });
}
let json = '[{"image": "../images/pizza.png","name": "\u0422\u0435\u0441\u0442","text": "Куриное филе с ветчиной и острыми “пепперони” с ароматными болгарскими перчиками и перчиками халапеньо. Остро!","price": ["320", "500", "1860"],"amount": ["24", "30", "40"],"measSys": "CM"},{"image": "/images/pizza.png","name": "Мексиканская!","text": "Куриное филе с ветчиной и острыми “пепперони” с ароматными болгарскими перчиками и перчиками халапеньо. Остро!","price": ["320", "500", "860"],"amount": ["24", "30", "40"],"measSys": "CM"},{"image": "/images/pizza.png","name": "Мексиканская 2!","text": "Куриное филе с ветчиной и острыми “пепперони” с ароматными болгарскими перчиками и перчиками халапеньо. Остро!","price": ["350", "550", "660", "ezkatka"],"amount": ["25", "32", "35"],"measSys": "CM"}]'
const goodsData = JSON.parse(json)

function blockPrice(item) {
    let priceDiv = '';
    for(i = 0; i < item.price.length; i++) {
        priceDiv =
        `
        ${priceDiv}
        <div class="item__price"><span>${item.price[i]}₽ — ${item.amount[i]} </span><span class="small">${item.measSys}</span><img src="/images/plus.svg" alt="" class="item__add"></div>
        `
    }
    return `${priceDiv}`
}

function goodsTemplate(item) {
    return `
    <div class="goods__item item">
        <div class="item__img ibg"><img src="${item.image}" alt=""></div>
        <h2 class="item__title">${item.name}</h2>
        <span class="item__text">${item.text}</span>
        <div class="item__block-price">
            ${blockPrice(item)}
        </div>
    </div>
    `
}

goods.innerHTML = `

    ${goodsData.map(goodsTemplate).join('')}

`