'use client';

import React, { useState } from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { cashFlowTimeData } from '@/data/financeData';
import { DatePicker, Button } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

export default function ProjectCashFlowChart() {
  const [year, setYear] = useState(dayjs('2026'));

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '14px 16px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h6 style={{ margin: 0, fontSize: 15, fontWeight: 500, color: '#535353' }}>Dòng tiền dự án</h6>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <DatePicker
            picker="year"
            size="small"
            value={year}
            onChange={(v) => v && setYear(v)}
            style={{ width: 90 }}
            allowClear={false}
          />
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
            <Bar dataKey="thu" name="Giá trị thu" fill="#3D9760" opacity={0.8} barSize={10} />
            <Bar dataKey="chi" name="Giá trị chi" fill="#E85347" opacity={0.8} barSize={10} />
            <Line type="monotone" dataKey="luyKeThu" name="Lũy kế thu" stroke="#3D9760"
              strokeWidth={1.5} strokeDasharray="5 3" dot={false} />
            <Line type="monotone" dataKey="luyKeChi" name="Lũy kế chi" stroke="#E85347"
              strokeWidth={1.5} strokeDasharray="5 3" dot={false} />
            <Line type="monotone" dataKey="soDu" name="Số dư" stroke="#5470c6"
              strokeWidth={1.5} strokeDasharray="2 2" dot={{ r: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
