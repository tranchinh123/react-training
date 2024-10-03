import DefaultLayout from './layouts';
import HomePage from './pages/Home';
import DetailPage from './pages/Detail';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":slug" element={<HomePage />} />
          <Route path="search" element={<HomePage />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
