// var data = [
//     {
//         STT: 1,
//         Img: "https://product.hstatic.net/1000197303/product/pro_do_01_1_8a1a720a90a340c9bfabe89e41d893ac_grande.jpg", 
//         Name: "Áo kiểu tay dài thắt nơ",
//         Size: "M",
//         Number: 20,
//         ImportPrice: 400.000,
//         SellPrice: 416.500
//     },
//     {
//         STT: 2,
//         Img: "https://product.hstatic.net/1000197303/product/pro_da_01_2_fbab52be715148d6b4f8f88c82825e2b_grande.jpg",
//         Name: "Áo kiểu somi tay dài thắt nơ",
//         Size: "S, M, L",
//         Number: 5,
//         ImportPrice: 150.000,
//         SellPrice: 200.000
//     },
//     {
//         STT: 3,
//         Img: "https://product.hstatic.net/1000197303/product/pro_xanh_duong_2_cee0752f029441a4a41634667ed9afbd_grande.jpg",
//         Name: "Váy skort cơ bản 2 túi",
//         Size: "S, M, L",
//         Number: 30,
//         ImportPrice: 150.000,
//         SellPrice: 200.000
//     },
//     {
//         STT: 4,
//         Img: "https://product.hstatic.net/1000197303/product/pro_trang_1_72816ee0dd1a48ebaa04417edf9bbdcc_grande.jpg",
//         Name: "Áo sheer tay dài nhún cổ tim",
//         Size: "S, M, L",
//         Number: 5,
//         ImportPrice: 500.000,
//         SellPrice: 600.000
//     },
    
// ];
/*------------------Sản phẩm -----------------------*/
let editIndex = null;
function add() {
    var number = document.getElementById("Number").value;
    var name = document.getElementById("Name").value;
    var size = document.getElementById("Size").value;
    var quantity = document.getElementById("Quantity").value;
    var importPrice = document.getElementById("ImportPrice").value;
    var sellPrice = document.getElementById("SellPrice").value;
    var img = document.getElementById("Image").value;
    if ( !name || !size || !quantity || !importPrice || !sellPrice || !img) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    let data = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
    var item ={
        STT:number,
        Img : img,
        Name: name,
        Size: size,
        Number:quantity,
        ImportPrice :importPrice,
        SellPrice: sellPrice
    };
    if (editIndex !== null) {
        data[editIndex] = item;
        editIndex = null;
    } else {
        data.push(item);
        
    }
    localStorage.setItem("products",JSON.stringify(data))
    render(); 
    clear(); 
}
function render(){
    let selectProduct = JSON.parse(localStorage.getItem("products"))
    let createForm = document.querySelector(".table tbody")
    createForm.innerHTML ="";
    for (let i=0; i<selectProduct.length; i++){
        let sttProduct = i;

        let createTr = document.createElement("tr")
        let contentTr = `
        <tr>
            <td>${"SP00"+ sttProduct}</td>
            <td><img src="${selectProduct[i].Img}" alt="Product Image" width="50"></td>
            <td>${selectProduct[i].Name}</td>
            <td>${selectProduct[i].Size}</td>
            <td>${selectProduct[i].Number}</td>
            <td>${selectProduct[i].ImportPrice}</td>
            <td>${selectProduct[i].SellPrice}</td>
            <td>
                <button onclick="deleteItem(${sttProduct})"><i class="fa-solid fa-trash"></i></button>
               <button onclick="editItem(${sttProduct})"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
                          
        </tr> `
        createTr.innerHTML = contentTr
        let createForm = document.querySelector(".table")
        createForm.append(createTr)
    }
    
}
function clear() {
    document.getElementById("Number").value="";
    document.getElementById("Name").value="";
    document.getElementById("Size").value="";
    document.getElementById("Quantity").value="";
    document.getElementById("ImportPrice").value="";
    document.getElementById("SellPrice").value="";
    document.getElementById("Image").value=""
    
  }

function deleteItem(x) {
clear();
let selectProduct = JSON.parse(localStorage.getItem("products"))
selectProduct.splice(x,1)
localStorage.setItem("products",JSON.stringify(selectProduct))
render();}


