import { Routes, Route, Navigate } from 'react-router-dom';
import { AdsListPage } from '../pages/adsListPage';
import { ROUTES } from '../utils/routes';

export const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.ADS_LIST} element={<AdsListPage />} />
    <Route path='*' element={<Navigate to='/list' replace />} />
  </Routes>
);
