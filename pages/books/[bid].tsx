import BookEpisode from "@/components/book/BookEpisode";
import BookInfo from "@/components/book/BookInfo";
import AsideRecommendBooks from "@/components/book/aside/AsideRecommendBooks";
import { Size } from "@/constants/genre";
import useEpisodeByBookQuery from "@/hooks/query/episode/useEpisodeByBookQuery";
import token from "@/utils/token";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NotFOUND from "@/public/img/not.jpg";
import { SomeIdUnion } from "@/models/type";
import useBookOfOneQuery from "@/hooks/query/book/useBookOfOneQuery";
import useBookOfRecommendBooksQuery from "@/hooks/query/book/useBookOfReCommendBooksQuery";

const BookOfOne = () => {
  const acToken = token.get();
  useEffect(() => {
    !!acToken ? setHasToken(true) : setHasToken(false);
  }, [acToken]);

  const [hasToken, setHasToken] = useState<boolean>(true);

  const router = useRouter();
  const routerQuery = router.query as { [key in SomeIdUnion]: string };

  const { data: { book } = {} } = useBookOfOneQuery(Number(routerQuery.bid));
  const { data: { episodeList, lastPage } = {} } = useEpisodeByBookQuery(
    Number(routerQuery.bid),
    Number(Size.TEN),
    Number(1)
  );
  const { data: { books: recommendBooks } = {} } = useBookOfRecommendBooksQuery(
    Number(routerQuery.bid)
  );
  console.log(recommendBooks);

  return (
    <div className="flex flex-col gap-8 px-16 py-8 divide-y">
      <BookInfo book={book} hasToken={hasToken} setHasToken={setHasToken} />
      <div className="flex flex-row justify-between gap-2 py-4">
        {!episodeList ? (
          <>
            <div className="flex flex-col items-center justify-start w-full gap-2">
              <h1 className="text-3xl font-bold">등록된 회차가 없지롱</h1>
              <Image
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
            episodeSize={book?.episodeSize ?? -1}
            hasToken={hasToken}
            setHasToken={setHasToken}
          />
        )}

        <aside className="flex flex-col min-w-[340px] p-4 overflow-hidden gap-2">
          <AsideRecommendBooks
            asideTitle="추천작"
            recommendBooks={recommendBooks}
          />
        </aside>
      </div>
    </div>
  );
};

export default BookOfOne;
