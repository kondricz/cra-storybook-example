import React from "react";
import Button from "./Button"

import { text } from "@storybook/addon-knobs";

export const success = () => <Button variant="success" label={text("label", "Congratulation")} />;
export const info = () => <Button variant="info" label={text("label", "Upload Video")} />;
export const danger = () => <Button variant="danger" label={text("label", "Delete Account")} />;

const TYPE = '(snapshot)'
export default {
  title: `Components/Button ${TYPE}`,
  component: Button,
  decorators: [],
};
