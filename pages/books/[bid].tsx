import BookEpisode from "@/components/book/BookEpisode";
import BookInfo from "@/components/book/BookInfo";
import { useRouter } from "next/router";
import { useState } from "react";

const Book = () => {
  const [isAuth, setAuth] = useState<boolean>(true);

  const router = useRouter();
  const routerQurey = router.query;

  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <BookInfo isAuth={isAuth} setAuth={setAuth} />
      <p className="w-screen border-b border-gray-100" />
      <BookEpisode isAuth={isAuth} setAuth={setAuth} />
    </div>
  );
};

export default Book;
