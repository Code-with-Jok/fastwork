export interface ProjectListItem {
  id: string;
  name: string;
  owner: string;
  progress: number;
}

export const projectList: ProjectListItem[] = [
  { id: 'demo-sua-chua-nha-anh-thien', name: '(DEMO) Dự án sửa chữa nhà anh Thiện (Dân dụng)', owner: 'ADMIN', progress: 15 },
  { id: 'demo-me-tu-dien', name: '[DEMO] M&E Thi công, lắp đặt tủ điện', owner: 'ADMIN', progress: 0 },
  { id: 'anh-khe-picity-sky-park', name: 'ANH KHẾ - DỰ ÁN PICITY SKY PARK BÌNH DƯƠNG (90M2)', owner: 'Nguyễn Thành Tâm', progress: 0 },
  { id: 'biet-thu-anh-son', name: 'BIỆT THỰ ANH SƠN', owner: 'Nguyễn Thành Tâm', progress: 1 },
  { id: 'biet-thu-anh-chi-hoang-tham', name: 'BIỆT THỰ NHÀ ANH CHỊ HOÀNG - THẨM', owner: 'ADMIN', progress: 100 },
  { id: 'biet-thu-anh-hoang', name: 'BIỆT THỰ NHÀ ANH HOÀNG', owner: 'Nguyễn Thành Tâm', progress: 0 },
  { id: 'binh-goi', name: 'Bình Gói', owner: 'XÂY DỰNG ONECONS', progress: 39 },
  { id: 'can-ho-hpoc-chi-a', name: 'Căn hộ HPOC - Chị A', owner: 'NỘI THẤT ON HOME ASIA', progress: 18 },
  { id: 'cau-duong-g8', name: 'Cầu đường - G8', owner: 'ADMIN', progress: 4 },
  { id: 'chi-be-lavita-thuan-an', name: 'CHỊ BÉ - DỰ ÁN LAVITA THUẬN AN (TRỌN GÓI - 70M2)', owner: 'Nguyễn Thành Tâm', progress: 63 },
  { id: 'cong-trinh-chi-giang', name: 'Công trình Chị Giang', owner: 'XÂY DỰNG ONECONS', progress: 0 },
  { id: 'hoan-thien-nha-chi-thom-can-tho', name: 'HOÀN THIỆN - NHÀ CHỊ THƠM CẦN THƠ', owner: 'NỘI THẤT ID GROUP', progress: 18 },
  { id: 'khach-san-marvella-vietcons', name: 'Khách sạn MARVELLA - VIETCONS', owner: 'ADMIN', progress: 22 },
  { id: 'lg-clinic', name: 'LG CLINIC', owner: 'NỘI THẤT F.INTERIOR', progress: 35 },
  { id: 'me-dien', name: 'ME - Điện', owner: 'ADMIN', progress: 8 },
  { id: 'me-nang-luong-mat-troi', name: 'ME - Năng lượng mặt trời', owner: 'ADMIN', progress: 12 },
  { id: 'thuy-dien-song-con-2', name: 'Nhà máy thủy điện Sông Côn 2 - Giai đoạn 3', owner: 'XÂY DỰNG ONECONS', progress: 52 },
  { id: 'van-phuc-city-ha-tang', name: 'Khu đô thị Vạn Phúc City - Hạ tầng kỹ thuật', owner: 'Nguyễn Thành Tâm', progress: 28 },
  { id: 'cau-vuot-an-phu', name: 'Cầu vượt nút giao An Phú - TP.HCM', owner: 'ADMIN', progress: 65 },
  { id: 'thpt-le-hong-phong', name: 'Trường THPT chuyên Lê Hồng Phong mở rộng', owner: 'NỘI THẤT ID GROUP', progress: 9 },
  { id: 'benh-vien-binh-duong-b', name: 'Bệnh viện Đa khoa tỉnh Bình Dương - Khu B', owner: 'XÂY DỰNG VIETCONS', progress: 41 },
  { id: 'nha-pho-anh-dung-q7', name: 'Nhà phố Anh Dũng - Quận 7', owner: 'Nguyễn Thành Tâm', progress: 72 },
  { id: 'van-phong-abc', name: 'Văn phòng Công ty ABC - Tầng 5-7', owner: 'NỘI THẤT F.INTERIOR', progress: 0 },
  { id: 'sun-avenue-sua-chua', name: 'Chung cư The Sun Avenue - Sửa chữa căn hộ', owner: 'NỘI THẤT ON HOME ASIA', progress: 5 },
  { id: 'showroom-vinfast-q9', name: 'Showroom ô tô VinFast - Quận 9', owner: 'XÂY DỰNG ONECONS', progress: 88 },
  { id: 'nha-hang-hai-san-phuong-nam', name: 'Nhà hàng Hải sản Phương Nam', owner: 'ADMIN', progress: 100 },
  { id: 'biet-thu-nghi-duong-da-lat', name: 'Biệt thự nghỉ dưỡng Đà Lạt', owner: 'Nguyễn Thành Tâm', progress: 31 },
  { id: 'ttm-binh-tan', name: 'Trung tâm thương mại Bình Tân', owner: 'XÂY DỰNG VIETCONS', progress: 17 },
];
