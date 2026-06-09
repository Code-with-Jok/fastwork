export const kpiData = {
  contractValue: 58803,
  revenue: 36049,
  profit: 35163,
  cost: 886.1,
};

export const constructionStatus = {
  total: 9,
  risk: 3,
  behindSchedule: 2,
};

export const executionResult = {
  arising: 14679,
  productionValue: 22880,
  acceptanceValue: 36049,
};

export const revenueChartData = [
  { month: '7/2025', revenue: 2100, cost: 1800 },
  { month: '8/2025', revenue: 2800, cost: 2200 },
  { month: '9/2025', revenue: 3200, cost: 2600 },
  { month: '10/2025', revenue: 2900, cost: 2500 },
  { month: '11/2025', revenue: 3800, cost: 3100 },
  { month: '12/2025', revenue: 4500, cost: 3700 },
  { month: '1/2026', revenue: 3900, cost: 3200 },
  { month: '2/2026', revenue: 2700, cost: 2300 },
  { month: '3/2026', revenue: 3500, cost: 2900 },
  { month: '4/2026', revenue: 4200, cost: 3500 },
  { month: '5/2026', revenue: 4800, cost: 3900 },
  { month: '6/2026', revenue: 5100, cost: 4100 },
];

export const cashFlowData = [
  { month: '7/2025', thu: 1800, chi: 1500 },
  { month: '8/2025', thu: 2500, chi: 2100 },
  { month: '9/2025', thu: 2900, chi: 2400 },
  { month: '10/2025', thu: 2600, chi: 2200 },
  { month: '11/2025', thu: 3400, chi: 2800 },
  { month: '12/2025', thu: 4200, chi: 3400 },
  { month: '1/2026', thu: 3600, chi: 2900 },
  { month: '2/2026', thu: 2400, chi: 2000 },
  { month: '3/2026', thu: 3200, chi: 2600 },
  { month: '4/2026', thu: 3900, chi: 3200 },
  { month: '5/2026', thu: 4500, chi: 3600 },
  { month: '6/2026', thu: 4800, chi: 3900 },
];

export const ownerDebt = {
  total: 14679,
  items: [
    { label: 'Đề nghị thanh toán', value: 22880 },
    { label: 'Giá trị giữ lại', value: 1144 },
    { label: 'Tạm ứng', value: 5013 },
    { label: 'Giá trị thanh toán', value: 4044 },
  ],
  actualCollection: 9057,
  ownerOwes: 14679,
};

export const contractorDebt = {
  total: 8526,
  items: [
    { label: 'Đề nghị thanh toán', value: 14320 },
    { label: 'Giá trị giữ lại', value: 716 },
    { label: 'Tạm ứng', value: 3108 },
    { label: 'Giá trị thanh toán', value: 2496 },
  ],
  actualPayment: 5604,
  contractorOwes: 8526,
};

export const debtProjects = [
  {
    stt: 1,
    project: 'Nhà máy thủy điện Sông Côn 2 - Giai đoạn 3',
    contractValue: 12500000000,
    paymentRequest: 8200000000,
    retainedValue: 410000000,
    advance: 1800000000,
    paidValue: 6500000000,
  },
  {
    stt: 2,
    project: 'Khu đô thị Vạn Phúc City - Hạ tầng kỹ thuật',
    contractValue: 9800000000,
    paymentRequest: 6100000000,
    retainedValue: 305000000,
    advance: 1200000000,
    paidValue: 4800000000,
  },
  {
    stt: 3,
    project: 'Cầu vượt nút giao An Phú - TP.HCM',
    contractValue: 18200000000,
    paymentRequest: 11500000000,
    retainedValue: 575000000,
    advance: 2500000000,
    paidValue: 9200000000,
  },
  {
    stt: 4,
    project: 'Trường THPT chuyên Lê Hồng Phong mở rộng',
    contractValue: 4500000000,
    paymentRequest: 2800000000,
    retainedValue: 140000000,
    advance: 600000000,
    paidValue: 2200000000,
  },
  {
    stt: 5,
    project: 'Bệnh viện Đa khoa tỉnh Bình Dương - Khu B',
    contractValue: 22000000000,
    paymentRequest: 14200000000,
    retainedValue: 710000000,
    advance: 3100000000,
    paidValue: 11000000000,
  },
];

export const costPieData = [
  { name: 'Chi phí chung', value: 180, color: '#17B799' },
  { name: 'Chi phí nhân công', value: 240, color: '#3D9760' },
  { name: 'Chi phí vật liệu', value: 350, color: '#F5A623' },
  { name: 'Chi phí khác', value: 116.1, color: '#E85347' },
];

export const costBarData = [
  {
    project: 'DA1',
    laborBudget: 45, laborActual: 52,
    generalBudget: 30, generalActual: 28,
    otherBudget: 20, otherActual: 25,
    materialBudget: 80, materialActual: 90,
  },
  {
    project: 'DA2',
    laborBudget: 60, laborActual: 58,
    generalBudget: 40, generalActual: 42,
    otherBudget: 25, otherActual: 22,
    materialBudget: 100, materialActual: 95,
  },
  {
    project: 'DA3',
    laborBudget: 35, laborActual: 40,
    generalBudget: 25, generalActual: 30,
    otherBudget: 15, otherActual: 18,
    materialBudget: 65, materialActual: 75,
  },
  {
    project: 'DA4',
    laborBudget: 80, laborActual: 72,
    generalBudget: 55, generalActual: 50,
    otherBudget: 30, otherActual: 28,
    materialBudget: 120, materialActual: 110,
  },
  {
    project: 'DA5',
    laborBudget: 50, laborActual: 55,
    generalBudget: 35, generalActual: 38,
    otherBudget: 18, otherActual: 20,
    materialBudget: 90, materialActual: 98,
  },
];

