
let htmlCar = '';
let htmlMoto = '';
let list_car = document.getElementById('list_car');
let list_moto = document.getElementById('list_moto');
let list_itemCar = document.querySelectorAll('#list_car .col');
let active_show = document.querySelectorAll('.header-show-type span')
let panigation_wrap_car = document.querySelectorAll('.Car__wrapper-item-panigation span')
let panigation_wrap_moto = document.querySelectorAll('.Moto__wrapper-item-panigation span')
let wrapper_list_car_row = document.querySelector('.wrapper-list-car .row')
let wrapper_list_moto_row = document.querySelector('.wrapper-list-car .duc__row')
let wrapper_home_slider = document.getElementById('wrapper-home-slider')
let wrapper_home_slider_col = document.querySelectorAll('.wrapper-home-slider .col')

document.getElementById('title').innerHTML = title
const cars = [
    {
        id: 1,
        name: 'VF e34',
        price: '690.000.000',
        img: './assets/img/car-dien/VFe34.svg',
        type: 'dien',
        deposit: '50.000.000'
    },
    {
        id: 2,
        name: 'VF  8',
        price: '1057.100.000',
        img: './assets/img/car-dien/VF8_1642740322.png',
        type: 'dien',
        deposit: '80.000.000'
    },
    {
        id: 3,
        name: 'VF 9',
        price: '1.443.200.000',
        img: './assets/img/car-dien/VF9_1642740346.png',
        type: 'dien',
        deposit: '90.000.000'
    },
    {
        id: 4,
        name: 'Fadil',
        price: '1.220.965.000',
        img: './assets/img/car-xang/Fadil.svg',
        type: 'xang',
        deposit: '60.000.000'
    },
    {
        id: 6,
        name: 'LUX SA2.0 xanh',
        price: '1.220.965.000',
        img: './assets/img/car-xang/LUX_A_2.0.xanh.svg',
        type: 'xang',
        deposit: '200.000.000'
    },
    {
        id: 7,
        name: 'LUX SA2.0',
        price: '1.220.965.000',
        img: './assets/img/car-xang/LUX_SA_2.0.svg',
        type: 'xang',
        deposit: '200.000.000'
    },
    {
        id: 8,
        name: 'President',
        price: '1.220.965.000',
        img: './assets/img/car-xang/President.svg',
        type: 'xang',
        deposit: '300.000.000'
    }
];

const motos = [
    {
        id: 1,
        vehicle: 'CAO CẤP',
        sologan: 'Khởi đầu phong cách mới',
        name: 'Theon S',
        price: '69.000.000',
        img: './assets/img/moto/hight/Theon S_1650957584.jpg',
        type: 'hight',
    },
    {
        id: 2,
        vehicle: 'CAO CẤP',
        sologan: 'Toả khí chất hút ánh nhìn',
        name: 'Theon',
        price: '63.100.000',
        img: './assets/img/moto/hight/Theon.svg',
        type: 'hight'
    },
    {
        id: 3,
        vehicle: 'CAO CẤP',
        sologan: 'Dẫn bước tương lai',
        name: 'Vento S',
        price: '56.000.000',
        img: './assets/img/moto/hight/Vento S_1650957692.jpg',
        type: 'hight'
    },
    {
        id: 4,
        vehicle: 'CAO CẤP',
        sologan: 'Dẫn bước tương lai',
        name: 'Vento',
        price: '50.965.000',
        img: './assets/img/moto/hight/vento_1644979690.png',
        type: 'hight'
    },
    {
        id: 6,
        vehicle: 'TRUNG CẤP',
        sologan: 'Sống xanh thanh lịch',
        name: 'Faliz',
        price: '20.965.000',
        img: './assets/img/moto/medium/Faliz.svg',
        type: 'medium'
    },
    {
        id: 7,
        vehicle: 'TRUNG CẤP',
        sologan: 'toả chất riêng bật cá tính',
        name: 'Feliz S',
        price: '30.900.000',
        img: './assets/img/moto/medium/Feliz S_1650957766.jpg',
        type: 'medium'
    },
    {
        id: 8,
        vehicle: 'TRUNG CẤP',
        sologan: 'Công nghệ bứt phá',
        name: 'KlaraS',
        price: '19.000.000',
        img: './assets/img/moto/medium/KlaraS.svg',
        type: 'medium'
    },
    {
        id: 9,
        vehicle: 'TRUNG CẤP',
        sologan: 'Ngọc Ngáo Ngơ',
        name: 'Rectangle',
        price: '25.000.000',
        img: './assets/img/moto/medium/Rectangle 6336_1624851659.png',
        type: 'medium'
    },
    {
        id: 10,
        vehicle: 'TRUNG CẤP',
        sologan: 'Công nghệ bứt phá <br> trải nghiệm đỉnh cao',
        name: 'KlaraA2',
        price: '22.900.000',
        img: './assets/img/moto/medium/KlaraA2.svg',
        type: 'medium'
    },
    {
        id: 11,
        vehicle: 'BÌNH DÂN',
        sologan: 'Công nghệ bứt phá <br> trải nghiệm đỉnh cao',
        name: 'Impes',
        price: '12.000.000',
        img: './assets/img/moto/low/Impes.svg',
        type: 'low'
    },
    {
        id: 12,
        vehicle: 'BÌNH DÂN',
        sologan: 'Công nghệ bứt phá <br> trải nghiệm đỉnh cao',
        name: 'Ludo 2020',
        price: '15.900.000',
        img: './assets/img/moto/low/Ludo.svg',
        type: 'low'
    },
    {
        id: 13,
        vehicle: 'BÌNH DÂN',
        sologan: 'Công nghệ bứt phá <br> trải nghiệm đỉnh cao',
        name: 'Tempest',
        price: '14.000.000',
        img: './assets/img/moto/low/tempest-header-menu_1639666261.png',
        type: 'low'
    }
];

