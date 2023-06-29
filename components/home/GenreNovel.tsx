import React, { FC, useEffect } from "react";
import Image from "next/image";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";
import PreviewImg from "@/public/img/preview.jpg";
import { genreNumByName } from "@/constants/genre";
import { PreviewGenreBooksRes } from "@/models/books/book";

interface GenreNovelProps {
  genreId: number;
  books: PreviewGenreBooksRes | undefined;
}

const GenreNovel: FC<GenreNovelProps> = (Props) => {
  const { GENRE_MORE, BOOK_ONE, BOOK } = Path;
  const router = useRouter();
  const { books, genreId } = Props;

  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col w-full gap-2">
        {/* 카테고리별나누기 map 함수로 */}
        <li className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-2xl font-bold">{genreNumByName[genreId]}</p>
            <div className="flex flex-row justify-end gap-2 text-4xl">
              <div
                className="text-sm cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: GENRE_MORE + books?.genreId,
                  });
                }}
              >
                더보기
              </div>
            </div>
          </div>
          {/* Novel List */}
          <ul className="flex flex-row w-full overflow-hidden">
            {books?.bookList?.map((book, index) => (
              <li
                key={"bookGenreMain" + index}
                className="flex flex-col items-center justify-start w-1/5 p-4 cursor-pointer"
                onClick={() => {
                  router.push({
                    pathname: BOOK + "/" + book.id,
                  });
                }}
              >
                <div className="flex flex-col w-full">
                  <Image
                    width={200}
                    height={300}
                    src={book.coverUrl ? book.coverUrl : PreviewImg}
                    alt="북커버 이미지"
                  />
                  <p className="w-full overflow-hidden drop-shadow-md whitespace-nowrap text-ellipsis">
                    {book.title}
                  </p>
                  <p className="w-full text-sm drop-shadow-md text-default">
                    {/* overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap; */}
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

export default GenreNovel;
