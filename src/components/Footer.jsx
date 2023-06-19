/* IMPORTANDO ICONOS BOOTSTRAP*/
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
      </div>

      <div className="footer__links p-3">
        <div className="row">
          <div className="col-sm">
            <li>
              <ul>
                <a href="#">Audio descriptivo</a>
              </ul>
              <ul>
                <a href="#">Relaciones con inversionistas</a>
              </ul>
              <ul>
                <a href="#">Avisos legales</a>
              </ul>
            </li>
          </div>
          <div className="col-sm">
            <li>
              <ul>
                <a href="#">Centro de ayuda</a>
              </ul>
              <ul>
                <a href="#">Empleo</a>
              </ul>
              <ul>
                <a href="#">Preferencias de cookies</a>
              </ul>
            </li>
          </div>
          <div className="col-sm">
            <li>
              <ul>
                <a href="#">Tarjetas de regalo</a>
              </ul>
              <ul>
                <a href="#">Términos de uso</a>
              </ul>
              <ul>
                <a href="#">Información corporativa</a>
              </ul>
            </li>
          </div>
          <div className="col-sm">
            <li>
              <ul>
                <a href="#">Prensa</a>
              </ul>
              <ul>
                <a href="#">Privacidad</a>
              </ul>
              <ul>
                <a href="#">Contáctanos</a>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 1997-2023 Netlfix, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
