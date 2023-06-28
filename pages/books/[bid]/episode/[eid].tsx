import BottomNavViewer from "@/components/episode/BottomNavViewer";
import TopNavViewer from "@/components/episode/TopNavViewer";
import { lorem } from "@/data/dummy";
import useBookOfOneQuery from "@/hooks/query/useBookOfOneQuery";
import useEpisodeOfOneQuery from "@/hooks/query/useEpisodeOfOneQuery";
import { SomeIdUnion } from "@/models/type";
import { useRouter } from "next/router";
import { useState } from "react";

const Episode = () => {
  const [onNavi, setNavi] = useState<boolean>(true);

  const router = useRouter();
  const routerQuery = router.query as { [key in SomeIdUnion]: string };

  const { data: { book } = {} } = useBookOfOneQuery(Number(routerQuery.bid));
  const { data: { bookTitle, content, epiTitle } = {} } = useEpisodeOfOneQuery(
    Number(routerQuery.bid),
    Number(routerQuery.eid)
  );

  return (
    <>
      {onNavi && (
        <>
          <TopNavViewer bookTitle={bookTitle} epiTitle={epiTitle} />
          <BottomNavViewer episodeSize={book?.episodeSize ?? 0} />
        </>
      )}
      <section
        className={`w-full min-h-[100vw] flex justify-center items-start bg-main bg-opacity-30 py-[5rem]`}
        onClick={() => {
          setNavi(!onNavi);
        }}
      >
        <div className="w-[80vw] h-full flex flex-col gap-8 pb-20 scrollbar-hide">
          <h1 className="py-8 text-lg font-bold">{epiTitle}</h1>
          <p className="">{content ?? lorem.dummy_short}</p>
        </div>
      </section>
    </>
  );
};

export default Episode;
