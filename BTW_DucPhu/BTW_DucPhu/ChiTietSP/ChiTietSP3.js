

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
    name: "Váy hồng xinh xắn cho bé",
    image: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/485020574_967505035505463_6916414292293824947_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9wmzLMQjKycQ7kNvwFBv8-t&_nc_oc=Admnpa2dU0f2_I6OT34AKGFgP7PidSxSN6QZTWcbNBTtAozgSoYzPGrquNQCTbAHetI&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=kvhGjeGFwBJedRjumjML-A&oh=00_AfN51QuRq_zMegJmAknF6X_l7hqI8UmyTCqarGzpz6CgcA&oe=68529048",
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

