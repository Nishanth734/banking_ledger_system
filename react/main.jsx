import react from "react";
import reactdom from "react-dom/client";

import approuter  from "./src/app";
import { RouterProvider } from "react-router-dom";

const main=document.querySelector(".main");
const root=reactdom.createRoot(main);
root.render(<RouterProvider router={approuter} />);