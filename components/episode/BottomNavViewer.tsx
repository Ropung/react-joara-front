import Path from "@/constants/path/routes";
import { SomeIdUnion } from "@/models/type";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineComment,
  AiOutlineLike,
} from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { VscListUnordered } from "react-icons/vsc";

interface BottomNavViewerProps {
  episodeSize: number;
}

const BottomNavViewer: FC<BottomNavViewerProps> = ({ episodeSize }) => {
  const { BOOK, EPISODE, BOOK_ONE } = Path;
  const router = useRouter();
  const routerQuery = router.query as { [key in SomeIdUnion]: string };

  return (
    <nav className="w-screen fixed bottom-0 right-0 left-0 z-[100] h-20 bg-main bg-opacity-80 select-none px-8 border-b shadow-md">
      <div className="grid items-center w-full h-full grid-cols-3 px-8">
        <div className="w-full col-span-1">
          <div className="flex items-center justify-start w-full gap-2 text-5xl">
            <AiOutlineLike className="cursor-pointer" />
            <BsBookmarkStar className="cursor-pointer" />
            <AiOutlineComment className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full col-span-1">
          {episodeSize === 1 ? (
            <div className="flex items-center justify-center w-full gap-4">
              <Link
                href={`${BOOK}/${routerQuery.bid}`}
                className="px-4 py-2 text-lg font-bold cursor-pointer bg-main rounded-xl hover:scale-110 hover:animate-bounce"
              >
                목록으로
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full gap-4 tran">
              <AiFillLeftCircle
                className="text-4xl cursor-pointer hover:scale-125 hover:animate-spin"
                onClick={() => {
                  1 < Number(routerQuery.eid)
                    ? router.push({
                        pathname: `${BOOK}/${Number(
                          routerQuery.bid
                        )}/${EPISODE}/${Number(routerQuery.eid) - 1}`,
                      })
                    : alert("첫화 입니다.");
                }}
              />
              <Link
                href={`${BOOK}/${routerQuery.bid}`}
                className="px-4 py-2 text-lg font-bold cursor-pointer bg-main rounded-xl hover:scale-110 hover:animate-bounce"
              >
                목록으로
              </Link>
              <AiFillRightCircle
                className="text-4xl cursor-pointer hover:scale-125 hover:animate-spin"
                onClick={() => {
                  episodeSize > Number(routerQuery.eid)
                    ? router.push({
                        pathname: `${BOOK}/${Number(
                          routerQuery.bid
                        )}/${EPISODE}/${Number(routerQuery.eid) + 1}`,
                      })
                    : alert("마지막화 입니다.");
                }}
              />
            </div>
          )}
        </div>
        <div className="w-full col-span-1">
          <div className="flex items-center justify-end w-full">
            <VscListUnordered className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavViewer;
