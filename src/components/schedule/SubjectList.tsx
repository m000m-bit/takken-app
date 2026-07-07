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
