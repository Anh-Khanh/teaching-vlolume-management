// FcBusinesswoman;
import Button from "../Button"
import SelectForm from "../SelectForm";
import classNames from "classnames/bind";
import styles from "./workvolume.module.scss";

const cx = classNames.bind(styles);

function WorkVolume() {
  return (
    <div>
      <div className={cx("option")}>
        <div className="flex pt-[103px] justify-around">
          <span className="w-[30%] ml-[50px]">
            <SelectForm class="rounded-[50%]"></SelectForm>
          </span>
          <span className="w-[30%]">
            <SelectForm></SelectForm>
          </span>
        </div>
      </div>
      <div className="text-center mb-3">
        <Button width="200px" bgcolor="#950B0B">
          Tiếp tục
        </Button>
      </div>
    </div>
  );
}

export default WorkVolume;
