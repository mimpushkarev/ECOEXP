import {memo} from "react";

import NavBar from "@components/NavBar";
import Footer from "@components/Footer/Footer";

import "@assets/styles/globalLayout.scss";

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
