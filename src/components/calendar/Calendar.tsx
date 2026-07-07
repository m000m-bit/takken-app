// src/components/calendar/Calendar.tsx

'use client';

import { useState } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CalendarGrid } from './CalendarGrid';
import { ScheduleItem } from '@/types';

interface CalendarProps {
  scheduleItems: ScheduleItem[];
  onDateSelect: (date: Date) => void;
}

export function Calendar({ scheduleItems, onDateSelect }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <h2 className="text-xl font-semibold">
          {format(currentMonth, 'yyyy年MM月')}
        </h2>
        <button
          onClick={handleNextMonth}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <CalendarGrid 
        currentMonth={currentMonth} 
        scheduleItems={scheduleItems}
        onDateSelect={onDateSelect}
      />
    </div>
  );
}
