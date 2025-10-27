
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BudgetTable from './components/BudgetTable';
import { Campaign } from './types';

const App: React.FC = () => {
  const totalInvestment = 5000.00;
  
  const campaignData: Campaign[] = [
    { name: 'Institucional', budget: totalInvestment * 0.10, percentage: 10, color: '#3b82f6' },
    { name: 'Prótese Dentária', budget: totalInvestment * 0.30, percentage: 30, color: '#93c5fd' },
    { name: 'Implante Dentário', budget: totalInvestment * 0.30, percentage: 30, color: '#60a5fa' },
    { name: 'Protocolo Dentário', budget: totalInvestment * 0.30, percentage: 30, color: '#2563eb' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 selection:bg-blue-500 selection:text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
            Planejamento de Mídia Paga
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Proposta de investimento em Google Ads para <span className="font-semibold text-gray-900">FD Concept Odontologia Avançada</span>.
          </p>
        </div>

        <BudgetTable campaigns={campaignData} totalInvestment={totalInvestment} />

      </main>

      <Footer />
    </div>
  );
};

export default App;
