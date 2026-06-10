'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { MoreOutlined } from '@ant-design/icons';
import { CashFlowPoint, formatMoneyVN } from '@/data/projectDetailData';

interface ProjectCashFlowChartProps {
  data: CashFlowPoint[];
}

export default function ProjectCashFlowChart({ data }: ProjectCashFlowChartProps) {
  return (
    <div style={{ background: '#fff', borderRadius: 10, padding: '16px 18px', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: '#262626' }}>Dòng tiền</div>
          <div style={{ fontSize: 11, color: '#999' }}>12 tháng gần nhất</div>
        </div>
        <MoreOutlined style={{ color: '#999', fontSize: 16, cursor: 'pointer' }} />
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#999' }} />
          <YAxis tick={{ fontSize: 10, fill: '#999' }} tickFormatter={(v) => formatMoneyVN(Number(v))} />
          <Tooltip formatter={(value) => [formatMoneyVN(Number(value))]} contentStyle={{ fontSize: 12, borderRadius: 6 }} />
          <Legend iconType="square" iconSize={10} wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="thu" name="Giá trị thu" fill="#3D9760" radius={[2, 2, 0, 0]} isAnimationActive={false} />
          <Bar dataKey="chi" name="Giá trị chi" fill="#E85347" radius={[2, 2, 0, 0]} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
