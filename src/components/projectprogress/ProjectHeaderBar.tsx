'use client';

import React from 'react';
import { ProjectDetail, STATUS_STYLES } from '@/data/projectDetailData';

interface ProjectHeaderBarProps {
  project: ProjectDetail;
}

function MetaItem({ label, value, valueColor = '#fff' }: { label: string; value: React.ReactNode; valueColor?: string }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 6, whiteSpace: 'nowrap' }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 700, color: valueColor, whiteSpace: 'nowrap' }}>{value}</div>
    </div>
  );
}

function TaskCircle({ value }: { value: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;

  return (
    <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
      <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="5" />
        <circle
          cx="32" cy="32" r={r} fill="none" stroke="#22CCB2" strokeWidth="5"
          strokeDasharray={`${circ * 0.75} ${circ}`} strokeLinecap="round"
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', color: '#fff',
      }}>
        <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.1 }}>{value}</div>
        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>công việc</div>
      </div>
    </div>
  );
}

function ProgressRow({ label, value, color }: { label: string; value: number; color: string }) {
  const pct = Math.max(0, Math.min(100, value));
  const display = value % 1 === 0 ? `${value}%` : `${value.toFixed(2)}%`;

  return (
    <div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginBottom: 4 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 140, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.18)', overflow: 'hidden' }}>
          <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 3 }} />
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', minWidth: 52, textAlign: 'right' }}>{display}</div>
      </div>
    </div>
  );
}

export default function ProjectHeaderBar({ project }: ProjectHeaderBarProps) {
  const statusStyle = STATUS_STYLES[project.status];

  return (
    <div style={{
      background: '#0B3175',
      borderRadius: 8,
      padding: '18px 24px',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 24,
    }}>
      <div style={{ flex: '1 1 280px', minWidth: 0 }}>
        <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>{project.name}</div>
      </div>

      <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        <MetaItem label="Ngày bắt đầu" value={project.startDate} />
        <MetaItem label="Ngày kết thúc" value={project.endDate} valueColor="#FF9B9B" />
        <MetaItem label="Thời gian" value={`${project.durationDays} ngày`} />
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Tình trạng</div>
          <span style={{
            display: 'inline-block',
            background: statusStyle.bg,
            color: statusStyle.color,
            fontSize: 12,
            fontWeight: 700,
            padding: '2px 10px',
            borderRadius: 4,
          }}>
            {project.status}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <TaskCircle value={project.totalTasks} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <ProgressRow label="Tiến độ kế hoạch" value={project.planProgress} color="#3498DB" />
          <ProgressRow label="Tiến độ thực tế" value={project.actualProgress} color="#F5A623" />
        </div>
      </div>
    </div>
  );
}
