'use client';

import React, { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import GalleryDateSection from '@/components/gallery/GalleryDateSection';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import { galleryGroups } from '@/data/galleryData';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<{ groupIndex: number; photoIndex: number } | null>(null);

  return (
    <AppLayout activeMenu="photos" pageTitle="Hình ảnh thi công">
      <div style={{
        background: '#fff',
        borderRadius: 10,
        border: '1px solid #e8ecf0',
        padding: 20,
      }}>
        {galleryGroups.map((group, groupIndex) => (
          <GalleryDateSection
            key={group.date}
            group={group}
            onPhotoClick={(photoIndex) => setLightbox({ groupIndex, photoIndex })}
          />
        ))}
      </div>

      {lightbox && (
        <GalleryLightbox
          photos={galleryGroups[lightbox.groupIndex].photos}
          index={lightbox.photoIndex}
          onClose={() => setLightbox(null)}
          onNavigate={(photoIndex) => setLightbox({ groupIndex: lightbox.groupIndex, photoIndex })}
        />
      )}
    </AppLayout>
  );
}
