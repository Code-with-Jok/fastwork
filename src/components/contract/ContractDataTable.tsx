'use client';

import React from 'react';
import { Table } from 'antd';
import { ExpandAltOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { contractTableData, type ContractRow } from '@/data/contractData';

function fmt(n: number) {
  if (n === 0) return '0';
  return n.toLocaleString('vi-VN');
}

const columns: ColumnsType<ContractRow> = [
  {
    title: 'STT', dataIndex: 'stt', width: 44, align: 'center', fixed: 'left',
    render: (_v, row) => row.isGroup ? '' : <span style={{ fontSize: 12, color: '#888' }}>{row.stt}</span>,
  },
  {
    title: 'Số hợp đồng', dataIndex: 'soHopDong', width: 220, fixed: 'left',
    render: (v, row) => row.isGroup
      ? <span style={{ fontWeight: 600, fontSize: 12, color: '#2d3748' }}>{v}</span>
      : <a href="#" onClick={e => e.preventDefault()} style={{ color: '#17B799', fontSize: 12, fontWeight: 500 }}>{v}</a>,
  },
  {
    title: <span>Giá trị hợp đồng</span>,
    children: [
      {
        title: 'Hợp đồng gốc', dataIndex: 'hopDongGoc', align: 'right', width: 150,
        render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
      },
      {
        title: 'Phụ lục HĐ', dataIndex: 'phuLucHD', align: 'right', width: 110,
        render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
      },
      {
        title: 'Tổng', dataIndex: 'tong', align: 'right', width: 150,
        render: (v: number) => <span style={{ fontSize: 12, fontWeight: 500 }}>{fmt(v)}</span>,
      },
    ],
  },
  {
    title: 'Tỷ lệ tạm ứng', dataIndex: 'tyLeTamUng', align: 'center', width: 90,
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: 'Sản lượng', dataIndex: 'sanLuong', align: 'right', width: 140,
    render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
  },
  {
    title: 'Nghiệm thu', dataIndex: 'nghiemThu', align: 'right', width: 140,
    render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
  },
  {
    title: 'Đề nghị thanh toán', dataIndex: 'deNghiTT', align: 'right', width: 150,
    render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
  },
  {
    title: 'Tỷ lệ ĐN TT/SL', dataIndex: 'tyLeDNTTSL', align: 'center', width: 100,
    render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
  },
  {
    title: <span>Giá trị đã thanh toán/tạm ứng</span>,
    children: [
      {
        title: 'Tổng tạm ứng', dataIndex: 'tongTamUng', align: 'right', width: 130,
        render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
      },
      {
        title: 'Thanh toán', dataIndex: 'thanhToan', align: 'right', width: 130,
        render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
      },
      {
        title: 'Thu thực tế', dataIndex: 'thuThucTe', align: 'right', width: 130,
        render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
      },
      {
        title: 'Tỷ lệ TT', dataIndex: 'tyLeTT', align: 'center', width: 80,
        render: (v: string) => <span style={{ fontSize: 12 }}>{v}</span>,
      },
      {
        title: 'CĐT còn nợ', dataIndex: 'cdtConNo', align: 'right', width: 140,
        render: (v: number) => <span style={{ fontSize: 12, color: v > 0 ? '#e53e3e' : undefined }}>{fmt(v)}</span>,
      },
    ],
  },
  {
    title: 'Thu hồi tạm ứng HĐ', dataIndex: 'thuHoiTamUng', align: 'right', width: 140,
    render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
  },
  {
    title: 'Giá trị giữ lại', dataIndex: 'giaTriGiuLai', align: 'right', width: 120,
    render: (v: number) => <span style={{ fontSize: 12 }}>{fmt(v)}</span>,
  },
];

export default function ContractDataTable() {
  return (
    <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', border: '1px solid #e8ecf0' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 18px', borderBottom: '1px solid #e8ecf0',
      }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1f2e' }}>Danh sách hợp đồng</span>
        <ExpandAltOutlined style={{ color: '#999', cursor: 'pointer' }} />
      </div>
      <Table
        columns={columns}
        dataSource={contractTableData}
        rowKey="key"
        size="small"
        pagination={false}
        scroll={{ x: 1800, y: 400 }}
        bordered
        rowClassName={(row) => row.isGroup ? 'contract-group-row' : ''}
      />
      <style>{`
        .contract-group-row td { background: #f1f5fb !important; font-weight: 600; }
        .contract-group-row:hover td { background: #e8f0fa !important; }
      `}</style>
    </div>
  );
}
