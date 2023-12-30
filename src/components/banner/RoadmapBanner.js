import "./RoadmapBanner.css";
// import roadmapBannerImage from "../../assets/images/logo.jpg";
import CommonButton from "../button/CommonButton";
import militaryColorTheme from "../../util/colors/theme/military.json";

const RoadmapBanner = ({ width, height }) => {
  return (
    <div
      id="roadmap-banner"
      style={{
        width: width,
        height: height,
        // backgroundImage: `url(${roadmapBannerImage})`,
      }}
    >
      <div className="wrapper">
        <article>
          <h1>우리들의 미래를 향한 나침반</h1>
          <span>밝은 미래를 향해 함께 걸어보세요</span>
        </article>
        <div className="statistics-summary">
          <div className="ROAD">
            <h2>ROAD</h2>
            {/* TODO */}
            <span>146</span>
          </div>
          <div className="MEMBER">
            <h2>MEMBER</h2>
            {/* TODO */}
            <span>525,555</span>
          </div>
        </div>
        <div className="button-wrapper">
          <CommonButton
            size={2.2}
            borderSize={2}
            borderColor={"transparent"}
            radius={5}
          >
            도움말
          </CommonButton>
          <CommonButton
            size={2.2}
            borderColor={"transparent"}
            radius={5}
            borderSize={2}
            color={militaryColorTheme["--military-dark-green"]}
            fontColor={"white"}
          >
            시작하기
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default RoadmapBanner;
