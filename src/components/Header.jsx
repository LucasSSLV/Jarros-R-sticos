import '@fortawesome/fontawesome-svg-core/styles.css';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ".././index.css";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Title from './Title';
import styles from './styles/Header.module.css';

export default function Header() {

  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Peça já o seu!",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: false
    };

    const typed = new Typed(el.current, options);

    return () => typed.destroy();
  }, []);

  return (
    <header className={ styles.header }>
      <div className="title-principal">
        <Title name="Jarros Store" />
      </div>
      <div className={ styles.h2Social }>
        <div className={ styles.contato }>
          <h2 ref={el}/>
        </div>
        <div className={ styles.socialIncos }>
          <a
            href="https://www.instagram.com/jarros_e_plantas_store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className={ styles.icons } />
          </a>
          <a
            href="https://wa.me/+558894521711"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className={ styles.icons } />
          </a>
        </div>
      </div>
    </header>
  );
}
