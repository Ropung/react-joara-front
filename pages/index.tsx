import EventBanner from "@/components/event/EventBanner";
import GenreNovel from "@/components/home/GenreNovel";
import GenreType, { Size } from "@/constants/genre";
import useGenreBooksDetailQuery from "@/hooks/query/genre/useGenreBooksDetailQuery";

export default function Home() {
  const { data: actionBooks } = useGenreBooksDetailQuery(
    GenreType.ACTION, // 5
    Size.FIVE,
    1
  );
  const { data: fantasyBooks } = useGenreBooksDetailQuery(
    GenreType.FANTASY, // 7
    Size.FIVE,
    1
  );
  const { data: romanceBooks } = useGenreBooksDetailQuery(
    GenreType.ROMANCE, // 2
    Size.FIVE,
    1
  );
  const { data: dramaBooks } = useGenreBooksDetailQuery(
    GenreType.DRAMA, // 1
    Size.FIVE,
    1
  );
  const { data: schoolBooks } = useGenreBooksDetailQuery(
    GenreType.SCHOOL, // 3
    Size.FIVE,
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
        {romanceBooks && (
          <GenreNovel genreId={GenreType.SCHOOL} books={schoolBooks} />
        )}
      </main>
    </div>
  );
}
