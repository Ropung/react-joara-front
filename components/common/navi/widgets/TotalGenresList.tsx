import { ReactNode, forwardRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";
import Path from "@/constants/path/routes";
import GenreType from "@/constants/genre";
import useGenresQuery from "@/hooks/query/genre/useGenresQuery";

interface Props {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  name?: string;
}
export type Ref = HTMLAnchorElement;

export const TotalGenresList = forwardRef<Ref, Props>(function TotalGenresList(
  { className, children, name, ...props },
  forwardedRef
) {
  const { data: { genres } = {} } = useGenresQuery();
  const { GENRE } = Path;
  const router = useRouter();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <div className="flex flex-row gap-2 hover:text-main">
            <RxHamburgerMenu className="text-2xl " />
            <p>전체장르</p>
          </div>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="w-[95vw] PopoverContent" sideOffset={30}>
          <div className="p-6 flex flex-col items-start justify-start mr-8 bg-white border-2 border-main/50 divide-y-[1px] select-none min-w-fit min-h-fit rounded-xl">
            <p
              className="w-full pl-4 text-xl font-bold text-left"
              style={{ marginBottom: 10 }}
            >
              세부장르
            </p>
            <ul className="flex flex-wrap w-full gap-2 px-2 py-4">
              {genres?.map((genre, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      router.push({
                        pathname: GENRE,
                        query: { gid: genre.id },
                      });
                    }}
                  >
                    <p className="px-4 py-1.5 border-2 rounded-full hover:bg-main/50">
                      {genre.kor}
                    </p>
                  </li>
                );
              })}
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
