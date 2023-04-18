import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import NovelState from "./NovelState";
import { AiOutlineSetting } from "react-icons/ai";

const NovelBooks = () => {
  const router = useRouter();
  const { BOOK } = Path;
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <h1 className="flex-1 font-bold text-xl">작품 목록</h1>
        <NovelState />
      </div>
      <ul className="flex flex-col gap-4">
        <li
          className="flex flex-row items-center justify-start border border-gray-400 shadow-md rounded-md p-4 hover:border-main gap-4"
          onClick={() => {
            router.push({
              pathname: BOOK,
              query: { bid: 1 },
            });
          }}
        >
          <Image
            width={150}
            height={200}
            className="w-[15%]"
            src="http://image.yes24.com/goods/106211628/XL"
            alt="소설더미이미지"
          />
          <section className="flex flex-1 flex-col gap-2 justify-between items-start">
            <div className="w-full flex justify-between">
              <div className="flex flex-col items-start justify-start">
                <p className="flex flex-row gap-2 items-center font-bold">
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
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempora illo consectetur delectus maiores molestiae
                doloremque non, placeat corporis nobis sunt praesentium
              </p>
            </div>
            <ul className="flex flex-row gap-2 items-center justify-start">
              <li className="text-sm py-1 px-4 hover:bg-main hover:text-main-contra rounded-md border">
                {"태그"}
              </li>
            </ul>
          </section>
        </li>
      </ul>
    </>
  );
};

export default NovelBooks;
