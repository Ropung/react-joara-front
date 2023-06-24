import EventBanner from "@/components/event/EventBanner";
import GenreNovel from "@/components/home/GenreNovel";
import GenreType, { Size, genreNumByName } from "@/constants/genre";
import useGenreBooksPreviewQuery from "@/hooks/query/useBooksPreviewQuery";

export default function Home() {
  const { data: actionBooks } = useGenreBooksPreviewQuery(
    GenreType.ACTION, // 5
    Size.FIVE,
    1
  );
  const { data: fantasyBooks } = useGenreBooksPreviewQuery(
    GenreType.FANTASY, // 7
    Size.FIVE,
    1
  );
  const { data: romanceBooks } = useGenreBooksPreviewQuery(
    GenreType.ROMANCE, // 2
    Size.FIVE,
    1
  );

  return (
    <div className="flex items-center justify-center w-full">
      <main className="w-[80vw] flex flex-col gap-8">
        <EventBanner />
        {/* 장르별 작품 목록 */}
        {actionBooks && (
          <GenreNovel genreId={actionBooks.genreId} books={actionBooks} />
        )}
        {fantasyBooks && (
          <GenreNovel genreId={fantasyBooks.genreId} books={fantasyBooks} />
        )}
        {romanceBooks && (
          <GenreNovel genreId={romanceBooks.genreId} books={romanceBooks} />
        )}
      </main>
    </div>
  );
}
