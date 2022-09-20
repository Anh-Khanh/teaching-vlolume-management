import classNames from "classnames/bind";

import styles from "./home.module.scss";
import HeaderTop from "../../Components/HeaderTop";
import SubHeader from "../../Components/SubHeader";
import Footer from "../../Components/Footer"
import Nav from "../../Components/Navbar/nav";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div>
      <header>
        <div className={cx("header")}>
          <HeaderTop />
          <SubHeader />
        </div>
      </header>
      <div className="w-[984px] m-auto ">
        <Nav></Nav>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
