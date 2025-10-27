
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-bold text-gray-800">
          SP3 Company
        </span>
        <span className="text-lg font-medium text-gray-700">
          FD Concept
        </span>
      </div>
    </header>
  );
};

export default Header;
