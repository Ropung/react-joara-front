import Path from "@/constants/path/routes";
import { useRouter } from "next/router";

type SomeUnion = "bid" | "eid";

const BookEpisode = () => {
  const dummyList: number[] = [1, 2, 3, 4, 5];

  const { EPISODE } = Path;
  const router = useRouter();
  // const bid = router.query.bid as string;
  const { bid } = router.query as { [key in SomeUnion]: string };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-end justify-start">
          <h1 className="text-2xl font-bold">작품회차</h1>
          <span>({-100})</span>
        </div>
        <div className="flex gap-2 justify-end items-center divide-x">
          <p className="cursor-pointer">최신순</p>
          <p className="pl-2 cursor-pointer">첫화</p>
        </div>
      </div>
      <section className="flex flex-col gap-4 items-center justify-between">
        <ul className="w-full flex flex-1 flex-col divide-y">
          {dummyList.map((epi) => {
            return (
              <li
                key={"epi-" + epi}
                className="flex flex-col gap-4 items-start justify-center cursor-pointer hover:bg-gray-100 rounded-md p-4"
                onClick={() => {
                  router.push({
                    pathname: EPISODE,
                    query: { bid: bid, eid: epi },
                  });
                }}
              >
                <div className="flex flex-row gap-6 justify-start items-center ">
                  <h2 className="font-bold text-xl py-2">{epi}화</h2>
                  <p>{"작품 에피소드 제목"}</p>
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
                className="w-8 h-8 flex items-center justify-center text-lg bg-white text-main p-4 rounded-md border hover:bg-main hover:text-main-contra"
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
