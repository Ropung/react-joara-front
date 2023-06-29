import React, { FC } from "react";

interface BookStatusListProps {
  allCount?: number;
  // bookStatus: boolean;
  // setBookStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookStatusList: FC<BookStatusListProps> = (props) => {
  const divBoxStyle =
    "flex flex-row cursor-pointer border rounded-md p-2 px-4 gap-2 hover:bg-main hover:text-main-contra";
  const pStlye = "";
  const spanStyle = "flex justify-center items-center gap-8";

  const { allCount } = props;

  return (
    <>
      <section className="flex flex-row items-center justify-start gap-2">
        <div className={divBoxStyle}>
          <p className={pStlye}>전체</p>
          <span className={spanStyle}>{allCount ?? 0}</span>
        </div>
        <div className={divBoxStyle}>
          <p className={pStlye}>연재</p>
          <span className={spanStyle}>{allCount ?? 0}</span>
        </div>
        <div className={divBoxStyle}>
          <p className={pStlye}>완결</p>
          <span className={spanStyle}>{allCount ?? 0}</span>
        </div>
      </section>
    </>
  );
};

export default BookStatusList;
