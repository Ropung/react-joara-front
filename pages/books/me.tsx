import NovelBookcase from "@/components/writer-room/book-case/NovelBookcase";

const BookMePage = () => {
  return (
    <div className="flex items-center justify-center w-full p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        <NovelBookcase />
      </section>
    </div>
  );
};

export default BookMePage;
