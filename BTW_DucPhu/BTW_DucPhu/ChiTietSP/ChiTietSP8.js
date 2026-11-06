
// Lấy giỏ hàng từ localStorage hoặc khởi tạo mảng trống nếu chưa có
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let selectedSize = "";

// Hàm chọn size
function selectSize(size) {
  selectedSize = size; 
 
  document.getElementById("s").style.backgroundColor = size === "S" ? "lightblue" : "white";
  document.getElementById("m").style.backgroundColor = size === "M" ? "lightblue" : "white";
  document.getElementById("l").style.backgroundColor = size === "L" ? "lightblue" : "white";
}

function addToCart() {

  const product = {
    name: "Combo sành điệu cho bé",
    image: "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481892900_951860107069956_4358190786626321551_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tnak9lSfGOoQ7kNvwHOzB7s&_nc_oc=AdlpvAX0PQhIZtxkS4xaWXDQQMyNRg2C4Oen2u5V1DXSToiwlaPbSfby2_Y4pYsJYU4&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=rehy5yw414gSllnmOZHf3w&oh=00_AfPDsnRyCqcRZbZAj3LGiN1qi94xwoRON_Widhb-mENrQA&oe=684C4E17", 
    price: 595000, 
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