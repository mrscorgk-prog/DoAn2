
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
    name: "Bộ quần áo họa tiết gấu xinh xắn",
    image: "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/481990944_951861480403152_1470875733127855763_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=vhnPLewtUEMQ7kNvwHeTLTY&_nc_oc=Adl-5rfONOw7Rw1VSmMSSQWWril09mDUSLZH5auSYXIIM1qv216u3pvWnC85riGAGkg&_nc_zt=23&_nc_ht=scontent.fhan3-4.fna&_nc_gid=e3DYKFUYL-LztvO5setviw&oh=00_AfN0SC6Z5ZyEFDV7r0c2g3WOKSdGXa1pg_jBeGh6sNmREg&oe=684C3B13",
    price: 695000, 
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
