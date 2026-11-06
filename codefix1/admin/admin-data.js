/* Dữ liệu mẫu cho trang quản trị */
const STATUS = { cho: 'Chờ xác nhận', giao: 'Đang giao', xong: 'Hoàn thành', huy: 'Đã hủy' };
const ADMIN_DATA = {
  categories: [
    { id: 1, ten: 'Áo nam', nhom: 'Trang phục', mota: 'Áo thun, tank, hoodie nam' }, { id: 2, ten: 'Quần nam', nhom: 'Trang phục', mota: 'Short, jogger nam' },
    { id: 3, ten: 'Áo nữ', nhom: 'Trang phục', mota: 'Bra, crop top nữ' }, { id: 4, ten: 'Quần nữ', nhom: 'Trang phục', mota: 'Legging, short nữ' },
    { id: 5, ten: 'Lifting strap', nhom: 'Phụ kiện', mota: 'Dây kéo hỗ trợ lực nắm' }, { id: 6, ten: 'Quấn cổ tay', nhom: 'Phụ kiện', mota: 'Wrist wrap' },
    { id: 7, ten: 'Đai lưng', nhom: 'Phụ kiện', mota: 'Lifting belt' }, { id: 8, ten: 'Quấn gối', nhom: 'Phụ kiện', mota: 'Knee sleeve' },
  ],
  orders: [
    { id: 'SW100231', kh: 'Nguyễn Minh Khoa', sdt: '0901234567', dc: 'Hưng Yên', ngay: '03/11/2026', pay: 'COD', st: 'cho', items: [[1, 'M', 2], [9, 'Free size', 1]] },
    { id: 'SW100230', kh: 'Trần Thu Hà', sdt: '0912345678', dc: 'Hà Nội', ngay: '03/11/2026', pay: 'Chuyển khoản', st: 'giao', items: [[6, 'M', 1], [5, 'S', 1]] },
    { id: 'SW100229', kh: 'Lê Văn Đức', sdt: '0923456789', dc: 'Hải Phòng', ngay: '02/11/2026', pay: 'COD', st: 'giao', items: [[11, 'L', 1]] },
    { id: 'SW100228', kh: 'Phạm Quang Huy', sdt: '0934567890', dc: 'Nam Định', ngay: '01/11/2026', pay: 'COD', st: 'xong', items: [[4, 'L', 1], [10, '60cm', 1]] },
    { id: 'SW100227', kh: 'Đỗ Thảo Vy', sdt: '0945678901', dc: 'Hà Nội', ngay: '31/10/2026', pay: 'Chuyển khoản', st: 'xong', items: [[8, 'M', 2]] },
    { id: 'SW100226', kh: 'Vũ Anh Tuấn', sdt: '0956789012', dc: 'Thái Bình', ngay: '30/10/2026', pay: 'COD', st: 'huy', items: [[3, 'XL', 1]] },
    { id: 'SW100225', kh: 'Bùi Hải Nam', sdt: '0967890123', dc: 'Hưng Yên', ngay: '29/10/2026', pay: 'COD', st: 'xong', items: [[12, 'M', 1], [2, 'L', 1]] },
  ],
  customers: [
    { id: 1, ten: 'Nguyễn Minh Khoa', email: 'khoa@mail.com', sdt: '0901234567', ngay: '10/09/2026', tt: 'Hoạt động' },
    { id: 2, ten: 'Trần Thu Hà', email: 'ha@mail.com', sdt: '0912345678', ngay: '15/09/2026', tt: 'Hoạt động' },
    { id: 3, ten: 'Lê Văn Đức', email: 'duc@mail.com', sdt: '0923456789', ngay: '01/10/2026', tt: 'Hoạt động' },
    { id: 4, ten: 'Phạm Quang Huy', email: 'huy@mail.com', sdt: '0934567890', ngay: '12/10/2026', tt: 'Hoạt động' },
    { id: 5, ten: 'Vũ Anh Tuấn', email: 'tuan@mail.com', sdt: '0956789012', ngay: '20/10/2026', tt: 'Đã khóa' },
  ],
  promos: [
    { id: 1, code: 'SEBASTIAN10', giam: 10, bd: '2026-11-01', kt: '2026-12-31' },
    { id: 2, code: 'GYMDAY15', giam: 15, bd: '2026-11-11', kt: '2026-11-15' },
    { id: 3, code: 'NEWMEMBER5', giam: 5, bd: '2026-10-01', kt: '2026-12-31' },
  ],
  banners: [
    { id: 1, ten: 'Bộ sưu tập mùa đông', link: 'products.html?group=nam', vitri: 'Trang chủ - đầu trang' },
    { id: 2, ten: 'Phụ kiện cho set nặng', link: 'products.html?group=phukien', vitri: 'Trang chủ - giữa trang' },
    { id: 3, ten: 'Giảm giá legging', link: 'product-detail.html?id=6', vitri: 'Trang danh mục' },
  ],
  feedback: [
    { id: 1, ten: 'Hoàng Nam', email: 'nam@mail.com', nd: 'Shop có size XXL cho đai lưng không?', ngay: '03/11/2026' },
    { id: 2, ten: 'Mai Phương', email: 'phuong@mail.com', nd: 'Mình muốn đổi size áo bra từ S sang M.', ngay: '02/11/2026' },
    { id: 3, ten: 'Quốc Bảo', email: 'bao@mail.com', nd: 'Khi nào có thêm màu olive cho hoodie?', ngay: '30/10/2026' },
  ],
  revenue7: [['T2', 4.2], ['T3', 6.8], ['T4', 3.9], ['T5', 7.5], ['T6', 9.1], ['T7', 12.4], ['CN', 8.3]], // triệu đồng
  revenue6m: [['Tháng 6', 38], ['Tháng 7', 45], ['Tháng 8', 52], ['Tháng 9', 61], ['Tháng 10', 74], ['Tháng 11', 29]],
};
const stock = { 1: 42, 2: 30, 3: 25, 4: 8, 5: 18, 6: 6, 7: 22, 8: 15, 9: 60, 10: 35, 11: 4, 12: 12 };
