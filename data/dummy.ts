export interface bannerProps {
  url: string;
  alt: string;
  bannerId: number;
}

export interface novelsProps {
  url: string;
  alt: string;
  novelId: number;
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

export const novelList: novelsProps[] = [
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지01",
    novelId: 1,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지02",
    novelId: 2,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지03",
    novelId: 3,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지03",
    novelId: 4,
    category: "",
    tag: "",
  },
  {
    url: "http://image.yes24.com/goods/106211628/XL",
    alt: "이미지03",
    novelId: 5,
    category: "",
    tag: "",
  },
];
