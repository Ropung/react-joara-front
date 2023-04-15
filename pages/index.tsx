import EventBanner from "@/components/event/EventBanner";
import HomeThemeNovel from "@/components/home/HomeThemeNovel";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <main className="w-[80vw] flex flex-col gap-8">
        <EventBanner />
        {/* 테마 별 작품 목록 */}
        <HomeThemeNovel />
        <HomeThemeNovel />
        <HomeThemeNovel />
      </main>
    </div>
  );
}
