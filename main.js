
let htmlCar = '';
let htmlMoto = '';
let list_car = document.getElementById('list_car');
let list_moto = document.getElementById('list_moto');
let list_itemCar = document.querySelectorAll('#list_car .col');

const cars = [
    {
        id: 1,
        name: 'VF e34',
        price: '690.000.000',
        img: './assets/img/car-dien/VFe34.svg',
        type: 'dien'
    },
    {
        id: 2,
        name: 'VF  8',
        price: '1057.100.000',
        img: './assets/img/car-dien/VF8_1642740322.png',
        type: 'dien'
    },
    {
        id: 3,
        name: 'VF 9',
        price: '1.443.200.000',
        img: './assets/img/car-dien/VF9_1642740346.png',
        type: 'dien'
    },
    {
        id: 4,
        name: 'Fadil',
        price: '1.220.965.000',
        img: './assets/img/car-xang/Fadil.svg',
        type: 'xang'
    },
    {
        id: 6,
        name: 'LUX SA2.0 xanh',
        price: '1.220.965.000',
        img: './assets/img/car-xang/LUX_A_2.0.xanh.svg',
        type: 'xang'
    },
    {
        id: 7,
        name: 'LUX SA2.0',
        price: '1.220.965.000',
        img: './assets/img/car-xang/LUX_SA_2.0.svg',
        type: 'xang'
    },
    {
        id: 8,
        name: ' President',
        price: '1.220.965.000',
        img: './assets/img/car-xang/President.svg',
        type: 'xang'
    }
];

//  Lặp qua mảng và load item
function loadHtml(type, arr) { 
    let html = '';
    arr.forEach(function(e){
        let name = e.name;
        let price = e.price;
        let img = e.img;
        let row = `<div class="col l-3">
        <div class="header-show--item">
        <div class="header-show--item-img">
            <img src="${img}" alt="">
        </div>
        <div class="header-show--item-name">${name}</div>
        <div class="header-show--item-price">Từ ${price} vnđ</div>
        <div class="header-show--item-detail"><a href="#">Xem chi tiết</a></div>
        </div>
        </div>`
        if(e.type == type){
            html += row;
        }
    })
    return html;
}


function filterCar(type){
    // list_itemCar.remove()
    // list_car.removeChild(list_car)
    
    list_car.innerHTML = loadHtml(type, cars);
}

filterCar('xang');


const motos = [
    {
        id: 1,
        name: 'Theon S',
        price: '69.000.000',
        img: './assets/img/moto/hight/Theon S_1650957584.jpg',
        type: 'higt',
    },
    {
        id: 2,
        name: 'Theon',
        price: '63.100.000',
        img: './assets/img/moto/hight/Theon.svg',
        type: 'higt'
    },
    {
        id: 3,
        name: 'Vento S',
        price: '56.000.000',
        img: './assets/img/moto/hight/Vento S_1650957692.jpg',
        type: 'hight'
    },
    {
        id: 4,
        name: 'Vento',
        price: '50.965.000',
        img: './assets/img/moto/hight/vento_1644979690.png',
        type: 'hight'
    },
    {
        id: 6,
        name: 'Faliz',
        price: '20.965.000',
        img: './assets/img/moto/medium/Faliz.svg',
        type: 'medium'
    },
    {
        id: 7,
        name: 'Feliz S',
        price: '30.900.000',
        img: './assets/img/moto/medium/Feliz S_1650957766.jpg',
        type: 'medium'
    },
    {
        id: 8,
        name: 'KlaraS',
        price: '19.000.000',
        img: './assets/img/moto/medium/KlaraS.svg',
        type: 'medium'
    },
    {
        id: 8,
        name: 'Rectangle',
        price: '25.000.000',
        img: './assets/img/moto/medium/Rectangle 6336_1624851659.png',
        type: 'medium'
    },
    {
        id: 8,
        name: 'KlaraA2',
        price: '22.900.000',
        img: './assets/img/moto/medium/KlaraA2.svg',
        type: 'medium'
    },
    {
        id: 8,
        name: 'Impes',
        price: '12.000.000',
        img: './assets/img/moto/low/Impes.svg',
        type: 'low'
    },
    {
        id: 8,
        name: 'Ludo 2020',
        price: '15.900.000',
        img: './assets/img/moto/low/Ludo.svg',
        type: 'low'
    },
    {
        id: 8,
        name: 'Tempest',
        price: '14.000.000',
        img: './assets/img/moto/low/tempest-header-menu_1639666261.png',
        type: 'low'
    }
];

function filterMoto(type) {
    list_moto.innerHTML = loadHtml(type, motos);
}

filterMoto('medium')
