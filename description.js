"use strict"

let pname = document.querySelector("#product-name");
let price = document.querySelector(".price");
let para = document.querySelector("#para");
let image = document.querySelector("#image");



let home = document.getElementById("home");


console.log(localStorage.getItem("dummy"))
home.addEventListener("click",()=>{
    window.open("index.html","blank");
})

let local_store = localStorage.getItem("object");
local_store = JSON.parse(local_store)
console.log(local_store[0]);

pname.innerHTML = local_store.pname;
price.innerHTML = local_store.price;
para.innerHTML = local_store.content;
image.src = local_store.src;