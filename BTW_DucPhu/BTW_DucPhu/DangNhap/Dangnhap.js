function dangnhap(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    var userkt =  /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(\.[a-zA-Z]{2,12})$/;
    var accounts = [
        { user: "laviconbebe@gmail.com", pass: "123456" }
    ];
    if (user == "admin123@gmail.com" && pass == "123455"){
        alert("Đăng nhập thành công!");
        window.location.href = "http://127.0.0.1:5501/QuanTri/Quantri1.html";
        return false; 
    }
    if (!user || !pass){
        alert("Vui lòng nhập đầy đủ tài khoản!");
        return;
    }
    if (!userkt.test(user)){
        alert("Email không hợp lệ!");
        return;
    }
    var kttk = false;
    for (var i = 0; i < accounts.length; i++){
        if (accounts[i].user == user){
            if (accounts[i].pass == pass){
                alert("Đăng nhập thành công");
                window.location.href = "http://127.0.0.1:5501/TrangChu/TrangChu.html";
                kttk = true;
                break;
            } else {
                alert("Sai mật khẩu!");
                kttk = true;
                break;
            }
        }
    }
    return false; 
}
