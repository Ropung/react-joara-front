import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import { AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";
import { MemberFavorBookProps } from "@/models/books/book";

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
      {/* {memberFavorBookList?.map((favorBook) => {
        return ( */}
      <li
        // key={`favor-book-${favorBook.id}`}
        className="flex flex-row items-center justify-start gap-4 p-4 border rounded-md shadow-md border-default hover:border-main"
        onClick={() => {
          router.push({
            // pathname: BOOK + "/" + favorBook.bookId ?? -1,
            pathname: BOOK + "/" + 1,
          });
        }}
      >
        <Image
          width={100}
          height={50}
          src={PreviewImg}
          // src={book.coverUrl ?? }
          alt="소설더미이미지"
        />
        <section className="flex flex-col items-start justify-between flex-1 gap-2">
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <p className="flex flex-row items-center gap-2 font-bold">
                <span className="text-xl ">{"소설제목"}</span>
                <span className="text-main">{"작가이름"}</span>
              </p>
              <p className="flex flex-row gap-1 text-default">
                <span>{"조회수"}</span>
                <span>{"좋아효"}</span>
                <span>{"장르"}</span>
                <span>{"일자"}</span>
              </p>
            </div>
            <AiOutlineSetting className="text-3xl text-default hover:text-main" />
          </div>

          <ul className="flex flex-row items-center justify-start gap-2">
            <li className="px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra">
              {"태그"}
            </li>
          </ul>
        </section>
      </li>
      {/* );
      })} */}
    </ul>
  );
};

export default BookFavoriteList;
