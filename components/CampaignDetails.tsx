
import React from 'react';
import { Campaign } from '../types';

interface CampaignDetailsProps {
  campaigns: Campaign[];
}

const CampaignDetails: React.FC<CampaignDetailsProps> = ({ campaigns }) => {
  return (
    <div className="space-y-4">
      {campaigns.map((campaign) => (
        <div key={campaign.name} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg transition-all hover:bg-gray-50">
          <div className="flex items-center">
            <span
              className="w-3 h-3 rounded-full mr-4"
              style={{ backgroundColor: campaign.color }}
            ></span>
            <span className="text-gray-800">{campaign.name}</span>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(campaign.budget)}
            </p>
            <p className="text-sm text-gray-600">{campaign.percentage}%</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CampaignDetails;
