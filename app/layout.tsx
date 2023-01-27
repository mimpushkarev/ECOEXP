import {memo} from "react";

import NavigationComponent from "@components/NavBar";

import {RootLayoutType} from "./types";

const RootLayout: RootLayoutType = ({children}) => {
  console.log("test");
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
