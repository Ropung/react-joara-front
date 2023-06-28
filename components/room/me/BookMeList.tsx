import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import { AiOutlineLike, AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";
import { HiUserGroup } from "react-icons/hi";
import { BsBookmarkStar } from "react-icons/bs";
import { BookDetailedViewReadModelProps } from "@/models/books/book";

interface BookMeListProps {
  bookList: BookDetailedViewReadModelProps[] | undefined;
}

const BookMeList: FC<BookMeListProps> = ({ bookList }) => {
  const router = useRouter();
  const { BOOK } = Path;
  return (
    <ul className="flex flex-col gap-4">
      {bookList?.map((book) => {
        return (
          <li
            key={`myBook-${book}`}
            className="flex flex-row items-center justify-start gap-4 p-4 border rounded-md shadow-md border-default hover:border-main"
            onClick={() => {
              router.push({
                pathname: `${BOOK}/${book.id}`,
              });
            }}
          >
            <Image
              width={150}
              height={200}
              className="w-[15%]"
              src={book.coverUrl ? book.coverUrl : PreviewImg}
              alt={`{${book.title ?? "Not book title"}+이미지}`}
            />

            <section className="flex flex-col items-start justify-between flex-1 gap-2">
              <div className="flex justify-between w-full">
                <div className="flex flex-col items-start justify-start">
                  <p className="flex flex-row items-center gap-4 font-bold">
                    <span className="text-xl ">
                      {book.title ?? "Not BookTitle"}
                    </span>
                    <span className="text-main">
                      {book.nickname ?? "Not nickname"}
                    </span>
                    <span className="px-2 py-1 text-xs text-white bg-main rounded-xl">
                      {book.status ?? "Not Status"}
                    </span>
                  </p>
                  <div className="flex flex-row items-center justify-between w-full gap-4 text-default-contra">
                    <div className="flex flex-row gap-2">
                      <p>평점: {book.score ?? 0}</p>
                      <p>총회: {book.episodeSize ?? 0}</p>
                    </div>
                    <p className="flex flex-row items-center gap-1">
                      <AiOutlineLike />
                      <span>{book.totalHeartCount ?? -1}</span>
                    </p>
                    <p className="flex flex-row items-center gap-1">
                      <HiUserGroup className="" />

                      <span>{book.totalViewCount ?? -1}</span>
                    </p>
                    <p className="flex flex-row items-center gap-1">
                      <BsBookmarkStar />
                      <span>{book.favorCount ?? -1}</span>
                    </p>
                  </div>
                </div>
                <AiOutlineSetting className="text-3xl text-default hover:text-main" />
              </div>
              <div>
                <p>{book.description ?? "Not fount description "} </p>
              </div>
              <ul className="flex flex-row items-center justify-start gap-2">
                {book.genreNameList?.map((genre) => {
                  return (
                    <li
                      key={`my-genre-${genre}`}
                      className="px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra"
                    >
                      {genre ?? "Not genreName"}
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

export default BookMeList;
