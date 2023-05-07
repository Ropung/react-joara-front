import { PropsWithChildren, useEffect, useState } from "react";
import GNB from "./common/navi/GNB";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";

const Layout = (props: PropsWithChildren) => {
  const router = useRouter();
  const { children } = props;
  const { EPISODE } = Path;

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 select-none">
      {router.pathname != EPISODE && <GNB />}
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
