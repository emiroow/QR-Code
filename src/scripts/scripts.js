Toastify({
    text: "سلام، خوش آمدید",
    className: "info",
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    style: {
        background: "linear-gradient(to right, #380036, #0CBABA)",
    }
}).showToast();
function app() {
    return {
        isOpen: false,
        colors: ['#ffff', '#2196F3', '#009688', '#9C27B0', '#FFEB3B', '#afbbc9', '#4CAF50', '#2d3748', '#f56565', '#ed64a6'],
        colorSelected: '#ffff'
    }
}

function app2() {
    return {
        isOpen: false,
        colors: ['#000', '#ffff', '#2196F3', '#009688', '#9C27B0', '#FFEB3B', '#afbbc9', '#4CAF50', '#2d3748', '#f56565', '#ed64a6'],
        colorSelected: '#000'
    }
}
let loclalBol = true

let help = `
<span class="text-white text-sm text-right font-semibold leading-8 p-0 mx-1 -mt-8">
: راهنما  </br>
. جهت تولید کیو آر کد خود فیلد های سمت راست رو پر کنید </br>
. محتوا : لینک یا متن مورد نظر خود را وارد کنید</br>
. طول / عرض : اندازه موردنظر خود را وارد کنید</br>
. نام فایل دانلودی : نام فایل کیو آر کد خود را وارد کنید</br>
. رنگ پس زمنیه : رنگ پس زمینه کیو آر کد را وارد کنید</br>
. رنگ بیت : رنگ بیت کیو آر کد را وارد کنید</br>
دکمه تولید : ایجاد کیو آر کد خود</br>
دکمه تازه سازی : تازه سازی کیو آر کد جهت ایجاد کیو آر کد جدید</br>
پس از ایجاد کیو آر کد خود می‌توانید با دکمه دانلود کیو آر کد خود را دریافت کنید ( نام فایل دانلودی</br>
( را در سمت راست مشخص نمایید 
</span>
`
$("#Genrate").click(() => {
    let inpuevalue = $('#content').val()
    console.log()
    if (loclalBol === true && inpuevalue.length > 3) {
        $('#qrcode').html('')
        $('.downloadbtn').removeClass("hidden")
        var qrcode = new QRCode("qrcode", {
            text: `${$('#content').val()}`,
            width: `${$('#width').val()}`,
            height: `${$('#height').val()}`,
            colorDark: `${$('#colorSelectedbit').val()}`,
            colorLight: `${$('#colorSelected').val()}`,
            correctLevel: QRCode.CorrectLevel.H

        });

        loclalBol = false
        Toastify({
            text: " ایجاد شد QRcode",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #0a033a, #0c0354)",
            }
        }).showToast();
    }else{
        Toastify({
            text: " جهت تولید، موارد سمت راست را پر کنید",
            className: "info",
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #EC9F05, #FF4E00)",
            }
        }).showToast();
    }
    $("#reset").click(() => {
        $('.downloadbtn').addClass("hidden")
        $('#qrcode').html(help)
        loclalBol = true
        Toastify({
            text: " تازه سازی شد، آماده تولید",
            className: "info",
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            style: {
                background: "linear-gradient(to right, #0a033a, #0c0354)",
            }
        }).showToast();
    });
    $('img').css('border-radius', '8px');
})

$("#download").click((e) => {
    let image = document.querySelector("img")
    let imageUrl = $(image).attr('src')
    console.log(imageUrl)
    $("a").attr("href", imageUrl)
    $("a").attr("download", $("#downloadname").val())
    Toastify({
        text: " دانلود شد",
        className: "info",
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        style: {
            background: "linear-gradient(to right, #0a033a, #0c0354)",
        }
    }).showToast();
})
