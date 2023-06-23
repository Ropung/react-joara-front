import Path from "@/constants/path/routes";
import { lorem } from "@/data/dummy";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";

type SomeUnion = "bid" | "eid";

interface BookInfoProps {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

const BookInfo: FC<BookInfoProps> = (props) => {
  const { isAuth, setAuth } = props;

  const router = useRouter();
  const { BOOK_PUBLISH, BOOK_EPISODE_PUBLISH, BOOK_UPDATE_PUBLISH } = Path;
  const routerQurey = router.query as { [key in SomeUnion]: string };

  return (
    <>
      <section className="flex flex-row items-start justify-between gap-8">
        <Image
          width={150}
          height={200}
          className="w-[25%]"
          src={PreviewImg}
          alt="소설더미이미지"
        />
        <div className="flex flex-col items-start flex-1">
          <div className="flex flex-col items-start justify-between gap-6">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col items-start w-full">
                <h1 className="text-3xl font-bold">소설제목</h1>
                <p className="flex flex-row gap-2 text-icon">
                  <span className="">작가이름</span>
                  <span>조회수</span>
                  <span>장르</span>
                </p>
              </div>
              {isAuth && (
                <AiOutlineSetting
                  className="text-3xl cursor-pointer hover:text-main"
                  onClick={() => {
                    router.push({
                      pathname: BOOK_UPDATE_PUBLISH,
                      query: { bid: routerQurey.bid },
                    });
                  }}
                />
              )}
            </div>
            <p className="flex flex-col items-start flex-1 w-full">
              {lorem.dummy_long}
            </p>
            <ul className="flex flex-row items-center justify-start gap-2">
              <li
                className="px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra"
                onClick={() => {
                  setAuth(!isAuth);
                }}
              >
                {/* FIXME test끝나면 바꾸셈 */}
                {"태그 들어올 자린데 이거 누르면 로그인 됬다침"}
              </li>
            </ul>
            <div className="flex items-center justify-start w-full gap-4">
              {!isAuth ? (
                <>
                  <button className="px-6 py-4 font-bold transition rounded-md bg-main text-main-contra hover:scale-105">
                    최근화보기
                  </button>
                  <button className="px-6 py-4 font-bold transition rounded-md bg-main text-main-contra hover:scale-105">
                    첫화보기
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-6 py-4 font-bold transition rounded-md bg-main text-main-contra hover:scale-105"
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
