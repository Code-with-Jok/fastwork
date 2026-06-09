export const financeKpi = {
  contractValue: 58809,
  revenue: 36049,
  cost: 886.1,
  profit: 35163,
};

// Cơ cấu dòng thu — Sankey nodes & links
export const revenueSankeyData = {
  nodes: [
    { name: 'Tổng GT dự án' },
    { name: 'Tổng doanh thu' },
    { name: 'Chưa thực hiện' },
    { name: 'Nợ phải thu' },
    { name: 'Giá trị thanh toán' },
    { name: 'GT phạt, khấu trừ' },
    { name: 'Doanh thu giữ lại' },
    { name: 'Tổng thu' },
    { name: 'Tạm ứng còn lại' },
  ],
  links: [
    { source: 0, target: 1, value: 36049 },
    { source: 0, target: 2, value: 22760 },
    { source: 1, target: 3, value: 17792 },
    { source: 1, target: 4, value: 14419 },
    { source: 1, target: 5, value: 2000 },
    { source: 1, target: 6, value: 1838 },
    { source: 3, target: 7, value: 17792 },
    { source: 4, target: 7, value: 14419 },
    { source: 7, target: 8, value: 32211 },
  ],
};

export const revenueFlowDetails = {
  total: 18257,
  percentDNTT: 51,
  items: [
    { label: '1. Đề nghị thanh toán', value: 35264, unit: 'tỷ' },
    { label: '2. Giá trị giữ lại', value: 784.9, unit: 'triệu' },
    { label: '3. Tạm ứng', value: 3838, unit: 'tỷ' },
    { label: '4. Giá trị thanh toán', value: 14419, unit: 'tỷ' },
  ],
  actualCollection: 18257,
  ownerDebt: 17792,
};

// Nợ phải thu / Nợ phải trả
export const debtStatus = {
  receivable: {
    total: 20.26,
    overdue: 16.532,
    inTerm: 3.728,
  },
  payable: {
    total: 3.757,
    overdue: 0.1398,
    inTerm: 3.632,
  },
};

// Cơ cấu dòng chi — Sankey
export const expenseSankeyData = {
  nodes: [
    { name: 'Chi phí' },
    { name: 'Chi phí chung' },
    { name: 'Chi phí khác' },
    { name: 'Chi phí nhân công' },
    { name: 'Chi phí vật liệu' },
    { name: 'Tổng chi' },
    { name: 'Tổng phải trả' },
    { name: 'Khấu hao & khác' },
    { name: 'NCC VLXD Konrabi' },
    { name: 'Fastwork' },
  ],
  links: [
    { source: 0, target: 1, value: 180 },
    { source: 0, target: 2, value: 116 },
    { source: 0, target: 3, value: 240 },
    { source: 0, target: 4, value: 350 },
    { source: 1, target: 5, value: 180 },
    { source: 2, target: 5, value: 116 },
    { source: 3, target: 5, value: 240 },
    { source: 4, target: 5, value: 350 },
    { source: 5, target: 6, value: 800 },
    { source: 5, target: 7, value: 86 },
    { source: 6, target: 8, value: 500 },
    { source: 6, target: 9, value: 300 },
  ],
};

export const expenseFlowDetails = {
  total: 8209,
  subcontractor: {
    label: 'Chi thầu phụ',
    total: 2003,
    paid: 1823,
    owed: 180.2,
  },
  supplier: {
    label: 'Chi nhà cung cấp',
    total: 6206,
    paid: 2605,
    owed: 3601,
  },
};

// Bảng số liệu tài chính
export const financeTableData = [
  { key: '1', stt: 1, project: '(DEMO) Dự án sửa chữa nhà anh Thiện (Dân dụng)', contract: 1400000000, request: 700000000, actualCost: 0, paidCost: 0 },
  { key: '2', stt: 2, project: '[DEMO] M&E Thi công, lắp đặt tủ điện', contract: 190806543, request: 0, actualCost: 0, paidCost: 0 },
  { key: '3', stt: 3, project: 'ANH KHẾ - DỰ ÁN PICITY SKY PARK BÌNH DƯƠNG (90M2)', contract: 0, request: 0, actualCost: 0, paidCost: 0 },
  { key: '4', stt: 4, project: 'BIỆT THỰ ANH SƠN', contract: 2320384939, request: 696115482, actualCost: 0, paidCost: 0 },
  { key: '5', stt: 5, project: 'BIỆT THỰ NHÀ ANH CHI HOÀNG - THẦM', contract: 930000000, request: 916866600, actualCost: 0, paidCost: 0 },
  { key: '6', stt: 6, project: 'BIỆT THỨ NHÀ ANH HOÀNG', contract: 1505154151, request: 451546245, actualCost: 0, paidCost: 0 },
  { key: '7', stt: 7, project: 'Bình Gội', contract: 8342805814, request: 3127889894, actualCost: 0, paidCost: 2072512004 },
  { key: '8', stt: 8, project: 'Căn hộ HPOC - Chi A', contract: 997000000, request: 532698921, actualCost: 100800000, paidCost: 100800000 },
  { key: '9', stt: 9, project: 'Cầu đường - G8', contract: 13327819428, request: 377084122, actualCost: 0, paidCost: 0 },
  { key: '10', stt: 10, project: 'Cầu vượt nút giao An Phú Đông', contract: 18200000000, request: 11500000000, actualCost: 980000000, paidCost: 800000000 },
  { key: '11', stt: 11, project: 'Khu đô thị Vạn Phúc City - Hạ tầng', contract: 9800000000, request: 6100000000, actualCost: 520000000, paidCost: 400000000 },
  { key: '12', stt: 12, project: 'Nhà máy thủy điện Sông Côn 2 - GĐ 3', contract: 12500000000, request: 8200000000, actualCost: 0, paidCost: 0 },
];

// Dòng tiền dự án — line chart
const months = [
  '01/23','04/23','07/23','10/23',
  '01/24','04/24','07/24','10/24',
  '01/25','04/25','07/25','10/25',
  '01/26',
];

let cumThu = 0, cumChi = 0;
export const cashFlowTimeData = months.map((m, i) => {
  const thu = i < 4 ? 0 : Math.round(Math.random() * 1500 + 200);
  const chi = i < 4 ? 0 : Math.round(Math.random() * 1200 + 150);
  cumThu += thu;
  cumChi += chi;
  return {
    month: m,
    thu,
    chi,
    luyKeThu: cumThu,
    luyKeChi: cumChi,
    soDu: cumThu - cumChi,
  };
});
