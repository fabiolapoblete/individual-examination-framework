/*Styling*/
import style from "./Buttons.module.scss";

function RegularButton({ title, action, disabled }) {
  return (
    <button
      className={style.regularButton}
      disabled={disabled}
      onClick={action}
    >
      {title}
    </button>
  );
}

export default RegularButton;
