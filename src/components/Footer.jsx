import { useState } from "react";
import Infos from "./Infos";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  
  return (
    <div className={ styles.globalFooter }>
      {
        show ? (
          <button className={ styles.buttonFooter } onClick={handleClick}>
            Saiba Mais
          </button>
        ) : (
          <div onClick={handleClick} className={ styles.textInfo }>
            {!show && <Infos />}
          </div>
        )
      }
    </div>
  );
}
