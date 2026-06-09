'use client';

import React from 'react';
import { Table, Button } from 'antd';
import { FilterOutlined, ExpandAltOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { financialTableData } from '@/data/mockData';

type Row = typeof financialTableData[0];

function fmtBil(n: number) {
  if (n === 0) return '0';
  return (n / 1000000000).toFixed(3);
}

const columns: ColumnsType<Row> = [
  {
    title: 'STT', dataIndex: 'stt', width: 45, align: 'center' as const,
    render: (v: number) => <span style={{ fontSize: 13 }}>{v}</span>,
  },
  {
    title: 'Dự án', dataIndex: 'project', width: 220,
    render: (v: string) => (
      <a href="#" style={{ color: '#6BAAFE', fontSize: 13, fontWeight: 500 }} onClick={e => e.preventDefault()}>
        {v}
      </a>
    ),
  },
  {
    title: 'Khách hàng', dataIndex: 'customer', width: 180,
    render: (v: string) => (
      <a href="#" style={{ color: '#6BAAFE', fontSize: 13 }} onClick={e => e.preventDefault()}>{v}</a>
    ),
  },
  {
    title: 'GT hợp đồng', dataIndex: 'contractValue', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.contractValue - b.contractValue,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtBil(v)}</span>,
  },
  {
    title: 'Ngân sách', dataIndex: 'budget', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.budget - b.budget,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtBil(v)}</span>,
  },
  {
    title: 'LN kế hoạch', dataIndex: 'plannedProfit', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.plannedProfit - b.plannedProfit,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtBil(v)}</span>,
  },
  {
    title: 'Doanh thu', dataIndex: 'revenue', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.revenue - b.revenue,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtBil(v)}</span>,
  },
  {
    title: 'CP thực tế', dataIndex: 'actualCost', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.actualCost - b.actualCost,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtBil(v)}</span>,
  },
  {
    title: 'LN thực tế', dataIndex: 'actualProfit', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.actualProfit - b.actualProfit,
    render: (v: number) => (
      <span style={{
        fontSize: 13,
        fontWeight: 600,
        color: v > 0 ? '#3D9760' : v < 0 ? '#E85347' : '#555',
      }}>
        {fmtBil(v)}
      </span>
    ),
  },
];

export default function FinancialTable() {
  return (
    <div style={{ background: '#fff', borderRadius: 10, padding: '14px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: '#262626' }}>
          Bảng dữ liệu tài chính dự án
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button size="small" icon={<FilterOutlined />} style={{ fontSize: 12, borderColor: '#d9d9d9' }}>
            Bộ lọc
          </Button>
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={financialTableData}
        rowKey="key"
        size="small"
        pagination={false}
        scroll={{ x: 'max-content', y: 280 }}
        rowClassName={(_, index) => index % 2 !== 0 ? 'row-alt' : ''}
        style={{ fontSize: 13 }}
      />
    </div>
  );
}
