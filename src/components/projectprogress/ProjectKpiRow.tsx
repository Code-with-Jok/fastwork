'use client';

import React from 'react';
import {
  CloudDownloadOutlined, WalletOutlined, RiseOutlined, FallOutlined,
  ToolOutlined, CheckCircleOutlined,
} from '@ant-design/icons';
import { ProjectDetail, formatMoneyVN } from '@/data/projectDetailData';

interface ProjectKpiRowProps {
  project: ProjectDetail;
}

export default function ProjectKpiRow({ project }: ProjectKpiRowProps) {
  const items = [
    { label: 'Giá trị dự án', value: project.kpis.projectValue, icon: <CloudDownloadOutlined />, bg: '#EAF1FF', color: '#3498DB' },
    { label: 'Ngân sách', value: project.kpis.budget, icon: <WalletOutlined />, bg: '#FFF3E6', color: '#F5A623' },
    { label: 'Doanh thu', value: project.kpis.revenue, icon: <RiseOutlined />, bg: '#E8FBF5', color: '#17B799' },
    { label: 'Chi phí', value: project.kpis.cost, icon: <FallOutlined />, bg: '#FDECEC', color: '#E85347' },
    { label: 'Sản lượng thực hiện', value: project.kpis.productionExecuted, icon: <ToolOutlined />, bg: '#EAF1FF', color: '#3498DB' },
    { label: 'Sản lượng nghiệm thu', value: project.kpis.productionAccepted, icon: <CheckCircleOutlined />, bg: '#E8FBF5', color: '#17B799' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 14,
      marginBottom: 14,
    }}>
      {items.map((item) => (
        <div key={item.label} style={{
          background: '#fff', borderRadius: 8, border: '1px solid #e8ecf0',
          padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%', background: item.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: item.color, fontSize: 15, flexShrink: 0,
          }}>
            {item.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12, color: '#8a94a6', lineHeight: 1.3 }}>{item.label}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#1a1f2e', whiteSpace: 'nowrap' }}>
              {formatMoneyVN(item.value)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
