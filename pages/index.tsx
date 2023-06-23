import EventBanner from "@/components/event/EventBanner";
import GenreNovel from "@/components/home/GenreNovel";
import GenreType, { Size } from "@/constants/genre";
import useGenreBooksPreviewQuery from "@/hooks/query/useBooksPreviewQuery";

export default function Home() {
  const { data: ActionBooks } = useGenreBooksPreviewQuery(
    GenreType.ACTION,
    Size.FIVE,
    1
  );
  const { data: FantasyBooks } = useGenreBooksPreviewQuery(
    GenreType.FANTASY,
    Size.FIVE,
    1
  );
  const { data: RomanceBooks } = useGenreBooksPreviewQuery(
    GenreType.ROMANCE,
    Size.FIVE,
    1
  );

  return (
    <div className="flex items-center justify-center w-full">
      <main className="w-[80vw] flex flex-col gap-8">
        <EventBanner />
        {/* 장르별 작품 목록 */}
        {ActionBooks && (
          <GenreNovel titleGenre={"액션 인기작"} books={ActionBooks} />
        )}
        {FantasyBooks && (
          <GenreNovel titleGenre={"판타지 인기작"} books={FantasyBooks} />
        )}
        {RomanceBooks && (
          <GenreNovel titleGenre={"로맨스 인기작"} books={RomanceBooks} />
        )}
      </main>
    </div>
  );
}
