


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
    name: "Bộ áo dài lộng lẫy chơi tết",
    image: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/480623319_951570850432215_8813852208576914532_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yp81AlhIEigQ7kNvwGiFocb&_nc_oc=AdnQ5rqYWs6TlV1x4RsFA3cbxWBpWSl73-2UF5iVaddQZ8Y52EkuaijtDqIo_1BRR24&_nc_zt=23&_nc_ht=scontent.fhan4-3.fna&_nc_gid=GBredeVwENBsl8fTGcpXEw&oh=00_AfPkGhAzwdZW8IekH8Qj2JYWPM_clIYddEInCtYCZoMFxw&oe=684CEFC1",
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

