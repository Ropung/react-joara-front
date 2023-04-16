import BookEpisode from "@/components/book/BookEpisode";
import BookInfo from "@/components/book/BookInfo";

const Book = () => {
  return (
    <div className="flex flex-col gap-8 py-8 px-16">
      <BookInfo />
      <p className="w-screen border-b border-gray-100" />
      <BookEpisode />
    </div>
  );
};

export default Book;
