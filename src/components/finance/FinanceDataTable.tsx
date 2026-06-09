'use client';

import React from 'react';
import { Table, Button } from 'antd';
import { FilterOutlined, ExpandAltOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { financeTableData } from '@/data/financeData';

type Row = typeof financeTableData[0];

function fmtNum(n: number) {
  if (n === 0) return '0';
  return n.toLocaleString('vi-VN');
}

const columns: ColumnsType<Row> = [
  {
    title: 'STT', dataIndex: 'stt', width: 45, align: 'center' as const, fixed: 'left' as const,
    render: (v: number) => <span style={{ fontSize: 13 }}>{v}</span>,
  },
  {
    title: 'Dự án', dataIndex: 'project', width: 300, fixed: 'left' as const,
    render: (v: string) => (
      <a href="#" style={{ color: '#17b799', fontSize: 13 }} onClick={e => e.preventDefault()}>{v}</a>
    ),
  },
  {
    title: 'Giá trị hợp đồng', dataIndex: 'contract', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.contract - b.contract,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtNum(v)}</span>,
  },
  {
    title: 'Đề nghị thanh toán', dataIndex: 'request', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.request - b.request,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtNum(v)}</span>,
  },
  {
    title: 'Tổng chi phí thực tế', dataIndex: 'actualCost', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.actualCost - b.actualCost,
    render: (v: number) => <span style={{ fontSize: 13 }}>{fmtNum(v)}</span>,
  },
  {
    title: 'Tổng chi phí đã trả', dataIndex: 'paidCost', align: 'right' as const,
    sorter: (a: Row, b: Row) => a.paidCost - b.paidCost,
    render: (v: number) => <span style={{ fontSize: 13, color: v > 0 ? '#3D9760' : undefined }}>{fmtNum(v)}</span>,
  },
];

export default function FinanceDataTable() {
  const total = {
    contract: financeTableData.reduce((s, r) => s + r.contract, 0),
    request: financeTableData.reduce((s, r) => s + r.request, 0),
    actualCost: financeTableData.reduce((s, r) => s + r.actualCost, 0),
    paidCost: financeTableData.reduce((s, r) => s + r.paidCost, 0),
  };

  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '14px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h6 style={{ margin: 0, fontSize: 16, fontWeight: 500, color: '#535353' }}>Bảng số liệu</h6>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button size="small" icon={<FilterOutlined />} style={{ fontSize: 12 }}>Bộ lọc</Button>
          <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={financeTableData}
        rowKey="key"
        size="small"
        pagination={false}
        scroll={{ x: 'max-content', y: 360 }}
        bordered
        rowClassName={(_, i) => i % 2 !== 0 ? 'row-alt' : ''}
        summary={() => (
          <Table.Summary fixed>
            <Table.Summary.Row style={{ fontWeight: 600, background: '#fafafa' }}>
              <Table.Summary.Cell index={0} colSpan={2} align="center">
                <span style={{ fontSize: 13 }}>Tổng</span>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2} align="right">
                <span style={{ fontSize: 13 }}>{fmtNum(total.contract)}</span>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3} align="right">
                <span style={{ fontSize: 13 }}>{fmtNum(total.request)}</span>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={4} align="right">
                <span style={{ fontSize: 13 }}>{fmtNum(total.actualCost)}</span>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={5} align="right">
                <span style={{ fontSize: 13 }}>{fmtNum(total.paidCost)}</span>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
      />
    </div>
  );
}
