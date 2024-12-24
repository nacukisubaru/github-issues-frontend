import { IssueDetail } from 'pages/issue-detail';
import { Issues } from 'pages/issues';
import { Logs } from 'pages/logger';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/issues" replace />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/issue/:id" element={<IssueDetail />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
}
