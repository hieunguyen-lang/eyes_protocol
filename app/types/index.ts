import { ReactNode } from 'react';

export interface Stat {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: {
    value: string | number;
    isPositive: boolean;
  };
  color?: 'primary' | 'accent1' | 'accent2' | 'accent3';
}

// Thêm các interface khác ở đây
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    tension?: number;
    fill?: boolean;
  }[];
}

export interface TablePostData {
  posturl : string,
  name: string;
  content: string;
  content_created: string;
  created_at: string;
  hours_diff: number;
  reaction_count: number;
  comment_count: number;
  share_count: number;
} 

export interface TableCommentsData {
  comment_url : string,
  name: string;
  content: string;
  content_created: string;
  created_at: string;
  hours_diff: number;
  reply_count: number;
  author_url: string;
  post_id: number;
} 