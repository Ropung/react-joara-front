import BookEpisode from "@/components/book/BookEpisode";
import BookInfo from "@/components/book/BookInfo";
import { useState } from "react";

const Book = () => {
  const [isAuth, setAuth] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-8 py-8 px-16">
      <BookInfo isAuth={isAuth} setAuth={setAuth} />
      <p className="w-screen border-b border-gray-100" />
      <BookEpisode isAuth={isAuth} setAuth={setAuth} />
    </div>
  );
};

export default Book;
