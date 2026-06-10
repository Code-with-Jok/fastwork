'use client';

import React from 'react';
import { GalleryPhoto } from '@/data/galleryData';

interface GalleryThumbnailProps {
  photo: GalleryPhoto;
  onClick: () => void;
}

export default function GalleryThumbnail({ photo, onClick }: GalleryThumbnailProps) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <div style={{
        width: '100%',
        aspectRatio: '4 / 3',
        borderRadius: 6,
        overflow: 'hidden',
        background: '#f0f2f5',
        border: '1px solid #e8ecf0',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.caption}
          className="gallery-thumb-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{
        marginTop: 8,
        fontSize: 13,
        color: '#5a6678',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {photo.caption}
      </div>
    </div>
  );
}
