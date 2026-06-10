import { projectList, ProjectListItem } from './projectListData';

export type ProjectStatus = 'Chậm trễ' | 'Đúng tiến độ' | 'Hoàn thành' | 'Chưa bắt đầu';

export const STATUS_STYLES: Record<ProjectStatus, { bg: string; color: string }> = {
  'Chậm trễ': { bg: '#FCE4E4', color: '#E5484D' },
  'Đúng tiến độ': { bg: '#E3F2FD', color: '#3498DB' },
  'Hoàn thành': { bg: '#E3FCEF', color: '#17B799' },
  'Chưa bắt đầu': { bg: '#F0F1F3', color: '#8A94A6' },
};

export interface DebtInfo {
  total: number;
  items: { label: string; value: number }[];
  leftLabel: string;
  leftValue: number;
  rightLabel: string;
  rightValue: number;
}

export interface BusinessChartPoint {
  month: string;
  revenue: number;
  cost: number;
  profit: number;
}

export interface CashFlowPoint {
  month: string;
  thu: number;
  chi: number;
}

export interface ProjectDetail {
  id: string;
  name: string;
  owner: string;
  startDate: string;
  endDate: string;
  durationDays: number;
  status: ProjectStatus;
  totalTasks: number;
  planProgress: number;
  actualProgress: number;
  kpis: {
    projectValue: number;
    budget: number;
    revenue: number;
    cost: number;
    productionExecuted: number;
    productionAccepted: number;
  };
  gauges: {
    construction: number;
    cost: number;
    time: number;
    revenue: number;
  };
  businessReport: {
    revenue: number;
    cost: number;
    profit: number;
    chartData: BusinessChartPoint[];
  };
  ownerDebt: DebtInfo;
  contractorDebt: DebtInfo;
  cashFlow: CashFlowPoint[];
}

/** Formats a VND amount the way FastCons does: "1,4 tỷ", "700 triệu", "25,9 triệu", "0". */
export function formatMoneyVN(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? '-' : '';
  if (abs >= 1_000_000_000) {
    return sign + (abs / 1_000_000_000).toFixed(1).replace(/\.0$/, '').replace('.', ',') + ' tỷ';
  }
  if (abs >= 1_000_000) {
    return sign + (abs / 1_000_000).toFixed(1).replace(/\.0$/, '').replace('.', ',') + ' triệu';
  }
  return sign + abs.toLocaleString('vi-VN');
}

function pad2(n: number): string {
  return n < 10 ? `0${n}` : `${n}`;
}

