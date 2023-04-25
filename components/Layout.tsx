import { PropsWithChildren, useEffect, useState } from "react";
import GNB from "./common/navi/GNB";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";

const Layout = (props: PropsWithChildren) => {
  const router = useRouter();
  const { children } = props;
  const { EPISODE } = Path;

  return (
    <>
      {router.pathname != EPISODE && <GNB />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