const slider = [
    {   id: 1,
        title: 'Thiết kế đầy đam mê',
        text: 'Kết hợp với nhà thiết kế xe nổi tiếng thế giới Pininfarina, VinFast mang đến thiết kế đẳng cấp cho từng dòng xe. Theo đuổi triết lý trải nghiệm chạm sinh học, xe VinFast sở hữu vẻ ngoài sang trọng đặc trưng cùng khoang nội thất đậm chất tương lai,chăm chút trong từng chi tiết.',
        img: './assets/img/wrapper-home/thiet-ke-dam-me.png'
    },
    {
        id: 2,
        title: 'Công nghệ thông minh cho tương lai',
        text: 'Đặt khách hàng làm trọng tâm, các mẫu xe thông minh của VinFast được ứng dụng những công nghệ ưu việt hàng đầu thế giới, mở ra không gian hưởng thụ tiện nghi, giải trí hoàn hảo cùng trải nghiệm cá nhân hóa đáng giá nhất.',
        img: './assets/img/wrapper-home/cntm_1_1639672435.png'
    },
    {
        id: 3,
        title: 'Đẳng cấp an toàn quốc tế',
        text: 'Đặt sự an tâm của khách hàng lên trên hết, những chiếc xe của VinFast được trang bị các tính năng an toàn tối tân nhất để bảo vệ người lái và mọi hành khách trên xe, đáp ứng tiêu chuẩn khắt khe của các tổ chức đánh giá xe uy tín hàng đầu thế giới như ASEAN NCAP, EURO NCAP, NHTSA...',
        img: './assets/img/wrapper-home/dang-cap-quoc-te.png'
    },
    {
        id: 4,
        title: 'Trải nghiệm xuất sắc',
        text: 'Sở hữu xe VinFast chính là tận hưởng những giá trị tốt nhất của một hệ sinh thái đẳng cấp, từ mô hình O2O tích hợp thương mại điện tử và trải nghiệm tại hệ thống Đại lý/Showroom/Trạm sạc rộng khắp, tới chất lượng dịch vụ hậu mãi vượt trội và sự tận tâm trong từng khoảnh khắc của khách hàng.',
        img: './assets/img/wrapper-home/chinh-sach.png'
    }
]

// Render Wrapper home
function loadHtml3 (arr,id) {
    let html = '';
    arr.forEach(e => {
        let title = e.title;
        let text = e.text;
        let img = e.img;
        let row = 
        `
        <div class="col col-lg-12">
            <div class="wrapper-item">
            <div class="item-title">
                <H2 id="title-home">${title}</H1>
                <h5>
                ${text}
                </h3>
            </div>
            <div class="item-img">
                <img src="${img}" alt="">
            </div>
            </div>
        </div>
        `
        if(e.id == id) {
            html = row
        }
    })
    return html
}


function RenderWrapHome(id) {
    wrapper_home_slider.innerHTML = loadHtml3(slider,id)
}

RenderWrapHome(1)

// Move Wrapper Home

function clickMove(t) {
    let title = document.getElementById('title-home')
    let nextSlider = 0
    let prevSlider = 0
    slider.forEach((e,index) => {
        if(e.title == title.innerText) {
            if(t.classList.contains('next-slider')) {
                if(index == slider.length - 1) {
                    RenderWrapHome(1)
                } else {
                    nextSlider = index + 2
                    RenderWrapHome(nextSlider)
                }
                wrapper_home_slider.style.animation = ''
                setTimeout(()=>{
                    wrapper_home_slider.style.animation = 'homeSliderRight ease-in 0.5s forwards'
                }, 0)
            } else {
                if(index == 0) {
                    RenderWrapHome(slider.length)
                } else {
                    prevSlider = index
                    RenderWrapHome(prevSlider)
                }
                wrapper_home_slider.style.animation = ''
                setTimeout(()=>{
                    wrapper_home_slider.style.animation = 'homeSliderLeft ease-out 0.5s forwards'
                }, 0)
            }
        }
    })
}



