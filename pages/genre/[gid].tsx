import Path from "@/constants/path/routes";
import { mainActionBooksDummy } from "@/data/dummy";
import Image from "next/image";
import { useRouter } from "next/router";
import PreviewImg from "@/public/img/preview.jpg";
import useGenreBooksPreviewQuery from "@/hooks/query/useBooksPreviewQuery";
import { Size } from "@/constants/genre";

const Genre = () => {
  const { BOOK } = Path;
  const router = useRouter();
  const { gid } = router.query;
  const { data } = useGenreBooksPreviewQuery(Number(gid), Size.TWENTY, 1);

  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <p className="text-3xl font-bold">{mainActionBooksDummy.genreKor}</p>
      <div className="flex flex-col gap-12">
        {/* Genre List */}
        <ul className="flex w-full gap-2 overflow-hidden">
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
                  src={PreviewImg}
                  // src={book.coverUrl ?? }
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
      </div>
    </div>
  );
};

export default Genre;
