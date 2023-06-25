import BookFavoriteContainer from "@/components/room/favorite/BookFavoriteContainer";

const BookFavoritePage = () => {
  return (
    <div className="flex items-center justify-center w-full p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        <BookFavoriteContainer />
      </section>
    </div>
  );
};

export default BookFavoritePage;
