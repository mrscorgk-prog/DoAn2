

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
    name: "Váy cá tính cho bé", 
    image: "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481280042_951584263764207_8951209278963663635_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sZgq2RrMd8IQ7kNvwGG-Tq1&_nc_oc=AdneSxLOzWsYHE8znXGXdVEHG5I4VkUgf0io42k01YSQZW81kESOQUt42lEzGyTqcJE&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=VgKBkPad9-Acg9TqMwdbzQ&oh=00_AfO5_VqwfS6-5raQzV9v528UB9O-UJsRmkTff941cym3dg&oe=684C4032",
    price: 175500, 
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


