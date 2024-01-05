import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../../context/LocationContext";
import axios from "axios";
import "./oauth2.css";

/**
 * TODO
 * - https://discordjs.guide/oauth2/#more-details
 * 보안 요건 추가 필요ㄱ
 */
const Oauth2 = () => {
  const [status, setStatus] = useState("wait");
  const { getHashTagParam } = useContext(LocationContext);
  const { token_type, access_token } = getHashTagParam();

  useEffect(() => {
    if (status === "error") {
      setStatus("error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  axios({
    method: "GET",
    url: "https://discord.com/api/users/@me",
    headers: {
      Authorization: `${token_type} ${access_token}`,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div id="discord-login-loading">
      <div className="wrapper">
        {status === "wait" ? (
          <React.Fragment>
            <h2 className="title">DISCORD를 통한 인증이 진행중입니다.</h2>
            <span>인증 완료 후 자동으로 창이 닫힙니다.</span>
            <ul className="dots">
              <li className="dot"></li>
              <li className="dot"></li>
              <li className="dot"></li>
            </ul>
          </React.Fragment>
        ) : status === "error" ? (
          <React.Fragment>
            <h2 className="title">인증을 취소하였습니다.</h2>
            <span>잠시 후 창이 닫힙니다.</span>
            <ul className="dots">
              <li className="dot"></li>
            </ul>
          </React.Fragment>
        ) : status === "success" ? (
          <React.Fragment>
            <h2 className="title">인증 완료</h2>
            <span>잠시 후 창이 닫힙니다.</span>
            <ul className="dots">
              <li className="dot"></li>
            </ul>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Oauth2;
