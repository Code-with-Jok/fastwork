'use client';

import React from 'react';
import { Empty, Select } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';

export default function OverBudgetCard() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e8ecf0', overflow: 'hidden' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 18px', borderBottom: '1px solid #e8ecf0',
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1f2e' }}>Nhập - Xuất vượt ngân sách</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Select
            size="small"
            defaultValue="import"
            style={{ width: 180 }}
            options={[{ value: 'import', label: 'Nhập vượt ngân sách' }]}
          />
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
      <div style={{ padding: '60px 0' }}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span style={{ color: '#999', fontSize: 13 }}>Chưa có phiếu nhập nào!</span>}
        />
      </div>
    </div>
  );
}
