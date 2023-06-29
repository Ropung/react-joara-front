import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import { AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";
import { MemberFavorBookProps } from "@/models/books/book";
import { genreNumByName } from "@/constants/genre";

interface BookFavoriteListProps {
  memberFavorBookList?: MemberFavorBookProps[];
}

const BookFavoriteList: FC<BookFavoriteListProps> = ({
  memberFavorBookList,
}) => {
  const router = useRouter();
  const { BOOK } = Path;
  return (
    <ul className="flex flex-col gap-4">
      {memberFavorBookList?.map((favorBook) => {
        return (
          <li
            key={`favor-book-${favorBook.id}`}
            className="flex flex-row items-center justify-start gap-4 p-4 border rounded-md shadow-md border-default hover:border-main"
            onClick={() => {
              router.push({
                pathname: BOOK + "/" + favorBook.bookId ?? -1,
              });
            }}
          >
            <Image
              className="max-w-[100px] max-h-[150px] min-w-[100px] min-h-[150px]"
              width={100}
              height={150}
              src={favorBook.coverUrl ? favorBook.coverUrl : PreviewImg}
              alt={`${favorBook.bookTitle} 이미지`}
            />
            <section className="flex flex-col items-start justify-between flex-1 gap-2">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start justify-start">
                  <p className="flex flex-row items-center gap-2 font-bold">
                    <span className="text-xl ">{favorBook.bookTitle}</span>
                    <span className="text-main">{favorBook.nickname}</span>
                  </p>
                  <p className="flex flex-row gap-1 text-default">
                    <span>{favorBook.createdAt}</span>
                  </p>
                </div>
              </div>

              <ul className="flex flex-row items-center justify-start gap-2">
                {favorBook.genreIdList.map((genreId) => {
                  return (
                    <li
                      key={`favorite-genre-${genreId}`}
                      className="px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra"
                    >
                      {genreNumByName[genreId]}
                    </li>
                  );
                })}
              </ul>
            </section>
          </li>
        );
      })}
    </ul>
  );
};

export default BookFavoriteList;
