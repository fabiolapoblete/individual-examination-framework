import style from "./Buttons.module.scss";

function RegularButton({ title, action, disabled }) {
  return (
    <button
      disabled={disabled}
      className={style.regularButton}
      onClick={action}
    >
      {title}
    </button>
  );
}

export default RegularButton;
