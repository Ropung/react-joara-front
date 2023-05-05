import Path from "@/constants/path/routes";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import GenreName from "@/constants/genre";

const CategoryNavi = () => {
  const { GENRE } = Path;
  const router = useRouter();

  return (
    <div className="w-full h-16 flex flex-row justify-between items-center text-basic border-b border-gray-100">
      <ul className="flex flex-row gap-6 font-bold text-2xl justify-start">
        <li
          className="hover:text-main"
          onClick={() => {
            router.push({
              pathname: GENRE,
              query: { gid: GenreName.ACTION },
            });
          }}
        >
          액션
        </li>
        <li
          className="hover:text-main"
          onClick={() => {
            router.push({
              pathname: GENRE,
              query: { gid: GenreName.ROMANCE },
            });
          }}
        >
          로맨스
        </li>
        <li
          className="hover:text-main"
          onClick={() => {
            router.push({
              pathname: GENRE,
              query: { gid: GenreName.FANTASY },
            });
          }}
        >
          판타지
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
