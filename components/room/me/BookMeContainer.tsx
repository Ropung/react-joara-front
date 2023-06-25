import React from "react";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import BookMeList from "./BookMeList";
import BookStatusList from "../widgets/BookStatusList";

const BookMeContainer = () => {
  const router = useRouter();
  const { BOOK_PUBLISH: BOOK_PUBLISHING } = Path;
  return (
    <>
      {/* 내 작품관리 */}
      <section className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold">내 작품관리</h1>
        <button
          className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
          onClick={() => {
            router.push(BOOK_PUBLISHING);
          }}
        >
          작품 등록하기
        </button>
      </section>
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex-1 text-xl font-bold">작품 목록</h1>
        <BookStatusList />
      </div>
      {/* 작품 목록 */}
      <section className="flex flex-col w-full gap-4">
        <BookMeList />
      </section>
    </>
  );
};

export default BookMeContainer;
