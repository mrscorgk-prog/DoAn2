
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
    name: "Áo họa tiết kẻ caro cho bé", 
    image: "https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/480812624_951569443765689_3979909846695550689_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gqTzCky_8NwQ7kNvwH1zFFs&_nc_oc=Adkm4fgWtkaSFLpVAq6qdGhU84rM1QuHG6mLlxiQVXe2UWln_ugrJp0FqSXa83mLeuY&_nc_zt=23&_nc_ht=scontent.fhan3-4.fna&_nc_gid=i6TsbuWA1xZOne7g9ss0gg&oh=00_AfPqJcehCwKyM_ntL4CJ4ED0Ju7IytxxLdAFusmKg7MkMQ&oe=684CE7C1", 
    price: 197000, 
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


