import { lorem } from "@/data/dummy";
import useAutosizeTextArea from "@/utils/common/textresize";
import resolveEXIFRotate from "@/utils/upload/resolveEXIFRotate";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const BookPublishing = () => {
  // img
  const [files, setFiles] = useState<FileList | null>(null);
  const [file, setFile] = useState<File | null>(null); // from files
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>();
  const imageUploaderRef = useRef<HTMLInputElement | null>(null);

  // text resize
  const introductionNovelRef = useRef<HTMLTextAreaElement | null>(null);
  const [introductionNovelValue, setIntroductionNovelValue] =
    useState<string>("");
  useAutosizeTextArea(introductionNovelRef.current, introductionNovelValue);

  const introductHandleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;

    setIntroductionNovelValue(val);
  };

  // useEffect(() => {
  //   console.debug(photoUrl);
  // }, [photoUrl]);

  useEffect(() => {
    files &&
      resolveEXIFRotate(files)
        .then(setFile) //
        .catch(console.error);
  }, [files]);

  const clearImage = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (evt) =>
      imageUploaderRef.current &&
      setPhotoUrl((imageUploaderRef.current.value = "")),
    []
  );
  const sendRequest = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (evt) => {
      if (!file) return;
      const formData = new FormData();
      formData.append("paramName", file); // custom param name: from your api server
      const option = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      /* (ex)
        axios.post(url, formData, option)
          .then(({ data })=>data)
          .then((data) => {
            // ...
          })
          .catch(console.error)
      */
    },
    [file]
  );
  return (
    <div className="w-full flex items-center justify-center p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        {/*  */}
        <section className="flex flex-row justify-between items-center">
          <h1 className="font-bold text-2xl">작품등록</h1>
          <button
            className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra hover:bg-main"
            onClick={() => {
              // router.push();
            }}
          >
            작품 등록하기
          </button>
        </section>
        <section className="w-full flex flex-col gap-4 text-lg">
          <div
            className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 checked-bg:bg-main`}
          >
            <p className="flex flex-1">작품성향</p>
            <select className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm">
              <option value="defalut">선택안함</option>
              <option value="man">남성향</option>
              <option value="woman">여성향</option>
            </select>
          </div>
          <div
            className={`w-full flex flex-row justify-between items-center border border-gray-400 rounded-md shadow-md p-4 ${``}`}
          >
            <p className="flex flex-1">카테고리</p>
            <select className="w-[20%] border border-gray-400 rounded-lg p-2 text-sm">
              <option value="defalut">판타지</option>
              <option value="man">무협</option>
              <option value="woman">라이트노벨</option>
              <option value="woman">게임</option>
            </select>
          </div>
        </section>
        {/*  */}

        <div className="w-full flex flex-col gap-4">
          <div
            className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            <p className="w-[15%] font-bold">작품명</p>
            <input
              type="text"
              className="flex flex-1 border border-gray-400 rounded-lg py-2 px-4"
              placeholder="20자 이하로 작성 가능합니다."
              maxLength={20}
            />
          </div>
          <div
            className={`w-full h-fit flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            <div className="w-[15%] flex flex-col justify-start items-start">
              <p className="w-full font-bold">작품소개</p>
              <span className="text-sm text-gray-400">{`(줄거리)`}</span>
            </div>
            {/* 작품소개 textarea */}
            <textarea
              ref={introductionNovelRef}
              className="w-full min-h-[15vh] flex flex-1 border border-gray-400 rounded-lg px-4 py-2 text-sm outline-none resize-none placeholder:text-base"
              rows={1}
              placeholder="작품 줄거리를 입력하세요."
              value={introductionNovelValue}
              onChange={introductHandleChange}
            ></textarea>
          </div>
          <div
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
                    ref={imageUploaderRef}
                    onChange={(evt) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(evt.target.files![0]);
                      setFiles(evt.target?.files);
                      // (Example of onload)
                      reader.onload = (evt) => {
                        const photoUrl = evt.target?.result;
                        photoUrl && setPhotoUrl(photoUrl);
                      };
                    }}
                  />
                  {!photoUrl ? (
                    <button
                      className="font-bold px-4 py-2 rounded-xl border shadow-md hover:text-main-contra hover:bg-main"
                      onClick={(evt) => imageUploaderRef.current?.click()}
                    >
                      사진 선택
                    </button>
                  ) : (
                    <button
                      className="font-bold px-4 py-2 rounded-xl border shadow-md hover:text-main-contra hover:bg-danger"
                      onClick={clearImage}
                    >
                      삭제
                    </button>
                  )}
                </fieldset>
              </section>
            </section>
          </div>
          <button
            className="font-bold py-4 px-6 rounded-xl border shadow-md hover:text-main-contra bg-main text-main-contra hover:bg-black"
            onClick={() => {
              // router.push();
            }}
          >
            작품 등록하기
          </button>
        </div>
      </section>
    </div>
  );
};

export default BookPublishing;
