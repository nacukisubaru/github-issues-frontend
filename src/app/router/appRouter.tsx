import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from 'shared/ui/preloader';

const Logs = lazy(() =>
  import('pages/logger').then((module) => ({
    default: module.Logs,
  })),
);

const IssueDetail = lazy(() =>
  import('pages/issue-detail').then((module) => ({
    default: module.IssueDetail,
  })),
);

const Issues = lazy(() =>
  import('pages/issues').then((module) => ({
    default: module.Issues,
  })),
);

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Navigate to="/issues" replace />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/issue/:id" element={<IssueDetail />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
