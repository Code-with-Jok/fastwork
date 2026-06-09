'use client';

import AppLayout from '@/components/layout/AppLayout';
import KpiCard from '@/components/dashboard/KpiCard';
import StatusCards from '@/components/dashboard/StatusCards';
import RevenueChart from '@/components/dashboard/RevenueChart';
import CashFlowChart from '@/components/dashboard/CashFlowChart';
import { OwnerDebtCard, ContractorDebtCard } from '@/components/dashboard/DebtCards';
import DebtProjectTable from '@/components/dashboard/DebtProjectTable';
import CostPieChart from '@/components/dashboard/CostPieChart';
import CostBarChart from '@/components/dashboard/CostBarChart';
import FinancialTable from '@/components/dashboard/FinancialTable';
import ProjectProgress from '@/components/dashboard/ProjectProgress';

export default function DashboardPage() {
  return (
    <AppLayout activeMenu="dashboard" pageTitle="Tổng quan">
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 16, marginBottom: 16 }}>
        <KpiCard />
        <StatusCards />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <RevenueChart />
        <CashFlowChart />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.4fr', gap: 16, marginBottom: 16 }}>
        <OwnerDebtCard />
        <ContractorDebtCard />
        <DebtProjectTable />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 16, marginBottom: 16 }}>
        <CostPieChart />
        <CostBarChart />
      </div>
      <div style={{ marginBottom: 16 }}>
        <FinancialTable />
      </div>
      <div>
        <ProjectProgress />
      </div>
    </AppLayout>
  );
}
