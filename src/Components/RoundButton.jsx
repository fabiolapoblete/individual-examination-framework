import style from "./Buttons.module.scss";

function RoundButton({ title, action, styling }) {
  return (
    <button className={style.roundButton} style={style} onClick={action}>
      {title}
    </button>
  );
}

export default RoundButton;
