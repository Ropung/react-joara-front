import React from "react";
import BookFavoriteList from "./BookFavoriteList";
import BookStatusList from "../widgets/BookStatusList";
import useBookOfFavorListQuery from "@/hooks/query/book/useBookOfFavorListQuery";

const BookFavoriteContainer = () => {
  const { data: { memberFavorBookList, lastPage } = {} } =
    useBookOfFavorListQuery();
  // console.log(memberFavorBookList);

  return (
    <>
      {/* 내 작품관리 */}
      <section className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">내 선호작</h1>
        <div className="flex flex-row items-center justify-between">
          <BookStatusList allCount={memberFavorBookList?.length} />
        </div>
      </section>

      {/* 작품 목록 */}
      <section className="flex flex-col w-full gap-4">
        <BookFavoriteList memberFavorBookList={memberFavorBookList} />
      </section>
    </>
  );
};

export default BookFavoriteContainer;
