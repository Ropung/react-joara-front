import Path from "@/constants/path/routes";
import { useRouter } from "next/router";

const WriterRoom = () => {
  const router = useRouter();
  const { WRITER_ROOM, WRITER_PUBLISHING } = Path;

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80vw] h-full min-h-screen flex flex-col gap-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-1 font-bold text-xl">내 작품</h1>
          <button
            onClick={() => {
              router.push(WRITER_PUBLISHING);
            }}
          >
            새작품 등록하기
          </button>
        </div>
        <section className="grid grid-cols-3 justify-center items-center gap-16">
          <div className="col-span-1 justify-end border border-gray-400 rounded-md shadow-md p-4 cursor-pointer">
            <p className="w-full flex justify-center">연재중인 작품</p>
            <span className="w-full flex justify-center text-main text-3xl">
              {`-1`}
            </span>
          </div>
          <div className="col-span-1 justify-end border border-gray-400 rounded-md shadow-md p-4 cursor-pointer">
            <p className="w-full flex justify-center">완결한 작품</p>
            <span className="w-full flex justify-center text-main text-3xl">
              {`-1`}
            </span>
          </div>
          <div className="col-span-1 justify-end border border-gray-400 rounded-md shadow-md p-4 cursor-pointer">
            <p className="w-full flex justify-center">총 작품</p>
            <span className="w-full flex justify-center text-main text-3xl">
              {`-1`}
            </span>
          </div>
        </section>
        <div className="flex flex-row justify-between items-center">
          <h1 className="flex-1 font-bold text-lg">작품 설정</h1>
        </div>
        <section className="flex flex-col gap-4">
          <li
            className="flex flex-row items-center justify-between border border-gray-400 shadow-md rounded-md px-4 py-2"
            onClick={() => {
              router.push(WRITER_ROOM);
            }}
          ></li>
        </section>
      </div>
    </div>
  );
};

export default WriterRoom;
