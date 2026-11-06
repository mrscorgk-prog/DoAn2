/* Header và footer dùng chung cho mọi trang */
$(function () {
  const page = $('body').data('page');
  const nav = [
    ['products.html?group=nam', 'Nam', 'nam'], ['products.html?group=nu', 'Nữ', 'nu'],
    ['products.html?group=phukien', 'Phụ kiện', 'phukien'], ['news.html', 'Tin tức', 'news'], ['contact.html', 'Liên hệ', 'contact'],
  ];
  const active = (k) => (page === k || (page === 'products' && qs('group') === k) ? ' active' : '');
  $('#site-header').html(`
  <div class="topbar">Giao hàng toàn quốc, thanh toán khi nhận hàng (COD)</div>
  <header class="site-nav">
    <nav class="navbar navbar-expand-lg container">
      <a class="navbar-brand brand" href="index.html"><span class="brand-main">Sebastian</span><span class="brand-sub">Sportwear</span></a>
      <button class="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Mở menu"><i class="bi bi-list fs-2"></i></button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-lg-auto">${nav.map((n) => `<li class="nav-item"><a class="nav-link${active(n[2])}" href="${n[0]}">${n[1]}</a></li>`).join('')}</ul>
        <form class="search-form" action="products.html" role="search"><input name="q" class="form-control" type="search" placeholder="Tìm áo, quần, lifting strap..." aria-label="Tìm kiếm"><button class="btn-icon" aria-label="Tìm"><i class="bi bi-search"></i></button></form>
        <div class="nav-icons">
          <a href="login.html" class="btn-icon" aria-label="Tài khoản"><i class="bi bi-person"></i></a>
          <a href="cart.html" class="btn-icon position-relative" aria-label="Giỏ hàng"><i class="bi bi-bag"></i><span class="cart-count d-none"></span></a>
        </div>
      </div>
    </nav>
  </header>`);
  $('#site-footer').html(`
  <footer class="site-footer"><div class="container">
    <div class="row g-4">
      <div class="col-lg-4"><div class="brand brand-light"><span class="brand-main">Sebastian</span><span class="brand-sub">Sportwear</span></div>
        <p class="mt-3 footer-text">Trang phục và phụ kiện tập luyện cho người tập nghiêm túc. Từ áo quần đến lifting strap, quấn cổ tay, đai lưng.</p></div>
      <div class="col-6 col-lg-2"><h6>Mua sắm</h6><ul class="list-unstyled"><li><a href="products.html?group=nam">Đồ nam</a></li><li><a href="products.html?group=nu">Đồ nữ</a></li><li><a href="products.html?group=phukien">Phụ kiện tập</a></li></ul></div>
      <div class="col-6 col-lg-2"><h6>Hỗ trợ</h6><ul class="list-unstyled"><li><a href="contact.html">Liên hệ</a></li><li><a href="news.html">Hướng dẫn chọn size</a></li><li><a href="login.html">Đơn hàng của tôi</a></li></ul></div>
      <div class="col-lg-4"><h6>Nhận tin sản phẩm mới</h6>
        <form id="newsletter" class="d-flex gap-2"><input type="email" class="form-control" placeholder="Email của bạn" required aria-label="Email"><button class="btn btn-sw">Đăng ký</button></form>
        <div class="footer-text mt-3">Hotline: 0900 000 000<br>Email: hello@sebastiansportwear.vn</div></div>
    </div>
    <div class="footer-bottom">© 2026 Sebastian Sportwear. Đồ án 2 - Trường ĐH Sư phạm Kỹ thuật Hưng Yên.</div>
  </div></footer>`);
  $('#newsletter').on('submit', (e) => { e.preventDefault(); toast('Đã đăng ký nhận tin'); e.target.reset(); });
  Cart.badge();
});
