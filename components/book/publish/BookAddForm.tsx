import React, { useEffect } from "react";

import { lorem } from "@/data/dummy";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BookAddFormState, BookAddRequest } from "@/models/api/auth";
import { useBookMutation } from "@/hooks/mutation/useBookMutation";
import GenreType from "@/constants/genre";
import PreviewImg from "@/public/img/preview.jpg";

const BookAddForm = () => {
  const { ACTION, FANTASY, ROMANCE } = GenreType;
  // Book Add Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<BookAddFormState>({ mode: "onChange" });

  // Object.keys(obj).map(key => ({ [key]: key }));

  const mutation = useBookMutation();

  const [photoUrl, setPhotoUrl] = useState("");

  const COVER_IMAGES = "coverImages";
  const coverImages = watch(COVER_IMAGES);

  useEffect(() => {
    if (coverImages && coverImages.length > 0) {
      setPhotoUrl(URL.createObjectURL(coverImages[0]));
    }
  }, [coverImages]);

  return (
    <form
      className="flex flex-col w-full gap-4 p-8 bg-white rounded-md shadow-md"
      encType="multipart/form-data"
      onSubmit={handleSubmit((data) => {
        console.log(data);
        const { coverImages, ...restData } = data;

        const bookAddFormReq: BookAddRequest = {
          ...restData,
          // coverImage: coverImages?.item(0) ?? undefined,
          coverImage: coverImages && coverImages[0],
        };

        mutation.mutate(bookAddFormReq);
      })}
    >
      <section className="flex flex-row items-center justify-between w-full">
        <h1 className="text-2xl font-bold">작품등록</h1>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
        >
          등록하기
        </button>
      </section>
      <fieldset className="flex flex-col w-full gap-4 text-lg">
        <div
          className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 checked-bg:bg-main`}
        >
          <p className="font-bold">장르</p>
          <select
            className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm"
            {...register("genreId", {
              required: "장르를 선택해주세요.",
            })}
          >
            <option value={ACTION}>액션</option>
            <option value={ROMANCE}>로멘스</option>
            <option value={FANTASY}>판타지</option>
          </select>
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
        <fieldset className="flex flex-col items-center justify-center w-full gap-4 p-4 border border-gray-400 rounded-md">
          <div className="flex flex-row items-center justify-start w-full gap-2">
            <p className="font-bold w-[15%]">ISBN:</p>
            <input
              className="flex flex-1 p-1 border border-gray-400 rounded-md"
              type="text"
              placeholder="ISBN 입력"
              {...register("isbn")}
            />
          </div>
          <div className="flex flex-row items-center justify-start w-full gap-2">
            <p className="font-bold w-[15%]">CIP:</p>
            <input
              className="flex flex-1 p-1 border border-gray-400 rounded-md"
              type="text"
              placeholder="CIP 입력"
              {...register("cip")}
            />
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
              src={(photoUrl as string) || PreviewImg}
              // src={book.coverUrl ?? }
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
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra bg-main text-main-contra hover:bg-black"
        >
          작품 등록하기
        </button>
      </div>
    </form>
  );
};

export default BookAddForm;
