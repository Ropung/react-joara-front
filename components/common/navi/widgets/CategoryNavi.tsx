import React from "react";
import Link from "next/link";
import Path from "@/constants/path/routes";
import { RxHamburgerMenu } from "react-icons/rx";

const CategoryNavi = () => {
  const { HOME } = Path;

  return (
    <div className="w-full h-16 flex flex-row justify-between items-center text-basic border-b border-gray-100">
      <ul className="flex flex-row gap-6 font-bold text-2xl justify-start">
        <li className="hover:text-main">
          <Link href={HOME}>액션</Link>
        </li>
        <li className="hover:text-main">
          <Link href={HOME}>로맨스</Link>
        </li>
        <li className="hover:text-main">
          <Link href={HOME}>판타지</Link>
        </li>
      </ul>
      <div className="flex flex-row gap-2 hover:text-main">
        <RxHamburgerMenu className="text-2xl " />
        <p>전체 카테고리</p>
      </div>
    </div>
  );
};

export default CategoryNavi;
