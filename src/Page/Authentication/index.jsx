import { useNavigate } from "react-router-dom";
import { useCallback, useRef, useState, useEffect } from "react";
import { default as Button } from "../../Components/Button";
import Input from "../../Components/Input";
import MyCaptcha from "../../Components/Captcha";
import bg from "../../Assets/img/bg.jpg";
import logoform from "../../Assets/img/logo_dtu_while.png";

function Authentication() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [checkCaptcha,setCheckCaptcha] = useState(true)
  const [imgcaptcha,setImgcaptcha] = useState()
  const [reloadcaptcha, setReloadcaptcha] = useState(false);

  const navigate = useNavigate();
  const refcaptcha = useRef();
  const inputpassvalue = useRef()

  function keyDown(event) {
    // Login bang phim enter
    if (event.code==="Enter"){
      if (user === "admin" && pass === "123" && imgcaptcha === captcha) {
        setCheckCaptcha(true)
        navigate("/");
      }
      else{
        inputpassvalue.current.value =""
        setCheckCaptcha(false);
      }
    }
  }
  // login bang click button "dang nhap"
  const handleClick = () => {
    if (user === "admin" && pass === "123" && imgcaptcha === captcha) {
      setCheckCaptcha(true)
      navigate("/");
    } else {
      inputpassvalue.current.value = "";
        setCheckCaptcha(false);
    }
  };

  let useimgcallback = useCallback(
    () => refcaptcha.current.children[0].dataset.key,[refcaptcha]
  );

   useEffect(() => {
     setImgcaptcha(useimgcallback());
     console.log(checkCaptcha);
   }, [useimgcallback]);

  return (
    <div
      className="w-screen h-screen items-center flex justify-center "
      style={{ background: `url(${bg}) left top` }}
    >
      <div className="w-450 text-white bg-white/10 p-8 rounded-xl shadow-lg shadow-slate-800">
        <div>
          <img
            src={logoform}
            alt="logo mdtu"
            className="block mr-auto ml-auto"
          />
        </div>
        <div className="mt-6">
          <form action="">
            <div className="flex justify-between">
              <label htmlFor="username" className="mr-2 ">
                Tên Đăng nhập:
              </label>
              <Input
                className="input_authen"
                tabindex="1"
                style={{ height: "30px" }}
                placeholder="Nhập Tên đăng nhập"
                handlOnChange={(value) => {
                  setUser(value);
                }}
                onKeyDown={(e) => {
                  keyDown(e);
                }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="password" className="mr-2">
                Mật khẩu:
              </label>
              <Input
                refs={inputpassvalue}
                className="input_authen"
                type="password"
                style={{ height: "30px" }}
                tabindex="2"
                placeholder="Nhập Mật khẩu"
                handlOnChange={(value) => {
                  setPass(value);
                }}
                onKeyDown={(e) => {
                  keyDown(e);
                }}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <label htmlFor="" className="mr-2">
                Mã xác nhận:
              </label>
              <div className="flex">
                <Input
                  className="input_authen w-24 mr-3"
                  tabindex="3"
                  placeholder="Captcha"
                  style={{ height: "30px" }}
                  handlOnChange={(value) => {
                    setCaptcha(value);
                  }}
                  onKeyDown={(e) => {
                    keyDown(e);
                  }}
                />
                {reloadcaptcha ? (
                  <MyCaptcha ref={refcaptcha} />
                ) : (
                  <MyCaptcha ref={refcaptcha} reload="load" />
                )}
              </div>
            </div>
            {checkCaptcha === true ? (
              <div className="text-right h-[32px] mt-2"></div>
            ) : (
              <div className="text-right text-sm  h-[32px] mt-2">
                Mã xác nhận không hợp lệ
              </div>
            )}

            <div>
              <Button
                width="100%"
                bgcolor="#950B0B"
                onClick={handleClick}
                size="large"
              >
                Đăng Nhập
              </Button>
            </div>
          </form>
        </div>
        <div className="text-center mt-2">Copyright© 2022 Đại học Duy Tân.</div>
      </div>
    </div>
  );
}

export default Authentication;
