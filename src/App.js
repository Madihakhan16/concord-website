import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConcordHome from './ConcordHome';
import AboutUs from './AboutUs';
import ComingSoon from './ComingSoon';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConcordHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ComingSoon page="This Page" />} />
      </Routes>
    </BrowserRouter>
  );
}
