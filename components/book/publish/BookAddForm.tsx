import React from "react";

import { lorem } from "@/data/dummy";

import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BookAddRequest } from "@/models/api/auth";
import { BookAddMutation } from "@/hooks/mutation/BookMutation";

const BookAddForm = () => {
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>();

  // Book Add Form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<BookAddRequest>({ mode: "onChange" });

  const mutation = BookAddMutation();

  return (
    <form
      className="w-full flex flex-col gap-4 bg-white rounded-md p-8 shadow-md"
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
        mutation.mutate(data);
      })}
    >
      <section className="flex flex-row justify-between items-center">
        <h1 className="font-bold text-2xl">작품등록</h1>
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra hover:bg-main"
        >
          등록하기
        </button>
      </section>
      <section className="w-full flex flex-col gap-4 text-lg">
        <div
          className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 checked-bg:bg-main`}
        >
          <p className="flex flex-1">장르</p>
          <select
            className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm"
            {...register("genreId", {
              required: "장르를 선택해주세요.",
            })}
          >
            <option value="ACTION">액션</option>
            <option value="ROMANCE">로맨스</option>
            <option value="FANTASY">판타지</option>
          </select>
        </div>
      </section>
      <div className="w-full flex flex-col gap-4">
        <div
          className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <p className="w-[15%] font-bold">작품명</p>
          <div className="flex flex-1 flex-col gap-2">
            <input
              type="text"
              className="border border-gray-400 rounded-lg py-2 px-4"
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

        <div
          className={`w-full h-fit flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
        >
          <div className="w-[15%] flex flex-col justify-start items-start">
            <p className="w-full font-bold">작품소개</p>
            <span className="text-sm text-gray-400">{`(줄거리)`}</span>
          </div>
          {/* 작품소개 textarea */}
          <div className="flex flex-1 flex-col">
            <textarea
              className="w-full  flex flex-1 border border-gray-400 rounded-lg px-4 py-2 text-sm outline-none resize-none placeholder:text-base"
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
              <small role="alert">{errors.description.message}</small>
            )}
          </div>
        </div>

        {/* 표지이미지 */}
        <section
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
              src={
                (photoUrl as string) ||
                "http://image.yes24.com/goods/106211628/XL"
              }
              className={`w-[100px] border rounded-md ${
                !!photoUrl ? "border-gray-300" : ""
              }`}
              // TODO 다국어 처리
              alt={
                !!photoUrl
                  ? "미리보기 이미지(Image Preview)"
                  : "선택된 사진이 없을 때는 눈 덮인 산을 멀리서 담은 샘플 이미지"
              }
            />
            <section className="w-full flex flex-col gap-2 overflow-hidden">
              <fieldset className="w-full flex flex-col whitespace-nowrap text-gray-400">
                <p className="font-bold text-dark">*주의사항</p>
                <p>{lorem.dummy_short}</p>
              </fieldset>
              <fieldset className="w-full flex flex-row gap-2 justify-start">
                <input
                  className="hidden"
                  type="file"
                  accept="image/*"
                  onChange={(evt) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(evt.target.files![0]);
                    // (Example of onload)
                    reader.onload = (evt) => {
                      const photoUrl = evt.target?.result;
                      photoUrl && setPhotoUrl(photoUrl);
                    };
                  }}
                />
              </fieldset>
            </section>
          </section>
        </section>
        <button
          type="submit"
          disabled={isSubmitting}
          className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra bg-main text-main-contra hover:bg-black"
        >
          작품 등록하기
        </button>
      </div>
    </form>
  );
};

export default BookAddForm;
