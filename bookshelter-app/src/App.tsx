import { lazy, Suspense } from 'react';
import DefaultLayout from './layouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastProvider } from './contexts/ToastContext';

const HomePage = lazy(() => import('./pages/Home/index'));
const DetailPage = lazy(() => import('./pages/Detail/index'));
const NotFound = lazy(() => import('./pages/NotFound/index'));

function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<div>Đang tải...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path=":slug"
              element={
                <Suspense fallback={<div>Đang tải...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="search"
              element={
                <Suspense fallback={<div>Đang tải...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="detail/:id"
              element={
                <Suspense fallback={<div>Đang tải...</div>}>
                  <DetailPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Đang tải...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </ToastProvider>
    </Router>
  );
}

export default App;
