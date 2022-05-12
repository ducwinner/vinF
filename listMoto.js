let listMoto = document.getElementById('wrapper2-motos')
let renderProduct = document.getElementById('renderMoto')





const motos2 = [
        {   
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Theon S',
            price: '69.000.000',
            img: 
                {   red: './assets/img-listMoto/info/THEON S RED.png',
                    black: './assets/img-listMoto/info/THEON S BLACK.png', 
                    white: './assets/img-listMoto/info/THEON S WHITE.png'
                },
            type: 'hight',
        },
        {
            length: '160 km',
            speed: '87 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Theon',
            price: '63.100.000',
            img: 
                {   red: './assets/img-listMoto/info/THEON RED.png',
                    black: './assets/img-listMoto/info/THEON BLACK.png', 
                    white: './assets/img-listMoto/info/THEON WHITE.png'
                },
            type: 'hight'
        },
        {
            length: '180 km',
            speed: '80 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Vento S',
            price: '56.000.000',
            img: 
                {   red: './assets/img-listMoto/info/RED.png',
                    black: './assets/img-listMoto/info/BLACK.png', 
                    white: './assets/img-listMoto/info/WHITE.png'
                },
            type: 'hight'
        },
        {
            length: '155 km',
            speed: '83 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Vento',
            price: '50.965.000',
            img: 
                {   red: './assets/img-listMoto/info/VENTO  RED.png',
                    black: './assets/img-listMoto/info/VENTO  BLACK.png', 
                    white: './assets/img-listMoto/info/VENTO  WHITE.png'
                },
            type: 'hight'
        },
        {
            length: '190 km',
            speed: '75 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Faliz',
            price: '20.965.000',
            img: './assets/img/moto/medium/Faliz.svg',
            type: 'medium'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Feliz S',
            price: '30.900.000',
            img: './assets/img/moto/medium/Feliz S_1650957766.jpg',
            type: 'medium'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'KlaraS',
            price: '19.000.000',
            img: './assets/img/moto/medium/KlaraS.svg',
            type: 'medium'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Rectangle',
            price: '25.000.000',
            img: './assets/img/moto/medium/Rectangle 6336_1624851659.png',
            type: 'medium'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'KlaraA2',
            price: '22.900.000',
            img: './assets/img/moto/medium/KlaraA2.svg',
            type: 'medium'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Impes',
            price: '12.000.000',
            img: './assets/img/moto/low/Impes.svg',
            type: 'low'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Ludo 2020',
            price: '15.900.000',
            img: './assets/img/moto/low/Ludo.svg',
            type: 'low'
        },
        {
            length: '150 km',
            speed: '99 km/h',
            deposit: '2.000.000 VNĐ',
            name: 'Tempest',
            price: '14.000.000',
            img: './assets/img/moto/low/tempest-header-menu_1639666261.png',
            type: 'low'
        }

]

function renderHtmlMoto(arr) { 
    let html = '';
    arr.forEach(function(e, index){
            let name = e.name;
            let price = e.price;
            let img = e.img;
            let row = 
            `
            <div onclick="clickHeader(this)" class="col col-lg-3">
                <div class="item-product">
                    <img src="${img}" alt="">
                    <div class="name-product">${name}</div>
                </div>
            </div>
            `
            if(e.type == 'hight'){
                html += row;
            }
    })
    return html
}

function renderMoto() {
    listMoto.innerHTML = renderHtmlMoto(motos)
}

renderMoto();

// render Car info

function renderHtmlCar(arr,nameCar) { 
    let html = '';
    arr.forEach(function(e, index){
            let name = e.name;
            let length = e.length;
            let speed = e.speed;
            let price = e.price;
            let deposit = e.deposit;
            let img = e.img.red;
            let row = 
            `
            <div class="col col-lg-6">
                <div class="product-info-left">
                <img src="${img}" alt="">
                <span>Thông tin sản phẩm có thể được thay đổi mà không báo trước</span>
                </div>
            </div>

            <div class="col col-lg-6">
                <div class="product-info">
                    <h2 class="product-name moto__product-name">${name}</h2>
                    <div class="product-deposit moto__product-deposit">
                        <div>Quãng đường 1 lần sạc
                            <div>${length}</div>
                        </div>
                        <div>Tốc độ tối đa
                            <div>${speed}</div>
                        </div>
                    </div>
                    <div class="product-condition">
                        (*) Theo điều kiện vận hành tiêu chuẩn của VinFast: xe chở 1 người 65kg và di chuyển với vận tốc 30km/h.
                    </div>
                </div>

                <div class="product-price">Giá niêm yết: ${price}</div>
                <div class="product-depost">
                    Số tiền cọc:
                    <span>${deposit}</span>
                </div>
                <div class="product-model">
                    <p>Lựa chọn phiên bản xe</p>
                    <div>
                        <button onclick="onclickModel(this)">TIÊU CHUẨN</button>
                        <button onclick="onclickModel(this)">NÂNG CAO</button>
                        <button onclick="onclickModel(this)">CAO CẤP</button>
                    </div>
                </div>

                <div class="product-color">
                    <p>Lựa chọn màu xe</p>
                    <div class="all-color">
                        <div onclick="onclickColor(this)" class="item-color div1"></div>
                        <div onclick="onclickColor(this)" class="item-color div2"></div>
                        <div onclick="onclickColor(this)" class="item-color div3"></div>
                        <div onclick="onclickColor(this)" class="item-color div4"></div>
                    </div>
                </div>

            </div>
            `
            if(name == nameCar){
                html += row;
            }
    })
    return html
}


function renderCarInfo(t,default2) {
    if(default2) {
        let childName = t.firstElementChild.lastElementChild.innerText
        renderProduct.innerHTML =  renderHtmlCar(motos2,childName)
    } else {
        renderProduct.innerHTML =  renderHtmlCar(motos2,t)
    }
}


// Button Model, Color
function onclickModel(t) {
    let productModel = document.querySelectorAll('.product-model button')
    Array.from(productModel).map(e => {
            e.classList.remove('duc-button')
    })
    t.classList.add('duc-button')
}


function onclickColor(t) {
    let productColor = document.querySelectorAll('.product-color .all-color div')
    Array.from(productColor).map(e => {
        if(e.classList.contains('color-border'))
            e.classList.remove('color-border')
    })
    t.classList.add('color-border')

}

function onclickColor2(t) {
    let productFurniture = document.querySelectorAll('.color2 .all-color div')
    Array.from(productFurniture).map(e => {
        if(e.classList.contains('color-border'))
            e.classList.remove('color-border')
    })
    t.classList.add('color-border')

}



// Click product Header
function clickHeader(t) {
    renderCarInfo(t,true)
    panigationHeaderProduct(t)
}

renderCarInfo('Vento',false)
// panigation of Header Product 

let listCarHeader = document.querySelectorAll('.wrapper2-product .row .col')

Array.from(listCarHeader)[1].classList.add('duc__border-bottom')

function panigationHeaderProduct(t) {
    Array.from(listCarHeader).map(e => {
        e.classList.remove('duc__border-bottom')
    })
    t.classList.add('duc__border-bottom')
}
