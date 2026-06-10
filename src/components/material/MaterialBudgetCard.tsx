'use client';

import React from 'react';
import { materialBudgetSummary } from '@/data/materialData';

export default function MaterialBudgetCard() {
  const { total, totalVND } = materialBudgetSummary;

  return (
    <div style={{
      background: '#0B3175', borderRadius: 8, padding: '20px 22px',
      color: '#fff', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      minHeight: 220,
    }}>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>Ngân sách vật tư</div>
      <div>
        <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 6 }}>{total.toLocaleString('vi-VN')} tỷ</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{totalVND}</div>
      </div>
      <svg width="120" height="50" viewBox="0 0 120 50" style={{ position: 'absolute', bottom: 0, left: 0, opacity: 0.35 }}>
        <path d="M0,40 L10,25 L20,38 L30,15 L40,32 L50,10 L60,30 L70,20 L80,35 L90,18 L100,33 L110,22 L120,30"
          fill="none" stroke="#a78bfa" strokeWidth="2" />
      </svg>
    </div>
  );
}
