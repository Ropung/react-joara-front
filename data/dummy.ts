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
    url: "http://blog.jinbo.net/attach/615/200937431.jpg",
    alt: "이미지01",
    bannerId: 1,
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/12/07/12/56/morning-mist-7641122_1280.jpg",
    alt: "이미지02",
    bannerId: 2,
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/07/09/10/11/insect-7310563_1280.jpg",
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
