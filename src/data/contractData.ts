export const contractKpi = {
  contractValue: 58809,
  contractCount: 29,
  phatSinhValue: 0,
  phatSinhCount: 0,
  thuThucTe: 18257,
  thuThucTePct: 52,
  chuDauTuConNo: 17792,
  chuDauTuConNoPct: 50,
  sanLuong: 14376,
  sanLuongPct: 24,
  nghiemThu: 26691,
  nghiemThuPct: 45,
  deNghiThanhToan: 35264,
  deNghiThanhToanPct: 60,
  deNghiTTSanLuongPct: 245,
};

export const overviewBars = [
  { label: 'Giá trị hợp đồng', pct: 100, value: '58,809 tỷ', color: '#3b82f6' },
  { label: 'Sản lượng', pct: 24.45, value: '14,376 tỷ', color: '#17B799' },
  { label: 'Nghiệm thu', pct: 45.39, value: '26,691 tỷ', color: '#06b6d4' },
  { label: 'Đề nghị thanh toán', pct: 59.96, value: '35,264 tỷ', color: '#10b981' },
  { label: 'Thu thực tế', pct: 31.05, value: '18,257 tỷ', color: '#f7921e' },
];

export const top5ContractProjects = [
  { name: 'Cầu đường - G8', value: 12328, max: 14000 },
  { name: 'ME - Điện', value: 8700, max: 14000 },
  { name: 'Bình Gởi', value: 8343, max: 14000 },
  { name: 'Trường ĐH CN Sài Gòn - GĐ4', value: 7286, max: 14000 },
  { name: 'SHOWROOM PEUGEOT PMH', value: 3578, max: 14000 },
];

export const contractPieData = [
  { name: 'PER/HD001', value: 12328, color: '#3b82f6' },
  { name: 'P20316_GT-001', value: 8343, color: '#10b981' },
  { name: '12/HĐTCDSG-QLDA', value: 7286, color: '#f7921e' },
  { name: '32060/2024/HĐXD-TH...', value: 3578, color: '#e53e3e' },
  { name: 'BEENEST001', value: 930, color: '#a78bfa' },
  { name: 'ND/001', value: 786, color: '#06b6d4' },
  { name: 'ME/0005', value: 191, color: '#fbbf24' },
  { name: 'Khác', value: 25367, color: '#8094ae' },
];

export type ContractRow = {
  key: string;
  isGroup: boolean;
  stt?: number;
  project?: string;
  soHopDong: string;
  hopDongGoc: number;
  phuLucHD: number;
  tong: number;
  tyLeTamUng: string;
  sanLuong: number;
  nghiemThu: number;
  deNghiTT: number;
  tyLeDNTTSL: string;
  xuatHoaDon: number;
  tongTamUng: number;
  thanhToan: number;
  thuThucTe: number;
  tyLeTT: string;
  cdtConNo: number;
  thuHoiTamUng: number;
  giaTriGiuLai: number;
};

