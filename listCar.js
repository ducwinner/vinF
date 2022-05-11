let listCar = document.getElementById('wrapper2-cars')
let productColor = document.querySelectorAll('.product-color .all-color div')
let productFurniture = document.querySelectorAll('.color2 .all-color div')
let renderProduct = document.getElementById('renderCar')




function renderHtml(arr) { 
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
            if(e.type == 'xang'){
                html += row;
            }
    })
    return html
}

function renderCar() {
    listCar.innerHTML = renderHtml(cars)
}

renderCar();

// render Car info

function renderHtmlCar(arr,nameCar) { 
    let html = '';
    arr.forEach(function(e, index){
            let name = e.name;
            let deposit = e.deposit;
            let img = e.img;
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
                <h2 class="product-name">${name}</h2>
                <div class="product-deposit">
                    <div>Số tiền đặt cọc</div>
                    <span>${deposit} vnĐ</span>
                </div>
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
                <div onclick="onclickColor(this,productColor)" class="item-color div1"></div>
                <div onclick="onclickColor(this,productColor)" class="item-color div2"></div>
                <div onclick="onclickColor(this,productColor)" class="item-color div3"></div>
                <div onclick="onclickColor(this,productColor)" class="item-color div4"></div>
              </div>
            </div>

            <div class="product-color color2">
                <p>Lựa chọn màu nội thất</p>
                <div class="all-color">
                    <div onclick="onclickColor(this,productFurniture)" class="item-color div1"></div>
                    <div onclick="onclickColor(this,productFurniture)" class="item-color div2"></div>
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
        renderProduct.innerHTML =  renderHtmlCar(cars,childName)
    } else {
        renderProduct.innerHTML =  renderHtmlCar(cars,t)
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


function onclickColor(t,a) {
    console.log(a)
    Array.from(a).map(e => {
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


renderCarInfo('LUX SA2.0 xanh',false)
// panigation of Header Product 

let listCarHeader = document.querySelectorAll('.wrapper2-product .row .col')

Array.from(listCarHeader)[1].classList.add('duc__border-bottom')

function panigationHeaderProduct(t) {
    Array.from(listCarHeader).map(e => {
        e.classList.remove('duc__border-bottom')
    })
    t.classList.add('duc__border-bottom')
}
