'use client';

import React, { useState } from 'react';
import { Empty, Select } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';

export default function LargeDebtListCard() {
  const [filter, setFilter] = useState('contractor');

  return (
    <div style={{ background: '#fff', borderRadius: 10, padding: '14px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#262626' }}>Danh sách công nợ lớn</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Select
            size="small"
            value={filter}
            onChange={setFilter}
            style={{ width: 120, fontSize: 11 }}
            options={[
              { value: 'contractor', label: 'Nhà thầu' },
              { value: 'owner', label: 'Chủ đầu tư' },
              { value: 'supplier', label: 'NCC' },
            ]}
          />
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
      <div style={{ padding: '32px 0' }}>
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={<span style={{ color: '#bbb', fontSize: 13 }}>Chưa có dữ liệu!</span>}
        />
      </div>
    </div>
  );
}
