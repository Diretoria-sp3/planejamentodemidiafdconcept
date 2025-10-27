
import React from 'react';

interface InvestmentCardProps {
  totalInvestment: number;
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({ totalInvestment }) => {
  const formattedInvestment = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalInvestment);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-center shadow-lg">
       <div className="flex justify-center items-center mb-4 space-x-3">
           <h2 className="text-xl md:text-2xl font-bold text-gray-800">
             Investimento Total
           </h2>
       </div>
      <p className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 py-2">
        {formattedInvestment}
      </p>
      <p className="text-gray-600 mt-2 text-sm">
        Orçamento total alocado para campanhas.
      </p>
    </div>
  );
};

export default InvestmentCard;
