export interface bannerProps {
  url: string;
  alt: string;
  bannerId: number;
  job: string;
  name: string;
}

export const bannerList: bannerProps[] = [
  {
    url: "/img/img.png",
    alt: "이미지01",
    bannerId: 1,
    job: "백엔드",
    name: "이현종",
  },
  {
    url: "/img/cat.jpeg",
    alt: "이미지02",
    bannerId: 2,
    job: "데이터분석,백엔드",
    name: "박승인",
  },
  {
    url: "/img/mococo.jpeg",
    alt: "이미지03",
    bannerId: 3,
    job: "백엔드",
    name: "오승재",
  },
  {
    url: "/img/말대꾸.png",
    alt: "이미지04",
    bannerId: 4,
    job: "",
    name: "노기훈(팀장)",
  },
];

export const lorem = {
  dummy_short: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  dummy_long:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",
};
