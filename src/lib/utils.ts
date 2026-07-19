// src/lib/utils.ts

import { format, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export function getCalendarDays(date: Date) {
  const start = startOfMonth(date);
  const end = endOfMonth(date);
  const days = eachDayOfInterval({ start, end });
  
  // 前月と翡月の日も含めてカレンダーを埋める
  const startWeek = new Date(start);
  startWeek.setDate(start.getDate() - start.getDay());
  
  const endWeek = new Date(end);
  endWeek.setDate(end.getDate() + (6 - end.getDay()));
  
  return eachDayOfInterval({ start: startWeek, end: endWeek });
}

export function formatCalendarDay(date: Date) {
  return format(date, 'yyyy-MM-dd');
}
