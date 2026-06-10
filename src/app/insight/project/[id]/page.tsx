'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Empty } from 'antd';
import AppLayout from '@/components/layout/AppLayout';
import ProjectTabs, { PROJECT_TABS } from '@/components/projectprogress/ProjectTabs';
import ProjectHeaderBar from '@/components/projectprogress/ProjectHeaderBar';
import ProjectKpiRow from '@/components/projectprogress/ProjectKpiRow';
import ProjectGaugeRow from '@/components/projectprogress/ProjectGaugeRow';
import BusinessReportCard from '@/components/projectprogress/BusinessReportCard';
import ProjectCashFlowChart from '@/components/projectprogress/ProjectCashFlowChart';
import LargeDebtListCard from '@/components/projectprogress/LargeDebtListCard';
import { DebtCard } from '@/components/dashboard/DebtCards';
import { getProjectDetail, formatMoneyVN } from '@/data/projectDetailData';

function PlaceholderTab({ label }: { label: string }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e8ecf0', padding: '64px 20px' }}>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span style={{ color: '#bbb', fontSize: 13 }}>Chưa có dữ liệu cho mục &quot;{label}&quot;</span>}
      />
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams<{ id: string }>();
  const project = getProjectDetail(params.id);
  const [activeTab, setActiveTab] = useState('overview');

  const activeTabLabel = PROJECT_TABS.find((t) => t.key === activeTab)?.label ?? '';

  return (
    <AppLayout activeMenu="progress" pageTitle="Tiến độ thi công">
      <ProjectTabs projectId={project.id} activeTab={activeTab} onTabChange={setActiveTab} />
      <ProjectHeaderBar project={project} />

      {activeTab === 'overview' ? (
        <>
          <ProjectKpiRow project={project} />
          <ProjectGaugeRow project={project} />
          <BusinessReportCard project={project} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.4fr', gap: 14, marginBottom: 14 }}>
            <DebtCard
              title="Công nợ CĐT"
              bg="#DDFFF1"
              total={project.ownerDebt.total}
              items={project.ownerDebt.items}
              leftLabel={project.ownerDebt.leftLabel}
              leftValue={project.ownerDebt.leftValue}
              rightLabel={project.ownerDebt.rightLabel}
              rightValue={project.ownerDebt.rightValue}
              formatter={formatMoneyVN}
              totalFormatter={formatMoneyVN}
            />
            <DebtCard
              title="Công nợ Nhà thầu và NCC"
              bg="#FFF6F7"
              total={project.contractorDebt.total}
              items={project.contractorDebt.items}
              leftLabel={project.contractorDebt.leftLabel}
              leftValue={project.contractorDebt.leftValue}
              rightLabel={project.contractorDebt.rightLabel}
              rightValue={project.contractorDebt.rightValue}
              formatter={formatMoneyVN}
              totalFormatter={formatMoneyVN}
            />
            <ProjectCashFlowChart data={project.cashFlow} />
          </div>
          <LargeDebtListCard />
        </>
      ) : (
        <PlaceholderTab label={activeTabLabel} />
      )}
    </AppLayout>
  );
}
