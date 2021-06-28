import { withKnobs, text } from "@storybook/addon-knobs";
/* eslint-disable import/no-anonymous-default-export */
import { Main } from ".";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs]
};

export const Base = () => (
  <Main
    title={text("Title", "React avançado")}
    description={text("Description", "TypeScript, React, NextJS")}
  />
);
