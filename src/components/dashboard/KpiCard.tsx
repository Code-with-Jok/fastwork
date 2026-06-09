'use client';

import React from 'react';
import { kpiData } from '@/data/mockData';

export default function KpiCard() {
  return (
    <div style={{
      background: '#0B3175',
      borderRadius: 10,
      padding: '20px 24px',
      height: '100%',
      minHeight: 170,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Tổng quan</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 24px', flex: 1 }}>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, marginBottom: 4 }}>Giá trị hợp đồng</div>
          <div style={{ color: '#fff', fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
            {kpiData.contractValue.toLocaleString('vi-VN')}
            <span style={{ fontSize: 13, fontWeight: 400, marginLeft: 4 }}>tỷ</span>
          </div>
        </div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, marginBottom: 4 }}>Doanh thu</div>
          <div style={{ color: '#fff', fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
            {kpiData.revenue.toLocaleString('vi-VN')}
            <span style={{ fontSize: 13, fontWeight: 400, marginLeft: 4 }}>tỷ</span>
          </div>
        </div>
        <div>
          <div style={{ color: '#22CCB2', fontSize: 12, marginBottom: 4 }}>Lợi nhuận</div>
          <div style={{ color: '#22CCB2', fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
            {kpiData.profit.toLocaleString('vi-VN')}
            <span style={{ fontSize: 13, fontWeight: 400, marginLeft: 4 }}>tỷ</span>
          </div>
        </div>
        <div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, marginBottom: 4 }}>Chi phí</div>
          <div style={{ color: '#fff', fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
            {kpiData.cost.toLocaleString('vi-VN')}
            <span style={{ fontSize: 13, fontWeight: 400, marginLeft: 4 }}>tỷ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