export const financialTableData = [
  {
    key: '1', stt: 1,
    project: 'DEMO Dự án Sơn Chơn nhà máy thủy điện TSNK (SNK)',
    customer: 'Ban QLDA thủy điện Miền Trung',
    contractValue: 58803000000,
    budget: 55000000000,
    plannedProfit: 8500000000,
    revenue: 36049000000,
    actualCost: 3781000000,
    actualProfit: 14000000000,
  },
  {
    key: '2', stt: 2,
    project: 'DEMO Mặt trời công lập đất to điện',
    customer: 'Công ty CP Năng lượng Mặt Trời Việt',
    contractValue: 12500000000,
    budget: 11800000000,
    plannedProfit: 1800000000,
    revenue: 8200000000,
    actualCost: 680000000,
    actualProfit: 2100000000,
  },
  {
    key: '3', stt: 3,
    project: 'ANH KHẾ - DỰ ÁN PHGTV SKY PARK BÌNH DƯƠNG (PPMC)',
    customer: 'Công ty TNHH Phát triển BĐS PPMC',
    contractValue: 22000000000,
    budget: 20500000000,
    plannedProfit: 3200000000,
    revenue: 14200000000,
    actualCost: 1240000000,
    actualProfit: 4800000000,
  },
  {
    key: '4', stt: 4,
    project: 'BIỆT THỰ ANH SƠN',
    customer: 'Ông Nguyễn Văn Sơn',
    contractValue: 4500000000,
    budget: 4200000000,
    plannedProfit: 650000000,
    revenue: 2800000000,
    actualCost: 240000000,
    actualProfit: 920000000,
  },
  {
    key: '5', stt: 5,
    project: 'Cầu vượt nút giao An Phú Đông',
    customer: 'Ban QLDA Đầu tư Xây dựng TP.HCM',
    contractValue: 18200000000,
    budget: 17000000000,
    plannedProfit: 2600000000,
    revenue: 11500000000,
    actualCost: 980000000,
    actualProfit: 3500000000,
  },
  {
    key: '6', stt: 6,
    project: 'Nhà máy xử lý nước thải KCN Long Hậu',
    customer: 'Công ty CP KCN Long Hậu',
    contractValue: 9800000000,
    budget: 9200000000,
    plannedProfit: 1400000000,
    revenue: 6100000000,
    actualCost: 520000000,
    actualProfit: -280000000,
  },
  {
    key: '7', stt: 7,
    project: 'Trường THPT Nguyễn Du – Cơ sở 2',
    customer: 'Sở Giáo dục & Đào tạo TP.HCM',
    contractValue: 6800000000,
    budget: 6400000000,
    plannedProfit: 980000000,
    revenue: 4200000000,
    actualCost: 360000000,
    actualProfit: 1100000000,
  },
  {
    key: '8', stt: 8,
    project: 'Khu dân cư Thạnh Mỹ Lợi – Hạ tầng kỹ thuật',
    customer: 'Công ty TNHH TM&DV Thạnh Mỹ',
    contractValue: 15500000000,
    budget: 14800000000,
    plannedProfit: 2200000000,
    revenue: 9800000000,
    actualCost: 840000000,
    actualProfit: 2900000000,
  },
];

export const projectProgressData = [
  {
    id: '1',
    name: 'DEMO DỰ ÁN SƠN CHƠN NHÀ MÁY THIÊN ĐIỆN (SNK)',
    bgColor: '#0B3175',
    construction: 15,
    cost: 8,
    time: 710.58,
    revenue: 50,
  },
  {
    id: '2',
    name: 'DEMO MẶT TRỜI CÔNG LẬP, LẮP ĐẶT TO ĐIỆN',
    bgColor: '#17B799',
    construction: 0,
    cost: 6,
    time: 0,
    revenue: 0,
  },
  {
    id: '3',
    name: 'ANH KHẾ - DỰ ÁN PHGTV SKY PARK BÌNH DƯƠNG (PPMC)',
    bgColor: '#3D9760',
    construction: 0,
    cost: 0,
    time: 1273.91,
    revenue: 0,
  },
  {
    id: '4',
    name: 'BIỆT THỰ ANH SƠN',
    bgColor: '#E85347',
    construction: 0,
    cost: 0,
    time: 0,
    revenue: 0,
  },
  {
    id: '5',
    name: 'CẦU VƯỢT NÚT GIAO AN PHÚ ĐÔNG',
    bgColor: '#F5A623',
    construction: 45,
    cost: 32,
    time: 65,
    revenue: 58,
  },
];

export const formatVND = (value: number): string => {
  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + ' tỷ';
  }
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + ' triệu';
  }
  return value.toLocaleString('vi-VN');
};

export const formatBillion = (value: number): string => {
  return (value / 1000000000).toFixed(3).replace(/\./g, ',').replace(',', '.').replace(',', '.') + '';
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString('vi-VN');
};
