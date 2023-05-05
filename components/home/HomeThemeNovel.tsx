import { bookList } from "@/data/dummy";
import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Image from "next/image";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";

const HomeThemeNovel = () => {
  const { BOOK } = Path;
  const router = useRouter();
  return (
    <div className="flex flex-col gap-12">
      <ul className="w-full flex flex-col gap-2">
        {/* 카테고리별나누기 map 함수로 */}
        <li className="flex flex-col gap-4">
          {/* Title */}
          <div className="w-full flex flex-row justify-between items-center">
            <p className="text-2xl font-bold">오늘의 인기작</p>
            <div className="flex flex-row gap-2 justify-end text-4xl">
              <BsArrowLeftSquareFill className="cursor-pointer" />
              <BsArrowLeftSquareFill className=" cursor-pointer rotate-180" />
            </div>
          </div>
          {/* Novel List */}
          <ul className="w-full flex flex-row gap-2 overflow-hidden">
            {bookList.map((book) => (
              <li
                key={"books-" + book.bookId}
                className="cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: BOOK,
                    query: { bid: book.bookId },
                  });
                }}
              >
                <div className="w-[150px] flex flex-col gap-4 relative">
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
        </li>
      </ul>
    </div>
  );
};

export default HomeThemeNovel;
