'use client';

import React from 'react';
import { ownerDebt, contractorDebt } from '@/data/mockData';

export interface DebtCardProps {
  title: string;
  bg: string;
  total: number;
  items: { label: string; value: number }[];
  leftLabel: string;
  leftValue: number;
  rightLabel: string;
  rightValue: number;
  /** Formats item/left/right values. Defaults to the dashboard's "X.X tỷ" format. */
  formatter?: (n: number) => string;
  /** Formats the headline total. Defaults to treating `total` as a value in tỷ. */
  totalFormatter?: (n: number) => string;
}

function fmtBil(n: number) {
  return (n / 1000000000).toFixed(1) + ' tỷ';
}

export function DebtCard({
  title, bg, total, items, leftLabel, leftValue, rightLabel, rightValue,
  formatter = fmtBil,
  totalFormatter = (n) => fmtBil(n * 1000000000),
}: DebtCardProps) {
  return (
    <div style={{ background: bg, borderRadius: 10, padding: '16px 18px', height: '100%' }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: '#262626', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 26, fontWeight: 700, color: '#0B3175', marginBottom: 12 }}>
        {totalFormatter(total)}
      </div>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: '#555',
          padding: '4px 0',
          borderBottom: i < items.length - 1 ? '1px dashed #ddd' : 'none',
        }}>
          <span>{i + 1}. {item.label}</span>
          <span style={{ fontWeight: 500, color: '#222' }}>{formatter(item.value)}</span>
        </div>
      ))}
      <div style={{ borderTop: '1.5px solid #ccc', marginTop: 10, paddingTop: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, color: '#888', marginBottom: 2 }}>{leftLabel}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#222' }}>{formatter(leftValue)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: '#888', marginBottom: 2 }}>{rightLabel}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#E85347' }}>{formatter(rightValue)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OwnerDebtCard() {
  return (
    <DebtCard
      title="Công nợ CĐT"
      bg="#DDFFF1"
      total={ownerDebt.total}
      items={ownerDebt.items}
      leftLabel="Thu thực tế (5 = 3 + 4)"
      leftValue={ownerDebt.actualCollection}
      rightLabel="CĐT còn nợ (6 = 1 + 2 - 5)"
      rightValue={ownerDebt.ownerOwes}
    />
  );
}

export function ContractorDebtCard() {
  return (
    <DebtCard
      title="Công nợ Nhà thầu và NCC"
      bg="#FFF6F7"
      total={contractorDebt.total}
      items={contractorDebt.items}
      leftLabel="Trả thực tế"
      leftValue={contractorDebt.actualPayment}
      rightLabel="Còn nợ NCC"
      rightValue={contractorDebt.contractorOwes}
    />
  );
}
