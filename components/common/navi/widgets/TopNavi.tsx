import Path from "@/constants/path/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import token from "@/libs/token";
import { useState } from "react";

const TopNavi = () => {
  const { HOME, LOGIN, WRITER_ROOM, SIGNUP } = Path;
  // const [isAuthed, setAuthed] = useState<boolean>(!!token.getToken("token"));
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
        {!true ? (
          <>
            <Link href={LOGIN} className="hover:text-main">
              로그인
            </Link>
            <Link href={SIGNUP} className="hover:text-main">
              회원가입
            </Link>
          </>
        ) : (
          <>
            <Link
              href={LOGIN}
              className="hover:text-main"
              onClick={() => {
                token.removeToken("token");
                router.push(LOGIN);
              }}
            >
              로그아웃
            </Link>
            <Link href={WRITER_ROOM} className="hover:text-main">
              내 작품관리
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default TopNavi;
