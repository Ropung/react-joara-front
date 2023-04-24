import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import MainLogo from "@/public/logo/mainlogo.png"; //FIXME 임시용
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import token from "@/libs/token";

const MiddleNavi = () => {
  const searchFormRef = useRef<HTMLInputElement>(null);
  const { LOGIN, HOME } = Path;
  // const [isAuthed, setAuthed] = useState<boolean>(!!token.getToken("token"));
  const router = useRouter();

  return (
    <section className="w-full flex flex-row justify-between items-center h-16">
      <div className="flex flex-row gap-6 items-center justify-center">
        <Link href={"/"}>
          <Image
            width={200}
            height={40}
            className="w-32 cursor-pointer"
            src={MainLogo}
            alt="메인로고"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-end items-center gap-8">
        {/* searchbar */}
        <div className="flex flex-1 flex-row justify-between items-center gap-2 hover:border-main border-silver border-[0.5px] px-4 py-2 rounded-full">
          <FaSearch className="text-left text-xl text-icon" />
          <input
            className="px-2 "
            type="text"
            placeholder="검색"
            ref={searchFormRef}
          />
          <GiCancel className="text-right text-xl text-icon hover:text-main" />
        </div>
        <div className="flex flex-row items-center justify-end gap-2 text-3xl text-icon">
          <IoNotificationsOutline className="hover:text-icon-active cursor-pointer" />
          <BiBookBookmark className="hover:text-icon-active cursor-pointer" />
          <AiOutlineUser
            className="hover:text-icon-active cursor-pointer"
            onClick={() => {
              // FIXME 로그인 버튼 누르면 페이지 이동 할 기획
              // isAuthed ? router.push(HOME) : router.push(LOGIN);
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MiddleNavi;
