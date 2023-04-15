import { novelList } from "@/data/dummy";
import React from "react";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import Image from "next/image";

const HomeThemeNovel = () => {
  return (
    <div className="flex flex-col gap-12">
      <ul className="w-full flex flex-col gap-2">
        {/* 카테고리별나누기 map 함수로 */}
        <li className="flex flex-col gap-4">
          {/* Title */}
          <div className="w-full flex flex-row justify-between items-center">
            <p className="text-2xl font-bold">오늘의 인기작</p>
            <div className="flex flex-row gap-2 justify-end text-4xl">
              <BsArrowLeftSquareFill className="cursor-pointer" />
              <BsArrowLeftSquareFill className=" cursor-pointer rotate-180" />
            </div>
          </div>
          {/* Novel List */}
          <ul className="w-full flex flex-row gap-2 overflow-hidden">
            {novelList.map((item) => (
              <li key={item.novelId} className="w-[20%]">
                <div className="flex flex-col gap-4">
                  <Image
                    width={200}
                    height={100}
                    className="px-2"
                    src="http://image.yes24.com/goods/106211628/XL"
                    alt="소설더미이미지"
                  />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HomeThemeNovel;
