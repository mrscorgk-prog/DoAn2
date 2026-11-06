/* Hàm dùng chung: định dạng tiền, giỏ hàng, thẻ sản phẩm */
const money = (v) => v.toLocaleString('vi-VN') + '₫';
const getP = (id) => PRODUCTS.find((p) => p.id === Number(id));
const qs = (k) => new URLSearchParams(location.search).get(k);

const Cart = {
  key: 'sw_cart',
  all() { try { return JSON.parse(localStorage.getItem(this.key)) || []; } catch (e) { return []; } },
  save(items) { try { localStorage.setItem(this.key, JSON.stringify(items)); } catch (e) {} this.badge(); },
  add(id, size, color, qty = 1) {
    const items = this.all();
    const f = items.find((i) => i.id === id && i.size === size && i.color === color);
    if (f) f.qty += qty; else items.push({ id, size, color, qty });
    this.save(items);
  },
  setQty(idx, qty) { const it = this.all(); if (it[idx]) { it[idx].qty = Math.max(1, qty); this.save(it); } },
  remove(idx) { const it = this.all(); it.splice(idx, 1); this.save(it); },
  clear() { this.save([]); },
  count() { return this.all().reduce((s, i) => s + i.qty, 0); },
  total() { return this.all().reduce((s, i) => s + getP(i.id).price * i.qty, 0); },
  badge() { $('.cart-count').text(this.count()).toggleClass('d-none', this.count() === 0); },
};

function productCard(p) {
  const price = `<span class="price">${money(p.price)}</span>` + (p.old ? ` <s class="price-old">${money(p.old)}</s>` : '');
  return `<div class="col-6 col-md-4 col-xl-3"><a class="pcard" href="product-detail.html?id=${p.id}">
    <div class="pcard-img" style="background:${p.bg}">${p.badge ? `<span class="pbadge">${p.badge}</span>` : ''}<img src="img/${p.icon}.svg" alt="${p.name}"></div>
    <div class="pcard-body"><div class="pcard-cat">${p.cat}</div><div class="pcard-name">${p.name}</div><div>${price}</div></div></a></div>`;
}
function toast(msg) {
  const t = $(`<div class="sw-toast" role="status">${msg}</div>`).appendTo('body');
  setTimeout(() => t.addClass('show'), 10);
  setTimeout(() => { t.removeClass('show'); setTimeout(() => t.remove(), 300); }, 2200);
}
