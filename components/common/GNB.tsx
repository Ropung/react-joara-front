import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { useRef, useState } from "react";

const GNB = () => {
  const searchFormRef = useRef<HTMLInputElement>(null);
  const [isAuth, setAuth] = useState<boolean>(false);
  // const route = useRouter();

  return (
    <nav className="flex flex-row justify-between items-center h-20 bg-white px-8 border-b shadow-t-md">
      <div className="flex flex-row gap-6 items-center justify-center">
        <Link href={"/"}>
          <Image
            width={280}
            height={100}
            className="w-36 cursor-pointer"
            src={"/logo/ic_nav_home_logo_bl.png"}
            alt="메인로고"
          />
        </Link>
        <ul className="flex flex-row gap-4 text-xl cursor-pointer items-center justify-start">
          <li className="focus:text-main hover:text-main">
            <Link href="/">웹소설</Link>
          </li>
          <li className="focus:text-main hover:text-main">
            <Link href="/">메뉴뭐있을까</Link>
          </li>
        </ul>
      </div>
      {/* search */}
      <div className="w-[300px] flex flex-row justify-between items-center gap-2 boder-black border-2 px-4 py-2 rounded-full">
        <FaSearch className="text-left text-xl" />
        <input
          className="px-2"
          type="text"
          placeholder="검색"
          ref={searchFormRef}
        />
        <GiCancel className="text-right text-xl text-gray-200" />
      </div>
      <div className="flex flex-row gap-2">
        {!isAuth ? (
          <>
            <Link
              href={"/login"}
              className="p-2 bg-default text-main-contra rounded-md hover:bg-main"
            >
              로그인
            </Link>
          </>
        ) : (
          <>
            <div>로그인된상태</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default GNB;
