import Input from "../../Input";
import SelectForm from "../../SelectForm";
import { default as Button } from "../../Button";

import classNames from "classnames/bind";
import styles from "./addyear.module.scss";
const cx = classNames.bind(styles);
function AddYear() {
  const options = [
    { value: "2021-2022", label: "2021-2022" },
    { value: "2022-2023", label: "2022-2023" },
    { value: "2023-2024", label: "2024-2025" },
  ];
  return (
    <div>
      <div className={cx("form")}>
        <div className={cx("line")}>
          <h2 className="text-xl font-semibold">Year Infomation</h2>
        </div>
        <div className="p-5">
          <form action="">
            <div className="w-full flex justify-between">
              <label htmlFor="" className="w-[30%]">
                ID
              </label>
              <span className="text-lg font-bold">:</span>
              <Input placeholder="ID" className="w-1/2"></Input>
            </div>
            <div className="w-full flex justify-between mt-2">
              <label htmlFor="" className="w-[30%]">
                Start
              </label>
              <span className="text-lg font-bold">:</span>
              <Input placeholder="Start" className="w-1/2"></Input>
            </div>
            <div className="flex justify-around mt-[20px]">
              <Button bgcolor="#950b0b" width="30%" size="large">
                Add
              </Button>
              <Button bgcolor="#950b0b" width="30%" size="large">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddYear;
