import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { EVMSecurity } from './pages/EVMSecurity';
import { DataDeletion } from './pages/DataDeletion';
import { VoterAwareness } from './pages/VoterAwareness';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/evm-security" element={<EVMSecurity />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
            <Route path="/voter-awareness" element={<VoterAwareness />} />
            
            {/* Fallbacks */}
            <Route path="/privacy" element={<DataDeletion />} />
            <Route path="/contact" element={<DataDeletion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
