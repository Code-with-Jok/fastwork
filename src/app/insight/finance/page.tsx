'use client';

import AppLayout from '@/components/layout/AppLayout';
import FinanceKpiCard from '@/components/finance/FinanceKpiCard';
import RevenueSankeyCard from '@/components/finance/RevenueSankeyCard';
import DebtProgressCard from '@/components/finance/DebtProgressCard';
import ExpenseSankeyCard from '@/components/finance/ExpenseSankeyCard';
import FinanceDataTable from '@/components/finance/FinanceDataTable';
import ProjectCashFlowChart from '@/components/finance/ProjectCashFlowChart';

export default function FinancePage() {
  return (
    <AppLayout activeMenu="finance" pageTitle="Theo dõi tài chính">

      {/* Row 1: KPI card + Revenue flow */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: 16,
        marginBottom: 16,
        minHeight: 300,
      }}>
        <FinanceKpiCard />
        <RevenueSankeyCard />
      </div>

      {/* Row 2: Debt progress + Expense flow */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        gap: 16,
        marginBottom: 16,
        minHeight: 300,
      }}>
        <DebtProgressCard />
        <ExpenseSankeyCard />
      </div>

      {/* Row 3: Data table + Cash flow chart */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 0.7fr',
        gap: 16,
        minHeight: 460,
      }}>
        <FinanceDataTable />
        <ProjectCashFlowChart />
      </div>

    </AppLayout>
  );
}
