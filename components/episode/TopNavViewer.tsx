import Path from "@/constants/path/routes";
import { SomeIdUnion } from "@/models/type";
import { useRouter } from "next/router";
import { FC } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";

interface TopNavViewerProps {
  bookTitle?: string;
  epiTitle?: string;
}
const TopNavViewer: FC<TopNavViewerProps> = ({ bookTitle, epiTitle }) => {
  const router = useRouter();
  const routerQuery = router.query as { [key in SomeIdUnion]: string };

  const { BOOK } = Path;

  return (
    <nav className="w-screen fixed top-0 right-0 left-0 z-[100] h-20 bg-main bg-opacity-80 select-none px-8 border-b shadow-md">
      <div className="grid items-center w-full h-full grid-cols-3 px-8">
        <div className="w-full col-span-1">
          <div className="flex items-center justify-start w-full gap-2 text-5xl">
            <HiChevronLeft
              className="text-5xl cursor-pointer"
              onClick={() => {
                router.push({ pathname: `${BOOK}/${routerQuery.bid}` });
              }}
            />
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="flex flex-col items-center gap-1">
            <p className="text-xl text-dark whitespace-nowrap">
              {bookTitle ?? "Not Found Title"}
            </p>
            <p className="text-xl text-dark/80">{`EP-${routerQuery.eid}. ${
              epiTitle ?? "Not Found Episode"
            } `}</p>
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="flex items-center justify-end w-full">
            <AiOutlineSetting className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavViewer;
