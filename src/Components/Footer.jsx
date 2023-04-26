import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <nav>
        <ul className={style.footer__navList}>
          <li>My list</li>
          <li>Watched</li>
          <li>Search</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
