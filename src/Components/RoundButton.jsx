import style from "./Buttons.module.scss";

function RoundButton({ title, action }) {
  return (
    <button className={style.roundButton} onClick={action}>
      {title}
    </button>
  );
}

export default RoundButton;
