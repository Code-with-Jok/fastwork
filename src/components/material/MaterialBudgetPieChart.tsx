'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { PieLabelRenderProps } from 'recharts';
import { materialBudgetPieData } from '@/data/materialData';
import { MoreOutlined } from '@ant-design/icons';

// values are in triệu VND
function fmtVal(v: number) {
  if (v === 0) return '0';
  if (v >= 1000) return `${(v / 1000).toLocaleString('vi-VN')} tỷ`;
  return `${v.toLocaleString('vi-VN')} triệu`;
}

const RADIAN = Math.PI / 180;
// slices below this share of the total are too thin to label without overlapping
const MIN_LABEL_PERCENT = 0.01;

const renderOuterLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, outerRadius, percent, value } = props;
  if (!cx || !cy || midAngle == null || !outerRadius || percent == null) return null;
  if (Number(percent) < MIN_LABEL_PERCENT) return null;
  const angle = -Number(midAngle) * RADIAN;
  const innerR = Number(outerRadius);
  const outerR = innerR + 28;
  const startX = Number(cx) + innerR * Math.cos(angle);
  const startY = Number(cy) + innerR * Math.sin(angle);
  const x = Number(cx) + outerR * Math.cos(angle);
  const y = Number(cy) + outerR * Math.sin(angle);
  const anchor = x > Number(cx) ? 'start' : 'end';
  return (
    <g>
      <path d={`M${startX},${startY}L${x},${y}`} stroke="#ccc" fill="none" strokeWidth={1} />
      <text x={x} y={y} textAnchor={anchor} dominantBaseline="central" fontSize={10} fill="#555">
        {fmtVal(Number(value))}
      </text>
    </g>
  );
};

export default function MaterialBudgetPieChart() {
  const total = materialBudgetPieData.reduce((s, d) => s + d.value, 0);

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>Ngân sách vật tư</div>
          <div style={{ fontSize: 12, color: '#17B799' }}>Theo dự án</div>
        </div>
        <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
      </div>
      <div style={{ textAlign: 'right', fontSize: 12, fontWeight: 600, color: '#1a1f2e' }}>
        Tổng: {fmtVal(total)}
      </div>
      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 24, right: 64, bottom: 24, left: 64 }}>
            <Pie
              data={materialBudgetPieData}
              cx="50%" cy="50%"
              outerRadius={75} innerRadius={0}
              dataKey="value"
              label={renderOuterLabel}
              labelLine={false}
              isAnimationActive={false}
            >
              {materialBudgetPieData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => [fmtVal(Number(v))]} contentStyle={{ fontSize: 11, borderRadius: 6 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
