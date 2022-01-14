//Function đổi màu
button1.onclick = function() {
    bodyBackground.style.background = "pink";
    button1.innerHTML = "Background Color Changed";
}   

//Tạo nút tăng 1 đơn vị
up.onclick = function() {
    let i = Number(document.getElementById("button2").innerHTML);
    i = i + 1;
    button2.innerHTML = i;
}

//Tạo nút giảm 1 đơn vị
down.onclick = function() {
    let i = Number(document.getElementById("button2").innerHTML);
    i = i - 1;
    button2.innerHTML = i;
}

//Tạo nút tự tăng 1 đơn vị
button2.onclick = function() {
    let i = Number(document.getElementById("button2").innerHTML);
    i = i + 1;
    button2.innerHTML = i;
}



