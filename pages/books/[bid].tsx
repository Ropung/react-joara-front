import BookEpisode from "@/components/book/BookEpisode";
import BookInfo from "@/components/book/BookInfo";
import AsideBooksBar from "@/components/book/aside/AsideBooksBar";
import { Size } from "@/constants/genre";
import useBookOfOneQuery from "@/hooks/query/useBookOfOneQuery";
import useEpisodeByBookQuery from "@/hooks/query/useEpisodeByBookQuery";
import { AsideBookListProps, SomeIdUnion } from "@/models/book";
import token from "@/utils/token";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFOUND from "@/public/img/not.jpg";

const BookOfOne = () => {
  const acToken = token.get();
  useEffect(() => {
    !!acToken ? setHasToken(true) : setHasToken(false);
  }, [acToken]);

  // TODO 계정 비교 가능해야함
  const [hasToken, setHasToken] = useState<boolean>(true);

  const router = useRouter();
  const routerQuery = router.query as { [key in SomeIdUnion]: string };
  const { data: { book } = {} } = useBookOfOneQuery(Number(routerQuery.bid));
  const { data: { episodeList, lastPage } = {} } = useEpisodeByBookQuery(
    Number(routerQuery.bid),
    Number(Size.TEN),
    Number(1)
  );

  // FIXME: fastapi에서 받으면 교체 ㄱㄱ
  const bookList: AsideBookListProps[] = [
    {
      id: 1,
      genreIdList: [1, 4, 5],
      title: "추천 작품입니땅 !",
      genreName: "액션더미",
      nickname: "추천지은이",
    },
    {
      id: 3,
      genreIdList: [2, 3, 14],
      title: "추천 작품 제목",
      genreName: "액션더미",
      nickname: "추천지은이",
    },
  ];

  // console.log(book);
  // console.log(episodeList);
  return (
    <div className="flex flex-col gap-8 px-16 py-8 divide-y">
      <BookInfo book={book} hasToken={hasToken} setHasToken={setHasToken} />
      <div className="flex flex-row justify-between gap-2 py-4">
        {!episodeList ? (
          <>
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <h1 className="text-3xl font-bold">등록된 회차가 없지롱</h1>
              <Image
                className=""
                src={NotFOUND}
                alt="회차가 없다는 이미지"
                width={500}
                height={200}
              />
            </div>
          </>
        ) : (
          <BookEpisode
            episodeList={episodeList}
            hasToken={hasToken}
            setHasToken={setHasToken}
          />
        )}

        <aside className="flex flex-col min-w-[340px] p-4 overflow-hidden gap-2">
          <AsideBooksBar asideTitle="추천작" bookList={bookList} />
          <AsideBooksBar asideTitle="작가의 다른작품" bookList={bookList} />
          <AsideBooksBar asideTitle="인기작" bookList={bookList} />
        </aside>
      </div>
    </div>
  );
};

export default BookOfOne;
