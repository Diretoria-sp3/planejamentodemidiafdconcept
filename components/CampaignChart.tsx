
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Campaign } from '../types';

interface CampaignChartProps {
  data: Campaign[];
}

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, budget, percentage } = payload[0].payload;
    const formattedBudget = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(budget);
    return (
      <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-lg text-gray-800">
        <p className="font-bold">{`${name}`}</p>
        <p className="text-sm text-gray-700">{`Orçamento: ${formattedBudget}`}</p>
        <p className="text-sm text-gray-700">{`Percentual: ${percentage}%`}</p>
      </div>
    );
  }
  return null;
};


const CampaignChart: React.FC<CampaignChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="percentage"
          nameKey="name"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CampaignChart;
