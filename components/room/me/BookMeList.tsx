import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import BookStatusList from "../widgets/BookStatusList";
import { AiOutlineSetting } from "react-icons/ai";
import PreviewImg from "@/public/img/preview.jpg";

const BookMeList = () => {
  const router = useRouter();
  const { BOOK } = Path;
  return (
    <ul className="flex flex-col gap-4">
      <li
        className="flex flex-row items-center justify-start gap-4 p-4 border rounded-md shadow-md border-default hover:border-main"
        onClick={() => {
          router.push({
            pathname: BOOK,
            query: { bid: 1 },
          });
        }}
      >
        <Image
          width={150}
          height={200}
          className="w-[15%]"
          src={PreviewImg}
          // src={book.coverUrl ?? }
          alt="소설더미이미지"
        />
        <section className="flex flex-col items-start justify-between flex-1 gap-2">
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-start justify-start">
              <p className="flex flex-row items-center gap-2 font-bold">
                <span className="text-xl ">{"소설제목"}</span>
                <span className="text-main">{"작가이름"}</span>
              </p>
              <p className="flex flex-row gap-1 text-default">
                <span>{"조회수"}</span>
                <span>{"좋아효"}</span>
                <span>{"장르"}</span>
                <span>{"일자"}</span>
              </p>
            </div>
            <AiOutlineSetting className="text-3xl text-default hover:text-main" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              tempora illo consectetur delectus maiores molestiae doloremque
              non, placeat corporis nobis sunt praesentium
            </p>
          </div>
          <ul className="flex flex-row items-center justify-start gap-2">
            <li className="px-4 py-1 text-sm border rounded-md hover:bg-main hover:text-main-contra">
              {"태그"}
            </li>
          </ul>
        </section>
      </li>
    </ul>
  );
};

export default BookMeList;
