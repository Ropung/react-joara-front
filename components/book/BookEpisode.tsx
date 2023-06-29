import Path from "@/constants/path/routes";
import { useEpisodeDeleteMutation } from "@/hooks/mutation/episode/useEpisodeDeleteMutation";
import { EpisodeDetailedProps } from "@/models/books/episode";
import { SomeIdUnion } from "@/models/type";
import { useRouter } from "next/router";
import { Dispatch, FC, SetStateAction } from "react";

interface BookInfoProps {
  hasToken: boolean;
  episodeSize: number;
  setHasToken: Dispatch<SetStateAction<boolean>>;
  episodeList: EpisodeDetailedProps[] | undefined;
}

const BookEpisode: FC<BookInfoProps> = (props) => {
  const dummyList: number[] = [1, 2, 3, 4, 5];
  const router = useRouter();

  const { hasToken, setHasToken, episodeList, episodeSize } = props;
  const { BOOK, EPISODE } = Path;

  const { bid, eid } = router.query as { [key in SomeIdUnion]: string };

  const { mutate: episodeDeleteMutation } = useEpisodeDeleteMutation();

  const handleSubmit = () => {
    if (!bid || !eid) return;
    episodeDeleteMutation(
      { bid: Number(bid), eid },
      {
        onSuccess: () => {
          alert("삭제 되었습니다.");
          router.push(`${BOOK}/${bid}`);
        },
        onError: (e) => {
          alert(e);
        },
      }
    );
  };

  return (
    <section className="flex flex-col flex-1 gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-end justify-start gap-2">
          <h1 className="text-2xl font-bold">작품회차</h1>
          <span>({episodeSize})</span>
        </div>
        <div className="flex items-center justify-end gap-2 divide-x">
          <p
            className="cursor-pointer hover:text-main"
            onClick={() => {
              //
            }}
          >
            최신순
          </p>
          <p
            className="pl-2 cursor-pointer hover:text-main"
            onClick={() => {
              //
            }}
          >
            첫화
          </p>
        </div>
      </div>
      {/* 에피소드 List */}
      <section className="flex flex-col items-center justify-between gap-4 p-4 bg-white border rounded-xl">
        <ul className="flex flex-col flex-1 w-full divide-y">
          {episodeList?.map((epi) => {
            return (
              <li
                key={"episode-" + epi.id}
                className="flex flex-col items-center justify-center gap-4 p-4 rounded-md hover:bg-gray-100"
              >
                <div className="flex flex-row items-center justify-between w-full gap-6 ">
                  <div
                    className="flex flex-row items-center justify-start gap-2 cursor-pointer hover:text-main"
                    onClick={() => {
                      router.push({
                        pathname: `${BOOK}/${epi.bookId}/${EPISODE}/${epi.epiNum}`,
                      });
                    }}
                  >
                    <p className="p-1 text-xs text-main rounded-xl">
                      EP.{epi.epiNum}
                    </p>
                    <p className="font-bold">{epi.epiTitle}</p>
                    <p>{epi.status}</p>
                  </div>
                  {hasToken && (
                    <div className="flex flex-row gap-2">
                      <button
                        className="px-4 py-2 rounded-md bg-primary text-main-contra hover:bg-primary-active"
                        onClick={() => {
                          router.push({
                            pathname: `/publish/${epi.bookId}/episode/${epi.epiNum}`,
                            query: { eid: epi.id },
                          });
                        }}
                      >
                        수정
                      </button>
                      <button
                        className="px-4 py-2 rounded-md bg-danger text-main-contra hover:bg-danger-active"
                        onClick={() => {
                          confirm(
                            "삭제 하시겠어요? ( 삭제하면 작품이 비활성화 됩니다. )"
                          )
                            ? handleSubmit()
                            : alert("삭제 취소했습니다.");
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-row items-center justify-between w-full gap-4">
                  <div className="flex flex-row justify-start gap-2">
                    <p>조회수:{epi.viewCount ?? 0}</p>
                    <p>좋아요:{epi.heartCount ?? 0}</p>
                  </div>
                  <p className="text-default-contra">{epi.createdAt}</p>
                </div>
              </li>
            );
          })}
        </ul>
        {/* 페이지 네이션 */}
        {episodeSize > 1 && (
          <div className="flex flex-row gap-4">
            {dummyList.map((page) => {
              return (
                <button
                  key={"page-" + page}
                  className="flex items-center justify-center w-8 h-8 p-4 text-lg bg-white border rounded-md text-main hover:bg-main hover:text-main-contra"
                  onClick={() => {
                    //
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </section>
  );
};

export default BookEpisode;
