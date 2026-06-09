'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { PieLabelRenderProps } from 'recharts';
import { contractPieData } from '@/data/contractData';
import { MoreOutlined } from '@ant-design/icons';

// values are in triệu VND
function fmtVal(v: number) {
  if (v >= 1000) return `${(v / 1000).toLocaleString('vi-VN')} tỷ`;
  return `${v.toLocaleString('vi-VN')} triệu`;
}

const RADIAN = Math.PI / 180;

const renderOuterLabel = (props: PieLabelRenderProps) => {
  const { cx, cy, midAngle, outerRadius, percent, name, value } = props;
  if (!cx || !cy || midAngle == null || !outerRadius || !percent) return null;
  const pct = Number(percent);
  if (pct < 0.025) return null;
  const r = Number(outerRadius) + 22;
  const x = Number(cx) + r * Math.cos(-Number(midAngle) * RADIAN);
  const y = Number(cy) + r * Math.sin(-Number(midAngle) * RADIAN);
  const anchor = x > Number(cx) ? 'start' : 'end';
  const shortName = String(name).length > 14 ? String(name).slice(0, 14) + '…' : String(name);
  return (
    <text x={x} y={y} textAnchor={anchor} dominantBaseline="central" fontSize={9} fill="#444">
      <tspan x={x} dy="-0.5em">{shortName}</tspan>
      <tspan x={x} dy="1.2em" fontWeight={600} fill="#1a1f2e">{fmtVal(Number(value))}</tspan>
    </text>
  );
};

export default function ContractPieChart() {
  const total = contractPieData.reduce((s, d) => s + d.value, 0);

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>Giá trị hợp đồng</div>
          <div style={{ fontSize: 12, color: '#17B799', marginBottom: 10 }}>Theo Số hợp đồng</div>
        </div>
        <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Pie */}
        <div style={{ flex: '0 0 260px', height: 220 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
              <Pie
                data={contractPieData}
                cx="50%" cy="50%"
                outerRadius={72} innerRadius={28}
                dataKey="value"
                label={renderOuterLabel}
                labelLine={{ stroke: '#ccc', strokeWidth: 1 }}
                isAnimationActive={false}
              >
                {contractPieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(v) => [fmtVal(Number(v))]}
                contentStyle={{ fontSize: 11, borderRadius: 6 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div style={{ flex: 1, fontSize: 11, color: '#555' }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1f2e', marginBottom: 8 }}>
            Tổng: {fmtVal(total)}
          </div>
          {contractPieData.map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <span style={{
                display: 'inline-block', width: 10, height: 10,
                background: d.color, borderRadius: 2, flexShrink: 0,
              }} />
              <span style={{ fontSize: 11 }}>
                <span style={{ color: '#444' }}>{d.name}</span>
                {': '}
                <strong style={{ color: '#1a1f2e' }}>{fmtVal(d.value)}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
