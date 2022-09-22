import classNames from "classnames/bind";
import styles from "./classInformationform.module.scss";
import Input from "../../Input";
import SelectForm from "../../SelectForm";
import { default as Button} from "../../Button";

const cx = classNames.bind(styles)

function ClassInformation() {

const options = [
  { value: "2021-2022", label: "2021-2022" },
  { value: "2022-2023", label: "2022-2023" },
  { value: "2023-2024", label: "2024-2025" },
];

    return (
      <div>
        <div className={cx("form")}>
          <div className={cx("line")}>
            <h2 className="text-xl font-semibold">Class Infomation</h2>
          </div>
          <div className="p-5">
            <form action="">
              <div className="w-full flex justify-between">
                <label htmlFor="" className="w-[30%]">
                  Class ID
                </label>
                <span className="text-lg font-bold">:</span>
                <Input placeholder="Class ID" className="w-1/2"></Input>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="" className="w-[30%]">
                  Year
                </label>
                <span className="text-lg font-bold">:</span>
                <SelectForm
                  placeholder="Year"
                  class="w-1/2"
                  options={options}
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="" className="w-[30%]">
                  Semester
                </label>
                <span className="text-lg font-bold">:</span>
                <SelectForm
                  placeholder="Semester"
                  class="w-1/2"
                  options={options}
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="" className="w-[30%]">
                  Subject
                </label>
                <span className="text-lg font-bold">:</span>
                <SelectForm
                  placeholder="Subject"
                  class="w-1/2"
                  options={options}
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="" className="w-[30%]">
                  Grade
                </label>
                <span className="text-lg font-bold">:</span>
                <Input placeholder="Grade" className="w-1/2"></Input>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="" className="w-[30%]">
                  Lecturer
                </label>
                <span className="text-lg font-bold">:</span>
                <SelectForm
                  placeholder="Lecturer"
                  class="w-1/2"
                  options={options}
                ></SelectForm>
              </div>
              <div className="w-full flex justify-between mt-2">
                <label htmlFor="" className="w-[30%]">
                  Students
                </label>
                <span className="text-lg font-bold">:</span>
                <Input placeholder="Students" className="w-1/2"></Input>
              </div>
              <div className="flex justify-around">
                <Button bgcolor="#950b0b" width="30%">
                  Add
                </Button>
                <Button bgcolor="#950b0b" width="30%">
                  Update
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ClassInformation;