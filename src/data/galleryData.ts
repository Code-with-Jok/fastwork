export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
}

export interface GalleryGroup {
  date: string;
  photos: GalleryPhoto[];
}

export const galleryGroups: GalleryGroup[] = [
  {
    date: '10 tháng 12, 2025',
    photos: [
      { id: 'g1-1', src: 'https://picsum.photos/seed/fc-gallery-01/600/800', caption: 'Ảnh hiện trường' },
      { id: 'g1-2', src: 'https://picsum.photos/seed/fc-gallery-02/800/600', caption: 'Khe co giãn đàn hồi2.jpg' },
      { id: 'g1-3', src: 'https://picsum.photos/seed/fc-gallery-03/800/600', caption: 'Khe co giãn đàn hồi.jpg' },
    ],
  },
  {
    date: '8 tháng 12, 2025',
    photos: [
      { id: 'g2-1', src: 'https://picsum.photos/seed/fc-gallery-04/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g2-2', src: 'https://picsum.photos/seed/fc-gallery-05/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g2-3', src: 'https://picsum.photos/seed/fc-gallery-06/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g2-4', src: 'https://picsum.photos/seed/fc-gallery-07/800/600', caption: 'Ảnh hiện trường' },
    ],
  },
  {
    date: '7 tháng 12, 2025',
    photos: [
      { id: 'g3-1', src: 'https://picsum.photos/seed/fc-gallery-08/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g3-2', src: 'https://picsum.photos/seed/fc-gallery-09/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g3-3', src: 'https://picsum.photos/seed/fc-gallery-10/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g3-4', src: 'https://picsum.photos/seed/fc-gallery-11/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g3-5', src: 'https://picsum.photos/seed/fc-gallery-12/800/600', caption: 'Ảnh hiện trường' },
    ],
  },
  {
    date: '13 tháng 9, 2025',
    photos: [
      { id: 'g4-1', src: 'https://picsum.photos/seed/fc-gallery-13/800/600', caption: 'Ảnh hiện trường' },
    ],
  },
  {
    date: '12 tháng 9, 2025',
    photos: [
      { id: 'g5-1', src: 'https://picsum.photos/seed/fc-gallery-14/800/600', caption: 'Ảnh hiện trường' },
    ],
  },
  {
    date: '11 tháng 9, 2025',
    photos: [
      { id: 'g6-1', src: 'https://picsum.photos/seed/fc-gallery-15/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g6-2', src: 'https://picsum.photos/seed/fc-gallery-16/800/600', caption: 'Ảnh hiện trường' },
    ],
  },
  {
    date: '10 tháng 9, 2025',
    photos: [
      { id: 'g7-1', src: 'https://picsum.photos/seed/fc-gallery-17/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g7-2', src: 'https://picsum.photos/seed/fc-gallery-18/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g7-3', src: 'https://picsum.photos/seed/fc-gallery-19/800/600', caption: 'Ảnh hiện trường' },
      { id: 'g7-4', src: 'https://picsum.photos/seed/fc-gallery-20/800/600', caption: 'Ảnh hiện trường' },
    ],
  },
];
