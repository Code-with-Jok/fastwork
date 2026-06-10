'use client';

import AppLayout from '@/components/layout/AppLayout';
import ProjectListCard from '@/components/projectprogress/ProjectListCard';
import { projectList } from '@/data/projectListData';

export default function ProjectListPage() {
  return (
    <AppLayout activeMenu="progress" pageTitle="Tiến độ thi công">
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#1a1f2e' }}>Danh sách dự án</div>
        <div style={{ fontSize: 13, color: '#8a94a6', marginTop: 4 }}>
          Bạn có tổng cộng {projectList.length} dự án
        </div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 14,
      }}>
        {projectList.map((project) => (
          <ProjectListCard key={project.id} project={project} />
        ))}
      </div>
    </AppLayout>
  );
}
