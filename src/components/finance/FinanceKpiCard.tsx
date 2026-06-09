'use client';

import React from 'react';
import { financeKpi } from '@/data/financeData';

export default function FinanceKpiCard() {
  return (
    <div style={{
      background: '#0B3175',
      borderRadius: 8,
      padding: '28px 24px 20px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      color: '#e5e9f2',
    }}>
      <div style={{ fontSize: 15, color: '#e5e9f2', marginBottom: 8 }}>
        Giá trị hợp đồng (PLHĐ & VAT)
      </div>
      <div style={{ fontSize: 34, fontWeight: 500, color: '#fff', marginBottom: 16, lineHeight: 1.2 }}>
        {financeKpi.contractValue.toLocaleString('vi-VN')} tỷ
      </div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 12, color: '#8094ae' }}>Doanh thu</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>
            {financeKpi.revenue.toLocaleString('vi-VN')} tỷ
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: '#8094ae' }}>Chi phí</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>
            {financeKpi.cost.toLocaleString('vi-VN')} triệu
          </div>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.12)',
        paddingTop: 12,
        fontSize: 14,
        color: '#22CCB2',
        fontWeight: 500,
      }}>
        Lợi nhuận: <strong style={{ fontSize: 16 }}>{financeKpi.profit.toLocaleString('vi-VN')} tỷ</strong>
      </div>
    </div>
  );
}
