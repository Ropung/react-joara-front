import Path from "@/constants/path/routes";
import { bookList } from "@/data/dummy";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type GenreUnion = "fantasy" | "action";

const Genre = () => {
  const router = useRouter();
  const routerQurey = router.query as { [key in GenreUnion]: string };

  const { BOOK } = Path;
  return (
    <div className="flex flex-col gap-8 py-8 px-16">
      <p className="font-bold text-3xl">{"장르이름"}</p>
      <div className="flex flex-col gap-12">
        {/* Genre List */}
        <ul className="w-full flex flex-wrap gap-4 items-center">
          {bookList.map((book) => (
            <li
              key={"genre-" + book.bookId}
              className="w-[150px] flex flex-col cursor-pointer"
              onClick={() => {
                router.push({
                  pathname: BOOK,
                  query: { bid: book.bookId },
                });
              }}
            >
              <div className="w-full flex flex-col relative">
                <Image
                  sizes="w-full"
                  width={70}
                  height={50}
                  className="w-full relative"
                  src="http://image.yes24.com/goods/106211628/XL"
                  alt="소설더미이미지"
                />
                <div className="absolute bottom-0 right-0 left-0 bg-black/10 h-fit text-center font-bold text-white py-2">
                  <p className="text-2xl drop-shadow-md">{"제목"}</p>
                  <p className="text-sm drop-shadow-md">{"작가"}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Genre;
