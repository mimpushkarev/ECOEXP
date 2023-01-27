import { memo } from "react";

import AboutComponent from "../../components/About/AboutComponent";
import { AboutUsPageType } from "./types";

const AboutUsPage: AboutUsPageType = () => {
  return <AboutComponent />;
};

export default memo(AboutUsPage);
