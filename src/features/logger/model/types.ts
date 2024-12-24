export interface Log {
  ip: string;
  method: string;
  path: string;
  timestamp: string;
}

export interface LogsState {
  logs: Log[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
