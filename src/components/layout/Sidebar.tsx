'use client';

import React from 'react';
import { Layout } from 'antd';
import { useRouter } from 'next/navigation';
import {
  DashboardOutlined,
  DollarOutlined,
  FileTextOutlined,
  DropboxOutlined,
  ProjectOutlined,
  FileImageOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (c: boolean) => void;
  activeKey?: string;
  open?: boolean;
}

const menuItems = [
  { key: 'dashboard', icon: <DashboardOutlined />, label: 'Tổng quan', href: '/' },
  { key: 'finance', icon: <DollarOutlined />, label: 'Theo dõi tài chính', href: '/insight/finance' },
  { key: 'contract', icon: <FileTextOutlined />, label: 'Theo dõi HĐ nhận thầu', href: '/insight/contract' },
  { key: 'material', icon: <DropboxOutlined />, label: 'Cung ứng vật tư', href: '/insight/material' },
  { key: 'progress', icon: <ProjectOutlined />, label: 'Tiến độ thi công', href: '/insight/project' },
  { key: 'photos', icon: <FileImageOutlined />, label: 'Hình ảnh thi công', href: '/insight/gallery' },
];

export default function Sidebar({ collapsed, onCollapse, activeKey = 'dashboard', open = true }: SidebarProps) {
  const router = useRouter();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-100 transition-transform duration-200 ease-in-out ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <Sider
        width={220}
        collapsedWidth={64}
        collapsed={collapsed}
        style={{
          background: '#101924',
          minHeight: '100vh',
          transition: 'width 0.2s',
          overflow: 'hidden',
        }}
      >
        {/* Logo */}
        <div style={{
          height: 65,
          display: 'flex',
          alignItems: 'center',
          padding: collapsed ? '0 14px' : '0 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          gap: 10,
          overflow: 'hidden',
          cursor: 'pointer',
        }} onClick={() => router.push('/')}>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'linear-gradient(135deg, #17B799 40%, #F5A623 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: 15,
            color: '#fff',
            flexShrink: 0,
          }}>FC</div>
          {!collapsed && (
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, whiteSpace: 'nowrap' }}>
              FastCons
            </span>
          )}
        </div>

        {/* Nav Menu */}
        <div style={{ padding: '8px 0' }}>
          {menuItems.map(item => {
            const isActive = item.key === activeKey;
            return (
              <div
                key={item.key}
                onClick={() => item.href !== '#' && router.push(item.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  height: 52,
                  padding: collapsed ? '0 0 0 22px' : '0 12px 0 20px',
                  cursor: item.href !== '#' ? 'pointer' : 'default',
                  background: isActive ? '#182536' : 'transparent',
                  borderRadius: isActive ? 6 : 0,
                  margin: isActive ? '0 6px' : 0,
                  transition: 'all 0.15s',
                  color: isActive ? '#fff' : '#6E82A5',
                  fontSize: 15,
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                <span style={{ fontSize: 20, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  {item.icon}
                </span>
                {!collapsed && (
                  <span style={{ fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Collapse toggle */}
        <div
          onClick={() => onCollapse(!collapsed)}
          style={{
            position: 'absolute',
            bottom: 24,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: collapsed ? 0 : '0 22px',
            color: '#6E82A5',
            cursor: 'pointer',
            fontSize: 18,
            height: 40,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </Sider>
    </div>
  );
}
