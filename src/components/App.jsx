import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
