import { Routes, Route, Navigate } from 'react-router-dom';
import { AdsListPage } from '../components/AdsListPage/AdsListPage';

export const AppRouter = () => (
  <Routes>
    <Route path='/list' element={<AdsListPage />} />
    <Route path='*' element={<Navigate to='/list' replace />} />
  </Routes>
);
