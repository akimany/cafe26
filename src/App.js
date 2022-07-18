import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation/navigation.component';
import { Authentication } from './routes/authentication/authentication.component';
import { CMS } from './routes/cms/cms.component';
import Home from './routes/home/home.component';

import './App.css';

export const App = () => {
  // TODO: properly centre align the main content

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="cms" element={<CMS />} />
      </Route>
    </Routes>
  );
};
