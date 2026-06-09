'use client';

import React from 'react';
import { projectProgressData } from '@/data/mockData';
import SemiGauge from './SemiGauge';

export default function ProjectProgress() {
  return (
    <div style={{ background: '#fff', borderRadius: 10, padding: '14px 16px' }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: '#262626', marginBottom: 14 }}>
        Tiến độ dự án
      </div>

      {/* Header row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px repeat(4, 1fr)',
        gap: 8,
        marginBottom: 6,
      }}>
        <div />
        {['Tiến độ thi công', 'Tiến độ chi phí', 'Tiến độ thời gian', 'Tiến độ doanh thu'].map(h => (
          <div key={h} style={{
            textAlign: 'center',
            fontSize: 11,
            fontWeight: 600,
            color: '#555',
            background: '#F5F6FA',
            borderRadius: 6,
            padding: '6px 4px',
          }}>
            {h}
          </div>
        ))}
      </div>

      {/* Project rows */}
      {projectProgressData.map(proj => (
        <div key={proj.id} style={{
          display: 'grid',
          gridTemplateColumns: '200px repeat(4, 1fr)',
          gap: 8,
          marginBottom: 8,
          alignItems: 'center',
        }}>
          {/* Project name */}
          <div style={{
            background: proj.bgColor,
            borderRadius: 8,
            padding: '10px 12px',
            color: '#fff',
            fontSize: 11,
            fontWeight: 600,
            lineHeight: 1.4,
            minHeight: 80,
            display: 'flex',
            alignItems: 'center',
          }}>
            {proj.name}
          </div>

          {/* Gauges */}
          {[proj.construction, proj.cost, proj.time, proj.revenue].map((val, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: 8,
              boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
              border: '1px solid #f0f0f0',
            }}>
              <SemiGauge
                value={val}
                label=""
                size={130}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
