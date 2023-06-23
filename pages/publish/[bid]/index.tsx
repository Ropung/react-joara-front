import { lorem } from "@/data/dummy";
import useAutoSizeTextArea from "@/utils/common/textresize";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import PreviewImg from "@/public/img/preview.jpg";

const BookUpdate = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | ArrayBuffer | null>();
  const imageUploaderRef = useRef<HTMLInputElement | null>(null);

  // text resize
  const introductionNovelRef = useRef<HTMLTextAreaElement | null>(null);
  const [introductionNovelValue, setIntroductionNovelValue] =
    useState<string>("");
  useAutoSizeTextArea(introductionNovelRef.current, introductionNovelValue);

  const introductHandleChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const val = evt.target?.value;

    setIntroductionNovelValue(val);
  };

  const clearImage = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (evt) =>
      imageUploaderRef.current &&
      setPhotoUrl((imageUploaderRef.current.value = "")),
    []
  );

  return (
    <div className="flex items-center justify-center w-full p-8">
      <section className="w-[90%] flex flex-col gap-4 bg-white rounded-md p-8 shadow-md">
        {/*  */}
        <section className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">작품수정</h1>
          <button
            className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
            onClick={() => {
              // router.push();
            }}
          >
            작품 등록하기
          </button>
        </section>
        <section className="flex flex-col w-full gap-4 text-lg">
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

        <div className="flex flex-col w-full gap-4">
          <div
            className={`w-full flex flex-row justify-center items-center border border-gray-400 rounded-md shadow-md p-4 gap-6`}
          >
            <p className="w-[15%] font-bold">작품명</p>
            <input
              type="text"
              className="flex flex-1 px-4 py-2 border border-gray-400 rounded-lg"
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
                src={(photoUrl as string) || PreviewImg}
                // src={book.coverUrl ?? }
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

              <section className="flex flex-col w-full gap-2 overflow-hidden">
                <fieldset className="flex flex-col w-full text-gray-400 whitespace-nowrap">
                  <p className="font-bold text-dark">*주의사항</p>
                  <p>{lorem.dummy_short}</p>
                </fieldset>
                <fieldset className="flex flex-row justify-start w-full gap-2">
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
                      className="px-4 py-2 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-main"
                      onClick={(evt) => imageUploaderRef.current?.click()}
                    >
                      사진 선택
                    </button>
                  ) : (
                    <button
                      className="px-4 py-2 font-bold border shadow-md rounded-xl hover:text-main-contra hover:bg-danger"
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
            className="px-6 py-4 font-bold border shadow-md rounded-xl hover:text-main-contra bg-main text-main-contra hover:bg-black"
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

export default BookUpdate;
