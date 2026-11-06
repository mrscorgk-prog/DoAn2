/* Khung trang quản trị + bảng CRUD dùng chung (dữ liệu mẫu lưu ở localStorage) */
const AUTH_KEY = 'swa_login';
const orderTotal = (o) => o.items.reduce((s, [id, , q]) => s + getP(id).price * q, 0);
const stBadge = (k) => `<span class="badge-s s-${k}">${STATUS[k]}</span>`;
const store = {
  get(n, def) { try { return JSON.parse(localStorage.getItem('swa_' + n)) || def; } catch (e) { return def; } },
  set(n, v) { try { localStorage.setItem('swa_' + n, JSON.stringify(v)); } catch (e) {} },
};

function adminShell(page, title) {
  if (page !== 'login' && !sessionStorage.getItem(AUTH_KEY)) { location.href = 'login.html'; return; }
  const nav = [['index.html', 'dash', 'bi-speedometer2', 'Tổng quan'], ['products.html', 'products', 'bi-bag', 'Sản phẩm'], ['categories.html', 'categories', 'bi-tags', 'Danh mục'],
    ['orders.html', 'orders', 'bi-receipt', 'Đơn hàng'], ['customers.html', 'customers', 'bi-people', 'Khách hàng'], ['promos.html', 'promos', 'bi-percent', 'Khuyến mãi'],
    ['news.html', 'news', 'bi-newspaper', 'Tin tức'], ['banners.html', 'banners', 'bi-image', 'Banner'], ['feedback.html', 'feedback', 'bi-chat-dots', 'Phản hồi'], ['reports.html', 'reports', 'bi-bar-chart', 'Thống kê']];
  $('#a-shell').html(`
  <aside class="a-side" id="aSide"><a class="brand" href="index.html"><span class="brand-main">Sebastian</span><span class="brand-sub" style="color:#E77B76">Admin</span></a>
    <ul class="a-nav">${nav.map((n) => `<li><a href="${n[0]}" class="${n[1] === page ? 'active' : ''}"><i class="bi ${n[2]}"></i>${n[3]}</a></li>`).join('')}</ul></aside>
  <div class="a-main"><div class="a-top"><div class="d-flex align-items-center gap-2"><button class="btn-icon d-lg-none" id="aToggle" aria-label="Mở menu"><i class="bi bi-list"></i></button><h1>${title}</h1></div>
    <div class="d-flex align-items-center gap-3"><a href="../index.html" target="_blank" class="link-more small">Xem website</a><span class="small">admin@sebastian.vn</span><button class="btn btn-ink btn-sm" id="aLogout">Đăng xuất</button></div></div>
    <div class="a-body" id="a-content"></div></div>`);
  $('#aToggle').on('click', () => $('#aSide').toggleClass('open'));
  $('#aLogout').on('click', () => { sessionStorage.removeItem(AUTH_KEY); location.href = 'login.html'; });
}

/* Bảng CRUD: cfg = {name, data, cols:[{k,l,f?}], fields:[{k,l,t,opts?,req?}], addLabel} */
function crudTable(cfg) {
  let rows = store.get(cfg.name, cfg.data), q = '', editId = null;
  const save = () => store.set(cfg.name, rows);
  const modalEl = $(`<div class="modal fade" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><form class="modal-content needs-validation" novalidate>
    <div class="modal-header"><h5 class="modal-title"></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button></div>
    <div class="modal-body">${cfg.fields.map((f) => `<div class="mb-3"><label class="form-label" for="f_${f.k}">${f.l}</label>${
      f.t === 'select' ? `<select class="form-select" id="f_${f.k}" ${f.req === false ? '' : 'required'}>${f.opts.map((o) => `<option>${o}</option>`).join('')}</select>`
      : f.t === 'textarea' ? `<textarea class="form-control" id="f_${f.k}" rows="3" ${f.req === false ? '' : 'required'}></textarea>`
      : `<input class="form-control" id="f_${f.k}" type="${f.t || 'text'}" ${f.req === false ? '' : 'required'} ${f.t === 'number' ? 'min="0"' : ''}>`}<div class="invalid-feedback">Nhập ${f.l.toLowerCase()}.</div></div>`).join('')}</div>
    <div class="modal-footer"><button type="button" class="btn btn-line text-dark" data-bs-dismiss="modal">Hủy</button><button class="btn btn-sw">Lưu</button></div></form></div></div>`).appendTo('body');
  const modal = new bootstrap.Modal(modalEl[0]);
  const box = $('#a-content').html(`<div class="d-flex justify-content-between flex-wrap gap-2 mb-3"><input class="form-control w-auto" id="tq" placeholder="Tìm kiếm..." aria-label="Tìm kiếm">${cfg.noAdd ? '' : `<button class="btn btn-sw" id="tadd"><i class="bi bi-plus-lg"></i> ${cfg.addLabel}</button>`}</div><div class="table-responsive"><table class="a-table"><thead><tr>${cfg.cols.map((c) => `<th>${c.l}</th>`).join('')}<th></th></tr></thead><tbody id="tb"></tbody></table></div>`);
  function draw() {
    const list = rows.filter((r) => JSON.stringify(Object.values(r)).toLowerCase().includes(q));
    $('#tb').html(list.length ? list.map((r) => `<tr>${cfg.cols.map((c) => `<td>${c.f ? c.f(r) : r[c.k]}</td>`).join('')}<td class="text-nowrap text-end">${cfg.extra ? cfg.extra(r) : ''}${cfg.noEdit ? '' : `<button class="act ed" data-id="${r.id}" aria-label="Sửa"><i class="bi bi-pencil"></i></button>`}<button class="act del" data-id="${r.id}" aria-label="Xóa"><i class="bi bi-trash"></i></button></td></tr>`).join('')
      : `<tr><td colspan="${cfg.cols.length + 1}" class="text-center text-muted-sw py-4">Chưa có dữ liệu phù hợp.</td></tr>`);
  }
  const open = (r) => {
    editId = r ? r.id : null; modalEl.find('.modal-title').text(r ? 'Sửa thông tin' : cfg.addLabel); modalEl.find('form').removeClass('was-validated');
    cfg.fields.forEach((f) => modalEl.find('#f_' + f.k).val(r ? r[f.k] : f.t === 'select' ? f.opts[0] : ''));
    modal.show();
  };
  $('#tq').on('input', function () { q = this.value.toLowerCase(); draw(); });
  $('#tadd').on('click', () => open(null));
  box.on('click', '.ed', function () { open(rows.find((r) => String(r.id) === String($(this).data('id')))); });
  box.on('click', '.del', function () { if (confirm('Xóa mục này?')) { rows = rows.filter((r) => String(r.id) !== String($(this).data('id'))); save(); draw(); toast('Đã xóa'); } });
  modalEl.find('form').on('submit', function (e) {
    e.preventDefault(); if (!this.checkValidity()) { $(this).addClass('was-validated'); return; }
    const obj = {}; cfg.fields.forEach((f) => { const v = modalEl.find('#f_' + f.k).val(); obj[f.k] = f.t === 'number' ? Number(v) : v; });
    if (editId) rows = rows.map((r) => (r.id === editId ? { ...r, ...obj } : r)); else rows.unshift({ id: Date.now(), ...obj });
    save(); draw(); modal.hide(); toast('Đã lưu');
  });
  draw();
}
