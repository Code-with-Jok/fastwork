'use client';

import AppLayout from '@/components/layout/AppLayout';
import MaterialBudgetCard from '@/components/material/MaterialBudgetCard';
import MaterialMiniStatCard from '@/components/material/MaterialMiniStatCard';
import ImportExportTrendChart from '@/components/material/ImportExportTrendChart';
import MaterialBudgetPieChart from '@/components/material/MaterialBudgetPieChart';
import Top10MaterialsCard from '@/components/material/Top10MaterialsCard';
import PurchaseTreemapCard from '@/components/material/PurchaseTreemapCard';
import MaterialDemandTable from '@/components/material/MaterialDemandTable';
import OverBudgetCard from '@/components/material/OverBudgetCard';
import { materialBudgetSummary, purchasedSparkline, remainingSparkline } from '@/data/materialData';

export default function MaterialPage() {
  return (
    <AppLayout activeMenu="material" pageTitle="Cung ứng vật tư">
      {/* Row 1: budget overview + trend chart */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 280px 1fr', gap: 14, marginBottom: 14 }}>
        <MaterialBudgetCard />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <MaterialMiniStatCard
            label="Đã mua"
            value={`${materialBudgetSummary.purchased.toLocaleString('vi-VN')} tỷ`}
            bg="#FDF1ED"
            accent="#f7921e"
            sparkline={purchasedSparkline}
          />
          <MaterialMiniStatCard
            label="Còn lại"
            value={`${materialBudgetSummary.remaining.toLocaleString('vi-VN')} tỷ`}
            bg="#E8F8F5"
            accent="#17B799"
            sparkline={remainingSparkline}
          />
        </div>
        <ImportExportTrendChart />
      </div>

      {/* Row 2: pie + top 10 + treemap */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 14 }}>
        <MaterialBudgetPieChart />
        <Top10MaterialsCard />
        <PurchaseTreemapCard />
      </div>

      <MaterialDemandTable />

      <OverBudgetCard />
    </AppLayout>
  );
}