//  Render Header product
function loadHtml(type, arr) { 
    let html = '';
    arr.forEach(function(e){
        let name = e.name;
        let price = e.price;
        let img = e.img;
        let row = 
        `<div class="col col-lg-3 duc_col">
            <div onmouseover="overItem(this)" onmouseout="outItem()" class="header-show--item">
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


// Active color Panigation
function activeColor(e) {
    Array.from(active_show).map((span) => {
        if(span.innerHTML == e.target.innerHTML) {
        span.classList.add('active-background')
        } 
        else {
        if(span.classList.contains('active-background'))
        span.classList.remove('active-background')
        }
    })
}

// Load header Cars
function filterCar(e,type){
    list_car.innerHTML = loadHtml(type, cars);
    if(e) 
        activeColor(e)
}

filterCar(false,'xang');
//  Load header Motos
function filterMoto(e,type) {
    list_moto.innerHTML = loadHtml(type, motos);
    if(e) 
        activeColor(e)
}
filterMoto(false,'medium')


// Wrapper product
function loadHtml2(arr) { 
    let html = '';
    arr.forEach((e,index) => {
        let name = e.name;
        let price = e.price;
        let img = e.img;
        let sologan = e.sologan;
        let vehicle = e.vehicle;
        let row = 
        `
        <div class="col col-lg-3">
            <div class="wrapper-car-img"> 
            <img src="${img}" alt="">
            <img src="${img}" alt="">
            </div>
            <h4 class="wrapper-car-slogan">${sologan}</h4>
            <div class="wrapper-car-name">${name}</div>
            <div class="wrapper-car-content">
            <div class="content-modal">
                <span>Dòng xe</span>
                <div>${vehicle}</div>
            </div>
            <div class="content-price">
                <span>Giá nêm yết</span>
                <div>${price}</div>
            </div>
            </div>
            <div class="wrapper-car-btn">
            <button style="font-size: 1.6rem; font-weight: 400;" type="button" class="btn btn-primary duc_btn">XEM CHI TIẾT</button>
            <button style="font-size: 1.6rem; font-weight: 400;" type="button" class="btn btn-primary">ĐẶT CỌC NGAY</button>
            </div>
        </div>
        `
        if(index <= 7)
            html += row;
    })
    return html;
}



function loadMotoWrapper(motos) {
    wrapper_list_moto_row.innerHTML = loadHtml2(motos)
}

if(page == 'index'){
    loadMotoWrapper(motos)
}




// hover item header

function overItem(e) {
    let img_hover = document.querySelectorAll('.duc_col img')
    Array.from(img_hover).map(img => {
        if(img.outerHTML !== e.children[0].children[0].outerHTML) {
            img.style.opacity = '0.5'
        } else {
            img.style.opacity = '1'
        }
    })
}

function outItem() {
    let img_hover = document.querySelectorAll('.duc_col img')
    Array.from(img_hover).map(img => {
        img.style.opacity = '1'
    })
}

// Panigation of Car wrapper 

function panigationmoMove(t,typePa,typePr)  {
Array.from(typePa).map((e,index) => {
    let currentIndex = index
    if(e.offsetLeft == t.offsetLeft) {
        e.classList.add('background-pri')
        typePr.style.transform = `translateX(calc(-25%*${currentIndex}))`
    } else {
        if(e.classList.contains('background-pri'))
            e.classList.remove('background-pri')
    }
})
}

function autoPanigation1() {
    let arrCar = Array.from(panigation_wrap_moto)
    let carLength = arrCar.length;
    for(let i = 0; i < carLength; i++){
        let lastPanigation = i + 1
        let firstCar = arrCar[0];
        let currentCar = arrCar[i];
        let lastCar = arrCar[lastPanigation];
        if(carLength != lastPanigation){
            if(currentCar.classList.contains('background-pri')) {
                currentCar.classList.remove('background-pri');
                wrapper_list_moto_row.style.transform = `translateX(calc(-25%*${lastPanigation}))`;
                lastCar.classList.add('background-pri');
                break;
            }
        }else{
            currentCar.classList.remove('background-pri');
            wrapper_list_moto_row.style.transform = `translateX(0)`;
            firstCar.classList.add('background-pri');
            break;
        }
    }
}

function autoPanigation2() {
    let arrCar = Array.from(panigation_wrap_car)
    let carLength = arrCar.length;
    for(let i = 0; i < carLength; i++){
        let lastPanigation = i + 1
        let firstCar = arrCar[0];
        let currentCar = arrCar[i];
        let lastCar = arrCar[lastPanigation];
        if(carLength != lastPanigation){
            if(currentCar.classList.contains('background-pri')) {
                currentCar.classList.remove('background-pri');
                wrapper_list_car_row.style.transform = `translateX(calc(-25%*${lastPanigation}))`;
                lastCar.classList.add('background-pri');
                break;
            }
        }else{
            currentCar.classList.remove('background-pri');
            wrapper_list_car_row.style.transform = `translateX(0)`;
            firstCar.classList.add('background-pri');
            break;
        }
    }
}

setInterval(autoPanigation1,5000)
setInterval(autoPanigation2,5000)

// Menu list icon
let list_icon = document.querySelectorAll('.block-menu-icon li')
let show_list_icon = document.querySelectorAll('.show-list-icon i')

function ShowListIcon() {
    Array.from(list_icon).map(e => {
        e.classList.toggle('transform-icon')
    })
    Array.from(show_list_icon).map(e => {
        e.classList.toggle('hide')
    })  
}

// click Move Wrapper-home
