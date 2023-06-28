import Image from "next/image";
import React, { FC } from "react";
import Cat from "@public/img/cat.jpeg";
import { genreNumByName } from "@/constants/genre";
import { RecommendedBooksQueryProps } from "@/models/books/book";

interface AsideRecommendBooksProps {
  asideTitle: string;
  recommendBooks?: RecommendedBooksQueryProps[];
}

const AsideRecommendBooks: FC<AsideRecommendBooksProps> = (props) => {
  const { asideTitle, recommendBooks } = props;
  return (
    <>
      <p className="text-2xl font-bold">{asideTitle}</p>
      <ul className="flex flex-col w-full gap-6 p-4 bg-white border rounded-xl">
        {recommendBooks?.map((book) => {
          return (
            <li
              key={`recommend-${book.id}`}
              className="flex flex-row gap-2 p-2 cursor-pointer hover:bg-main/20"
            >
              <Image
                src={book.coverUrl ? book.coverUrl : Cat}
                width={60}
                height={10}
                alt={book.title + "이미지"}
              />
              <div className="flex flex-col justify-between flex-1">
                <p className="text-lg font-bold">{book.title}</p>
                <ul className="flex flex-wrap gap-1">
                  {book.genreIdList?.map((genreId) => {
                    return (
                      <li
                        key={"recommend-" + genreId}
                        className="flex flex-wrap p-1 text-xs text-white rounded-md w-fit bg-main"
                      >
                        {genreNumByName[genreId]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AsideRecommendBooks;
