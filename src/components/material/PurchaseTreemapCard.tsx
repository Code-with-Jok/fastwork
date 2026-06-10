'use client';

import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';
import { purchaseTreemapData } from '@/data/materialData';
import { MoreOutlined } from '@ant-design/icons';

interface TreemapCellProps {
  x?: number; y?: number; width?: number; height?: number;
  name?: string; label?: string; color?: string;
}

function TreemapCell({ x = 0, y = 0, width = 0, height = 0, name, label, color }: TreemapCellProps) {
  const showText = width > 55 && height > 30;
  const big = width > 150;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={color} stroke="#fff" strokeWidth={2} />
      {showText && (
        <text x={x + width / 2} y={y + height / 2} textAnchor="middle" dominantBaseline="middle"
          fill={big ? '#fff' : '#333'} fontSize={big ? 13 : 10} fontWeight={600}>
          <tspan x={x + width / 2} dy="-0.4em">{name}</tspan>
          <tspan x={x + width / 2} dy="1.2em" fontWeight={400}>{label}</tspan>
        </text>
      )}
    </g>
  );
}

export default function PurchaseTreemapCard() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', border: '1px solid #e8ecf0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e' }}>Giá trị đã mua</div>
          <div style={{ fontSize: 12, color: '#17B799' }}>Theo nhà cung cấp</div>
        </div>
        <MoreOutlined style={{ color: '#aaa', fontSize: 18 }} />
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <Treemap
          data={purchaseTreemapData}
          dataKey="size"
          aspectRatio={4 / 3}
          stroke="#fff"
          isAnimationActive={false}
          content={TreemapCell as Parameters<typeof Treemap>[0]['content']}
        />
      </ResponsiveContainer>
    </div>
  );
}
