const GenreType = {
  ACTION: 1,
  FANTASY: 2,
  ROMANCE: 3,
} as const;

Object.freeze(GenreType);

export default GenreType;

export const Size = {
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
} as const;

Object.freeze(Size);
