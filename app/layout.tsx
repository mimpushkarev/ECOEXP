import {memo} from "react";

import "@assets/styles/globalLayout.scss";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

import {RootLayoutType} from "./types";

const RootLayout: RootLayoutType = ({children}) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div className="heightWrapper">{children}</div>
        <Footer />
      </body>
    </html>
  );
};

export default memo(RootLayout);
