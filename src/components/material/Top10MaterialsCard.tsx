'use client';

import React from 'react';
import { top10Materials } from '@/data/materialData';
import { MoreOutlined } from '@ant-design/icons';

export default function Top10MaterialsCard() {
  return (
    <div style={{
      background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>Top 10 vật tư có NS cao nhất</span>
        <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
      </div>
      <div style={{ flex: 1, overflowY: 'auto', maxHeight: 232, paddingRight: 4 }}>
        {top10Materials.map(item => (
          <div key={item.rank} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12, color: '#374151', marginBottom: 6, lineHeight: 1.4 }}>
              {item.rank} | {item.name} | <strong>{item.value}</strong>
            </div>
            <div style={{ display: 'flex', height: 8, borderRadius: 4, overflow: 'hidden', background: '#e8ecf0' }}>
              <div style={{ width: `${item.purchasedPct}%`, background: '#f7921e' }} />
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 16, marginTop: 8,
        fontSize: 11, color: '#666', borderTop: '1px solid #f0f0f0', paddingTop: 8,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 10, height: 10, background: '#f7921e', borderRadius: 2, display: 'inline-block' }} />Đã mua
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 10, height: 10, background: '#e8ecf0', borderRadius: 2, display: 'inline-block' }} />Còn lại
        </div>
      </div>
    </div>
  );
}
