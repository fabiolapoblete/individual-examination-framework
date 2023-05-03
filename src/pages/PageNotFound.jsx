/*Components*/
import PageTitle from "../Components/PageTitle";
/*Styling*/
import style from "./PageStyling.module.scss";

function PageNotFound() {
  return (
    <main className={style.page}>
      <PageTitle title="Something went wrong" />
      <p>Navigate back through the bottom navigation</p>
    </main>
  );
}

export default PageNotFound;
