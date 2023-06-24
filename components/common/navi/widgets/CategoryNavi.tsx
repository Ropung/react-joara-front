import Path from "@/constants/path/routes";
import { useRouter } from "next/router";
import GenreType from "@/constants/genre";
import { TotalGenresList } from "./TotalGenresList";
import useGenresQuery from "@/hooks/query/useGenresQuery";
import { GenreProps } from "@/models/book";

const CategoryNavi = () => {
  const { GENRE } = Path;
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-between w-full h-16 border-b border-gray-100 text-basic">
      <ul className="flex flex-row justify-start gap-6 text-2xl font-bold">
        <li
          className="hover:text-main"
          onClick={() => {
            router.push({
              pathname: GENRE,
              query: { gid: GenreType.ACTION },
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
              query: { gid: GenreType.FANTASY },
            });
          }}
        >
          판타지
        </li>
        <li
          className="hover:text-main"
          onClick={() => {
            router.push({
              pathname: GENRE,
              query: { gid: GenreType.ROMANCE },
            });
          }}
        >
          로맨스
        </li>
      </ul>
      <TotalGenresList className="overflow-hidden" />
    </div>
  );
};

export default CategoryNavi;
