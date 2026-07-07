// src/components/schedule/SubjectList.tsx

'use client';

import { useState } from 'react';
import { Calendar, Plus } from 'lucide-react';
import { Subject, ScheduleItem } from '@/types';
import { ScheduleItemForm } from './ScheduleItemForm';

interface SubjectListProps {
  subjects: Subject[];
  scheduleItems: ScheduleItem[];
  onAddScheduleItem: (item: Omit<ScheduleItem, 'id'>) => void;
}

export function SubjectList({ subjects, scheduleItems,
                             // src/components/schedule/SubjectList.tsx（続き）

'use client';

import { useState } from 'react';
import { Calendar, Plus, Clock } from 'lucide-react';
import { Subject, ScheduleItem } from '@/types';
import { ScheduleItemForm } from './ScheduleItemForm';

interface SubjectListProps {
  subjects: Subject[];
  scheduleItems: ScheduleItem[];
  onAddScheduleItem: (item: Omit<ScheduleItem, 'id'>) => void;
}

export function SubjectList({ subjects, scheduleItems, onAddScheduleItem }: SubjectListProps) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [showForm, setShowForm] = useState(false);
  
  // 各単元のスケジュール済み時間を計算
  const getSubjectScheduledHours = (subjectId: string) => {
    const subjectItems = scheduleItems.filter(item => item.subjectId === subjectId);
    return subjectItems.length; // 簡単のため、1アイテム=1時間として計算
  };
  
  const handleAddSchedule = (subject: Subject) => {
    setSelectedSubject(subject);
    setShowForm(true);
  };
  
  const handleFormSubmit = (date: string, notes?: string) => {
    if (selectedSubject) {
      onAddScheduleItem({
        subjectId: selectedSubject.id,
        date,
        completed: false,
        notes
      });
    }
    setShowForm(false);
    setSelectedSubject(null);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">学習単元</h2>
      
      <div className="space-y-4">
        {subjects.map(subject => {
          const scheduledHours = getSubjectScheduledHours(subject.id);
          const progress = (scheduledHours / subject.estimatedHours) * 100;
          
          return (
            <div key={subject.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{subject.name}</h3>
                  {subject.description && (
                    <p className="text-sm text-gray-600">{subject.description}</p>
                  )}
                </div>
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: subject.color }}
                />
              </div>
              
              <div className="flex items-center mb-3">
                <Clock size={16} className="mr-1 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {scheduledHours} / {subject.estimatedHours}時間
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    backgroundColor: subject.color
                  }}
                />
              </div>
              
              <button
                onClick={() => handleAddSchedule(subject)}
                className="flex items-center text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100"
              >
                <Plus size={16} className="mr-1" />
                スケジュールに追加
              </button>
            </div>
          );
        })}
      </div>
      
      {showForm && selectedSubject && (
        <ScheduleItemForm
          subject={selectedSubject}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setSelectedSubject(null);
          }}
        />
      )}
    </div>
  );
}
