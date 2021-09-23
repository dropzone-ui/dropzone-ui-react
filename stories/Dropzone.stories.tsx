import React from "react";
import Dropzone from "../src/components/dropzone/components/Dropzone/Dropzone";
//import App from "../../example/example";
export default {
  title: "Dropzone",
  component: Dropzone,
};
const Template = (args) => <Dropzone {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  localization: "EN_en",
};