function editItem(index) {
    let selectProduct = JSON.parse(localStorage.getItem("products"));
    let product = selectProduct[index];

    document.getElementById("Number").value = product.STT;
    document.getElementById("Name").value = product.Name;
    document.getElementById("Size").value = product.Size;
    document.getElementById("Quantity").value = product.Number;
    document.getElementById("ImportPrice").value = product.ImportPrice;
    document.getElementById("SellPrice").value = product.SellPrice;
    document.getElementById("Image").value = product.Img;

    editIndex = index; 
}
document.getElementById("save").addEventListener("click", add);
render();

/*-------------Đơn hàng------------------*/
let editIndexs = null;

function adds() {
    var MaDH = document.getElementById("maDH").value || `DH${Date.now()}`;
    var TenKH = document.getElementById("tenKH").value;
    var TenSP = document.getElementById("tensp").value;
    var SoLuong = document.getElementById("soLuong").value;
    var TongTien = document.getElementById("tongTien").value;
    var Ngaytao = document.getElementById("ngay").value;
    var TrangThai = document.getElementById("trangThai").value;

    
    if (!TenKH || !TenSP || !SoLuong || !TongTien || !Ngaytao || !TrangThai) {
         alert("Vui lòng nhập đầy đủ thông tin!");
         return;
    }
    let datas = localStorage.getItem("dONHANG")
        ? JSON.parse(localStorage.getItem("dONHANG"))
        : [];

    var donhang = {
        ma: MaDH,
        ten: TenKH,
        tenSP: TenSP,
        so: SoLuong,
        tien: TongTien,
        ngay: Ngaytao,
        trangthai: TrangThai,
    };

    if (editIndexs !== null) {
        datas[editIndexs] = donhang;
        editIndexs = null; 
    } else {
        datas.push(donhang); 
    }
    localStorage.setItem("dONHANG", JSON.stringify(datas));
    renderDH();
    clearForm();
}
function renderDH() {
    let selectDH = JSON.parse(localStorage.getItem("dONHANG")) || [];
    let crFrm = document.querySelector(".body-don-hang");
    crFrm.innerHTML = "";
    for (let i = 0; i < selectDH.length; i++) {
        let maDH = i;
        let createDH = document.createElement("tr");
        let conHD = `
            <td>${"DH00"+maDH}</td>
            <td>${selectDH[i].ten}</td>
            <td>${selectDH[i].tenSP}</td>
            <td>${selectDH[i].so}</td>
            <td>${selectDH[i].tien}</td>
            <td>${selectDH[i].ngay}</td>
            <td>${selectDH[i].trangthai}</td>
            <td>
                <button onclick="xoaDH(${maDH})"><i class="fa-solid fa-trash"></i></button>
                <button onclick="suaDH(${maDH})"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        `;

        createDH.innerHTML = conHD;
        crFrm.append(createDH);
    }
}

function clearForm() {
    document.getElementById("maDH").value = "";
    document.getElementById("tenKH").value = "";
    document.getElementById("tensp").value = "";
    document.getElementById("soLuong").value = "";
    document.getElementById("tongTien").value = "";
    document.getElementById("ngay").value = "";
    document.getElementById("trangThai").value = "";
}

function xoaDH(y) {
    let selectDH = JSON.parse(localStorage.getItem("dONHANG")) || [];
    selectDH.splice(y, 1);
    localStorage.setItem("dONHANG", JSON.stringify(selectDH));
    renderDH();
}

function suaDH(abc) {
    let selectDH = JSON.parse(localStorage.getItem("dONHANG")) || [];
    let pros = selectDH[abc];
    document.getElementById("maDH").value = pros.ma;
    document.getElementById("tenKH").value = pros.ten;
    document.getElementById("tensp").value = pros.tenSP;
    document.getElementById("soLuong").value = pros.so;
    document.getElementById("tongTien").value = pros.tien;
    document.getElementById("ngay").value = pros.ngay;
    document.getElementById("trangThai").value = pros.trangthai;

    editIndexs = abc; 
}

document.getElementById("saves").removeEventListener("click", adds);
document.getElementById("saves").addEventListener("click", adds);


renderDH();


























///localStorage
// const conguoi =[
//     {
//         lname : "Nguyễn văn A",
//         age : 18
//     },
//     {
//         lname : "Nguyễn văn B",
//         age : 20
//     }
// ];
// console.log(conguoi);

// localStorage.setItem("pc",JSON.stringify(conguoi));
// let getConnguoi = JSON.parse(localStorage.getItem("pc"))
// console.log(getConnguoi)
//localStorage.setItem("<ten local>",JSON.stringify(<dữ liệu truyền vào>))