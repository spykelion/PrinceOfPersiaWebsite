
// Let's Select our change form button
/*
var formChange = document.querySelector("#changeForm");
formChange.addEventListener("click",function changeColor(){
    document.querySelector(".myForm").style.backgroundColor = "yellow";
    var allInput = document.querySelectorAll("input");
    allInput.forEach(x => {
        x.style.backgroundColor = "yellow";
    });
}); */
var btn=document.querySelector("#changeForm");
btn.onclick = function chg(){
    document.querySelector("input").style.backgroundColor = "green";
}

