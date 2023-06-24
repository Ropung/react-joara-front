import BookEpisode from "@/components/book/BookEpisode";
import BookInfo from "@/components/book/BookInfo";
import useBookOfOneQuery from "@/hooks/query/useBookOfOneQuery";
import { SomeIdUnion } from "@/models/book";
import token from "@/utils/token";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  // const { data: { episode } = {} } = useEpisodeByBookQuery(Number(routerQuery.bid));

  console.log(book);
  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <BookInfo book={book} hasToken={hasToken} setHasToken={setHasToken} />
      <p className="w-screen border-b border-gray-100" />
      <BookEpisode hasToken={hasToken} setHasToken={setHasToken} />
    </div>
  );
};

export default BookOfOne;
