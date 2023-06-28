import { ReactNode, forwardRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import Path from "@/constants/path/routes";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import useMemberQuery from "@/hooks/query/member/useMemberQuery";
import { IoNotificationsOutline } from "react-icons/io5";

interface Props {
  children?: ReactNode;
  className?: string;
  href?: string;
}
export type Ref = HTMLAnchorElement;

export const NotificationDashboardList = forwardRef<Ref, Props>(
  function UserInfoList({ className, children, ...props }, forwardedRef) {
    const { LOGIN } = Path;
    const router = useRouter();

    // TODO 알람으로 변경해야됨
    const { data: { profile } = {} } = useMemberQuery();

    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="IconButton" aria-label="Update dimensions">
            <IoNotificationsOutline
              className="cursor-pointer hover:text-icon-active"
              aria-label="Update dimensions"
            />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="PopoverContent" sideOffset={10}>
            <section className="mr-4 flex min-w-[35vw] divide-y-[1px] select-none flex-col rounded-xl bg-white border-2 border-main/50">
              <div className="px-4 py-2 font-bold">알람정보</div>
              <ul className="flex flex-col w-full gap-2">
                <li className="flex flex-row items-center justify-between p-4 hover:bg-main/30">
                  <p className="text-sm hover:text-main">
                    <span className="font-bold">
                      {profile?.nickname ?? "유저"}
                    </span>
                    <span>님의 신작이 등록되었습니다.</span>
                  </p>
                  <GiCancel className="hover:text-main" />
                </li>
              </ul>
              <p className="w-full border-b border-white"></p>
            </section>
            <Popover.Close className="PopoverClose" aria-label="Close">
              {/* <Cross2Icon /> */}
            </Popover.Close>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);
