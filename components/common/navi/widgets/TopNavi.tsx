import Path from "@/constants/path/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import token from "@/utils/token";
import { useEffect, useState } from "react";

const TopNavi = () => {
  const { HOME, LOGIN, WRITER_ROOM, SIGN_UP } = Path;
  const router = useRouter();

  const [isToken, setToken] = useState<boolean>(false);

  const acToken = token.get();
  useEffect(() => {
    !!acToken ? setToken(true) : setToken(false);
  }, [acToken]);

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
        {!isToken ? (
          <>
            <Link href={LOGIN} className="hover:text-main">
              로그인
            </Link>
            <Link href={SIGN_UP} className="hover:text-main">
              회원가입
            </Link>
          </>
        ) : (
          <>
            <Link
              href={LOGIN}
              className="hover:text-main"
              onClick={() => {
                token.remove();
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
