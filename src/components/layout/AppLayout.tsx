'use client';

import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
  activeMenu?: string;
  pageTitle?: string;
}

export default function AppLayout({ children, activeMenu = 'dashboard', pageTitle }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = sidebarOpen ? (collapsed ? 64 : 220) : 0;

  return (
    <Layout style={{ minHeight: '100vh', background: '#F5F6FA' }}>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} activeKey={activeMenu} open={sidebarOpen} />
      <Layout style={{ marginLeft: sidebarWidth, transition: 'margin-left 0.2s' }}>
        <Header
          sidebarWidth={sidebarWidth}
          pageTitle={pageTitle}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
        <Layout.Content style={{
          marginTop: 65,
          padding: '20px',
          background: '#F5F6FA',
          minHeight: 'calc(100vh - 65px)',
        }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
