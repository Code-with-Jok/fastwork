'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { projectList } from '@/data/projectListData';

export const PROJECT_TABS = [
  { key: 'overview', label: 'Tổng quan' },
  { key: 'finance', label: 'Theo dõi tài chính' },
  { key: 'contract', label: 'Hợp đồng nhận thầu' },
  { key: 'material', label: 'Cung ứng vật tư' },
  { key: 'progress', label: 'Tiến độ thi công' },
];

interface ProjectTabsProps {
  projectId: string;
  activeTab: string;
  onTabChange: (key: string) => void;
}

export default function ProjectTabs({ projectId, activeTab, onTabChange }: ProjectTabsProps) {
  const router = useRouter();

  return (
    <div style={{
      background: '#fff',
      borderRadius: 8,
      border: '1px solid #e8ecf0',
      padding: 6,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 14,
      flexWrap: 'wrap',
    }}>
      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {PROJECT_TABS.map((tab) => {
          const active = tab.key === activeTab;
          return (
            <div
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              style={{
                padding: '8px 16px',
                borderRadius: 6,
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                color: active ? '#fff' : '#555',
                background: active ? '#0B3175' : 'transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s',
              }}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <Select
        value={projectId}
        onChange={(value) => router.push(`/insight/project/${value}`)}
        style={{ minWidth: 260 }}
        suffixIcon={<DownOutlined style={{ fontSize: 11 }} />}
        showSearch
        optionFilterProp="label"
        options={projectList.map((p) => ({ value: p.id, label: p.name }))}
      />
    </div>
  );
}
