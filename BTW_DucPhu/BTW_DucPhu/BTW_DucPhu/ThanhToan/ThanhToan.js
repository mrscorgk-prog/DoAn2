

// function dathang(){
//     var hoten = document.getElementById("nhaphoten");
//     var email = document.getElementById("nhapemail");
//     var sdt = document.getElementById("nhapsdt");
//     var diachi = document.getElementById("nhapdiachi");
//     var tinh = document.getElementById("nhaptinh");
//     var huyen = document.getElementById("nhaphuyen");
//     var xa = document.getElementById("nhapxa");

//     var hotenkt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
//     var emailkt = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
//     var sdtkt = /^(03|09)[0-9]{8}$/;
//     var diachikt = /^[a-zA-ZÃ-Ỹ\s]{5,}$/;
//     var tinhkt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
//     var huyenkt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
//     var xakt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;

//     if (!hoten || !email || !sdt || !diachi || !tinh || !huyen || !xa) {
//         alert("Vui lòng nhập đầy đủ thông tin ");
//         return;
//     }
//     if(hotenkt.test(hoten)==false){
//         alert("Họ tên không hợp lệ");
//        hoten.focus();
//         return;

//     }
//     if(emailkt.test(email)==false){
//         alert("Email không hợp lệ");
//         email.focus();
//         return;

//     }
//     if(sdtkt.test(sdt)==false){
//         alert("Số điện thoại không hợp lệ");
//         sdt.focus();
//         return;

//     }
//     if(diachikt.test(diachi)==false){
//         alert("Địa chỉ không hợp lệ");
//         diachi.focus();
//         return;

//     }

//     if(tinhkt.test(tinh)==false){
//         alert("Tỉnh không hợp lệ");
//         tinh.focus();
//         return;

//     }
//     if(huyenkt.test(huyen)==false){
//         alert("Huyện không hợp lệ");
//         huyen.focus();
//         return;

//     }
//     if(xakt.test(xa)==false){
//         alert("Xã không hợp lệ");
//         xa.focus();
//         return;

//     }
    
//     var thanhtoan = document.getElementById("thanhtoan");
//     if (thanhtoan.checked== false){
//         alert("Vui lòng chọn phương thức thanh toán");
//     }
    
//     else{
//         alert("Đặt hàng thành công");
//     }
  

    
// }


function dathang(){
    var hoten = document.getElementById("nhaphoten").value;
    var email = document.getElementById("nhapemail").value;
    var sdt = document.getElementById("nhapsdt").value;
    var diachi = document.getElementById("nhapdiachi").value;
    var tinh = document.getElementById("nhaptinh").value;
    var huyen = document.getElementById("nhaphuyen").value;
    var xa = document.getElementById("nhapxa").value;

    var hotenkt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
    var emailkt = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    var sdtkt = /^(03|09)[0-9]{8}$/;
    var diachikt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
    var tinhkt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
    var huyenkt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;
    var xakt = /^[a-zA-ZÀ-Ỹ\s]{5,}$/;

    if (!hoten || !email || !sdt || !diachi || !tinh || !huyen || !xa) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }
    if(hotenkt.test(hoten) === false){
        alert("Họ tên không hợp lệ");
        document.getElementById("nhaphoten").focus();
        return;
    }
    if(emailkt.test(email) === false){
        alert("Email không hợp lệ");
        document.getElementById("nhapemail").focus();
        return;
    }
    if(sdtkt.test(sdt) === false){
        alert("Số điện thoại không hợp lệ");
        document.getElementById("nhapsdt").focus();
        return;
    }
    if(diachikt.test(diachi) === false){
        alert("Địa chỉ không hợp lệ");
        document.getElementById("nhapdiachi").focus();
        return;
    }
    if(tinhkt.test(tinh) === false){
        alert("Tỉnh không hợp lệ");
        document.getElementById("nhaptinh").focus();
        return;
    }
    if(huyenkt.test(huyen) === false){
        alert("Huyện không hợp lệ");
        document.getElementById("nhaphuyen").focus();
        return;
    }
    if(xakt.test(xa) === false){
        alert("Xã không hợp lệ");
        document.getElementById("nhapxa").focus();
        return;
    }
    
    var thanhtoan = document.getElementById("thanhtoan");
    if (thanhtoan.checked === false){
        alert("Vui lòng chọn phương thức thanh toán");
        return;
    }
    
    alert("Đặt hàng thành công");
    window.location.href = "http://127.0.0.1:5500/TrangChu/TrangChu.html"; 
}



document.addEventListener("DOMContentLoaded", () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productTable = document.querySelector(".thanhtoan-chitiet-phai table");
  
  
    if (cart.length === 0) {
        productTable.innerHTML = `<tr><td colspan="3">Giỏ hàng trống</td></tr>`;
        return;
    }
  

    let tableContent = `
      <tr class="rieng">
          <th>Sản phẩm</th>
          <th>Số lượng</th>
          <th>Giá</th>
      </tr>`;
  
  
    let totalPrice = 0;
  

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
  
        tableContent += `
          <tr>
              <td>
                  <img src="${item.image}" style="width:50px;"> 
                  <p>${item.name}<br>Size: ${item.size}</p>
              </td>
              <td>${item.quantity}</td>
              <td>${itemTotal.toLocaleString()}<ins>đ</ins></td>
          </tr>`;
    });
  

    tableContent += `
      <tr>
          <td colspan="2">Tổng cộng:</td>
          <td>${totalPrice.toLocaleString()}<ins>đ</ins></td>
      </tr>`;

    productTable.innerHTML = tableContent;
});
