import RoadmapBanner from "../../../components/banner/RoadmapBanner";
import SlickBanner from "../../../components/banner/SlickBanner";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div id="first-section">
      <div className="wrapper">
        <RoadmapBanner width="100%" height="540px"></RoadmapBanner>
        <SlickBanner></SlickBanner>
      </div>
    </div>
  );
};

export default FirstSection;
