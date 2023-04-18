import { bannerList } from "@/data/dummy";
import React from "react";
import Image from "next/image";
import event from "@/public/logo/event.gif";
const EventBanner = () => {
  return (
    <div className="flex flex-row gap-2 py-4">
      {bannerList.map((item) => (
        <div key={`banner-${item.bannerId}`} className="w-full flex gap-2 px-4">
          <Image width={160} height={120} src={event} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};

export default EventBanner;
