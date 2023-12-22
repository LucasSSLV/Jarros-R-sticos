import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Title from './Title';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ".././index.css";

export default function Header() {
  return (
    <header className="header">
      <div className="title-principal">
        <Title name="Jarros Rústicos" />
      </div>
      <div className="social-icons">
        <div className='title-conect'>
        <Title name='peça já o seu' />
        </div>
        <a
          href="https://www.instagram.com/jarros_e_plantas_store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
        </a>
        <a
          href="https://wa.me/+5588992414480"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon whatsapp-icon" />
        </a>
      </div>
    </header>
  );
}
