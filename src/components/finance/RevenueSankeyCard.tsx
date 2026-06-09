'use client';

import { Sankey, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { revenueSankeyData, revenueFlowDetails } from '@/data/financeData';
import { Divider } from 'antd';

const COLORS = ['#17B799', '#6BAAFE', '#3D9760', '#F5A623', '#0B3175', '#22CCB2', '#E85347', '#8094ae', '#5470c6'];

function SankeyNode({ x, y, width, height, index }: {
  x: number; y: number; width: number; height: number; index: number; payload?: { name: string };
}) {
  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={COLORS[index % COLORS.length]}
      fillOpacity={0.85}
      radius={3}
    />
  );
}

function SankeyLink(props: {
  sourceX: number; targetX: number; sourceY: number; targetY: number;
  sourceControlX: number; targetControlX: number;
  sourceRelativeY: number; targetRelativeY: number;
  linkWidth: number; index: number;
}) {
  const { sourceX, targetX, sourceY, targetY, sourceControlX, targetControlX, linkWidth, index } = props;
  return (
    <path
      d={`M${sourceX},${sourceY} C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}`}
      fill="none"
      stroke={COLORS[index % COLORS.length]}
      strokeWidth={linkWidth}
      strokeOpacity={0.25}
    />
  );
}

export default function RevenueSankeyCard() {
  const { total, percentDNTT, items, actualCollection, ownerDebt } = revenueFlowDetails;

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '16px 20px', height: '100%' }}>
      <div style={{ display: 'flex', gap: 0, height: '100%' }}>
        {/* Left: text details */}
        <div style={{ width: 220, flexShrink: 0, paddingRight: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#262626' }}>Cơ cấu dòng thu</div>
            <span style={{
              background: '#E8F8F5', color: '#17B799', fontSize: 11,
              padding: '2px 8px', borderRadius: 10, fontWeight: 500,
            }}>
              Chiếm {percentDNTT}% ĐNTT
            </span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: '#262626', marginBottom: 8 }}>
            {total.toLocaleString('vi-VN')} tỷ
          </div>
          <Divider style={{ margin: '8px 0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#555' }}>
                <span>{it.label}</span>
                <span style={{ fontWeight: 600, color: '#262626' }}>
                  {it.value.toLocaleString('vi-VN')} {it.unit}
                </span>
              </div>
            ))}
          </div>
          <Divider style={{ margin: '8px 0', borderColor: '#e0e0e0', borderWidth: 2 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#262626' }}>
                {actualCollection.toLocaleString('vi-VN')} tỷ
              </div>
              <div style={{ fontSize: 10, color: '#888' }}>Thu thực tế (5 = 3 + 4)</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: '#E85347' }}>
                {ownerDebt.toLocaleString('vi-VN')} tỷ
              </div>
              <div style={{ fontSize: 10, color: '#888' }}>CĐT còn nợ (6=1+2-5)</div>
            </div>
          </div>
        </div>

        {/* Right: Sankey chart */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <Sankey
              data={revenueSankeyData}
              nodePadding={20}
              nodeWidth={12}
              margin={{ top: 8, right: 60, bottom: 8, left: 4 }}
              node={SankeyNode as Parameters<typeof Sankey>[0]['node']}
              link={SankeyLink as Parameters<typeof Sankey>[0]['link']}
            >
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 6 }}
                formatter={(v) => [`${Number(v).toLocaleString('vi-VN')} tỷ`]}
              />
            </Sankey>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
