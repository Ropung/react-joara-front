import React from "react";

const NovelState = () => {
  const divBoxStyle =
    "flex flex-row cursor-pointer border rounded-md p-2 px-4 gap-2 hover:bg-main hover:text-main-contra";
  const pStlye = "";
  const spanStyle = "flex justify-center items-center gap-8";

  return (
    <>
      <section className="flex flex-row justify-start items-center gap-2">
        <div className={divBoxStyle}>
          <p className={pStlye}>전체</p>
          <span className={spanStyle}>{`-1`}</span>
        </div>
        <div className={divBoxStyle}>
          <p className={pStlye}>연재</p>
          <span className={spanStyle}>{`-1`}</span>
        </div>
        <div className={divBoxStyle}>
          <p className={pStlye}>완결</p>
          <span className={spanStyle}>{`-1`}</span>
        </div>
      </section>
    </>
  );
};

export default NovelState;
