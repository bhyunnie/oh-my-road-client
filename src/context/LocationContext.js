import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const LocationContext = React.createContext({
  getURL: () => {},
  getQueryParams: () => {},
  getPath: () => {},
});

const useLocationInfo = () => {
  const location = useLocation();
  const queryParams = useSearchParams();

  const getURL = () => {
    return location.pathname;
  };

  const getQueryParams = () => {
    return queryParams;
  };

  const getPath = () => {
    return location.pathname.split("/"); // 혹은 필요한 로직으로 URL 경로를 가공
  };

  return { getURL, getQueryParams, getPath };
};

const LocationProvider = ({ children }) => {
  const { getURL, getQueryParams, getPath } = useLocationInfo();

  return (
    <LocationContext.Provider value={{ getURL, getPath, getQueryParams }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
