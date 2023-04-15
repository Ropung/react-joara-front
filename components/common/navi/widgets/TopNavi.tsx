import Path from "@/constants/path/routes";
import Link from "next/link";
import React, { useState } from "react";

const TopNavi = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const { HOME, LOGIN, SIGNUP } = Path;

  return (
    <section className="w-full flex flex-row items-center justify-between h-10 text-basic font-bold">
      {/* Left */}
      <div className="flex flex-row gap-4">
        <Link href={"/"} className="hover:text-main">
          웹소설
        </Link>
        <Link href={"/"} className=" hover:text-main">
          도서
        </Link>
      </div>
      {/* Right */}
      <div className="flex flex-row gap-2">
        {!isAuth ? (
          <Link href={"/login"} className="hover:text-main">
            로그인
          </Link>
        ) : (
          <Link href={"/"} className="hover:text-main">
            로그인된상태
          </Link>
        )}
      </div>
    </section>
  );
};

export default TopNavi;
