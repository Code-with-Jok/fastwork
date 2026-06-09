'use client';

import React from 'react';
import { Avatar, Badge } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  QuestionCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

interface HeaderProps {
  sidebarWidth: number;
  pageTitle?: string;
}

export default function Header({ sidebarWidth, pageTitle = 'Tổng quan' }: HeaderProps) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: sidebarWidth,
      right: 0,
      height: 65,
      background: '#fff',
      borderBottom: '1px solid #E8ECF0',
      boxShadow: 'rgba(54,74,99,0.05) 0 1px 3px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      zIndex: 99,
      transition: 'left 0.2s',
    }}>
      <div style={{ fontWeight: 600, fontSize: 16, color: '#0B3175' }}>{pageTitle}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <QuestionCircleOutlined style={{ fontSize: 22, color: '#17B799', cursor: 'pointer' }} />
        <Badge count={3} size="small">
          <MailOutlined style={{ fontSize: 22, color: '#17B799', cursor: 'pointer' }} />
        </Badge>
        <AppstoreOutlined style={{ fontSize: 22, color: '#17B799', cursor: 'pointer' }} />
        <Avatar size={34} icon={<UserOutlined />} style={{ background: '#17B799', cursor: 'pointer' }} />
      </div>
    </div>
  );
}
