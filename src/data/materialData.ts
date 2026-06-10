export const materialBudgetSummary = {
  total: 45714, // tỷ
  totalVND: '45.713.554.526 VND',
  purchased: 6602, // tỷ
  remaining: 39112, // tỷ
};

export const purchasedSparkline = [
  { v: 4 }, { v: 6 }, { v: 3 }, { v: 8 }, { v: 5 }, { v: 9 }, { v: 4 }, { v: 7 }, { v: 5 }, { v: 8 },
];

export const remainingSparkline = [
  { v: 5 }, { v: 7 }, { v: 4 }, { v: 6 }, { v: 8 }, { v: 5 }, { v: 7 }, { v: 4 }, { v: 6 }, { v: 8 },
];

export const importExportTotals = {
  nhap: 9434, // tỷ
  xuat: 2416, // tỷ
};

// chart axis values are in nghìn tỷ (thousand tỷ)
export const importExportTrend = [
  { month: '7/2025', nhap: 0, xuat: 0 },
  { month: '8/2025', nhap: 0, xuat: 0 },
  { month: '9/2025', nhap: 0.5, xuat: 0.4 },
  { month: '10/2025', nhap: 0, xuat: 0 },
  { month: '11/2025', nhap: 0, xuat: 0 },
  { month: '12/2025', nhap: 3.6, xuat: 1.3 },
  { month: '1/2026', nhap: 0, xuat: 0 },
  { month: '2/2026', nhap: 0, xuat: 0 },
  { month: '3/2026', nhap: 0, xuat: 0 },
  { month: '4/2026', nhap: 0, xuat: 0 },
  { month: '5/2026', nhap: 0, xuat: 0 },
  { month: '6/2026', nhap: 0, xuat: 0 },
];

// values are in triệu VND
export const materialBudgetPieData = [
  { name: 'Cầu đường - G8', value: 23398000, color: '#e53e3e' },
  { name: 'ME - Điện', value: 14213000, color: '#fbbf24' },
  { name: 'Bình Gởi', value: 7094000, color: '#22CCB2' },
  { name: 'Trường ĐH CNSG', value: 1009000, color: '#3b82f6' },
  { name: 'Showroom Peugeot', value: 266.7, color: '#10b981' },
  { name: 'Biệt thự A', value: 64.1, color: '#a78bfa' },
  { name: 'Biệt thự B', value: 64.1, color: '#06b6d4' },
  { name: 'Căn hộ HPOC', value: 51.4, color: '#fb7185' },
  { name: 'Khác', value: 27.5, color: '#94a3b8' },
];

export type Top10Material = {
  rank: number;
  name: string;
  value: string;
  purchasedPct: number;
};

export const top10Materials: Top10Material[] = [
  { rank: 1, name: 'Cáp ngầm + phụ kiện', value: '3,9 tỷ', purchasedPct: 95 },
  { rank: 2, name: 'Cáp ngầm 24kV- CXV/DSTA 3x150mm2', value: '2,72 tỷ', purchasedPct: 6 },
  { rank: 3, name: 'MBT 400kVA - 22/0,4kV (Amorphous)', value: '2,24 tỷ', purchasedPct: 6 },
  { rank: 4, name: 'Tủ hạ thế composite (1200x600x450) + phụ kiện', value: '2,204 tỷ', purchasedPct: 6 },
  { rank: 5, name: 'Bê tông nhựa loại C19, R19 hàm lượng 4,5%', value: '1,658 tỷ', purchasedPct: 50 },
  { rank: 6, name: 'Bê tông nhựa loại C19, R19 hàm lượng 4,5%', value: '1,658 tỷ', purchasedPct: 6 },
  { rank: 7, name: 'Cáp ngầm CXV/DSTA 3x95 + 1x50 - 0,6/1kV', value: '1,397 tỷ', purchasedPct: 30 },
  { rank: 8, name: 'Cấp phối đá dăm lớp dưới', value: '1,247 tỷ', purchasedPct: 30 },
  { rank: 9, name: 'Cáp ngầm hạ thế 0,6/1kV-CXV/DSTA 4x10mm2', value: '1,246 tỷ', purchasedPct: 30 },
  { rank: 10, name: 'Cáp ngầm CXV/DSTA 3x120 + 1x70 - 0,6/1kV', value: '1,207 tỷ', purchasedPct: 30 },
];

export type TreemapItem = {
  name: string;
  label: string;
  size: number;
  color: string;
};

export const purchaseTreemapData: TreemapItem[] = [
  { name: 'Fastwork', label: '3,995 tỷ', size: 3995, color: '#3b82f6' },
  { name: 'Nhà Cung cấp VLXD Eg...', label: '959,5 triệu', size: 1100, color: '#10b981' },
  { name: 'CÔNG TY TNHH XÂY DỰ...', label: '900,5 triệu', size: 1050, color: '#fbbf24' },
  { name: 'Công ty vật liệu...', label: '359,1 triệu', size: 450, color: '#f87171' },
  { name: 'Fastwork', label: '265 triệu', size: 320, color: '#7dd3fc' },
  { name: '', label: '', size: 90, color: '#a78bfa' },
  { name: '', label: '', size: 80, color: '#f472b6' },
  { name: '', label: '', size: 70, color: '#34d399' },
  { name: '', label: '', size: 60, color: '#fb923c' },
];

export type MaterialDemandRow = {
  key: string;
  stt: number;
  proposalName: string;
  proposalType: string;
  materialName: string;
  unit: string;
  quantity: number;
  neededDate: string;
  approvalDeadline: string;
  daysOverdue: number;
  project: string;
};

export const materialDemandData: MaterialDemandRow[] = [
  {
    key: '1', stt: 1, proposalName: 'đề xuất cấp ống', proposalType: 'Cấp vật tư',
    materialName: 'Ống nhựa HDPE D25mm, L=300m', unit: 'm', quantity: 15,
    neededDate: '23-08-2025', approvalDeadline: '23-08-2025', daysOverdue: 290,
    project: 'BIỆT THỰ NHÀ ANH CHỊ HOÀNG - THẮM',
  },
  {
    key: '2', stt: 2, proposalName: 'đề xuất cấp ống', proposalType: 'Cấp vật tư',
    materialName: 'Măng sông nhựa PPR D25', unit: 'Cái', quantity: 13,
    neededDate: '23-08-2025', approvalDeadline: '23-08-2025', daysOverdue: 290,
    project: 'BIỆT THỰ NHÀ ANH CHỊ HOÀNG - THẮM',
  },
];
