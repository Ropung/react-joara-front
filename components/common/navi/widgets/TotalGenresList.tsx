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
import { RxHamburgerMenu } from "react-icons/rx";
import { mainFantasyBooksDummy } from "@/data/dummy";

interface Props {
  children?: ReactNode;
  className?: string;
  href?: string;
}
export type Ref = HTMLAnchorElement;

export const TotalGenresList = forwardRef<Ref, Props>(function TotalGenresList(
  { className, children, ...props },
  forwardedRef
) {
  const { LOGIN } = Path;
  const router = useRouter();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <div className="flex flex-row gap-2 hover:text-main">
            <RxHamburgerMenu className="text-2xl " />
            <p>전체 카테고리</p>
          </div>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={30}>
          <div className="mr-4 flex min-w-[95vw] min-h-[40vw] divide-y-2 select-none flex-col items-start justify-start rounded-xl bg-white py-4 border-2">
            <p
              className="w-full px-6 text-xl font-bold text-left"
              style={{ marginBottom: 10 }}
            >
              장르별
            </p>
            <ul className="flex flex-wrap w-full gap-4 p-6">
              {mainFantasyBooksDummy.bookList?.map((genre, index) => {
                return (
                  <li key={index}>
                    <Link href={Path.WRITER_ROOM} className={`w-full `}>
                      <p className="px-4 py-2 border-2 rounded-full hover:text-main">
                        {genre.title}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
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
