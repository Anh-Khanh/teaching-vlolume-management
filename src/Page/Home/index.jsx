import classNames from "classnames/bind";

import styles from "./home.module.scss"
import HeaderTop from "../../Components/HeaderTop";
import SubHeader from "../../Components/SubHeader";
import ViewSemester from "../../Components/ViewSemester";

const cx = classNames.bind(styles)
function Home() {
  return (
    <div>
      <header className="">
        <div className={cx("header")}>
          <HeaderTop />
          <SubHeader />
        </div>
      </header>
      <div className="mt-5">
        <ViewSemester></ViewSemester>
      </div>
    </div>
  );
}
export default Home;
