import Path from "@/constants/path/routes";
import { lorem } from "@/data/dummy";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";

type SomeUnion = "bid" | "eid";

interface BookInfoProps {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

const BookInfo: FC<BookInfoProps> = (props) => {
  const { isAuth, setAuth } = props;

  const router = useRouter();
  const { BOOK_PUBLISH, BOOK_EPISODE_PUBLISH } = Path;
  const routerQurey = router.query as { [key in SomeUnion]: string };

  return (
    <>
      <section className="flex flex-row gap-8 items-start justify-between">
        <Image
          width={150}
          height={200}
          className="w-[25%]"
          src="http://image.yes24.com/goods/106211628/XL"
          alt="소설더미이미지"
        />
        <div className="flex flex-1 flex-col items-start">
          <div className="flex flex-col gap-6 items-start justify-between">
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-full flex flex-col items-start">
                <h1 className="font-bold text-3xl">소설제목</h1>
                <p className="flex flex-row gap-2 text-icon">
                  <span className="">작가이름</span>
                  <span>조회수</span>
                  <span>장르</span>
                </p>
              </div>
              {isAuth && (
                <AiOutlineSetting
                  className="text-3xl hover:text-main cursor-pointer"
                  onClick={() => {
                    router.push(BOOK_PUBLISH);
                  }}
                />
              )}
            </div>
            <p className="w-full flex flex-1 flex-col items-start">
              {lorem.dummy_long}
            </p>
            <ul className="flex flex-row gap-2 items-center justify-start">
              <li
                className="text-sm py-1 px-4 hover:bg-main hover:text-main-contra rounded-md border"
                onClick={() => {
                  setAuth(!isAuth);
                }}
              >
                {/* FIXME test끝나면 바꾸셈 */}
                {"태그 들어올 자린데 이거 누르면 로그인 됬다침"}
              </li>
            </ul>
            <div className="w-full flex items-center justify-start gap-4">
              {!isAuth ? (
                <>
                  <button className="bg-main py-4 px-6 rounded-md text-main-contra hover:scale-105 transition font-bold">
                    최근화보기
                  </button>
                  <button className="bg-main py-4 px-6 rounded-md text-main-contra hover:scale-105 transition font-bold">
                    첫화보기
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-main py-4 px-6 rounded-md text-main-contra hover:scale-105 transition font-bold"
                    onClick={() => {
                      router.push({
                        pathname: BOOK_EPISODE_PUBLISH,
                        query: { bid: routerQurey.bid },
                      });
                    }}
                  >
                    에피소드 추가
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookInfo;
