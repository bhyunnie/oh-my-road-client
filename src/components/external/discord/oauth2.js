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
  const { getQueryParams } = useContext(LocationContext);
  const { code } = getQueryParams();

  useEffect(() => {
    
    if (status === "error") {
      setStatus("error");
    }
    
    switch(code) {
      case 0 > code && 90 < code: 
      return 'a'
      default: return 'b'
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestBody = new URLSearchParams({
    client_id: process.env.REACT_APP_DISCORD_CLIENT_ID,
    client_secret: process.env.REACT_APP_DISCORD_CLIENT_SECRET,
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.REACT_APP_DISCORD_OAUTH_REDIRECT_URL,
    scope: "identify",
  });
  axios({
    method: "POST",
    url: "https://discord.com/api/oauth2/token",
    data: requestBody.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => {
      console.log(response);
      // TODO
      // 서버에 날려서 확인받기

      setStatus("success");
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
