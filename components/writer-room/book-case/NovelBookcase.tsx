import React from "react";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import NovelBooks from "./widgets/NovelBooks";

const NovelBookcase = () => {
  const router = useRouter();
  const { WRITER_PUBLISHING } = Path;
  return (
    <>
      {/* 작품등록 */}
      <section className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">내 작품관리</h1>
        <button
          className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra hover:bg-main"
          onClick={() => {
            router.push(WRITER_PUBLISHING);
          }}
        >
          작품 등록하기
        </button>
      </section>

      {/* 작품 목록 */}
      <section className="w-full flex flex-col gap-4">
        <NovelBooks />
      </section>
    </>
  );
};

export default NovelBookcase;
