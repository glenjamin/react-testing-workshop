import React from "react";

import devboard from "devboard";

const definecard = devboard.ns("3. <Footer />");

import DemoBox from "./DemoBox";
import Footer from "../components/Footer";

definecard(
  `
  This component represents the whole footer
  `
);

definecard("Sample",
  <DemoBox>
    <Footer total={5} completed={3} />
  </DemoBox>
);


definecard("Add your own here...");
