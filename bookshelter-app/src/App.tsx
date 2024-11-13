import DefaultLayout from './layouts';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path=":slug" element={<HomePage />} />
            <Route path="search" element={<HomePage />} />
            <Route path="detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ToastProvider>
    </Router>
  );
}

export default App;
