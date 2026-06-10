'use client';

import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { Select } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { ProjectDetail, formatMoneyVN } from '@/data/projectDetailData';

interface BusinessReportCardProps {
  project: ProjectDetail;
}

function SummaryItem({ label, value, color }: { label: string; value: number; color?: string }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 12, color: '#8a94a6', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: color ?? '#1a1f2e' }}>
        {formatMoneyVN(value)}
      </div>
    </div>
  );
}

export default function BusinessReportCard({ project }: BusinessReportCardProps) {
  const { revenue, cost, profit, chartData } = project.businessReport;

  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e8ecf0', padding: '16px 20px', marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 8 }}>
        <div style={{ fontWeight: 600, fontSize: 15, color: '#262626' }}>Báo cáo kết quả kinh doanh</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Select size="small" defaultValue="all" style={{ width: 100 }} options={[{ value: 'all', label: 'Mọi lúc' }]} />
          <Select size="small" defaultValue="month" style={{ width: 110 }} options={[{ value: 'month', label: 'Hàng tháng' }]} />
          <MoreOutlined style={{ color: '#999', fontSize: 16, cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, marginBottom: 20, flexWrap: 'wrap' }}>
        <SummaryItem label="Doanh thu" value={revenue} />
        <span style={{ fontSize: 22, color: '#ccc', fontWeight: 300 }}>-</span>
        <SummaryItem label="Chi phí" value={cost} color="#E85347" />
        <span style={{ fontSize: 22, color: '#ccc', fontWeight: 300 }}>=</span>
        <SummaryItem label="Lợi nhuận" value={profit} color="#17B799" />
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={chartData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#999' }} />
          <YAxis tick={{ fontSize: 10, fill: '#999' }} tickFormatter={(v) => formatMoneyVN(Number(v))} />
          <Tooltip formatter={(value) => [formatMoneyVN(Number(value))]} contentStyle={{ fontSize: 12, borderRadius: 6 }} />
          <Legend iconSize={10} wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="revenue" name="Doanh thu" fill="#3D9760" radius={[2, 2, 0, 0]} isAnimationActive={false} />
          <Bar dataKey="cost" name="Chi phí" fill="#F5A623" radius={[2, 2, 0, 0]} isAnimationActive={false} />
          <Line type="monotone" dataKey="profit" name="Lợi nhuận" stroke="#0B3175" strokeWidth={2} dot={false} isAnimationActive={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
