import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronLeft } from "react-icons/hi";
const TopNavViewer = () => {
  return (
    <nav className="w-screen fixed top-0 right-0 left-0 z-[100] h-20 bg-main bg-opacity-80 select-none px-8 border-b shadow-md">
      <div className="w-full h-full grid grid-cols-3 px-8 items-center">
        <div className="w-full col-span-1">
          <div className="w-full flex gap-2 justify-start items-center text-5xl">
            <HiChevronLeft
              className="text-5xl cursor-pointer"
              onClick={() => {
                history.back();
              }}
            />
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="flex flex-col items-center gap-1">
            <p className="text-gray-600 text-lg">안녕하세요나는 제목</p>
            <p className="text-dark text-xl">안녕하세요나는 부제목 입니다.</p>
          </div>
        </div>
        <div className="w-full col-span-1">
          <div className="w-full flex justify-end items-center">
            <AiOutlineSetting className="text-4xl cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavViewer;
