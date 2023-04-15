export interface bannerProps {
  url: string;
  alt: string;
  bannerId: number;
}

export interface bookProps {
  url: string;
  alt: string;
  bookId: number;
  category: string;
  tag: string;
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

export const bookList: bookProps[] = [
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지01",
    bookId: 1,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지02",
    bookId: 2,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지03",
    bookId: 3,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지03",
    bookId: 4,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지03",
    bookId: 5,
    category: "",
    tag: "",
  },
];
