import { memo } from "react";

import { RootLayoutType } from "./types";

const RootLayout: RootLayoutType = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

export default memo(RootLayout);
