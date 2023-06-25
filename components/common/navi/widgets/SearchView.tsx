import { ReactNode, forwardRef, useRef, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import Path from "@/constants/path/routes";
import { useRouter } from "next/router";
import useMemberQuery from "@/hooks/query/useMemberQuery";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import MainLogo from "@/public/logo/mainlogo.png"; //FIXME 임시용
import { GrFormSearch } from "react-icons/gr";
import { FaChevronLeft } from "react-icons/fa";
import useGenresQuery from "@/hooks/query/useGenresQuery";

interface Props {
  children?: ReactNode;
  className?: string;
  href?: string;
}
export type Ref = HTMLAnchorElement;

export const SearchView = forwardRef<Ref, Props>(function UserInfoList(
  { className, children, ...props },
  forwardedRef
) {
  const { LOGIN } = Path;
  const router = useRouter();

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [keyword, setKeyword] = useState<string>("");

  // TODO 알람으로 변경해야됨
  const { data: { profile } = {} } = useMemberQuery();
  const { data: { genres } = {} } = useGenresQuery();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <BiSearchAlt
            className="cursor-pointer hover:text-icon-active"
            aria-label="Update dimensions"
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={10}>
          <div className="mr-8 px-6 py-6 flex min-w-[90vw] max-w-[90vw] min-h-fit divide-y-[1px] select-none flex-col gap-4 rounded-xl bg-white border-2 border-main/50">
            {/* 검색창 */}
            <section
              className={
                "w-full flex flex-col items-center justify-center gap-4"
              }
            >
              <div className="flex flex-row w-full gap-4">
                <Image
                  width={120}
                  height={30}
                  className="min-h-full"
                  src={MainLogo}
                  alt="메인로고"
                />
                <label className="flex items-center flex-1">
                  <input
                    type="search"
                    ref={searchInputRef}
                    className="flex items-center w-full p-2 pl-4 bg-white border rounded-md"
                    placeholder="원하시는 작품을 검색하세요."
                    onChange={(evt) => {
                      setKeyword(evt.target.value);
                    }}
                  />
                  <GrFormSearch className="text-5xl" />
                </label>
              </div>
              {/* TODO 추천 알고리즘 적용 */}
              <ul className="flex flex-wrap w-full gap-4">
                {genres?.map((tag) => {
                  return (
                    <li
                      key={"tag-" + tag.id}
                      className="px-2 py-1 text-xs text-white cursor-pointer bg-main rounded-2xl"
                    >
                      {tag.eng}
                    </li>
                  );
                })}
              </ul>
            </section>
            {/* TODO 검색 작품 뿌려주기 */}
            <ul className="flex flex-col w-full gap-2 py-4">
              <li>ex) 검색된 작품들 리스트</li>
              <li>ex) 검색된 작품들 리스트</li>
              <li>ex) 검색된 작품들 리스트</li>
            </ul>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            {/* <Cross2Icon /> */}
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
});
