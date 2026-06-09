'use client';

import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts';
import { revenueChartData } from '@/data/mockData';
import { MoreOutlined } from '@ant-design/icons';

export default function RevenueChart() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 10,
      padding: '16px 20px',
      height: '100%',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: '#262626' }}>Doanh thu - Chi phí</div>
          <div style={{ fontSize: 11, color: '#999' }}>12 tháng gần nhất</div>
        </div>
        <MoreOutlined style={{ color: '#999', fontSize: 16, cursor: 'pointer' }} />
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={revenueChartData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#999' }} />
          <YAxis tick={{ fontSize: 10, fill: '#999' }} />
          <Tooltip
            formatter={(value) => [`${Number(value).toLocaleString('vi-VN')} tỷ`]}
            contentStyle={{ fontSize: 12, borderRadius: 6 }}
          />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="revenue"
            name="Doanh thu"
            stroke="#17B799"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="cost"
            name="Chi phí"
            stroke="#E85347"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
