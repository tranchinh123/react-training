import { lazy, Suspense } from 'react';
import DefaultLayout from './layouts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastProvider } from './contexts/ToastContext';
import SkeletonBookCardList from './components/Skeleton/SkeletonBookCardList';
import SkeletonDetailPage from './components/Skeleton/SkeletonPageDetail';

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
                <Suspense fallback={<SkeletonBookCardList cards={8} />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path=":slug"
              element={
                <Suspense fallback={<SkeletonBookCardList cards={8} />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="search"
              element={
                <Suspense fallback={<SkeletonBookCardList cards={8} />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="detail/:id"
              element={
                <Suspense fallback={<SkeletonDetailPage />}>
                  <DetailPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
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
