import classNames from "classnames/bind";
import styles from "./home.module.scss"
import HeaderTop from "../../Components/HeaderTop";
import SubHeader from "../../Components/SubHeader";
import FormGeneral from "../../Components/FormGeneral"

const cx = classNames.bind(styles)
function Home() {
  return (
    <div>
      <header >
        <div className={cx("header")}>
          <HeaderTop />
          <SubHeader />
        </div>
      </header>
      <div>
        <FormGeneral />
      </div>
    </div>
  );
}

export default Home;
