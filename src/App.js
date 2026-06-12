import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConcordHome from './ConcordHome';
import AboutUs from './AboutUs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConcordHome />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}
