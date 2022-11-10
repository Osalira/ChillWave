import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class='footerT'>
      <p>Copyrightⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
