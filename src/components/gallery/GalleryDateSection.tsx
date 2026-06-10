'use client';

import React from 'react';
import { GalleryGroup } from '@/data/galleryData';
import GalleryThumbnail from './GalleryThumbnail';

interface GalleryDateSectionProps {
  group: GalleryGroup;
  onPhotoClick: (photoIndex: number) => void;
}

export default function GalleryDateSection({ group, onPhotoClick }: GalleryDateSectionProps) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1f2e', marginBottom: 12 }}>
        {group.date}
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
      }}>
        {group.photos.map((photo, idx) => (
          <GalleryThumbnail key={photo.id} photo={photo} onClick={() => onPhotoClick(idx)} />
        ))}
      </div>
    </div>
  );
}
