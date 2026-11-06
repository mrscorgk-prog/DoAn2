let editIndexs = null;

function adds() {
    var MaDH = document.getElementById("maDH").value || `DH${Date.now()}`;
    var TenKH = document.getElementById("tenKH").value;
    var TenSP = document.getElementById("tensp").value;
    var SoLuong = document.getElementById("soLuong").value;
    var TongTien = document.getElementById("tongTien").value;
    var Ngaytao = document.getElementById("ngay").value;
    var TrangThai = document.getElementById("trangThai").value;

    // Kiểm tra dữ liệu đầu vào
    if (!TenKH || !TenSP || !SoLuong || !TongTien || !Ngaytao || !TrangThai) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    // Lấy dữ liệu từ localStorage
    let datas = localStorage.getItem("dONHANG")
        ? JSON.parse(localStorage.getItem("dONHANG"))
        : [];

    // Tạo đơn hàng
    var donhang = {
        ma: MaDH,
        ten: TenKH,
        tenSP: TenSP,
        so: SoLuong,
        tien: TongTien,
        ngay: Ngaytao,
        trangthai: TrangThai,
    };

    // Thêm hoặc cập nhật đơn hàng
    if (editIndexs !== null) {
        datas[editIndexs] = donhang; // Cập nhật đơn hàng cũ
        editIndexs = null; // Reset trạng thái chỉnh sửa
    } else {
        datas.push(donhang); // Thêm đơn hàng mới
    }

    // Lưu dữ liệu mới vào localStorage
    localStorage.setItem("dONHANG", JSON.stringify(datas));

    // Cập nhật lại danh sách đơn hàng
    renderDH();

    // Xóa thông tin trên form
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
            <td>${maDH}</td>
            <td>${selectDH[i].ten}</td>
            <td>${selectDH[i].tenSP}</td>
            <td>${selectDH[i].so}</td>
            <td>${selectDH[i].tien}</td>
            <td>${selectDH[i].ngay}</td>
            <td>${selectDH[i].trangthai}</td>
            <td>
                <button onclick="xoaDH(${maDH})">Xóa</button>
                <button onclick="suaDH(${maDH})">Sửa</button>
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

    editIndexs = abc; // Ghi nhớ vị trí đơn hàng đang chỉnh sửa
}

// Đảm bảo sự kiện chỉ gắn một lần
document.getElementById("saves").removeEventListener("click", adds);
document.getElementById("saves").addEventListener("click", adds);

// Tải danh sách đơn hàng khi khởi động
renderDH();
