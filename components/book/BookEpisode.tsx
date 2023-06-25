import Path from "@/constants/path/routes";
import { SomeIdUnion } from "@/models/book";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction } from "react";

interface BookInfoProps {
  hasToken: boolean;
  setHasToken: Dispatch<SetStateAction<boolean>>;
}

const BookEpisode: FC<BookInfoProps> = (props) => {
  const dummyList: number[] = [1, 2, 3, 4, 5];
  const { hasToken, setHasToken } = props;
  const { EPISODE, BOOK_UPDATE_EPISODE_PUBLISH } = Path;
  const router = useRouter();
  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-end justify-start gap-2">
          <h1 className="text-2xl font-bold">작품회차</h1>
          <span>({-100})</span>
        </div>
        <div className="flex items-center justify-end gap-2 divide-x">
          <p className="cursor-pointer">최신순</p>
          <p className="pl-2 cursor-pointer">첫화</p>
        </div>
      </div>
      <section className="flex flex-col items-center justify-between gap-4">
        <ul className="flex flex-col flex-1 w-full divide-y">
          {dummyList.map((epi) => {
            return (
              <li
                key={"epi-" + epi}
                className="flex flex-col items-start justify-center gap-4 p-4 rounded-md hover:bg-gray-100"
              >
                <div className="flex flex-row items-center justify-between w-full gap-6 ">
                  <div
                    className="flex flex-row items-center justify-start gap-2 cursor-pointer hover:text-main"
                    onClick={() => {
                      router.push({
                        pathname: EPISODE,
                        query: { bid: bid, eid: epi },
                      });
                    }}
                  >
                    <h2 className="py-2 text-xl font-bold">{epi}화</h2>
                    <p>{"작품 에피소드 제목"}</p>
                  </div>
                  {hasToken && (
                    <button
                      className="px-4 py-2 rounded-md bg-primary text-main-contra hover:bg-primary-active"
                      onClick={() => {
                        router.push({
                          pathname: BOOK_UPDATE_EPISODE_PUBLISH,
                          query: { bid: bid, eid: epi },
                        });
                      }}
                    >
                      수정
                    </button>
                  )}
                </div>
                <div className="flex flex-row gap-4">
                  <p>조회수:{-100}</p>
                  <p>좋아요:{-100}</p>
                  <p>2032_11_11</p>
                </div>
              </li>
            );
          })}
        </ul>
        {/* 페이지 네이션 */}
        <div className="flex flex-row gap-4">
          {dummyList.map((page) => {
            return (
              <button
                key={"page-" + page}
                className="flex items-center justify-center w-8 h-8 p-4 text-lg bg-white border rounded-md text-main hover:bg-main hover:text-main-contra"
                onClick={() => {
                  //
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default BookEpisode;
