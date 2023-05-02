// 담당: 정주현

import { Link } from "react-router-dom";
import logoDark from "/logo/logo-dark.png";

function LeftNav({ isLogin }) {
  return (
    <div className="absolute left-[20px] top-0 w-[fit-content] h-full">
      <Link to="/">
        <img
          src={logoDark}
          className="h-[50px] w-auto mx-[5px] mr-[30px] float-left relative top-[50%] -translate-y-1/2 inline-block dark:grayscale-0"
          alt="logo"
        ></img>
      </Link>
      {isLogin && (
        <Link
          to="/my-page"
          className={` float-left mx-[5px] relative top-[50%] -translate-y-1/2 w-[fit-content] h-[fit-content] font-normal text-[#212121] dark:text-[#b5b5b5]`}
        >
          마이페이지
        </Link>
      )}
      <Link
        to="/network"
        className={`float-left mx-[5px] relative top-[50%] -translate-y-1/2 w-[fit-content] h-[fit-content] font-normal text-[#212121] dark:text-[#b5b5b5]`}
      >
        네트워크
      </Link>
    </div>
  );
}

export default LeftNav;