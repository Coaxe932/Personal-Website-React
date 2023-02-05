import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HiddenURL = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/Swipe");
  }, []);

  return <div />;
};

export default HiddenURL;