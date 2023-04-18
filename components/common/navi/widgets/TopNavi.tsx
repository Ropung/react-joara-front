import Path from "@/constants/path/routes";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useRouter } from "next/router";

interface TopNaviProps {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

const TopNavi: FC<TopNaviProps> = (props) => {
  const { HOME, LOGIN, WRITER_ROOM } = Path;
  const { isAuth, setAuth } = props;

  const router = useRouter();

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
      </div>
      {/* Right */}
      <div className="flex flex-row gap-2">
        {!isAuth ? (
          <Link href={LOGIN} className="hover:text-main">
            로그인
          </Link>
        ) : (
          <Link href={WRITER_ROOM} className="hover:text-main">
            내 작품관리
          </Link>
        )}
      </div>
    </section>
  );
};

export default TopNavi;
