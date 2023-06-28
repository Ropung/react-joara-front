import Path from "@/constants/path/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import PreviewImg from "@/public/img/preview.jpg";
import useGenreBooksDetailQuery from "@/hooks/query/genre/useGenreBooksDetailQuery";
import { useState } from "react";
import { genreNumByName } from "@/constants/genre";
import NotFound from "@public/img/not.jpg";

const GenreOnePage = () => {
  const { BOOK } = Path;
  const router = useRouter();
  const { gid } = router.query;

  const [pageNation, setPageNation] = useState<number>(0);

  const { data: { bookList } = {} } = useGenreBooksDetailQuery(
    Number(gid),
    Number(20),
    Number(pageNation)
  );
  const dummyList: number[] = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <p className="text-3xl font-bold">{genreNumByName[Number(gid)]}</p>
      <div className="flex flex-col gap-12">
        {/* Genre List */}
        <ul className="flex flex-wrap w-full overflow-hidden">
          {bookList?.map((book) => (
            <li
              key={"books-" + book.id}
              className="w-1/5 p-2 cursor-pointer"
              onClick={() => {
                router.push({
                  pathname: BOOK + "/" + book.id,
                });
              }}
            >
              <div className="relative flex flex-col w-full">
                <Image
                  sizes="w-full"
                  width={40}
                  height={50}
                  className="relative w-full"
                  src={book.coverUrl ? book.coverUrl : PreviewImg}
                  alt="북커버 이미지"
                />
                <p className="w-full drop-shadow-md">{book.title}</p>
                <p className="w-full text-sm drop-shadow-md text-default">
                  {book.nickname}
                </p>
              </div>
            </li>
          ))}
        </ul>
        {bookList ? (
          <div className="flex flex-row justify-center w-full gap-4">
            {dummyList.map((page) => {
              return (
                <button
                  key={"page-" + page}
                  className="flex items-center justify-center w-8 h-8 p-4 text-lg bg-white border rounded-md text-main hover:bg-main hover:text-main-contra"
                  onClick={() => {
                    //
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>
        ) : (
          <section className="flex flex-col items-center w-full gap-2">
            <h1 className="text-6xl">등록된 작품이 없지롱</h1>
            <Image
              width={400}
              height={200}
              src={NotFound}
              alt="작품이 존재하지 않습니다"
            />
          </section>
        )}
        {/* 페이지 네이션 */}
      </div>
    </div>
  );
};

export default GenreOnePage;
