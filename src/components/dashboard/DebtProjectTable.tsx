'use client';

import React, { useState } from 'react';
import { Table, Select, Button } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { debtProjects } from '@/data/mockData';

function fmtMoney(n: number) {
  return (n / 1000000000).toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export default function DebtProjectTable() {
  const [filter, setFilter] = useState('chua_thu');

  const columns: ColumnsType<typeof debtProjects[0]> = [
    { title: 'STT', dataIndex: 'stt', width: 40, align: 'center' as const, render: (v: number) => <span style={{ fontSize: 12 }}>{v}</span> },
    {
      title: 'Dự án',
      dataIndex: 'project',
      render: (v: string) => (
        <a href="#" style={{ color: '#6BAAFE', fontSize: 12, fontWeight: 500 }} onClick={e => e.preventDefault()}>
          {v}
        </a>
      ),
    },
    {
      title: 'Giá trị HĐ',
      dataIndex: 'contractValue',
      align: 'right' as const,
      render: (v: number) => <span style={{ fontSize: 12 }}>{fmtMoney(v)}</span>,
    },
    {
      title: 'ĐN TT',
      dataIndex: 'paymentRequest',
      align: 'right' as const,
      render: (v: number) => <span style={{ fontSize: 12 }}>{fmtMoney(v)}</span>,
    },
    {
      title: 'GT giữ lại',
      dataIndex: 'retainedValue',
      align: 'right' as const,
      render: (v: number) => <span style={{ fontSize: 12 }}>{fmtMoney(v)}</span>,
    },
  ];

  return (
    <div style={{
      background: '#fff',
      borderRadius: 10,
      padding: '14px 16px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: '#262626' }}>
          Danh sách dự án có công nợ lớn
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Select
            size="small"
            value={filter}
            onChange={setFilter}
            style={{ width: 110, fontSize: 11 }}
            options={[
              { value: 'chua_thu', label: 'Chưa thu' },
              { value: 'da_thu', label: 'Đã thu' },
              { value: 'tat_ca', label: 'Tất cả' },
            ]}
          />
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={debtProjects}
        rowKey="stt"
        size="small"
        pagination={false}
        scroll={{ y: 200 }}
        style={{ flex: 1 }}
        rowClassName={(_, index) => index % 2 === 0 ? '' : 'table-row-alt'}
      />
    </div>
  );
}
