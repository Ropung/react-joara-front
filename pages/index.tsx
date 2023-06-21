import EventBanner from "@/components/event/EventBanner";
import ActionNovel from "@/components/home/ActionNovel";
import FantasyNovel from "@/components/home/FantasyNovel";
import RomanceNovel from "@/components/home/RomanceNovel";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <main className="w-[80vw] flex flex-col gap-8">
        <EventBanner />
        {/* 장르별 작품 목록 */}
        <ActionNovel />
        <FantasyNovel />
        <RomanceNovel />
      </main>
    </div>
  );
}
