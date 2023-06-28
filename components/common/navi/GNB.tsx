import Path from "@/constants/path/routes";
import CategoryNavi from "./widgets/CategoryNavi";
import MiddleNavi from "./widgets/MiddleNavi";
import TopNavi from "./widgets/TopNavi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import token from "@/utils/token";

const GNB = () => {
  const router = useRouter();
  const { LOGIN, SIGN_UP } = Path;

  const [hasToken, setHasToken] = useState<boolean>(false);

  const acToken = token.get();
  useEffect(() => {
    !!acToken ? setHasToken(true) : setHasToken(false);
  }, [acToken]);

  return (
    <div className="flex flex-col items-center justify-center w-full px-8 bg-white jm:px-2 shadow-t-sm">
      <TopNavi />
      <p className="w-screen border-b border-gray-100" />
      <MiddleNavi hasToken={hasToken} setHasToken={setHasToken} />
      {router.pathname != LOGIN && router.pathname != SIGN_UP && (
        <CategoryNavi />
      )}
    </div>
  );
};

export default GNB;
