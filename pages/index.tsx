import EventBanner from "@/components/event/EventBanner";
import GenreNovel from "@/components/home/GenreNovel";
import GenreType, { Size, genreNumByName } from "@/constants/genre";
import useGenreBooksDetailQuery from "@/hooks/query/genre/useGenreBooksDetailQuery";

export default function Home() {
  const { data: actionBooks } = useGenreBooksDetailQuery(
    GenreType.ACTION, // 5
    Size.TEN,
    1
  );
  const { data: fantasyBooks } = useGenreBooksDetailQuery(
    GenreType.FANTASY, // 7
    Size.TEN,
    1
  );
  const { data: romanceBooks } = useGenreBooksDetailQuery(
    GenreType.ROMANCE, // 2
    Size.TEN,
    1
  );

  return (
    <div className="flex items-center justify-center w-full">
      <main className="w-[80vw] flex flex-col gap-8 py-4">
        <EventBanner />
        {/* 장르별 작품 목록 */}
        {actionBooks && (
          <GenreNovel genreId={GenreType.ACTION} books={actionBooks} />
        )}
        {fantasyBooks && (
          <GenreNovel genreId={GenreType.FANTASY} books={fantasyBooks} />
        )}
        {romanceBooks && (
          <GenreNovel genreId={GenreType.ROMANCE} books={romanceBooks} />
        )}
      </main>
    </div>
  );
}
