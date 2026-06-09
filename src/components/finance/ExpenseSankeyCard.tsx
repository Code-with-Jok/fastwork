'use client';

import React from 'react';
import { Sankey, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { expenseSankeyData, expenseFlowDetails } from '@/data/financeData';
import { Divider } from 'antd';

const COLORS = ['#E85347', '#17B799', '#3D9760', '#F5A623', '#6BAAFE', '#0B3175', '#22CCB2', '#8094ae', '#5470c6', '#adb5bd'];

function SankeyNode({ x, y, width, height, index, payload }: {
  x: number; y: number; width: number; height: number; index: number; payload: { name: string };
}) {
  return (
    <Rectangle x={x} y={y} width={width} height={height}
      fill={COLORS[index % COLORS.length]} fillOpacity={0.85} radius={3} />
  );
}

function SankeyLink(props: {
  sourceX: number; targetX: number; sourceY: number; targetY: number;
  sourceControlX: number; targetControlX: number;
  linkWidth: number; index: number;
}) {
  const { sourceX, targetX, sourceY, targetY, sourceControlX, targetControlX, linkWidth, index } = props;
  return (
    <path
      d={`M${sourceX},${sourceY} C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}`}
      fill="none"
      stroke={COLORS[index % COLORS.length]}
      strokeWidth={linkWidth}
      strokeOpacity={0.22}
    />
  );
}

function DonutChart({ paid, owed, total, label }: { paid: number; owed: number; total: number; label: string }) {
  const data = [
    { name: 'Đã trả', value: paid },
    { name: 'Còn nợ', value: owed },
  ];
  const fmt = (v: number) => v < 1 ? `${(v * 1000).toFixed(1)} triệu` : `${v.toFixed(0).toLocaleString()} tỷ`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <div style={{ position: 'relative', width: 100, height: 90 }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#262626', lineHeight: 1 }}>{total.toLocaleString('vi-VN')} tỷ</div>
          <div style={{ fontSize: 10, color: '#888', textAlign: 'center' }}>{label}</div>
        </div>
        <PieChart width={100} height={90}>
          <Pie data={data} cx={50} cy={45} innerRadius={32} outerRadius={44} dataKey="value" startAngle={180} endAngle={-180}>
            <Cell fill="#5470c6" />
            <Cell fill="#d3d5f8" />
          </Pie>
        </PieChart>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5470c6' }} />
          <span style={{ fontSize: 11, color: '#555' }}>Đã trả <strong>{fmt(paid)}</strong></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#d3d5f8' }} />
          <span style={{ fontSize: 11, color: '#555' }}>Còn nợ <strong style={{ color: '#E85347' }}>{fmt(owed)}</strong></span>
        </div>
      </div>
    </div>
  );
}

export default function ExpenseSankeyCard() {
  const { total, subcontractor, supplier } = expenseFlowDetails;

  return (
    <div style={{ background: '#fff6f7', borderRadius: 8, padding: '16px 20px', height: '100%' }}>
      <div style={{ display: 'flex', gap: 0, height: '100%' }}>
        {/* Left: text + donuts */}
        <div style={{ width: 220, flexShrink: 0, paddingRight: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#262626', marginBottom: 4 }}>Cơ cấu dòng chi</div>
          <div style={{ fontSize: 26, fontWeight: 700, color: '#262626', marginBottom: 8 }}>
            {total.toLocaleString('vi-VN')} tỷ
          </div>
          <Divider style={{ margin: '8px 0' }} />

          <DonutChart
            label={subcontractor.label}
            total={subcontractor.total}
            paid={subcontractor.paid}
            owed={subcontractor.owed}
          />
          <DonutChart
            label={supplier.label}
            total={supplier.total}
            paid={supplier.paid}
            owed={supplier.owed}
          />
        </div>

        {/* Right: Sankey */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <Sankey
              data={expenseSankeyData}
              nodePadding={18}
              nodeWidth={12}
              margin={{ top: 8, right: 70, bottom: 8, left: 4 }}
              node={SankeyNode as Parameters<typeof Sankey>[0]['node']}
              link={SankeyLink as Parameters<typeof Sankey>[0]['link']}
            >
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 6 }}
                formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} triệu`]}
              />
            </Sankey>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
