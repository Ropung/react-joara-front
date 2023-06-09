import { ReactNode, forwardRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import Path from "@/constants/path/routes";
import {
  AiOutlineFolderAdd,
  AiOutlineNotification,
  AiOutlineUser,
} from "react-icons/ai";
import token from "@/utils/token";
import { useRouter } from "next/router";
import { BiLogOut } from "react-icons/bi";
import { BsBookmarkStar } from "react-icons/bs";
import { LuFolderCog } from "react-icons/lu";
import { RiFolderUserLine } from "react-icons/ri";
import useMemberQuery from "@/hooks/query/member/useMemberQuery";

interface Props {
  children?: ReactNode;
  className?: string;
  href?: string;
}
export type Ref = HTMLAnchorElement;

export const UserInfoList = forwardRef<Ref, Props>(function UserInfoList(
  { className, children, ...props },
  forwardedRef
) {
  const { LOGIN, BOOK_FAVORITE } = Path;
  const router = useRouter();

  const { data: { profile } = {} } = useMemberQuery();
  const PopStyle =
    "flex flex-row items-center justify-start py-1 w-full gap-2 cursor-pointer hover:text-main";

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <AiOutlineUser
            className="cursor-pointer hover:text-icon-active"
            aria-label="Update dimensions"
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={10}>
          <div className="mr-4 flex min-w-[20vw] divide-y-2 select-none flex-col items-start justify-center rounded-xl bg-white py-4 border-2 border-main/50">
            <p className="px-8 font-bold" style={{ marginBottom: 10 }}>
              {profile?.nickname ?? "Account"}
              <span className="font-normal">님 안녕하세요.</span>
            </p>
            <div className="flex flex-col w-full gap-2 py-2 pl-6">
              <Link href={Path.BOOK_FAVORITE} className={`w-full ${PopStyle}`}>
                <BsBookmarkStar />
                <p>선호작</p>
              </Link>
              <Link href={Path.BOOK_ME} className={`w-full ${PopStyle}`}>
                <LuFolderCog />
                <p>작품관리</p>
              </Link>
              <Link href={Path.BOOK_PUBLISH} className={`w-full ${PopStyle}`}>
                <AiOutlineFolderAdd />
                <p>작품등록</p>
              </Link>
              {/* <Link href={Path.BOOK_ME} className={`w-full ${PopStyle}`}>
                <AiOutlineNotification />
                <p>리뷰/홍보</p>
              </Link> */}
              {/* <Link href={Path.BOOK_ME} className={`w-full ${PopStyle}`}>
                <RiFolderUserLine />
                <p>마이페이지</p>
              </Link> */}
            </div>
            <p className="w-full border-b border-white"></p>
            <div
              className="flex flex-row items-center justify-start w-full gap-4 pt-2 pl-6 cursor-pointer text-danger text-default-red hover:font-bold"
              onClick={() => {
                token.remove();
                router.push(LOGIN);
              }}
            >
              <BiLogOut />
              <p>Logout</p>
            </div>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            {/* <Cross2Icon /> */}
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
});
