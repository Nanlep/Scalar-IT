import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ConsultationModal } from './components/ConsultationModal';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Trust } from './pages/Trust';
import { Industries } from './pages/Industries';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { SLA } from './pages/SLA';
import { Briefcase } from 'lucide-react';

const Careers = () => (
  <div className="bg-white min-h-[60vh] py-20 px-4">
    <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-scalar-dark mb-6">Careers</h1>
        <div className="bg-slate-50 border border-slate-200 p-8 rounded text-center">
            <Briefcase className="w-12 h-12 text-scalar-dark mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Join the Mission</h3>
            <p className="text-slate-600 mb-6">
                We are always looking for exceptional Systems Architects, Security Engineers, and Compliance Officers.
            </p>
            <p className="text-sm font-semibold text-scalar-red">
                Please submit your CV to careers@scalarit.pro
            </p>
        </div>
    </div>
  </div>
);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <Layout onOpenConsultation={openModal}>
        <Routes>
          <Route path="/" element={<Home onOpenConsultation={openModal} />} />
          <Route path="/solutions" element={<Solutions onOpenConsultation={openModal} />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/about" element={<About />} />
          
          {/* Footer Linked Pages */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sla" element={<SLA />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
    </Router>
  );
}

export default App;