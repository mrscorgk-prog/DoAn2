function showSanPhamBanChay() {
    document.getElementById('sanpham').style.display = 'none';
    document.getElementById('sanphambanchay').style.display = 'block';
    document.getElementById('sanphammoinhat').style.display = 'none';
    document.getElementById('buttonBanchay').style.background='#D37171';
    document.getElementById('buttonMoinhat').style.background = '';
}

function showSanPhamMoiNhat() {
    document.getElementById('sanpham').style.display = 'none';
    document.getElementById('sanphambanchay').style.display = 'none';
    document.getElementById('sanphammoinhat').style.display = 'block';
      document.getElementById('buttonMoinhat').style.background='#D37171';
      document.getElementById('buttonBanchay').style.background = '';
}
