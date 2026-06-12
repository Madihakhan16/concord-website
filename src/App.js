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
        <Route path="/technologies" element={<ComingSoon page="Technologies" />} />
        <Route path="/solutions" element={<ComingSoon page="Products & Solutions" />} />
        <Route path="/projects" element={<ComingSoon page="Projects" />} />
        <Route path="/investors" element={<ComingSoon page="Investors" />} />
        <Route path="/media" element={<ComingSoon page="Media" />} />
        <Route path="/careers" element={<ComingSoon page="Careers" />} />
        <Route path="/contact" element={<ComingSoon page="Contact Us" />} />
        <Route path="*" element={<ComingSoon page="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}
