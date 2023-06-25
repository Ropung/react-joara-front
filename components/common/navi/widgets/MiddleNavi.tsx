import Link from "next/link";
import Image from "next/image";
import MainLogo from "@/public/logo/mainlogo.png";

import { UserInfoList } from "./UserInfoList";
import { NotificationDashboardList } from "./NotificationDashboardList";
import { SearchView } from "./SearchView";

const MiddleNavi = () => {
  return (
    <section className="flex flex-row items-center justify-between w-full h-16 overflow-hidden">
      <div className="flex flex-row items-center justify-center gap-6">
        <Link href={"/"}>
          <Image
            width={200}
            height={40}
            className="w-32 cursor-pointer"
            src={MainLogo}
            alt="메인로고"
          />
        </Link>
      </div>
      <div className="flex flex-row items-center justify-end gap-8">
        <div className="flex flex-row items-center justify-end gap-2 text-3xl text-icon">
          <SearchView className="overflow-hidden rounded-full" />
          <NotificationDashboardList className="overflow-hidden rounded-full" />
          <UserInfoList className="overflow-hidden rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default MiddleNavi;
