import { useNavigate } from "react-router-dom";
import style from "./Footer.module.scss";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.footer__navList}>
          <li onClick={() => navigate("/")}>My list</li>
          <li onClick={() => navigate("/watched")}>Watched</li>
          <li onClick={() => navigate("/search")}>Search</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
