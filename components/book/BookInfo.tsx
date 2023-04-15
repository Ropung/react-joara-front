import Image from "next/image";
const BookInfo = () => {
  return (
    <>
      <section className="flex flex-row gap-16 items-start justify-between">
        <Image
          width={150}
          height={200}
          className="w-[25%]"
          src="http://image.yes24.com/goods/106211628/XL"
          alt="소설더미이미지"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-6 items-center justify-between">
            <div className="w-full flex flex-col items-start">
              <p className="text-icon">카테고리 - 장르</p>
              <h1 className="font-bold text-3xl">소설제목</h1>
              <p className="flex flex-row gap-2 text-icon">
                <span className="">작가이름</span>
                <span>조회수</span>
                <span>장르</span>
              </p>
            </div>
            <p className="w-full flex flex-1 flex-col items-start">
              {"작품의 내용이 없습니다."}
            </p>
          </div>
        </div>
      </section>
      <div className="w-full flex items-end justify-center gap-4 px-16">
        <button className="w-1/2 bg-main p-4 rounded-md text-main-contra hover:scale-105 transition font-bold">
          최근화보기
        </button>
        <button className="w-1/2 bg-main p-4 rounded-md text-main-contra hover:scale-105 transition font-bold">
          첫화보기
        </button>
      </div>
    </>
  );
};

export default BookInfo;
