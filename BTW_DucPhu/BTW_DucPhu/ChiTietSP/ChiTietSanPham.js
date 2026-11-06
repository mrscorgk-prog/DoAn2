

let cart = JSON.parse(localStorage.getItem("cart")) || [];


let selectedSize = "";


function selectSize(size) {
  selectedSize = size; 
  

  document.getElementById("s").style.backgroundColor = size === "S" ? "lightblue" : "white";
  document.getElementById("m").style.backgroundColor = size === "M" ? "lightblue" : "white";
  document.getElementById("l").style.backgroundColor = size === "L" ? "lightblue" : "white";
}


function addToCart() {
  const product = {
    name: "Full set cá tính nữ cho bé",
    image: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/480815433_951876227068344_5889872162583674908_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=p0i2OJm1NKQQ7kNvwHeuGWA&_nc_oc=AdmlJ20juLmjU1I4OGXOaITcbzussb_NvIZAgceI4cDnIjAvE92EC7js91nRTH3uAtU&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=hjeTGGjp-0S6dtZeg9SoNg&oh=00_AfPy1opoNEtfyFecRiiyfdMCAVHf2h3wMqAEm7n0b-gqsw&oe=684CE319",
    price: 200000,
    size: selectedSize,
    quantity: parseInt(document.getElementById("num").value), 
  };

 
  if (!product.size) {
    alert("Vui lòng chọn size!"); 
    return; 
  }

  let existingProduct = null;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    if (item.name === product.name && item.size === product.size) {
      existingProduct = item; 
      break; 
    }
  }

 
  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.push(product);
  }
  
  
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!"); 
}

let iconDown = document.querySelector(".icon-down")
iconDown.addEventListener("click",()=>{
  document.querySelector(".ul_mota_sp").style.display ="block"
  document.querySelector(".icon-down").style.display ="none"
  document.querySelector(".icon-up").style.display ="block"
    document.querySelector(".icon-down-huongdan").style.top ="160px"
  document.querySelector(".icon-up-huongdan").style.display ="160px"
})
let iconUp = document.querySelector(".icon-up")
iconUp.addEventListener("click",()=>{
  document.querySelector(".ul_mota_sp").style.display ="none"
  document.querySelector(".icon-down").style.display ="block"
  document.querySelector(".icon-up").style.display ="none"
      document.querySelector(".icon-down-huongdan").style.top ="70px"
  document.querySelector(".icon-up-huongdan").style.display ="70px"
})

var iconDownHD = document.querySelector(".icon-down-huongdan")
iconDownHD.addEventListener("click",()=>{
  document.querySelector(".ul_huong_dan").style.display ="block"
  document.querySelector(".icon-down-huongdan").style.display ="none"
  document.querySelector(".icon-up-huongdan").style.display ="block"
})
var iconUpHD = document.querySelector(".icon-up-huongdan")
iconUpHD.addEventListener("click",()=>{
  document.querySelector(".ul_huong_dan").style.display ="none"
  document.querySelector(".icon-down-huongdan").style.display ="block"
  document.querySelector(".icon-up-huongdan").style.display ="none"
})
