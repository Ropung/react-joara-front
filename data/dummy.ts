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
