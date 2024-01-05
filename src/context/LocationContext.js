import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const LocationContext = React.createContext({
  getURL: () => {},
  getQueryParams: () => {},
  getPath: () => {},
  getHashTagParam: () => {},
});

const useLocationInfo = () => {
  const location = useLocation();
  const [queryParams] = useSearchParams();

  const getURL = () => {
    return window.location.href;
  };

  const getQueryParams = () => {
    return decodeURIComponent(queryParams.toString())
      .split("&")
      .reduce((tempObject, param) => {
        const tempArr = param.split("=");
        tempObject[tempArr[0]] = tempArr[1];
        return tempObject;
      }, {});
  };

  const getPath = () => {
    return location.pathname;
  };

  const getHashTagParam = () => {
    return location.hash
      .slice(1)
      .split("&")
      .reduce((tempObject, param) => {
        const tempArr = param.split("=");
        tempObject[tempArr[0]] = tempArr[1];
        return tempObject;
      }, {});
  };

  return { getURL, getQueryParams, getPath, getHashTagParam };
};

const LocationProvider = ({ children }) => {
  const { getURL, getQueryParams, getPath, getHashTagParam } =
    useLocationInfo();

  return (
    <LocationContext.Provider
      value={{ getURL, getPath, getQueryParams, getHashTagParam }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
