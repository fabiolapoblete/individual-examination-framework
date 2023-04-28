import style from "./Buttons.module.scss";

function Button({ title, action }) {
  return (
    <button className={style.searchButton} onClick={action}>
      {title}
    </button>
  );
}

export default Button;
