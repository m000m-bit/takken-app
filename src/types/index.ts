// src/types/index.ts

export interface Subject {
  id: string;
  name: string;
  description?: string;
  estimatedHours: number;
  color: string;
}

export interface ScheduleItem {
  id: string;
  subjectId: string;
  date: string; // YYYY-MM-DD形式
  completed: boolean;
  notes?: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  scheduleItems: ScheduleItem[];
}
