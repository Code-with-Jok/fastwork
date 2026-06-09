'use client';

import React from 'react';
import { overviewBars } from '@/data/contractData';
import { MoreOutlined } from '@ant-design/icons';

export default function OverviewBarChart() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>Tổng quan sản xuất kinh doanh</span>
        <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
      </div>

      {overviewBars.map((bar) => (
        <div key={bar.label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ flex: '0 0 160px', fontSize: 12, color: '#555', textAlign: 'right' }}>{bar.label}</div>
          <div style={{ flex: 1, background: '#f0f2f5', borderRadius: 4, height: 22, overflow: 'hidden' }}>
            <div style={{
              width: `${bar.pct}%`, height: '100%', background: bar.color,
              borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, color: '#fff', fontWeight: 600,
            }}>
              {bar.pct.toFixed(2)}%
            </div>
          </div>
          <div style={{ flex: '0 0 72px', fontSize: 12, color: '#555', textAlign: 'right' }}>{bar.value}</div>
        </div>
      ))}
    </div>
  );
}
