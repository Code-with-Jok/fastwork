'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { top5ContractProjects } from '@/data/contractData';
import { MoreOutlined } from '@ant-design/icons';

export default function TopProjectsChart() {
  // values are in triệu VND → divide by 1000 to get tỷ for axis
  const data = top5ContractProjects.map(p => ({
    name: p.name.length > 22 ? p.name.slice(0, 22) + '…' : p.name,
    value: Math.round(p.value / 1000 * 1000) / 1000,
  }));

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>5 dự án có giá trị HĐ cao nhất</span>
        <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
      </div>
      <div style={{ fontSize: 11, color: '#aaa', textAlign: 'right', marginBottom: 8 }}>ĐVT: Tỷ đồng</div>
      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 40, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 10, fill: '#999' }} />
          <YAxis type="category" dataKey="name" width={160} tick={{ fontSize: 11, fill: '#555' }} />
          <Tooltip
            formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} tỷ`]}
            contentStyle={{ fontSize: 11, borderRadius: 6 }}
          />
          <Bar dataKey="value" fill="#3b82f6" radius={[0, 3, 3, 0]} barSize={14} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
