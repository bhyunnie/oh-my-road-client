import { useContext, useEffect } from "react";
import { LocationContext } from "../../context/LocationContext";

const Oauth2 = () => {
  const { getURL } = useContext(LocationContext);
  console.log(getURL());
  useEffect(() => {}, []);
  return <div></div>;
};

export default Oauth2;
