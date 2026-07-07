// src/lib/data.ts

import { Subject } from '@/types';

export const takkenSubjects: Subject[] = [
  {
    id: 'kenri-kankei',
    name: '権利関係',
    description: '民法、借地借家法、区分所有法など',
    estimatedHours: 40,
    color: '#3b82f6'
  },
  {
    id: 'horei-joseigen',
    name: '法令上の制限',
    description: '建築基準法、都市計画法など',
    estimatedHours: 30,
    color: '#10b981'
  },
  {
    id: 'takken-gyoho',
    name: '宅建業法',
    description: '宅建業法、取引士など',
    estimatedHours: 35,
    color: '#f59e0b'
  },
  {
    id: 'zeikin-sonota',
    name: '税金・その他',
    description: '不動産取得税、固定資産税など',
    estimatedHours: 25,
    color: '#ef4444'
  },
  {
    id: 'tochi-chishiki',
    name: '土地の知識',
    description: '土地の形状、地盤など',
    estimatedHours: 15,
    color: '#8b5cf6'
  },
  {
    id: 'tatemono-chishiki',
    name: '建物の知識',
    description: '建物の構造、設備など',
    estimatedHours: 15,
    color: '#ec4899'
  }
];
