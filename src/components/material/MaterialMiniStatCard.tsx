'use client';

import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface MaterialMiniStatCardProps {
  label: string;
  value: string;
  bg: string;
  accent: string;
  sparkline: { v: number }[];
}

export default function MaterialMiniStatCard({ label, value, bg, accent, sparkline }: MaterialMiniStatCardProps) {
  return (
    <div style={{
      background: bg, borderRadius: 8, padding: '16px 18px',
      borderLeft: `4px solid ${accent}`, flex: 1,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden', minHeight: 96,
    }}>
      <div style={{ fontSize: 13, color: '#666', fontWeight: 500, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 24, fontWeight: 700, color: '#1a1f2e' }}>{value}</div>
      <div style={{ position: 'absolute', right: 0, bottom: 0, width: 110, height: 50, opacity: 0.7 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sparkline}>
            <Line type="monotone" dataKey="v" stroke={accent} strokeWidth={1.5} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
