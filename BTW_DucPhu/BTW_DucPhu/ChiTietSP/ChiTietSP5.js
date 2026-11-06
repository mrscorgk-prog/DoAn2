

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
    name: "Áo khoác gilen len cho bé", 
    image: "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/482001736_951872570402043_6994753610202408066_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bwmdPnStq4sQ7kNvwGFOglb&_nc_oc=Adk1kH5bKQEdsJn66Vfjl9qnxIm5EDzMr6CEVGwRhN9gcnJUebxzOXPmvioSx7PUixo&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=w9WS8Tfd98XdHZeH0TOzWQ&oh=00_AfOJrxhCGX2B_O1Jz2aY4UQUEKMOq8okvEu-2DKedj0hPQ&oe=684C4BF6",
    price: 345000,
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

