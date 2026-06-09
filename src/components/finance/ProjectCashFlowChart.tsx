'use client';

import React, { useState } from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { cashFlowTimeData } from '@/data/financeData';
import { ExpandAltOutlined } from '@ant-design/icons';

const YEARS = [2024, 2025, 2026, 2027];

export default function ProjectCashFlowChart() {
  const [year, setYear] = useState(2026);

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '14px 16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h6 style={{ margin: 0, fontSize: 15, fontWeight: 500, color: '#535353' }}>Dòng tiền dự án</h6>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            style={{
              width: 90,
              height: 24,
              fontSize: 12,
              border: '1px solid #d9d9d9',
              borderRadius: 4,
              padding: '0 6px',
              color: '#333',
              background: '#fff',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {YEARS.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ fontSize: 11, color: '#999', marginBottom: 6 }}>ĐVT: Triệu</div>

      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={cashFlowTimeData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#999' }} />
            <YAxis tick={{ fontSize: 9, fill: '#999' }} />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
            <Legend iconSize={8} wrapperStyle={{ fontSize: 10 }} />
            <Bar dataKey="thu" name="Giá trị thu" fill="#3D9760" opacity={0.8} barSize={10} isAnimationActive={false} />
            <Bar dataKey="chi" name="Giá trị chi" fill="#E85347" opacity={0.8} barSize={10} isAnimationActive={false} />
            <Line type="monotone" dataKey="luyKeThu" name="Lũy kế thu" stroke="#3D9760"
              strokeWidth={1.5} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="luyKeChi" name="Lũy kế chi" stroke="#E85347"
              strokeWidth={1.5} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="soDu" name="Số dư" stroke="#5470c6"
              strokeWidth={1.5} strokeDasharray="2 2" dot={{ r: 2 }} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
