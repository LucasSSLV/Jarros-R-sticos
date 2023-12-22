import { useState } from "react";
import Infos from "./Infos";

export default function Footer() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="global-footer">
      <div className="button">
        <button className="button-footer" onClick={handleClick}>
          Saiba Mais
        </button>
      </div>
      <div className="info-text">{!show && <Infos />}</div>
    </div>
  );
}
