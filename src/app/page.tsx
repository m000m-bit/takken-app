// src/app/page.tsx

'use client';

import { useState } from 'react';
import { Calendar } from '@/components/calendar/Calendar';
import { SubjectList } from '@/components/schedule/SubjectList';
import { takkenSubjects } from '@/lib/data';
import { ScheduleItem } from '@/types';

export default function Home() {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const handleAddScheduleItem = (item: Omit<ScheduleItem, 'id'>) => {
    const newItem: ScheduleItem = {
      ...item,
      id: Date.now().toString()
    };
    
    setScheduleItems([...scheduleItems, newItem]);
  };
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // 選択した日付の詳細表示など、追加の処理をここに実装
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">宅建試験 学習スケジュール管理</h1>
          <p className="text-gray-600 mt-2">2026年10月試験向け学習計画</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Calendar
              scheduleItems={scheduleItems}
              onDateSelect={handleDateSelect}
            />
          </div>
          
          <div>
            <SubjectList
              subjects={takkenSubjects}
              scheduleItems={scheduleItems}
              onAddScheduleItem={handleAddScheduleItem}
            />
          </div>
        </div>
        
        {selectedDate && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">
              {selectedDate.toLocaleDateString('ja-JP')}の学習予定
            </h2>
            {/* ここ
