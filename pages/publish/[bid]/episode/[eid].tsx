import Path from "@/constants/path/routes";
import { useEpisodeUpdateMutation } from "@/hooks/mutation/episode/useEpisodeUpdateMutation";
import useEpisodeOfOneQuery from "@/hooks/query/episode/useEpisodeOfOneQuery";
import { EpisodeUpdateReq } from "@/models/books/episode";
import { SomeIdUnion } from "@/models/type";
import useAutoSizeTextArea from "@/utils/common/textresize";
import { useRouter } from "next/router";
import React, { ChangeEvent, useRef, useState } from "react";
const BookEpisodeUpdate = () => {
  const router = useRouter();
  const { BOOK } = Path;

  const epiContentRef = useRef<HTMLTextAreaElement | null>(null);
  const [epiContentValue, setEpiContentValue] = useState<string>("");
  useAutoSizeTextArea(epiContentRef.current, epiContentValue);

  const {
    bid,
    eid: episodeNumber,
    epiNum,
  } = router.query as { [key in SomeIdUnion]: string };

  const { data: { epiTitle, content, quote } = {} } = useEpisodeOfOneQuery(
    Number(bid),
    Number(episodeNumber)
  );

  const [epiValue, setEpiValue] = useState<EpisodeUpdateReq>({});

  const { mutate: episodeUpdateMutation } = useEpisodeUpdateMutation();

  // FIXME 임시 router query 지워줘야함 =============================================
  const eid = router.asPath.split("=")[1];
  console.log(eid);

  const handleEpisodeValueChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;
    const id = evt.target?.id;

    setEpiValue((prevEpiValue: EpisodeUpdateReq) => ({
      ...prevEpiValue,
      [id]: val,
    }));
  };

  const handleSubmit = () => {
    if (!epiValue.content || !epiValue.quote || !epiValue.epiTitle) return;
    episodeUpdateMutation(
      { bid: Number(bid), eid, epiValue },
      {
        onSuccess: () => {
          router.push(`${BOOK}/${bid}`);
        },
        onError: (e) => {
          alert(e);
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center w-full p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        <section className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">에피소드 수정</h1>
          <button
            className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
            onClick={handleSubmit}
          >
            에피소드 수정하기
          </button>
        </section>
        <section className="flex flex-col w-full gap-4">
          <div
            className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            <p className="px-4 font-bold">제목</p>
            <input
              id="epiTitle"
              defaultValue={epiTitle}
              type="text"
              className="flex flex-1 px-4 py-2 border border-gray-400 rounded-lg"
              placeholder="200자 이하로 작성 가능합니다."
              maxLength={200}
              onChange={(e) => handleEpisodeValueChange(e)}
            />
          </div>
          <div
            className={`w-full h-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            {/* 작품소개 textarea */}
            <textarea
              id="content"
              defaultValue={content}
              ref={epiContentRef}
              className="w-full min-h-[15vh] flex flex-1  px-4 py-2 outline-none resize-none placeholder:text-base"
              rows={1}
              placeholder="작품 줄거리를 입력하세요."
              onChange={(e) => handleEpisodeValueChange(e)}
            ></textarea>
          </div>
          <div
            className={`w-full h-full flex flex-col justify-center items-start border border-gray-400 rounded-md shadow-md p-4`}
          >
            <p className="text-xl font-bold">에피소드 후기</p>
            <textarea
              id="quote"
              defaultValue={quote}
              className="w-full min-h-[10vh] flex flex-1  px-4 py-2 outline-none resize-none placeholder:text-base"
              rows={1}
              placeholder="작가의 한마디...."
              onChange={(e) => handleEpisodeValueChange(e)}
            ></textarea>
          </div>
        </section>
        <button
          className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra bg-main text-main-contra hover:bg-black"
          onClick={handleSubmit}
        >
          에피소드 수정하기
        </button>
      </section>
    </div>
  );
};

export default BookEpisodeUpdate;
