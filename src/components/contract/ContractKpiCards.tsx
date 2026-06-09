'use client';

import React from 'react';
import { contractKpi } from '@/data/contractData';

function KpiCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 8, padding: '16px 20px',
      border: '1px solid #e8ecf0', position: 'relative',
    }}>
      {children}
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <div style={{ fontSize: 13, color: '#8a94a6', marginBottom: 8, fontWeight: 500 }}>{text}</div>;
}

function Value({ text, color }: { text: string; color?: string }) {
  return <span style={{ fontSize: 22, fontWeight: 700, color: color ?? '#1a1f2e' }}>{text}</span>;
}

function Sub({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 12, marginTop: 6, display: 'flex', alignItems: 'center', gap: 4, color: '#8a94a6' }}>{children}</div>;
}

function Highlight({ text, color }: { text: string; color: string }) {
  return <span style={{ fontWeight: 600, color }}>{text}</span>;
}

// Donut circle for % Đề nghị TT/Sản lượng
function DonutCircle({ pct }: { pct: number }) {
  const r = 21;
  const circ = 2 * Math.PI * r;
  const fill = Math.min(pct / 100, 1) * circ;
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx="27" cy="27" r={r} fill="transparent" stroke="#e8ecf0" strokeWidth="8" />
      <circle cx="27" cy="27" r={r} fill="transparent" stroke="#17B799" strokeWidth="8"
        strokeDasharray={`${fill} ${circ}`} strokeLinecap="round" />
    </svg>
  );
}

export default function ContractKpiCards() {
  const k = contractKpi;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 16 }}>
      {/* Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        <KpiCard>
          <Label text="Hợp đồng và PLHĐ" />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <Value text={`${k.contractValue.toLocaleString('vi-VN')} tỷ`} />
            <span style={{ fontSize: 20, fontWeight: 700 }}>{k.contractCount}</span>
          </div>
          <Sub><Highlight text="↑ 0%" color="#38a169" /> so với giá trị ban đầu</Sub>
        </KpiCard>

        <KpiCard>
          <Label text="Phát sinh" />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <Value text="0" color="#f7921e" />
            <span style={{ fontSize: 20, fontWeight: 700, color: '#f7921e' }}>0</span>
          </div>
          <Sub>Chiếm <Highlight text="0%" color="#f7921e" /> giá trị hợp đồng</Sub>
        </KpiCard>

        <KpiCard>
          <Label text="Thu thực tế" />
          <Value text={`${k.thuThucTe.toLocaleString('vi-VN')} tỷ`} />
          <Sub>Chiếm <Highlight text={`${k.thuThucTePct}%`} color="#4299e1" /> đề nghị TT</Sub>
        </KpiCard>

        <KpiCard>
          <Label text="Chủ đầu tư còn nợ" />
          <Value text={`${k.chuDauTuConNo.toLocaleString('vi-VN')} tỷ`} color="#e53e3e" />
          <Sub>Chiếm <Highlight text={`${k.chuDauTuConNoPct}%`} color="#e53e3e" /> đề nghị TT</Sub>
        </KpiCard>
      </div>

      {/* Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        <KpiCard>
          <Label text="Sản lượng" />
          <Value text={`${k.sanLuong.toLocaleString('vi-VN')} tỷ`} />
          <Sub>Chiếm <Highlight text={`${k.sanLuongPct}%`} color="#f7921e" /> giá trị hợp đồng</Sub>
        </KpiCard>

        <KpiCard>
          <Label text="Nghiệm thu" />
          <Value text={`${k.nghiemThu.toLocaleString('vi-VN')} tỷ`} />
          <Sub>Chiếm <Highlight text={`${k.nghiemThuPct}%`} color="#f7921e" /> giá trị hợp đồng</Sub>
        </KpiCard>

        <KpiCard>
          <Label text="Đề nghị thanh toán" />
          <Value text={`${k.deNghiThanhToan.toLocaleString('vi-VN')} tỷ`} />
          <Sub>Chiếm <Highlight text={`${k.deNghiThanhToanPct}%`} color="#f7921e" /> giá trị hợp đồng</Sub>
        </KpiCard>

        <KpiCard>
          <Label text="% Đề nghị TT/Sản lượng" />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 4 }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#17B799' }}>{k.deNghiTTSanLuongPct}%</span>
            <DonutCircle pct={k.deNghiTTSanLuongPct} />
          </div>
        </KpiCard>
      </div>
    </div>
  );
}
