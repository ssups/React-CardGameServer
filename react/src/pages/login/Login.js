import React, { useEffect, useState } from "react";
import { Whole, BackGround, Wrap } from "../login/style";
import { login } from "../../images";
import { useNavigate } from "react-router-dom";
import { JoinComp, LoginComp } from "../../components";

const Login = ({ setIsLoginPage, setOnLoad }) => {
  const nav = useNavigate();
  const [switched, setSwitched] = useState(false);
  useEffect(() => {
    setIsLoginPage(true);
    // 해당 컴포넌트 언마운트때 실행
    return () => {
      setIsLoginPage(false);
    };
  }, []);
  function onClick() {
    setOnLoad(true);
    // setIsLoginPage(false);
    nav("/main");
  }
  return (
    <Whole>
      <BackGround src={login}></BackGround>
      <Wrap>
        {switched ? (
          <JoinComp setSwitched={setSwitched}></JoinComp>
        ) : (
          <LoginComp
            setSwitched={setSwitched}
            setOnLoad={setOnLoad}
            setIsLoginPage={setIsLoginPage}
          ></LoginComp>
        )}
      </Wrap>
    </Whole>
  );
};

export default Login;
