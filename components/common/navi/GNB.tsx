import Path from "@/constants/path/routes";
import CategoryNavi from "./widgets/CategoryNavi";
import MiddleNavi from "./widgets/MiddleNavi";
import TopNavi from "./widgets/TopNavi";
import { useRouter } from "next/router";

const GNB = () => {
  const router = useRouter();
  const { LOGIN, SIGN_UP } = Path;

  return (
    <div className="w-full flex flex-col justify-center items-center px-8 jm:px-2 shadow-t-sm bg-white">
      <TopNavi />
      <p className="w-screen border-b border-gray-100" />
      <MiddleNavi />
      {router.pathname != LOGIN && router.pathname != SIGN_UP && (
        <CategoryNavi />
      )}
    </div>
  );
};

export default GNB;
