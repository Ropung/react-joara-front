import Path from "@/constants/path/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import PreviewImg from "@/public/img/preview.jpg";
import { useState } from "react";
import { genreNumByName } from "@/constants/genre";
import NotFound from "@public/img/not.jpg";
import useGenreBooksDetailQuery from "@/hooks/query/genre/useGenreBooksDetailQuery";

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
        <ul className="flex flex-wrap flex-1 w-full justify-stretch">
          {bookList?.map((book) => (
            <li
              key={"books-" + book.id}
              className="w-[16.5%] cursor-pointer hover:scale-110 hover:bg-black/90 hover:rounded-xl overflow-hidden hover:text-white hover:font-bold duration-75 p-2"
              onClick={() => {
                router.push({
                  pathname: BOOK + "/" + book.id,
                });
              }}
            >
              <div className="flex flex-col items-center justify-start w-full">
                <Image
                  width={200}
                  height={300}
                  className="w-full"
                  src={book.coverUrl ? book.coverUrl : PreviewImg}
                  alt="북커버 이미지"
                />
                <p className="w-full px-1 pt-2 overflow-hidden drop-shadow-md whitespace-nowrap text-ellipsis">
                  {book.title}
                </p>
                <p className="w-full px-1 pb-2 text-sm drop-shadow-md text-main">
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
              width={500}
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
