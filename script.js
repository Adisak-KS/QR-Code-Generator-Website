let qrImage = document.getElementById("qrImage")
let qrText = document.getElementById("qrText")

function GenerateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        document.querySelector(".imgBox").classList.add("show-img"); // เปลี่ยน imgBox เป็น document.querySelector(".imgBox")
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000)
    }
}
