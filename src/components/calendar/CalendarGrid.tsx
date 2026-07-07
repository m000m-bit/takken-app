// src/components/calendar/CalendarGrid.tsx

import { getCalendarDays, formatCalendarDay } from '@/lib/utils';
import { ScheduleItem } from '@/types';

interface CalendarGridProps {
  currentMonth: Date;
  scheduleItems: ScheduleItem[];
  onDateSelect: (date: Date) => void;
}

export function CalendarGrid({ currentMonth, scheduleItems, onDateSelect }: CalendarGridProps) {
  const calendarDays = getCalendarDays(currentMonth);
  const weekDays = ['日', '月', '火', '水', '木', '金', '土'];
  
  return (
    <div className="grid grid-cols-7 gap-1">
      {weekDays.map(day => (
        <div key={day} className="text-center font-semibold py-2">
          {day}
        </div>
      ))}
      
      {calendarDays.map((day, index) => {
        const dayString = formatCalendarDay(day);
        const dayScheduleItems = scheduleItems.filter(item => item.date === dayString);
        const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
        const isToday = new Date().toDateString() === day.toDateString();
        
        return (
          <div
            key={index}
            onClick={() => onDateSelect(day)}
            className={`min-h-[80px] p-2 border rounded cursor-pointer hover:bg-gray-50 ${
              !isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
            } ${isToday ? 'bg-blue-50' : ''}`}
          >
            <div className="font-medium">{day.getDate()}</div>
            <div className="mt-1 space-y-1">
              {dayScheduleItems.slice(0, 2).map(item => (
                <div
                  key={item.id}
                  className="text-xs p-1 rounded truncate"
                  style={{ backgroundColor: item.color + '20' }}
                >
                  {item.subjectName}
                </div>
              ))}
              {dayScheduleItems.length > 2 && (
                <div className="text-xs text-gray-500">
                  +{dayScheduleItems.length - 2}件
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
