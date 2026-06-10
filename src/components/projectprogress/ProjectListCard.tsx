'use client';

import React from 'react';
import Link from 'next/link';
import { ProjectListItem } from '@/data/projectListData';
import ConstructionIcon from './ConstructionIcon';
import SemiGauge from '@/components/dashboard/SemiGauge';

interface ProjectListCardProps {
  project: ProjectListItem;
}

export default function ProjectListCard({ project }: ProjectListCardProps) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 10,
      border: '1px solid #e8ecf0',
      padding: '16px 16px 8px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', minHeight: 58 }}>
        <ConstructionIcon size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <Link
            href={`/insight/project/${project.id}`}
            className="project-card-link"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: 13,
              fontWeight: 700,
              color: '#1a1f2e',
              lineHeight: 1.4,
            }}
          >
            {project.name}
          </Link>
          <div style={{ fontSize: 12, color: '#3F8CFF', marginTop: 4, fontWeight: 500 }}>
            {project.owner}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SemiGauge value={project.progress} label="" size={150} />
      </div>
    </div>
  );
}
