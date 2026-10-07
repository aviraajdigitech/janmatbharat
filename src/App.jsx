import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load all pages for optimal code splitting
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const EVMSecurity = lazy(() => import('./pages/EVMSecurity').then(module => ({ default: module.EVMSecurity })));
const DataDeletion = lazy(() => import('./pages/DataDeletion').then(module => ({ default: module.DataDeletion })));
const VoterAwareness = lazy(() => import('./pages/VoterAwareness').then(module => ({ default: module.VoterAwareness })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Corrections = lazy(() => import('./pages/Corrections').then(module => ({ default: module.Corrections })));
const PressKit = lazy(() => import('./pages/PressKit').then(module => ({ default: module.PressKit })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const History = lazy(() => import('./pages/History').then(module => ({ default: module.History })));
const HistoryDetail = lazy(() => import('./pages/HistoryDetail').then(module => ({ default: module.HistoryDetail })));
const HowPollWorks = lazy(() => import('./pages/HowPollWorks').then(module => ({ default: module.HowPollWorks })));
const ElectionCalendar = lazy(() => import('./pages/ElectionCalendar').then(module => ({ default: module.ElectionCalendar })));
const Constituency = lazy(() => import('./pages/Constituency').then(module => ({ default: module.Constituency })));

// A premium loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="text-slate-500 font-bold tracking-wider text-sm animate-pulse">LOADING...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/evm-security" element={<EVMSecurity />} />
              <Route path="/data-deletion" element={<DataDeletion />} />
              <Route path="/voter-awareness" element={<VoterAwareness />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/about" element={<About />} />
              <Route path="/corrections" element={<Corrections />} />
              <Route path="/press" element={<PressKit />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/history" element={<History />} />
              <Route path="/history/:termId" element={<HistoryDetail />} />
              <Route path="/how-it-works" element={<HowPollWorks />} />
              <Route path="/upcoming-elections" element={<ElectionCalendar />} />
              <Route path="/constituency" element={<Constituency />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
