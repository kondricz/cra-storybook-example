import React from "react";
import Title from "./Title"

import { text as textSource } from "@storybook/addon-knobs";

export const main = () => <Title variant="main" title={textSource("label", "Congratulation")} />;
export const sub = () => <Title variant="sub" title={textSource("label", "Upload Video")} />;
export const text = () => <Title variant="text" title={textSource("label", "Delete Account")} />;


const TYPE = '(snapshot)'
export default {
  title: `Components/Title ${TYPE}`,
  component: Title,
  decorators: [],
};
