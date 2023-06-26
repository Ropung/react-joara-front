const genreNameByNum = {
  DRAMA: 1,
  ROMANCE: 2,
  SCHOOL: 3,
  SUPERNATURAL: 4,
  ACTION: 5,
  ADVENTURE: 6,
  FANTASY: 7,
  MAGIC: 8,
  MILITARY: 9,
  COMEDY: 10,
  HISTORICAL: 11,
  PARODY: 12,
  SAMURAI: 13,
  SF: 14,
  THRILLER: 15,
  SPORTS: 16,
  SUPER_POWER: 17,
  SPACE: 18,
  SLICE_OF_LIFE: 19,
  MECHA: 20,
  MUSIC: 21,
  MYSTERY: 22,
  MARTIAL_ARTS: 23,
  VAMPIRE: 24,
  HORROR: 25,
  POLICE: 26,
  PSYCHOLOGICAL: 27,
  DEMONS: 28,
  GAME: 29,
  CARS: 30,
  KIDS: 31,
} as const;
Object.freeze(genreNameByNum);
export default genreNameByNum;

export type GenreType =
  | "드라마"
  | "로맨스"
  | "학교"
  | "초자연적"
  | "액션"
  | "모험"
  | "판타지"
  | "매직"
  | "군대"
  | "코미디"
  | "역사"
  | "패러디"
  | "사무라이"
  | "SF"
  | "스릴러"
  | "스포츠"
  | "슈퍼파워"
  | "우주"
  | "일상"
  | "메카"
  | "음악"
  | "미스터리"
  | "무술"
  | "뱀파이어"
  | "호러"
  | "경찰"
  | "심리"
  | "악마"
  | "게임"
  | "자동차"
  | "어린이";

export const genreNumByName: { [key in number]: GenreType } = {
  1: "드라마",
  2: "로맨스",
  3: "학교",
  4: "초자연적",
  5: "액션",
  6: "모험",
  7: "판타지",
  8: "매직",
  9: "군대",
  10: "코미디",
  11: "역사",
  12: "패러디",
  13: "사무라이",
  14: "SF",
  15: "스릴러",
  16: "스포츠",
  17: "슈퍼파워",
  18: "우주",
  19: "일상",
  20: "메카",
  21: "음악",
  22: "미스터리",
  23: "무술",
  24: "뱀파이어",
  25: "호러",
  26: "경찰",
  27: "심리",
  28: "악마",
  29: "게임",
  30: "자동차",
  31: "어린이",
};

export const Size = {
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
} as const;
Object.freeze(Size);
