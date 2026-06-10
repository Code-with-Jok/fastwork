'use client';

import React from 'react';

interface ConstructionIconProps {
  size?: number;
}

export default function ConstructionIcon({ size = 40 }: ConstructionIconProps) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: 8,
      background: '#EAF1FF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        {/* counterweight */}
        <rect x="3" y="4.4" width="3.4" height="2.4" rx="0.4" fill="#17B799" />
        {/* counter-jib + jib */}
        <rect x="3" y="3" width="18" height="1.4" rx="0.7" fill="#F5A623" />
        {/* mast */}
        <rect x="10.3" y="3" width="1.6" height="16.5" rx="0.4" fill="#0B3175" />
        {/* base */}
        <rect x="6.5" y="19.5" width="9" height="1.8" rx="0.5" fill="#0B3175" />
        {/* hoist line */}
        <line x1="18.5" y1="4.4" x2="18.5" y2="10.5" stroke="#9FB3D1" strokeWidth="0.9" />
        {/* hook block */}
        <rect x="17" y="10.5" width="3" height="2.2" rx="0.4" fill="#3498DB" />
        {/* operator cab */}
        <rect x="8" y="16.5" width="4.6" height="3" rx="0.6" fill="#3498DB" />
      </svg>
    </div>
  );
}
