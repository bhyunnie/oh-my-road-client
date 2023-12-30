import "./SlickBanner.css";
import firstBannerImage from "../../assets/images/slick-banner.png";
import secondBannerImage from "../../assets/images/slick-banner2.png";
import thirdBannerImage from "../../assets/images/slick-banner3.png";
import { useEffect, useRef, useState } from "react";

const SlickBanner = () => {
  const bannerWrapper = useRef("");
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // TODO 나중엔 DB 에서 배너 개수 가져오도록 해서 어드민으로 해보는게 좋을듯
  const bannerList = [
    {
      src: firstBannerImage,
      href: "",
    },
    {
      src: secondBannerImage,
      href: "",
    },
    {
      src: thirdBannerImage,
      href: "",
    },
  ];

  bannerList.push(bannerList[0]);

  useEffect(() => {
    const interval = 500;
    setTimeout(() => {
      bannerWrapper.current.style.transition = `transform ${
        interval / 1000
      }s ease`;
      bannerWrapper.current.style.transform = `translateY(${
        -100 * (currentBannerIndex + 1)
      }px)`;

      setTimeout(() => {
        if (currentBannerIndex + 2 === bannerList.length) {
          bannerWrapper.current.style.transition = "transform 0s";
          bannerWrapper.current.style.transform = "translateY(0px)";
          setCurrentBannerIndex(0);
          return;
        }
        setCurrentBannerIndex(currentBannerIndex + 1);
      }, interval);
    }, 2000 - interval);
  }, [currentBannerIndex, bannerList.length]);

  return (
    <div className="slick-banner">
      <div className="wrapper">
        <div className="banners-wrapper" ref={bannerWrapper}>
          {bannerList.map((banner, idx) => {
            return (
              <div className="banner" key={idx}>
                <img src={banner.src} alt="slickBanner"></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlickBanner;
