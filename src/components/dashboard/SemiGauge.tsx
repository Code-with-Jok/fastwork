'use client';

import React from 'react';

interface SemiGaugeProps {
  value: number;
  label: string;
  size?: number;
}

export default function SemiGauge({ value, label, size = 120 }: SemiGaugeProps) {
  const clamped = Math.min(value, 200);
  const pct = Math.min(clamped / 100, 1);
  const isOver = value > 100;

  const cx = size / 2;
  const cy = size / 2;
  const r = (size * 0.38);
  const strokeWidth = size * 0.095;

  // Arc from 180deg to 0deg (half circle)
  const startAngle = Math.PI;
  const totalAngle = Math.PI;

  const describeArc = (pctFill: number) => {
    const angle = startAngle - pctFill * totalAngle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle) * -1;
    const x2 = cx + r * Math.cos(angle);
    const y2 = cy + r * Math.sin(angle) * -1;
    // Sweep is always <= 180deg (pctFill in [0,1]), so always the minor arc.
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  };

  const trackPath = describeArc(1);
  const fillPath = describeArc(pct);
  const fillColor = isOver ? '#F5A623' : '#3498DB';
  const displayValue = value === 0 ? '0%' : `${value.toFixed(value % 1 === 0 ? 0 : 2)}%`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 4px' }}>
      <div style={{ fontSize: 11, color: '#666', marginBottom: 4, textAlign: 'center', fontWeight: 500 }}>
        {label}
      </div>
      <div style={{ position: 'relative', width: size, height: size * 0.58 }}>
        <svg width={size} height={size * 0.6} viewBox={`0 0 ${size} ${size * 0.6}`} style={{ overflow: 'visible' }}>
          {/* Track */}
          <path
            d={trackPath}
            fill="none"
            stroke="#F5CBA7"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          {/* Fill */}
          {pct > 0 && (
            <path
              d={fillPath}
              fill="none"
              stroke={fillColor}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
          {/* Scale labels */}
          <text x={cx - r - strokeWidth / 2 - 2} y={cy + 14} fontSize={9} fill="#aaa" textAnchor="middle">0</text>
          <text x={cx + r + strokeWidth / 2 + 2} y={cy + 14} fontSize={9} fill="#aaa" textAnchor="middle">100</text>
          {/* Center value */}
          <text
            x={cx}
            y={cy + 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={size * 0.14}
            fontWeight={700}
            fill={fillColor}
          >
            {displayValue}
          </text>
        </svg>
      </div>
    </div>
  );
}
