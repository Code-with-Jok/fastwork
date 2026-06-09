'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts';
import { costBarData } from '@/data/mockData';
import { MoreOutlined } from '@ant-design/icons';

export default function CostBarChart() {
  return (
    <div style={{ background: '#fff', borderRadius: 10, padding: '16px 20px', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14, color: '#262626' }}>Phân bổ chi phí theo dự án</div>
          <div style={{ fontSize: 11, color: '#999' }}>12 tháng gần nhất</div>
        </div>
        <MoreOutlined style={{ color: '#999', fontSize: 16, cursor: 'pointer' }} />
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={costBarData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }} barSize={8}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="project" tick={{ fontSize: 10, fill: '#999' }} />
          <YAxis tick={{ fontSize: 10, fill: '#999' }} />
          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6 }} />
          <Legend iconType="square" iconSize={8} wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="laborBudget" name="NC Dự trù" stackId="a" fill="#17B799" />
          <Bar dataKey="laborActual" name="NC Thực tế" stackId="b" fill="#0B9980" />
          <Bar dataKey="materialBudget" name="VL Dự trù" stackId="a" fill="#F5A623" />
          <Bar dataKey="materialActual" name="VL Thực tế" stackId="b" fill="#D4880A" />
          <Bar dataKey="generalBudget" name="CPC Dự trù" stackId="a" fill="#6BAAFE" />
          <Bar dataKey="generalActual" name="CPC Thực tế" stackId="b" fill="#3D7CD4" />
          <Bar dataKey="otherBudget" name="Khác Dự trù" stackId="a" fill="#E85347" radius={[2, 2, 0, 0]} />
          <Bar dataKey="otherActual" name="Khác Thực tế" stackId="b" fill="#B03530" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
