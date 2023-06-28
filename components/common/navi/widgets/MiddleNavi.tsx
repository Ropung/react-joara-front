import Link from "next/link";
import Image from "next/image";
import MainLogo from "@/public/logo/mainlogo.png";

import { UserInfoList } from "./UserInfoList";
import { NotificationDashboardList } from "./NotificationDashboardList";
import { SearchView } from "./SearchView";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";

interface MiddleNaviProps {
  hasToken: boolean;
  setHasToken: Dispatch<SetStateAction<boolean>>;
}

const MiddleNavi: FC<MiddleNaviProps> = (props) => {
  const { hasToken, setHasToken } = props;
  const { LOGIN } = Path;

  const router = useRouter();

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
          {hasToken ? (
            <UserInfoList className="overflow-hidden rounded-full" />
          ) : (
            <AiOutlineUser
              className="cursor-pointer hover:text-icon-active"
              onClick={() => {
                router.push({ pathname: LOGIN });
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default MiddleNavi;
