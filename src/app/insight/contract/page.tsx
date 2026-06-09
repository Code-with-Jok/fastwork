'use client';

import AppLayout from '@/components/layout/AppLayout';
import ContractKpiCards from '@/components/contract/ContractKpiCards';
import OverviewBarChart from '@/components/contract/OverviewBarChart';
import TopProjectsChart from '@/components/contract/TopProjectsChart';
import ContractPieChart from '@/components/contract/ContractPieChart';
import ContractDataTable from '@/components/contract/ContractDataTable';

export default function ContractPage() {
  return (
    <AppLayout activeMenu="contract" pageTitle="Theo dõi HĐ nhận thầu">
      <ContractKpiCards />

      {/* Charts row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <OverviewBarChart />
        <TopProjectsChart />
      </div>

      {/* Charts row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <ContractPieChart />
        <div style={{
          background: '#fff', borderRadius: 8, padding: '16px 20px',
          border: '1px solid #e8ecf0', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1f2e', marginBottom: 8 }}>5 dự án có phát sinh cao nhất</div>
            <div style={{ fontSize: 13, color: '#bbb' }}>(Không có dữ liệu phát sinh)</div>
          </div>
        </div>
      </div>

      {/* Data table */}
      <ContractDataTable />
    </AppLayout>
  );
}
