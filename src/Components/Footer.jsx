import { useNavigate } from "react-router-dom";
import style from "./Footer.module.scss";

function Footer() {
  const navigate = useNavigate();
  const goToMyList = () => {
    navigate("/");
  };
  const goToSearch = () => {
    navigate("/search");
  };
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.footer__navList}>
          <li onClick={goToMyList}>My list</li>
          <li>Watched</li>
          <li onClick={goToSearch}>Search</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