export const contractTableData: ContractRow[] = [
  // Group: FCDD/154/2025
  {
    key: 'g1', isGroup: true, soHopDong: 'FCDD/154/2025', project: 'FCDD/154/2025',
    hopDongGoc: 1505154151, phuLucHD: 0, tong: 1505154151, tyLeTamUng: '0%',
    sanLuong: 0, nghiemThu: 0, deNghiTT: 451546245, tyLeDNTTSL: '0%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 451546245, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  {
    key: 'r1', isGroup: false, stt: 1, project: 'FCDD/154/2025', soHopDong: 'FCDD/154/2025',
    hopDongGoc: 1505154151, phuLucHD: 0, tong: 1505154151, tyLeTamUng: '0%',
    sanLuong: 0, nghiemThu: 0, deNghiTT: 451546245, tyLeDNTTSL: '0%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 451546245, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  // Group: Bình Gởi
  {
    key: 'g2', isGroup: true, soHopDong: 'Bình Gởi', project: 'Bình Gởi',
    hopDongGoc: 8342805814, phuLucHD: 0, tong: 8342805814, tyLeTamUng: '16,18%',
    sanLuong: 3682223404, nghiemThu: 3682223404, deNghiTT: 3127889894, tyLeDNTTSL: '84,95%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 3127889894, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  {
    key: 'r2', isGroup: false, stt: 1, project: 'Bình Gởi', soHopDong: 'P20316_GT-001',
    hopDongGoc: 8342805814, phuLucHD: 0, tong: 8342805814, tyLeTamUng: '16,18%',
    sanLuong: 3682223404, nghiemThu: 3682223404, deNghiTT: 3127889894, tyLeDNTTSL: '84,95%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 3127889894, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  // Group: Căn hộ HPOC - Chị A
  {
    key: 'g3', isGroup: true, soHopDong: 'Căn hộ HPOC - Chị A', project: 'Căn hộ HPOC - Chị A',
    hopDongGoc: 997000000, phuLucHD: 0, tong: 997000000, tyLeTamUng: '26,18%',
    sanLuong: 511193304, nghiemThu: 532698921, deNghiTT: 532698921, tyLeDNTTSL: '104,21%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 532698921, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  {
    key: 'r3a', isGroup: false, stt: 1, project: 'Căn hộ HPOC - Chị A', soHopDong: 'P20270_077-HĐTC/NT',
    hopDongGoc: 847000000, phuLucHD: 0, tong: 847000000, tyLeTamUng: '30,81%',
    sanLuong: 511193304, nghiemThu: 532698921, deNghiTT: 532698921, tyLeDNTTSL: '104,21%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 532698921, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  {
    key: 'r3b', isGroup: false, stt: 2, project: 'Căn hộ HPOC - Chị A', soHopDong: '02-OHA-2024',
    hopDongGoc: 150000000, phuLucHD: 0, tong: 150000000, tyLeTamUng: '0%',
    sanLuong: 0, nghiemThu: 0, deNghiTT: 0, tyLeDNTTSL: '0%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 0, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  // Group: Cầu đường - G8
  {
    key: 'g4', isGroup: true, soHopDong: 'Cầu đường - G8', project: 'Cầu đường - G8',
    hopDongGoc: 12327819428, phuLucHD: 0, tong: 12327819428, tyLeTamUng: '0%',
    sanLuong: 6033815381, nghiemThu: 6000456062, deNghiTT: 377084122, tyLeDNTTSL: '6,25%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 377084122, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  {
    key: 'r4', isGroup: false, stt: 1, project: 'Cầu đường - G8', soHopDong: 'PER/HD001',
    hopDongGoc: 12327819428, phuLucHD: 0, tong: 12327819428, tyLeTamUng: '0%',
    sanLuong: 6033815381, nghiemThu: 6000456062, deNghiTT: 377084122, tyLeDNTTSL: '6,25%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 377084122, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  // Group: CHI BÊ - DỰ ÁN LAVITA THUẬN AN
  {
    key: 'g5', isGroup: true, soHopDong: 'CHI BÊ - DỰ ÁN LAVITA THUẬN AN (TRỌN GÓI - 70M2)', project: 'CHI BÊ - DỰ ÁN LAVITA THUẬN AN (TRỌN GÓI - 70M2)',
    hopDongGoc: 99748000, phuLucHD: 0, tong: 99748000, tyLeTamUng: '0%',
    sanLuong: 64836200, nghiemThu: 64836200, deNghiTT: 64836200, tyLeDNTTSL: '0%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 64836200, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
  {
    key: 'r5', isGroup: false, stt: 1, project: 'CHI BÊ', soHopDong: 'HDTC001',
    hopDongGoc: 99748000, phuLucHD: 0, tong: 99748000, tyLeTamUng: '0%',
    sanLuong: 64836200, nghiemThu: 64836200, deNghiTT: 64836200, tyLeDNTTSL: '0%',
    xuatHoaDon: 0, tongTamUng: 0, thanhToan: 0, thuThucTe: 0, tyLeTT: '0%',
    cdtConNo: 64836200, thuHoiTamUng: 0, giaTriGiuLai: 0,
  },
];
