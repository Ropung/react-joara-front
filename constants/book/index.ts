const BookStatusNameByKor = {
  PENDING: "보류",
  ACTIVE: "연재",
  SUSPEND: "임시휴재",
  REMOVED: "삭제",
  BLOCK: "정지",
} as const;
Object.freeze(BookStatusNameByKor);
export default BookStatusNameByKor;
