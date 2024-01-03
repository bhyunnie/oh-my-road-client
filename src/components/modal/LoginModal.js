import "./LoginModal.css";
import TemplateModal from "./TemplateModal";
import CommonButton from "../button/CommonButton";

const LoginModal = ({ children, status }) => {
  return status ? (
    <TemplateModal>
      <div id="discord-login-modal">
        <article className="wrapper">
          <div className="login-image-wrapper">
            <div className="login-image">server-image</div>
          </div>
          <div className="login-text-wrapper">
            <div className="login-text">
              로그인 후 Init 서버에 자동으로 초대됩니다.
            </div>
          </div>
          <div className="login-button-wrapper">
            <CommonButton
              width={"400px"}
              height={"50px"}
              color={"rgb(90,100,234)"}
              fontColor={"white"}
              radius={"5px"}
              callback={() => {
                window.location =
                  "https://discord.com/api/oauth2/authorize?client_id=1190974106380812318&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=identify";
              }}
            >
              DISCORD 로그인하기
            </CommonButton>
          </div>
        </article>
      </div>
    </TemplateModal>
  ) : (
    ""
  );
};

export default LoginModal;
