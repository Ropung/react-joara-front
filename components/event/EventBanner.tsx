import { bannerList } from "@/data/dummy";
import React from "react";

const EventBanner = () => {
  return (
    <div className="flex flex-row gap-2 py-4">
      {bannerList.map((item) => (
        <div key={`banner-${item.bannerId}`} className="w-full flex gap-2 px-4">
          <img className="" src={item.url} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default EventBanner;
