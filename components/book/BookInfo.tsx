import Path from "@/constants/path/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";
import BookStatusNameByKor from "@/constants/book";
import { BookDetailedViewReadModelProps } from "@/models/books/book";

interface BookInfoProps {
  hasToken: boolean;
  setHasToken: Dispatch<SetStateAction<boolean>>;
  book?: BookDetailedViewReadModelProps;
}

const BookInfo: FC<BookInfoProps> = (props) => {
  const { hasToken, setHasToken, book } = props;
  const router = useRouter();
  const { BOOK_EPISODE_PUBLISH, BOOK_UPDATE_PUBLISH } = Path;

  const btnStyle =
    "px-6 py-2 font-bold transition rounded-md bg-main text-main-contra hover:scale-105";

  return (
    <section className="flex flex-col ">
      <div className="flex flex-row items-start justify-between w-full gap-8 py-4">
        <Image
          width={250}
          height={375}
          className="min-w-[250px] max-w-[250px] min-h-[375px] max-h-[375px]"
          src={book?.coverUrl ? book?.coverUrl : PreviewImg}
          alt={book?.title + "표지 이미지"}
        />
        <section className="flex flex-col items-start flex-1">
          <div className="flex flex-col items-start justify-between w-full min-h-full gap-2">
            <div className="w-full flex flex-row justify-between items-centera">
            <button
                  className={
                    "px-4 py-2 font-bold transition rounded-md bg-main text-main-contra hover:scale-105 text-sm"
                  }
                >
                  {BookStatusNameByKor[book?.status ?? "PENDING"]}
            </button>
            {hasToken && (
                <AiOutlineSetting
                  className="text-3xl cursor-pointer hover:text-main"
                  onClick={() => {
                    router.push({
                      pathname: BOOK_UPDATE_PUBLISH,
                      query: { bid: book?.id },
                    });
                  }}
                />
              )}
              </div>
            <div className="flex flex-row items-start justify-between w-full">

              <div className="flex flex-row justify-start w-full gap-2">
                <h1 className="text-3xl font-bold">{book?.title}</h1>

              </div>

            </div>
            <div className="flex flex-row items-center justify-between w-full gap-2 text-icon">
              <p className="w-fit">작가: {book?.nickname}</p>
              <div className="flex justify-end flex-1 gap-4">
                <p>평점: {book?.score ?? 0}점</p>
                <p>좋아요: {book?.totalHeartCount ?? 0}개</p>
                <p>조회수: {book?.totalViewCount ?? 0}회</p>
              </div>
            </div>
            <p className="flex flex-col items-start flex-1 w-full min-h-[150px]">
              {book?.description}
            </p>
            <ul className="flex flex-row items-center justify-start gap-2">
              {book?.genreNameList?.map((genreName, index) => {
                return (
                  <li
                    key={"genreName-" + index}
                    className="px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra"
                    onClick={() => {}}
                  >
                    <p>{genreName}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <div className="flex items-end justify-end w-full gap-4">
        {!hasToken ? (
          <>
            <button className={btnStyle}>최근화보기</button>
            <button className={btnStyle}>첫화보기</button>
          </>
        ) : (
          <>
            <button
              className={btnStyle}
              onClick={() => {
                router.push({
                  pathname: BOOK_EPISODE_PUBLISH,
                  // query: { bid: routerQurey.bid },
                });
              }}
            >
              에피소드 추가
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default BookInfo;
