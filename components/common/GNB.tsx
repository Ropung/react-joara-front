import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";

const GNB = () => {
  // const route = useRouter();
  return (
    <nav className="flex flex-row justify-between items-center h-20 bg-white px-8 border-b shadow-t-md">
      <Link href={"/"}>
        <Image
          width={280}
          height={100}
          className="w-36 cursor-pointer"
          src={"/logo/ic_nav_home_logo_bl.png"}
          alt="메인로고"
        />
      </Link>
      <div className="flex flex-row gap-2">
        <ul className="flex flex-row gap-4 text-2xl cursor-pointer">
          <li className="focus:text-main hover:text-main">
            <Link href="/">메뉴1</Link>
          </li>
          <li className="focus:text-main hover:text-main">
            <Link href="/">메뉴2</Link>
          </li>
          <li className="focus:text-main hover:text-main">
            <Link href="/">메뉴3</Link>
          </li>
        </ul>
        <div className="flex flex-row gap-2 items-center">
          <Link href={"/login"}>로그인</Link>
          <Link href={"/signup"}>회원가입</Link>
        </div>
      </div>
    </nav>
  );
};

export default GNB;
