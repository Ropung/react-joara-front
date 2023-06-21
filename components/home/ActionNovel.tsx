import React, { FC } from "react";
import Image from "next/image";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";
import { mainActionBooksDummy } from "@/data/dummy";

const ActionNovel = () => {
  const { BOOK } = Path;
  const router = useRouter();

  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col w-full gap-2">
        {/* 카테고리별나누기 map 함수로 */}
        <li className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-2xl font-bold">
              {mainActionBooksDummy.genreKor} 인기작
            </p>
            <div className="flex flex-row justify-end gap-2 text-4xl">
              <div className="text-sm cursor-pointer">더보기</div>
            </div>
          </div>
          {/* Novel List */}
          <ul className="flex flex-row w-full gap-2 overflow-hidden">
            {mainActionBooksDummy.bookList?.map((book) => (
              <li
                key={"books-" + book.bookId}
                className="w-1/5 cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: BOOK,
                    query: { bid: book.bookId },
                  });
                }}
              >
                <div className="relative flex flex-col w-full">
                  <Image
                    sizes="w-full"
                    width={40}
                    height={50}
                    className="relative w-full"
                    src="http://image.yes24.com/goods/106211628/XL"
                    alt="소설더미이미지"
                  />
                  <p className="w-full drop-shadow-md">{book.title}</p>
                  <p className="w-full text-sm drop-shadow-md text-default">
                    {book.nickname}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ActionNovel;
