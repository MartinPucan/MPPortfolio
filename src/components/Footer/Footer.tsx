import React from 'react';

import './Footer.style.scss';

export const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <footer className="footer">
      Copyright &copy; {currentYear}
    </footer>
  );
}