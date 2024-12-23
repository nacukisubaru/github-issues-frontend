// src/shared/types/issuesTypes.ts
export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  html_url: string;
}

export interface Issue {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  state: string;
  comments: number;
  created_at: string;
  updated_at: string;
  body?: string;
}

export interface IssuesState {
  issues: Issue[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface FetchIssuesParams { 
  user: string; 
  repo: string; 
  page: number 
}