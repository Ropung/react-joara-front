import {
  AiFillLeftCircle,
  AiOutlineComment,
  AiOutlineLike,
} from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { VscListUnordered } from "react-icons/vsc";

const BottomNavViewer = () => {
  return (
    <nav className="w-screen fixed bottom-0 right-0 left-0 z-[100] h-20 bg-main bg-opacity-80 select-none px-8 border-b shadow-md">
      <div className="w-full h-full grid grid-cols-3 px-8 items-center">
        <div className="w-full col-span-1">
          <div className="w-full flex gap-2 justify-start items-center text-5xl">
            <AiOutlineLike className="cursor-pointer" />
            <BsBookmarkStar className="cursor-pointer" />
            <AiOutlineComment className="cursor-pointer" />
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="w-full flex justify-center items-center gap-4 text-5xl">
            <AiFillLeftCircle />
            <AiFillLeftCircle className="rotate-180" />
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="w-full flex justify-end items-center">
            <VscListUnordered className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavViewer;
