// import { useRouter } from "next/router";

import { useState } from "react";
import CategoryNavi from "./widgets/CategoryNavi";
import MiddleNavi from "./widgets/MiddleNavi";
import TopNavi from "./widgets/TopNavi";

const GNB = () => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [isAuthor, setAuthor] = useState<boolean>(false);

  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center px-8 shadow-t-sm">
        <TopNavi isAuth={isAuth} setAuth={setAuth} />
        <p className="w-screen border-b border-gray-100" />
        <MiddleNavi isAuth={isAuth} setAuth={setAuth} />
        <CategoryNavi />
      </div>
    </div>
  );
};

export default GNB;
