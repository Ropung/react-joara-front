import Path from "@/constants/path/routes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TopNavi = () => {
  const { HOME, LOGIN, SIGNUP } = Path;
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isAuthor, setAuthor] = useState<boolean>(false);

  return (
    <section className="w-full flex flex-row items-center justify-between h-10 text-basic font-bold">
      {/* Left */}
      <div className="flex flex-row gap-4">
        <Link href={HOME} className="hover:text-main">
          웹소설
        </Link>
        <Link href={HOME} className=" hover:text-main">
          도서
        </Link>
        <div
          className="cursor-pointer hover:text-main"
          onClick={() => {
            setAuth(!isAuth);
          }}
        >
          로그인(온오프)
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-row gap-2">
        {!isAuth ? (
          <Link href={LOGIN} className="hover:text-main">
            로그인
          </Link>
        ) : (
          <Link href={"/"} className="hover:text-main">
            작가신청
          </Link>
        )}
      </div>
    </section>
  );
};

export default TopNavi;
