// Đăng nhập ~ Đăng xuất

let logins = document.querySelectorAll('.d_modal__body')
function moveLogin() {
    Array.from(logins).map( e => {
        e.classList.toggle('hide')
    })
}


// Constructor function
function Validator(options) {

    function getParent(element, selector) {
        while(element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement
            } else {
                element = element.parentElement
            }
        } 
    }

    var selectorRules = {};
    // Hàm thực hiện validate, hiện ra lỗi  và bỏ lỗi đi
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage;
        // Lấy ra các rule của các selector
        var rules = selectorRules[rule.selector]

        // lặp qua từng rule && kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0 ;  i < rules.length ; ++i) {
            switch (inputElement.type) {
                case 'checkbox':
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    )
                    break;
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if(errorMessage) break;
        }

        if(errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }

        return !errorMessage
    }

    var formElement = document.querySelector(options.form)
    if (formElement) {

        // khi Submit form
        formElement.onsubmit = function (e) {
            e.preventDefault()

            var isFormValid = true;

            // Thực hiện lặp qua từng rule và vlidate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement,rule)
                if( !isValid) {
                    isFormValid = false
                }
            })

            if(isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {
                        values[input.name] = input.value
                        return values
                    }, {});
                    options.onSubmit(formValues)
                }
                //  Trường hợp submit với hành vi mặc định
                else {
                    formElement.submid()
                }
            }
        }

        // Lặp qua mỗi rule và sử lý( lắng nghe sự kiện blur. input...)
        options.rules.forEach(function(rule) {

            // Lưa lại các rules cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test) 
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElement = formElement.querySelector(rule.selector)
            if(inputElement) {
                //  Xử lý khi Blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement,rule)
                }

                // Xử lý mỗi khi người dùng nhập input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                    console.log(errorElement)
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                }
            }
        });
        }
}

// ĐỊnh nghĩa 
// Nguyên tắc của các Rules: 
// 1. Khi có lỗi => trả ra message lỗi
// 2. Khi hợp lệ => không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : 'vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : ' vui lòng nhập email'
        }
    }
}

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : 'Mật khẩu quá ngắn < 6'
        }
    }
}

Validator.isComfirmed = function (selector, getConfirmValue) {
    return {
        selector : selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : 'Dữ liệu nhập vào không chính xác'
        }
    }
}