function formatDateVN(date: Date): string {
  return `${pad2(date.getUTCDate())}/${pad2(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`;
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function buildMonthRange(startYear: number, startMonth: number, count: number): string[] {
  const months: string[] = [];
  let y = startYear;
  let m = startMonth;
  for (let i = 0; i < count; i++) {
    months.push(`${m}/${y}`);
    m += 1;
    if (m > 12) {
      m = 1;
      y += 1;
    }
  }
  return months;
}

const TODAY = new Date(Date.UTC(2026, 5, 10));
const last12Months = buildMonthRange(2025, 7, 12);

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

/** Deterministic pseudo-random integer in [min, max], stable per (id, salt). */
function seeded(id: string, salt: number, min: number, max: number): number {
  const h = hashString(`${id}:${salt}`);
  return min + (h % (max - min + 1));
}

const demoProjectDetail: ProjectDetail = {
  id: 'demo-sua-chua-nha-anh-thien',
  name: '(DEMO) Dự án sửa chữa nhà anh Thiện (Dân dụng)',
  owner: 'ADMIN',
  startDate: '02/11/2024',
  endDate: '23/01/2025',
  durationDays: 83,
  status: 'Chậm trễ',
  totalTasks: 78,
  planProgress: 100,
  actualProgress: 15,
  kpis: {
    projectValue: 1_400_000_000,
    budget: 1_400_000_000,
    revenue: 700_000_000,
    cost: 0,
    productionExecuted: 700_000_000,
    productionAccepted: 700_000_000,
  },
  gauges: {
    construction: 15,
    cost: 0,
    time: 713.41,
    revenue: 50,
  },
  businessReport: {
    revenue: 700_000_000,
    cost: 0,
    profit: 700_000_000,
    chartData: buildMonthRange(2023, 7, 35).map((month, i) => ({
      month,
      revenue: i === 0 ? 50_000_000 : 0,
      cost: i === 2 ? 30_000_000 : 0,
      profit: i === 0 ? 50_000_000 : i === 2 ? -30_000_000 : 0,
    })),
  },
  ownerDebt: {
    total: 0,
    items: [
      { label: 'Đề nghị thanh toán', value: 700_000_000 },
      { label: 'Giá trị giữ lại', value: 0 },
      { label: 'Tạm ứng', value: 0 },
      { label: 'Giá trị thanh toán', value: 700_000_000 },
    ],
    leftLabel: 'Thu thực tế (5 = 3 + 4)',
    leftValue: 700_000_000,
    rightLabel: 'CĐT còn nợ (6 = 1 + 2 - 5)',
    rightValue: 0,
  },
  contractorDebt: {
    total: 25_900_000,
    items: [
      { label: 'Đề nghị thanh toán', value: 25_900_000 },
      { label: 'Giá trị giữ lại', value: 0 },
      { label: 'Tạm ứng', value: 0 },
      { label: 'Giá trị thanh toán', value: 0 },
    ],
    leftLabel: 'Trả thực tế',
    leftValue: 0,
    rightLabel: 'Còn nợ NCC',
    rightValue: 25_900_000,
  },
  cashFlow: last12Months.map((month) => ({ month, thu: 0, chi: 0 })),
};

function buildDefaultDetail(project: ProjectListItem): ProjectDetail {
  const { id, name, owner, progress } = project;

  const durationDays = seeded(id, 1, 45, 240);
  const startOffsetDays = seeded(id, 2, 20, 620);
  const startDate = addDays(TODAY, -startOffsetDays);
  const endDate = addDays(startDate, durationDays);

  const elapsedDays = Math.max(0, Math.round((TODAY.getTime() - startDate.getTime()) / 86_400_000));
  const timeGauge = durationDays > 0
    ? Math.min(200, Math.round((elapsedDays / durationDays) * 10000) / 100)
    : 0;

  const status: ProjectStatus = progress >= 100
    ? 'Hoàn thành'
    : progress === 0
      ? 'Chưa bắt đầu'
      : (seeded(id, 20, 0, 1) === 0 ? 'Đúng tiến độ' : 'Chậm trễ');

  const planProgress = progress >= 100 ? 100 : Math.min(100, progress + seeded(id, 3, 5, 45));
  const totalTasks = seeded(id, 5, 8, 160);

  const projectValue = seeded(id, 6, 300, 25000) * 1_000_000;
  const budget = projectValue - seeded(id, 7, 0, Math.floor(projectValue * 0.08));
  const revenue = Math.round((projectValue * progress) / 100 / 1_000_000) * 1_000_000;
  const costRatio = seeded(id, 8, 40, 90);
  const cost = Math.round((revenue * costRatio) / 100 / 1_000_000) * 1_000_000;
  const productionExecuted = revenue;
  const acceptRatio = seeded(id, 9, 70, 100);
  const productionAccepted = Math.round((productionExecuted * acceptRatio) / 100 / 1_000_000) * 1_000_000;

  const costGauge = budget > 0 ? Math.round((cost / budget) * 10000) / 100 : 0;
  const revenueGauge = projectValue > 0 ? Math.round((revenue / projectValue) * 10000) / 100 : 0;

  const revenueTr = revenue / 1_000_000;
  const costTr = cost / 1_000_000;
  const wavePhase = seeded(id, 11, 0, 11);

  const chartData: BusinessChartPoint[] = last12Months.map((month, i) => {
    const wave = Math.sin((i + wavePhase) / 2) * 0.5 + 0.5;
    const monthRevenue = Math.round((revenueTr / 12) * (0.4 + wave));
    const monthCost = Math.round((costTr / 12) * (0.4 + (1 - wave)));
    return {
      month,
      revenue: monthRevenue * 1_000_000,
      cost: monthCost * 1_000_000,
      profit: (monthRevenue - monthCost) * 1_000_000,
    };
  });

  const ownerOwes = Math.round((revenue * seeded(id, 12, 0, 30)) / 100 / 1_000_000) * 1_000_000;
  const ownerCollected = revenue - ownerOwes;
  const contractorOwes = Math.round((cost * seeded(id, 13, 0, 25)) / 100 / 1_000_000) * 1_000_000;
  const contractorPaid = cost - contractorOwes;

  const cashFlow: CashFlowPoint[] = chartData.map((d) => ({
    month: d.month,
    thu: d.revenue,
    chi: d.cost,
  }));

  return {
    id,
    name,
    owner,
    startDate: formatDateVN(startDate),
    endDate: formatDateVN(endDate),
    durationDays,
    status,
    totalTasks,
    planProgress,
    actualProgress: progress,
    kpis: {
      projectValue,
      budget,
      revenue,
      cost,
      productionExecuted,
      productionAccepted,
    },
    gauges: {
      construction: progress,
      cost: costGauge,
      time: timeGauge,
      revenue: revenueGauge,
    },
    businessReport: {
      revenue,
      cost,
      profit: revenue - cost,
      chartData,
    },
    ownerDebt: {
      total: ownerOwes,
      items: [
        { label: 'Đề nghị thanh toán', value: revenue },
        { label: 'Giá trị giữ lại', value: 0 },
        { label: 'Tạm ứng', value: 0 },
        { label: 'Giá trị thanh toán', value: ownerCollected },
      ],
      leftLabel: 'Thu thực tế (5 = 3 + 4)',
      leftValue: ownerCollected,
      rightLabel: 'CĐT còn nợ (6 = 1 + 2 - 5)',
      rightValue: ownerOwes,
    },
    contractorDebt: {
      total: contractorOwes,
      items: [
        { label: 'Đề nghị thanh toán', value: cost },
        { label: 'Giá trị giữ lại', value: 0 },
        { label: 'Tạm ứng', value: 0 },
        { label: 'Giá trị thanh toán', value: contractorPaid },
      ],
      leftLabel: 'Trả thực tế',
      leftValue: contractorPaid,
      rightLabel: 'Còn nợ NCC',
      rightValue: contractorOwes,
    },
    cashFlow,
  };
}

export function getProjectDetail(id: string): ProjectDetail {
  if (id === demoProjectDetail.id) return demoProjectDetail;
  const project = projectList.find((p) => p.id === id);
  if (!project) return demoProjectDetail;
  return buildDefaultDetail(project);
}
