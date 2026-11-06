
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []; 
  const productTable = document.querySelector(".cart-content-left table");

  let totalPrice = 0;

  productTable.innerHTML = `
      <tr>
          <th></th>
          <th>Sản phẩm</th>
          <th>Size</th>
          <th>Số lượng</th>
          <th>Xóa</th>
      </tr>`;

  cart.forEach((item, index) => {
      totalPrice += item.price * item.quantity;
    
      productTable.innerHTML += `
          <tr>
              <td><img src="${item.image}" style="width:50px;"> </td>  
              <td>${item.name}</td> 
              <td>Size: ${item.size}</td>  
              <td>${item.quantity}</td>  
              <td><button onclick="removeItem(${index})">Xóa</button></td>  
          </tr>`;
  });
  const summaryTable = document.querySelector(".cart-content-right table");
  summaryTable.innerHTML = `
      <tr>
          <th colspan="2">Đơn Hàng</th>
      </tr>
      <tr>
          <td>${cart.length} Sản Phẩm</td>  
          <td>${totalPrice.toLocaleString()}<ins>đ</ins></td> 
      </tr>`;
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart)); 
  loadCart();
}









































// Tự động tải giỏ hàng khi trang được load
document.addEventListener("DOMContentLoaded", loadCart);
// dữ liệu đầu tiên là dạng obj => lưu trữ vào databasse dùng JSON.stringtyfy => cho vào localStorage=> lấy dữ liệu ra dùng JSON.parse => được obj ban đầu
