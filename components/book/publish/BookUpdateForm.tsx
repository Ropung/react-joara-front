import React, { useEffect } from "react";
import { lorem } from "@/data/dummy";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseCircle } from "react-icons/io5";
import { BookCreateUseFormProps } from "@/models/form";
import useGenresQuery from "@/hooks/query/genre/useGenresQuery";
import { BookUpdateReq } from "@/models/books/book";
import { useRouter } from "next/router";
import { SomeIdUnion } from "@/models/type";
import BaseImg from "@/public/img/preview.jpg";
import useBookOfOneQuery from "@/hooks/query/book/useBookOfOneQuery";
import { useBookUpdateMutation } from "@/hooks/mutation/book/useBookUpdateMutation";
import { useBookDeleteMutation } from "@/hooks/mutation/book/useBookDeleteMutation";
import Path from "@/constants/path/routes";

const BookUpdateForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<BookCreateUseFormProps>({ mode: "onChange" });

  const router = useRouter();
  const routerQuery = router.query as { [key in SomeIdUnion]: string };

  const { HOME } = Path;

  const [photoUrl, setPhotoUrl] = useState("");
  const [genreNameList, setGenreNameList] = useState<string[]>([]);
  const [genreIdList, setGenreIdList] = useState<number[]>([]);

  const COVER_IMAGES = "coverImages";
  const coverImages = watch(COVER_IMAGES);

  const bookUpdateMutation = useBookUpdateMutation();
  const { mutate: bookDeleteMutation } = useBookDeleteMutation();
  const handleBookDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!routerQuery.bid) return;

    bookDeleteMutation(Number(routerQuery.bid), {
      onSuccess: () => {
        router.push(HOME);
      },
      onError: (e) => {
        alert(e);
      },
    });
  };
  useEffect(() => {
    if (coverImages && coverImages.length > 0) {
      setPhotoUrl(URL.createObjectURL(coverImages[0]));
    }
  }, [coverImages]);

  const { data: { genres } = {} } = useGenresQuery();
  const { data: { book } = {} } = useBookOfOneQuery(Number(routerQuery.bid));

  useEffect(() => {
    const selectedGenres = genres?.filter(({ kor }) =>
      genreNameList.includes(kor ?? "")
    );
    const genreIds = selectedGenres?.map(({ id }) => {
      if (id == null) throw new Error("Some genre has no id.");
      return id;
    }) as number[];
    setGenreIdList(genreIds);
  }, [genreNameList, genres]);

  useEffect(() => {
    setGenreNameList(book?.genreNameList ?? []);
  }, [book]);

  return (
    <form
      className="flex flex-col w-full gap-4 p-8 bg-white rounded-md shadow-md"
      encType="multipart/form-data"
      onSubmit={handleSubmit((data) => {
        if (!genreIdList?.length) return alert("장르를 선택해주세요!");
        const { coverImages, ...restData } = data;

        const bookUpdateFormReq: BookUpdateReq = {
          ...restData,
          bookId: Number(routerQuery.bid),
          genreIdList: genreIdList,
          // coverImage: coverImages?.item(0) ?? undefined,
          coverImage: coverImages && coverImages[0],
        };
        bookUpdateMutation.mutate(bookUpdateFormReq);
      })}
    >
      <section className="flex flex-row items-center justify-between w-full">
        <h1 className="text-2xl font-bold">작품수정</h1>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
        >
          수정하기
        </button>
      </section>
      <fieldset className="flex flex-col w-full gap-4 text-lg">
        <div
          className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 checked-bg:bg-main`}
        >
          <p className="w-[15%] font-bold">장르</p>
          <ul className="flex flex-row gap-2">
            {genreNameList?.map((genreName) => {
              return (
                <li
                  key={`genre-name-${genreName}`}
                  className="flex flex-row items-center justify-center gap-2 px-2 py-1 text-white border bg-main rounded-xl"
                >
                  <p>{genreName}</p>
                  <IoCloseCircle
                    className="text-white/30 hover:text-white"
                    onClick={() => {
                      const newGenreNameList = genreNameList.filter(
                        (eachGenreName) => eachGenreName !== genreName
                      );
                      setGenreNameList(newGenreNameList);
                    }}
                  />
                </li>
              );
            })}
          </ul>
          <input type="hidden" className="border" value={`${genreIdList}`} />
          <input
            className="px-2 py-1 border rounded-md"
            list="genre_list"
            onKeyUp={(event) => {
              event.preventDefault();
              console.log("Key Inputted: ", event.key);
              const target = event.target as HTMLInputElement;
              target.value = target.value.trim();

              // if spacebar is pressed
              const isSpaceDown = event.key === " ";
              // and value is one of the valid genre names:
              const isOneOfGenreName = genres
                ?.map(({ kor }) => kor)
                .includes(target.value);

              if (isSpaceDown && isOneOfGenreName) {
                // append genre name to Genre Name List
                const newGenreNameList = [
                  ...new Set<string>([...genreNameList, target.value]),
                ] as string[];
                setGenreNameList(newGenreNameList);
                target.value = "";
              }
            }}
          />
          <datalist
            id="genre_list"
            defaultValue={0}
            // className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm"
          >
            {genres?.map((genre) => {
              return <option key={"genreId-" + genre.id} value={genre.kor} />;
            })}
          </datalist>
        </div>
      </fieldset>
      <div className="flex flex-col w-full gap-4">
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <p className="w-[15%] font-bold">작품명</p>
          <div className="flex flex-col flex-1 gap-2">
            <input
              type="text"
              defaultValue={book?.title}
              className="px-4 py-2 border border-gray-400 rounded-lg"
              placeholder="20자 이하로 작성 가능합니다."
              {...register("title", {
                required: "제목을 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 30글자 이하로 입력해주세요.",
                },
                maxLength: {
                  value: 30,
                  message: "3글자 이상 30글자 이하로 입력해주세요.",
                },
              })}
            />
            {errors.title && <small role="alert">{errors.title.message}</small>}
          </div>
        </div>

        <fieldset
          className={`w-full h-fit flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col justify-start items-start">
            <p className="w-full font-bold">작품소개</p>
            <span className="text-sm text-gray-400">{`(줄거리)`}</span>
          </div>
          {/* 작품소개 textarea */}
          <div className="flex flex-col flex-1">
            <textarea
              defaultValue={book?.description}
              className="flex flex-1 w-full px-4 py-2 text-sm border border-gray-400 rounded-lg outline-none resize-none placeholder:text-base"
              rows={5}
              placeholder="작품 줄거리를 입력하세요."
              {...register("description", {
                required: "작품소개를 입력해주세요.",
                minLength: {
                  value: 3,
                  message: "3글자 이상 200글자 이하로 입력해주세요.",
                },
                maxLength: {
                  value: 255,
                  message: "3글자 이상 200글자 이하로 입력해주세요.",
                },
              })}
            ></textarea>
            {errors.description && (
              <small role="alert">
                {errors.description.message?.toString()}
              </small>
            )}
          </div>
        </fieldset>

        {/* 표지이미지 */}
        <fieldset
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col gap-1">
            <p className="font-bold">표지이미지</p>
            <p className="text-sm text-gray-400">{`(200 x 305px)`}</p>
          </div>
          <section className="flex flex-1 gap-4 p-2 text-sm">
            {/* 이미지 */}
            <Image
              width={200}
              height={305}
              src={book?.coverUrl ? book.coverUrl : BaseImg}
              className={`w-[100px] border rounded-md ${
                !!photoUrl ? "border-gray-300" : ""
              }`}
              alt={
                !!photoUrl
                  ? "미리보기 이미지(Image Preview)"
                  : "기본 조아라 표지이미지"
              }
            />
            <section className="flex flex-col w-full gap-2 overflow-hidden">
              <fieldset className="flex flex-col w-full text-gray-400 whitespace-nowrap">
                <p className="font-bold text-dark">*주의사항</p>
                <p>{lorem.dummy_short}</p>
              </fieldset>
              {/* 파일 등록 */}
              <fieldset className="flex flex-row justify-start w-full gap-2">
                <input
                  {...register(COVER_IMAGES)}
                  id="coverUrl"
                  type="file"
                  accept="image/*"
                />
              </fieldset>
            </section>
          </section>
        </fieldset>
        <div className="flex gap-2 flew-row">
          <button
            className="px-6 py-4 font-bold text-black bg-white border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
            onClick={(e) => handleBookDelete(e)}
          >
            삭제하기
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra bg-main text-main-contra hover:bg-black"
          >
            수정하기
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookUpdateForm;
