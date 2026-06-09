'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { PieLabelRenderProps, LegendProps } from 'recharts';
import { costPieData } from '@/data/mockData';
import { MoreOutlined } from '@ant-design/icons';

const RADIAN = Math.PI / 180;

const renderCustomLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent } = props;
  if (!cx || !cy || midAngle == null || !innerRadius || !outerRadius || !percent) return null;
  const cxNum = Number(cx);
  const cyNum = Number(cy);
  const innerR = Number(innerRadius);
  const outerR = Number(outerRadius);
  const pct = Number(percent);
  if (pct < 0.05) return null;
  const radius = innerR + (outerR - innerR) * 0.5;
  const x = cxNum + radius * Math.cos(-Number(midAngle) * RADIAN);
  const y = cyNum + radius * Math.sin(-Number(midAngle) * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={11} fontWeight={600}>
      {`${(pct * 100).toFixed(0)}%`}
    </text>
  );
};

const renderLegend: LegendProps['formatter'] = (value, entry) => {
  const payload = entry?.payload as { value?: number } | undefined;
  return (
    <span style={{ color: '#555', fontSize: 11 }}>
      {value}: <strong>{(payload?.value ?? 0).toLocaleString('vi-VN')}M</strong>
    </span>
  );
};

export default function CostPieChart() {
  const total = costPieData.reduce((s, d) => s + d.value, 0);

  return (
    <div style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#262626' }}>Chi phí thực tế</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#555' }}>Tổng: {total.toLocaleString('vi-VN')} triệu</span>
          <MoreOutlined style={{ color: '#999', fontSize: 16, cursor: 'pointer' }} />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={costPieData}
            cx="50%"
            cy="50%"
            outerRadius={90}
            innerRadius={40}
            dataKey="value"
            labelLine={false}
            label={renderCustomLabel}
          >
            {costPieData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${Number(value).toLocaleString('vi-VN')} triệu`]}
            contentStyle={{ fontSize: 12, borderRadius: 6 }}
          />
          <Legend
            iconType="circle"
            iconSize={9}
            wrapperStyle={{ paddingTop: 6 }}
            formatter={renderLegend}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
