import {memo} from "react";

import NavigationComponent from "@components/NavBar";
import "@assets/styles/globalLayout.scss";

import {RootLayoutType} from "./types";

const RootLayout: RootLayoutType = ({children}) => {
  return (
    <html lang="en">
      <body>
        <NavigationComponent />
        {children}
      </body>
    </html>
  );
};

export default memo(RootLayout);
