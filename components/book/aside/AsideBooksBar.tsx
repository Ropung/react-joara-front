import Image from "next/image";
import React, { FC } from "react";
import Cat from "@public/img/cat.jpeg";
import { AsideBookListProps } from "@/models/book";
import { genreNumByName } from "@/constants/genre";

interface AsideBooksBarProps {
  asideTitle: string;
  bookList: AsideBookListProps[];
}

const AsideBooksBar: FC<AsideBooksBarProps> = (props) => {
  const { asideTitle, bookList } = props;
  return (
    <>
      <p className="text-2xl font-bold">{asideTitle}</p>
      <ul className="flex flex-col w-full gap-6 p-4 bg-white border rounded-xl">
        {bookList.map((book) => {
          return (
            <li
              key={book.id}
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
                {/* FIXME: 태그 & 장르 뿌려주기 */}
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

export default AsideBooksBar;
