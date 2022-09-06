import classNames from "classnames/bind";

import styles from "./home.module.scss"
import HeaderTop from "../../Components/HeaderTop";
import SubHeader from "../../Components/SubHeader";
import DaskBoard from "../DashBoard";
import Form from "../../Components/Form";
import ViewTable from "../../Components/ViewTable";
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
      <div>
        {/* <Form>Khối lượng giảng dạy lý thuyết, thực hành… </Form> */}
        <ViewTable></ViewTable>
      </div>
    </div>
  );
}
export default Home;
