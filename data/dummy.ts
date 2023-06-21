export interface bannerProps {
  url: string;
  alt: string;
  bannerId: number;
}

export const bannerList: bannerProps[] = [
  {
    url: "/logo/bookLogo.webp",
    alt: "이미지01",
    bannerId: 1,
  },
  {
    url: "/logo/bookLogo.webp",
    alt: "이미지02",
    bannerId: 2,
  },
  {
    url: "/logo/bookLogo.webp",
    alt: "이미지03",
    bannerId: 3,
  },
];

export const lorem = {
  dummy_short: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  dummy_long:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
};

export interface mainBookProps {
  genreKor?: string;
  bookList?: bookProps[];
}

export const mainActionBooksDummy: mainBookProps = {
  genreKor: "액션",
  bookList: [
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 1,
      title: "예비군을 간 현종",
      nickname: "예비군을 간 현종",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 2,
      title: "자바",
      nickname: "제임스 고슬링",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 3,
      title: "아키텍처",
      nickname: "헥사고날",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 4,
      title: "부의 축적",
      nickname: "몰루",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 5,
      title: "오늘도 개발자가 안된다",
      nickname: "SI개발자",
    },
  ],
};
export const mainRomanceBooksDummy: mainBookProps = {
  genreKor: "로멘스",
  bookList: [
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 1,
      title: "또링또링",
      nickname: "또로롱",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 2,
      title: "아수라발발타",
      nickname: "고니",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 3,
      title: "데분 고수의 길",
      nickname: "박승인",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 4,
      title: "자바의 신이되고픈 남자",
      nickname: "오승재",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 5,
      title: "난 몰루",
      nickname: "이현종",
    },
  ],
};
export const mainFantasyBooksDummy: mainBookProps = {
  genreKor: "판타지",
  bookList: [
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 1,
      title: "예비군을 간 현종1",
      nickname: "예비군을 간 현종1",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 2,
      title: "예비군을 간 현종2",
      nickname: "예비군을 간 현종2",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 3,
      title: "예비군을 간 현종3",
      nickname: "예비군을 간 현종3",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 4,
      title: "예비군을 간 현종4",
      nickname: "예비군을 간 현종4",
    },
    {
      url: "http://image.yes24.com/goods/106211628/XL",
      alt: "이미지01",
      bookId: 5,
      title: "예비군을 간 현종5",
      nickname: "예비군을 간 현종5",
    },
  ],
};

export interface bookProps {
  url?: string;
  alt?: string;
  bookId: number;
  title?: string;
  nickname?: string;
}
