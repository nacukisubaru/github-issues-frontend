import { Issues } from 'pages/issues';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/issues" replace />} />
        <Route path="/issues" element={<Issues />} />
      </Routes>
    </BrowserRouter>
  );
}
