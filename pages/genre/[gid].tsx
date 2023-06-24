import Path from "@/constants/path/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import PreviewImg from "@/public/img/preview.jpg";
import useGenreBooksDetailQuery from "@/hooks/query/useGenreBooksDetailQuery";
import { useState } from "react";
import { genreNumByName } from "@/constants/genre";

const GenrePage = () => {
  const { BOOK } = Path;
  const router = useRouter();
  const { gid } = router.query;

  const [pageNation, setPageNation] = useState<number>(0);

  const { data } = useGenreBooksDetailQuery(
    Number(gid),
    Number(20),
    Number(pageNation)
  );

  return (
    <div className="flex flex-col gap-8 px-16 py-8">
      <p className="text-3xl font-bold">{genreNumByName[Number(gid)]}</p>
      <div className="flex flex-col gap-12">
        {/* Genre List */}
        <ul className="flex flex-wrap w-full overflow-hidden">
          {data?.bookList?.map((book) => (
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
      </div>
    </div>
  );
};

export default GenrePage;
