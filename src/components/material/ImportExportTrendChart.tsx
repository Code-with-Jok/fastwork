'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { importExportTrend, importExportTotals } from '@/data/materialData';
import { MoreOutlined } from '@ant-design/icons';

export default function ImportExportTrendChart() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>Xu hướng Nhập - Xuất</div>
          <div style={{ fontSize: 12, color: '#17B799' }}>12 tháng gần nhất</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 11, color: '#666' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 10, height: 10, background: '#1a3a6b', borderRadius: 2, display: 'inline-block' }} />Nhập
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 10, height: 10, background: '#f5b896', borderRadius: 2, display: 'inline-block' }} />Xuất
            </div>
          </div>
          <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: '#aaa' }}>ĐVT: Tỷ đồng</span>
        <div style={{ display: 'flex', gap: 60 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#666' }}>Nhập</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1a3a6b' }}>
              {importExportTotals.nhap.toLocaleString('vi-VN')} tỷ
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#666' }}>Xuất</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#f5824a' }}>
              {importExportTotals.xuat.toLocaleString('vi-VN')} tỷ
            </div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={importExportTrend} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#999' }} />
          <YAxis domain={[-1, 4]} ticks={[-1, 0, 1, 2, 3, 4]} tick={{ fontSize: 10, fill: '#999' }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
          <Bar dataKey="nhap" name="Nhập" fill="#1a3a6b" radius={[2, 2, 0, 0]} barSize={10} isAnimationActive={false} />
          <Bar dataKey="xuat" name="Xuất" fill="#f5b896" radius={[2, 2, 0, 0]} barSize={10} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
