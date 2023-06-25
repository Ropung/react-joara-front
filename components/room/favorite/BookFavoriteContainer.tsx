import React from "react";
import { useRouter } from "next/router";
import BookFavoriteList from "./BookFavoriteList";
import BookStatusList from "../widgets/BookStatusList";

const BookFavoriteContainer = () => {
  const router = useRouter();
  return (
    <>
      {/* 내 작품관리 */}
      <section className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">내 선호작</h1>
        <div className="flex flex-row items-center justify-between">
          <BookStatusList />
        </div>
      </section>
      {/* 작품 목록 */}
      <section className="flex flex-col w-full gap-4">
        <BookFavoriteList />
      </section>
    </>
  );
};

export default BookFavoriteContainer;
