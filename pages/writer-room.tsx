import NovelBookcase from "@/components/writer-room/book-case/NovelBookcase";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";

const WriterRoom = () => {
  return (
    <div className="w-full flex items-center justify-center p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        <NovelBookcase />
      </section>
    </div>
  );
};

export default WriterRoom;
