import Link from "next/link";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";
import { useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import MainLogo from "@/public/logo/mainlogo.png"; //FIXME 임시용
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import { UserInfoList } from "./UserInfoList";

const MiddleNavi = () => {
  const searchFormRef = useRef<HTMLInputElement>(null);
  const { LOGIN, HOME } = Path;
  // const [isAuthed, setAuthed] = useState<boolean>(!!token.getToken("token"));
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
          <IoNotificationsOutline className="cursor-pointer hover:text-icon-active" />
          <BiSearchAlt className="cursor-pointer hover:text-icon-active" />
          <UserInfoList className="overflow-hidden rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default MiddleNavi;
