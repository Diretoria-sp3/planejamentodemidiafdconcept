import React from 'react';
import { Campaign } from '../types';

interface BudgetTableProps {
  campaigns: Campaign[];
  totalInvestment: number;
}

const BudgetTable: React.FC<BudgetTableProps> = ({ campaigns, totalInvestment }) => {
    const formatCurrency = (value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    const month = 'NOVEMBRO';
    const totalDailyBudget = totalInvestment / 30; // Assuming 30 days

    return (
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <div className="px-6 py-3 bg-gray-50 text-center border-b border-gray-200">
                <h2 className="text-xl font-bold tracking-widest text-gray-700">{month}</h2>
            </div>
            <div className="px-6 py-4 flex justify-between items-center bg-white">
                <span className="font-semibold text-lg text-gray-800">Budget Mensal</span>
                <span className="font-bold text-2xl text-blue-600">{formatCurrency(totalInvestment)}</span>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-base">
                    <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
                        <tr>
                            <th className="p-4 w-1/5 font-semibold">Canais</th>
                            <th className="p-4 w-2/5 font-semibold">Campanhas</th>
                            <th className="p-4 w-[15%] text-center font-semibold">%Budget</th>
                            <th className="p-4 w-[15%] text-right font-semibold">R$ Budget</th>
                            <th className="p-4 w-[15%] text-right font-semibold">Budget/dia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign, index) => (
                            <tr key={campaign.name} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                                {index === 0 && (
                                    <td rowSpan={campaigns.length} className="p-4 border-r border-gray-200 align-middle">
                                        <div className="flex items-center space-x-3">
                                            <span className="font-semibold text-gray-800">Google Ads</span>
                                        </div>
                                    </td>
                                )}
                                <td className="p-4 text-gray-800">{campaign.name}</td>
                                <td className="p-4 text-center text-gray-600">{campaign.percentage}%</td>
                                <td className="p-4 text-right text-gray-600">{formatCurrency(campaign.budget)}</td>
                                <td className="p-4 text-right text-gray-600">{formatCurrency(campaign.budget / 30)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-100 font-bold text-gray-800">
                        <tr>
                            <td colSpan={2} className="p-4">Total</td>
                            <td className="p-4 text-center">100%</td>
                            <td className="p-4 text-right">{formatCurrency(totalInvestment)}</td>
                            <td className="p-4 text-right">{formatCurrency(totalDailyBudget)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default BudgetTable;