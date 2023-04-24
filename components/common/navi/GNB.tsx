import CategoryNavi from "./widgets/CategoryNavi";
import MiddleNavi from "./widgets/MiddleNavi";
import TopNavi from "./widgets/TopNavi";

const GNB = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center px-8 shadow-t-sm">
        <TopNavi />
        <p className="w-screen border-b border-gray-100" />
        <MiddleNavi />
        <CategoryNavi />
      </div>
    </div>
  );
};

export default GNB;
