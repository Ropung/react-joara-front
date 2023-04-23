import useAutoSizeTextArea from "@/utils/common/textresize";
import React, { useRef, useState } from "react";

const BookEpisodeUpdate = () => {
  // text resize
  const epiContentRef = useRef<HTMLTextAreaElement | null>(null);
  const [epiContentValue, setEpiContentValue] = useState<string>("");
  useAutoSizeTextArea(epiContentRef.current, epiContentValue);
  const contentHandleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;
    setEpiContentValue(val);
  };

  return (
    <div className="w-full flex items-center justify-center p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        <section className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl">에피소드 수정</h1>
          <button
            className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra hover:bg-main"
            onClick={() => {
              // FIXME router.push();
            }}
          >
            에피소드 수정하기
          </button>
        </section>
        <section className="w-full flex flex-col gap-4">
          <div
            className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            <p className="font-bold px-4">제목</p>
            <input
              type="text"
              className="flex flex-1 border border-gray-400 rounded-lg py-2 px-4"
              placeholder="30자 이하로 작성 가능합니다."
              maxLength={30}
            />
          </div>
          <div
            className={`w-full h-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            {/* 작품소개 textarea */}
            <textarea
              ref={epiContentRef}
              className="w-full min-h-[15vh] flex flex-1  px-4 py-2 outline-none resize-none placeholder:text-base"
              rows={1}
              placeholder="작품 줄거리를 입력하세요."
              value={epiContentValue}
              onChange={contentHandleChange}
            ></textarea>
          </div>
          <div
            className={`w-full h-full flex flex-col justify-center items-start border border-gray-400 rounded-md shadow-md p-4`}
          >
            <p className="font-bold text-xl">에피소드 후기</p>
            <textarea
              className="w-full min-h-[10vh] flex flex-1  px-4 py-2 outline-none resize-none placeholder:text-base"
              rows={1}
              placeholder="작품 줄거리를 입력하세요."
            ></textarea>
          </div>
        </section>
        <button
          className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra bg-main text-main-contra hover:bg-black"
          onClick={() => {
            // FIXME axios 적용
            // router.push();
          }}
        >
          에피소드 수정하기
        </button>
      </section>
    </div>
  );
};

export default BookEpisodeUpdate;
