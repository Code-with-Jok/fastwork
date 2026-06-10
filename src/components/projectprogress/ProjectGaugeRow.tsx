'use client';

import React from 'react';
import SemiGauge from '@/components/dashboard/SemiGauge';
import { ProjectDetail } from '@/data/projectDetailData';

interface ProjectGaugeRowProps {
  project: ProjectDetail;
}

export default function ProjectGaugeRow({ project }: ProjectGaugeRowProps) {
  const gauges = [
    { label: 'Tiến độ thi công', value: project.gauges.construction },
    { label: 'Tiến độ chi phí', value: project.gauges.cost },
    { label: 'Tiến độ thời gian', value: project.gauges.time },
    { label: 'Tiến độ doanh thu', value: project.gauges.revenue },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 14,
      marginBottom: 14,
    }}>
      {gauges.map((g) => (
        <div key={g.label} style={{
          background: '#fff', borderRadius: 8, border: '1px solid #e8ecf0', padding: '14px 16px 4px',
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#262626' }}>{g.label}</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SemiGauge value={g.value} label="" size={160} />
          </div>
        </div>
      ))}
    </div>
  );
}
