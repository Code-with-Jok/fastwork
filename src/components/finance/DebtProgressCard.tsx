'use client';

import React from 'react';
import { debtStatus } from '@/data/financeData';

interface ProgressGroupProps {
  label: string;
  total: number;
  overdue: number;
  inTerm: number;
}

function ProgressGroup({ label, total, overdue, inTerm }: ProgressGroupProps) {
  const overdueW = total > 0 ? (overdue / total) * 100 : 0;
  const inTermW = total > 0 ? (inTerm / total) * 100 : 0;

  const fmt = (v: number) => {
    if (v < 1) return `${(v * 1000).toFixed(1).replace('.', ',')} triệu`;
    return `${v.toFixed(2).replace('.', ',')} tỷ`;
  };

  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#262626' }}>{label}</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: '#262626' }}>{fmt(total)}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 12, color: '#666' }}>
        <span>{fmt(overdue)}</span>
        <span>{fmt(inTerm)}</span>
      </div>
      <div style={{
        height: 13,
        background: '#f8cedb',
        borderRadius: 2,
        overflow: 'hidden',
        display: 'flex',
      }}>
        <div style={{
          width: `${overdueW}%`,
          background: '#d1483e',
          borderRadius: '2px 0 0 2px',
          transition: 'width 0.4s',
        }} />
        <div style={{
          width: `${inTermW}%`,
          background: '#f8cedb',
        }} />
      </div>
    </div>
  );
}

export default function DebtProgressCard() {
  const { receivable, payable } = debtStatus;

  return (
    <div style={{
      background: '#DDFFF1',
      borderRadius: 8,
      padding: '20px 18px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <ProgressGroup
        label="Nợ phải thu"
        total={receivable.total}
        overdue={receivable.overdue}
        inTerm={receivable.inTerm}
      />
      <ProgressGroup
        label="Nợ phải trả"
        total={payable.total}
        overdue={payable.overdue}
        inTerm={payable.inTerm}
      />

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16, marginTop: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#d1483e' }} />
          <span style={{ fontSize: 12, color: '#555' }}>Quá hạn</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#f8cedb' }} />
          <span style={{ fontSize: 12, color: '#555' }}>Trong hạn</span>
        </div>
      </div>
    </div>
  );
}
