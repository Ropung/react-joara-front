import { bannerList as teamList } from "@/data/dummy";
import React from "react";
import Image from "next/image";

const EventBanner = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white border rounded-md ">
      <h1 className="text-2xl font-bold text-center">
        ses 교육과정 2조 화이팅
      </h1>
      <ul className="flex flex-row items-center justify-center">
        {teamList.map((item) => (
          <div
            key={`banner-${item.bannerId}`}
            className="flex flex-col w-full gap-2 px-4 "
          >
            <Image width={120} height={10} src={item.url} alt={item.alt} />
            <p>{item.name}</p>
            <p>{item.job}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default EventBanner;
