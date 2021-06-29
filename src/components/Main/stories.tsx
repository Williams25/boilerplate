import { withKnobs, text } from "@storybook/addon-knobs";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Main } from "./index";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Base: Story = () => (
  <Main
    title={text("Title", "React avançado")}
    description={text("Description", "TypeScript, React, NextJS")}
  />
);
