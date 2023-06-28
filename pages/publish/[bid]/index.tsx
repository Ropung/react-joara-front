import { lorem } from "@/data/dummy";
import useAutoSizeTextArea from "@/utils/common/textresize";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import PreviewImg from "@/public/img/preview.jpg";
import BookUpdateForm from "@/components/book/publish/BookUpdateForm";

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
      <BookUpdateForm />
    </div>
  );
};

export default BookUpdate;
