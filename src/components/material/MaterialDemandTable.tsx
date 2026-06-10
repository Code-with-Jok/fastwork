'use client';

import React from 'react';
import { Table, Select } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { materialDemandData, type MaterialDemandRow } from '@/data/materialData';

const columns: ColumnsType<MaterialDemandRow> = [
  {
    title: 'STT', dataIndex: 'stt', width: 50, align: 'center', fixed: 'left',
    render: (v: number) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Tên đề xuất', dataIndex: 'proposalName', width: 150, fixed: 'left',
    render: (v: string) => (
      <a href="#" onClick={e => e.preventDefault()} style={{ color: '#17B799', fontSize: 12 }}>{v}</a>
    ),
  },
  {
    title: 'Loại đề xuất', dataIndex: 'proposalType', width: 110,
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Tên vật liệu', dataIndex: 'materialName', width: 240,
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Đơn vị', dataIndex: 'unit', width: 70, align: 'center',
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Khối lượng', dataIndex: 'quantity', width: 100, align: 'right',
    render: (v: number) => <span style={{ fontSize: 12 }}>{v.toLocaleString('vi-VN')}</span>,
  },
  {
    title: 'Ngày cần vật liệu', dataIndex: 'neededDate', width: 130, align: 'center',
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Thời hạn duyệt', dataIndex: 'approvalDeadline', width: 130, align: 'center',
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Số ngày duyệt trễ', dataIndex: 'daysOverdue', width: 130, align: 'center',
    render: (v: number) => <span style={{ fontSize: 12, color: '#e53e3e', fontWeight: 600 }}>{v}</span>,
  },
  {
    title: 'Dự án', dataIndex: 'project', width: 260,
    render: (v: string) => <span style={{ fontSize: 12, color: '#17B799', fontWeight: 500 }}>{v}</span>,
  },
];

export default function MaterialDemandTable() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #e8ecf0', marginBottom: 14 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 18px', borderBottom: '1px solid #e8ecf0',
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1f2e' }}>Nhu cầu mua - cấp vật tư</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Select
            size="small"
            defaultValue="pending"
            style={{ width: 170 }}
            options={[{ value: 'pending', label: 'Đề xuất cần duyệt' }]}
          />
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={materialDemandData}
        rowKey="key"
        size="small"
        pagination={false}
        scroll={{ x: 1370 }}
        bordered
      />
    </div>
  );
}
