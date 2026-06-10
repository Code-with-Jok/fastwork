'use client';

import React, { useCallback, useEffect, useState } from 'react';
import {
  CloseOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { GalleryPhoto } from '@/data/galleryData';

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({ photos, index, onClose, onNavigate }: GalleryLightboxProps) {
  const total = photos.length;
  const photo = photos[index];
  const [zoomed, setZoomed] = useState(false);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + total) % total);
  }, [index, total, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % total);
  }, [index, total, onNavigate]);

  useEffect(() => {
    setZoomed(false);
  }, [index]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, goPrev, goNext]);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = photo.src;
    link.download = photo.caption;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.95)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={onClose}
    >
      {/* Top bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        color: '#fff',
        fontSize: 14,
        flexShrink: 0,
      }}>
        <div>{index + 1} / {total}</div>
        <div style={{ display: 'flex', gap: 22, fontSize: 18 }}>
          <span
            style={{ cursor: 'pointer' }}
            onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
          >
            {zoomed ? <ZoomOutOutlined /> : <ZoomInOutlined />}
          </span>
          <DownloadOutlined style={{ cursor: 'pointer' }} onClick={handleDownload} />
          <CloseOutlined style={{ cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); onClose(); }} />
        </div>
      </div>

      {/* Main image area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          minHeight: 0,
          padding: '0 70px',
          overflow: 'auto',
        }}
        onClick={onClose}
      >
        <div
          style={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
            fontSize: 24,
            cursor: 'pointer',
            padding: 12,
            zIndex: 1,
          }}
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
        >
          <LeftOutlined />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.caption}
          style={{
            maxWidth: zoomed ? 'none' : '100%',
            maxHeight: zoomed ? 'none' : '100%',
            width: zoomed ? 'auto' : undefined,
            objectFit: 'contain',
            cursor: zoomed ? 'zoom-out' : 'zoom-in',
            boxShadow: '0 0 24px rgba(0,0,0,0.5)',
          }}
          onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
        />

        <div
          style={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#fff',
            fontSize: 24,
            cursor: 'pointer',
            padding: 12,
            zIndex: 1,
          }}
          onClick={(e) => { e.stopPropagation(); goNext(); }}
        >
          <RightOutlined />
        </div>
      </div>

      {/* Caption */}
      <div style={{ textAlign: 'center', color: '#ccc', fontSize: 13, padding: '6px 16px', flexShrink: 0 }}>
        {photo.caption}
      </div>

      {/* Thumbnail strip */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          padding: '12px 16px 20px',
          overflowX: 'auto',
          flexShrink: 0,
          background: '#181818',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {photos.map((p, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={p.id}
            src={p.src}
            alt={p.caption}
            onClick={() => onNavigate(i)}
            style={{
              width: 80,
              height: 56,
              objectFit: 'cover',
              borderRadius: 4,
              cursor: 'pointer',
              border: i === index ? '2px solid #e6483c' : '2px solid transparent',
              opacity: i === index ? 1 : 0.6,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
