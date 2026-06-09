'use client';

import React from 'react';
import { constructionStatus, executionResult } from '@/data/mockData';
import {
  CheckCircleOutlined,
  FireOutlined,
  WarningOutlined,
  RiseOutlined,
  ToolOutlined,
  AuditOutlined,
} from '@ant-design/icons';

interface StatusCardProps {
  bg: string;
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string | number;
  unit?: string;
}

function StatusCard({ bg, icon, iconColor, label, value, unit }: StatusCardProps) {
  return (
    <div style={{
      background: bg,
      borderRadius: 8,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
    }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: iconColor + '22',
        border: `2px solid ${iconColor}44`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: iconColor,
        fontSize: 18,
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 11, color: '#555', marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#222', lineHeight: 1 }}>
          {value}
          {unit && <span style={{ fontSize: 12, fontWeight: 400, marginLeft: 3 }}>{unit}</span>}
        </div>
      </div>
    </div>
  );
}

export default function StatusCards() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
      {/* Tình trạng thi công */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#262626', marginBottom: 8 }}>Tình trạng thi công</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <StatusCard
            bg="#D6EAF9"
            icon={<CheckCircleOutlined />}
            iconColor="#1A73E8"
            label="Tổng số dự án"
            value={constructionStatus.total}
          />
          <StatusCard
            bg="#FFD1D1"
            icon={<FireOutlined />}
            iconColor="#E85347"
            label="Rủi ro"
            value={constructionStatus.risk}
          />
          <StatusCard
            bg="#FFE0D1"
            icon={<WarningOutlined />}
            iconColor="#E87B34"
            label="Chậm tiến độ"
            value={constructionStatus.behindSchedule}
          />
        </div>
      </div>

      {/* Kết quả thực hiện */}
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#262626', marginBottom: 8 }}>Kết quả thực hiện</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <StatusCard
            bg="#FFE9CC"
            icon={<RiseOutlined />}
            iconColor="#E8A020"
            label="Phát sinh"
            value={executionResult.arising.toLocaleString('vi-VN')}
            unit="tỷ"
          />
          <StatusCard
            bg="#D8E9D9"
            icon={<ToolOutlined />}
            iconColor="#3D9760"
            label="SL thực hiện"
            value={executionResult.productionValue.toLocaleString('vi-VN')}
            unit="tỷ"
          />
          <StatusCard
            bg="#BFE5E3"
            icon={<AuditOutlined />}
            iconColor="#17B799"
            label="SL nghiệm thu"
            value={executionResult.acceptanceValue.toLocaleString('vi-VN')}
            unit="tỷ"
          />
        </div>
      </div>
    </div>
  );
}
