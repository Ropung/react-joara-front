import Path from "@/constants/path/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";
import BookStatusNameByKor from "@/constants/book";
import { BookDetailedViewReadModelProps } from "@/models/books/book";
import { BsBookmark, BsFillBookmarkStarFill } from "react-icons/bs";
import { useFavoriteDeleteMutation } from "@/hooks/mutation/favorite/useFavoriteDeleteMutation";
import { useFavoriteCreateMutation } from "@/hooks/mutation/favorite/useFavoriteCreateMutation";
import { FavoriteCreateReq, FavoriteDeleteReq } from "@/models/books/favorite";

interface BookInfoProps {
  hasToken: boolean;
  setHasToken: Dispatch<SetStateAction<boolean>>;
  book?: BookDetailedViewReadModelProps;
}

const BookInfo: FC<BookInfoProps> = (props) => {
  const btnStyle =
    "px-6 py-2 font-bold transition rounded-md bg-main text-main-contra hover:scale-105";
  const reactIconStyle = "cursor-pointer hover:scale-110 text-3xl";
  const { hasToken, setHasToken, book } = props;
  const router = useRouter();
  const { BOOK_PUBLISH, BOOK_UPDATE_PUBLISH, EPISODE } = Path;

  const [isBookMark, setBookMark] = useState<boolean>(true);

  const favoriteCreateMutation = useFavoriteCreateMutation();
  const favoriteDeleteMutation = useFavoriteDeleteMutation();

  return (
    <section className="flex flex-col ">
      <div className="flex flex-row items-start justify-between w-full gap-8 py-4">
        <Image
          width={150}
          height={200}
          className="w-[25%]"
          src={book?.coverUrl ? book?.coverUrl : PreviewImg}
          alt={book?.title + "표지이미지"}
        />
        <section className="flex flex-col items-start flex-1">
          <div className="flex flex-col items-start justify-between w-full min-h-full gap-2">
            <div className="flex flex-row items-start justify-between w-full">
              <div className="flex flex-row justify-start w-full gap-2">
                <button
                  className={
                    "px-4 py-2 font-bold transition rounded-md bg-main text-main-contra hover:scale-105 text-sm"
                  }
                >
                  {BookStatusNameByKor[book?.status ?? "PENDING"]}
                </button>
                <h1 className="text-3xl font-bold">{book?.title}</h1>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center justify-center">
                  {!isBookMark ? (
                    <BsFillBookmarkStarFill
                      className={`${reactIconStyle}`}
                      onClick={() => {
                        if (!book?.id) return;
                        const reqData: FavoriteDeleteReq = {
                          bookId: book?.id,
                        };
                        favoriteDeleteMutation.mutate(reqData);
                        setBookMark(!isBookMark);
                      }}
                    />
                  ) : (
                    <BsBookmark
                      className={`${reactIconStyle} text-black/50`}
                      onClick={() => {
                        if (!book?.id) return;

                        const reqData: FavoriteCreateReq = {
                          bookId: book?.id,
                        };
                        favoriteCreateMutation.mutate(reqData);
                        setBookMark(!isBookMark);
                      }}
                    />
                  )}
                  <p className="text-lg text-black/50">
                    {(book?.totalHeartCount ?? -1) + (!isBookMark ? 1 : 0)}
                  </p>
                </div>
                {hasToken && (
                  <AiOutlineSetting
                    className="text-4xl cursor-pointer hover:text-main"
                    onClick={() => {
                      router.push({
                        pathname: BOOK_UPDATE_PUBLISH,
                        query: { bid: book?.id },
                      });
                    }}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 text-icon">
              <p className="w-fit">작가: {book?.nickname}</p>
              <div className="flex justify-start flex-1 gap-4">
                <p>평점: {book?.score ?? -1}점</p>
                <p>조회수: {book?.totalViewCount ?? -1}회</p>
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
                  pathname: `${BOOK_PUBLISH}/${book?.id}/episode`,
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
