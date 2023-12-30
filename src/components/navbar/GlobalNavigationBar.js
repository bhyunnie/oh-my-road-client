import "./GlobalNavigationBar.css";
import logoImage from "../../assets/images/logo.png";

const GlobalNavigationBar = () => {
  return (
    <nav id="global-navigation-bar">
      <div className="wrapper">
        <div className="left">
          <img className="logo" src={logoImage} alt=""></img>
        </div>
        <div className="right">
          <ul className="menus">
            <li className="menu">로그인</li>
            <li className="menu">회원가입</li>
            <li className="menu">QR 로그인</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GlobalNavigationBar;
