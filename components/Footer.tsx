
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-16 border-t border-gray-200">
      <div className="container mx-auto text-center text-gray-500 flex flex-col items-center">
        <p className="font-semibold">SP3 Company</p>
        <p>Proposta preparada para FD Concept</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
