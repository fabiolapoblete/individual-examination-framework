import style from "./Buttons.module.scss";

function Button({ title, action, disabled }) {
  return (
    <button disabled={disabled} className={style.searchButton} onClick={action}>
      {title}
    </button>
  );
}

export default Button;
