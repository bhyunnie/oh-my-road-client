import "./RoadmapBanner.css";
// import roadmapBannerImage from "../../assets/images/logo.jpg";
import CommonButton from "../button/CommonButton";
import militaryColorTheme from "../../util/colors/theme/military.json";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ModalContext } from "../../context/ModalContext";

const RoadmapBanner = ({ width, height }) => {
  const [memberCount, setMemberCount] = useState(0);
  const { openModal } = useContext(ModalContext);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/user/count?userId=qwe", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) setMemberCount(response.data.count);
      })
      .catch((error) => {
        // TODO 에러 핸들링 어떻게 할까.. 고민좀 해보자
      });
  }, []);
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
          <h1>개발자를 준비하는 모든 사람들의 미래를 향한 나침반</h1>
          <span>개발자로서의 밝은 미래를 향해 함께 걸어보세요</span>
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
            <span>{memberCount}</span>
          </div>
        </div>
        <div className="button-wrapper">
          <CommonButton
            size={2.2}
            borderSize={2}
            borderColor={"transparent"}
            radius={5}
            callback={() => {
              openModal({ name: "help", index: 1 });
            }}
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
            callback={() => {
              openModal({ name: "discordLogin", index: 1 });
            }}
          >
            시작하기
          </CommonButton>
        </div>
      </div>
    </div>
  );
};

export default RoadmapBanner;
