import { PropsWithChildren, useEffect, useState } from "react";
import GNB from "./common/navi/GNB";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";

const Layout = (props: PropsWithChildren) => {
  const router = useRouter();
  const { children } = props;
  const { EPISODE_ONE } = Path;

  return (
    <div className="min-h-screen select-none min-w-screen bg-gray-50">
      {router.pathname != EPISODE_ONE && <GNB />}
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Layout;
