import { memo } from "react";

import MainPageComponent from "../components/MainPage/MainPageComponent";
import { MainPageType } from "./types";

const MainPage: MainPageType = () => {
  return <MainPageComponent />;
};

export default memo(MainPage);
