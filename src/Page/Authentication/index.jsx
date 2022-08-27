
import  Input  from "../../Components/Input";
import MyCaptcha from "../../Components/Captcha"
import bg from "../../Assets/img/bg.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Authentication() {
   const navigate = useNavigate();
   const [capt,setCapt] = useState()
   const handleClick =()=>{
    if (capt==="") navigate("/");
   }
   const refcaptcha = useRef()
   useEffect(()=>{
    const captcha = refcaptcha.current.children[0].dataset.key;
    setCapt(captcha)
      console.log(captcha);
   })
  return (
    <div
      className="w-screen h-screen items-center flex justify-center "
      style={{ background: `url(${bg}) left top` }}
    >
      <div className="w-450  bg-white p-8 rounded-xl shadow-lg shadow-slate-800">
        <div>
          <img
            src="https://cdn.duytan.edu.vn/images/icon/logo-duy-tan_vn.png"
            className="text-red"
            alt="logo mdtu"
          />
        </div>
        <div className="mt-6">
          <form action="">
            <div className="flex justify-between">
              <label htmlFor="username" className="mr-2 text-red-700">
                Tên Đăng nhập:
              </label>
              <Input
                className="input_authen"
                tabindex="1"
                placeholder="Nhập Tên đăng nhập"
              />
            </div>
            <div className="mt-4 flex justify-between text-red-700">
              <label htmlFor="password" className="mr-2">
                Mật khẩu:
              </label>
              <Input
                className="input_authen"
                type="password"
                tabindex="2"
                placeholder="Nhập Mật khẩu"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="" className="text-red-700 mr-2">
                Mã xác nhận:
              </label>
              <div className="flex">
                <Input
                  className="border-solid border-1 border-red-500 outline-none pl-1 text-base rounded-1 w-24 mr-3"
                  tabindex="3"
                />
                <MyCaptcha ref={refcaptcha} />
              </div>
            </div>
            <button
              className="w-full bg-btn text-xl rounded-1 font-bold text-b mt-4 p-2 shadow-lg shadow-rose-500/50 hover:bg-rose-700  "
              onClick={handleClick}
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
