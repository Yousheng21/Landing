import type { Meta, StoryObj } from "@storybook/react";

import { ButtonTheme } from "./ButtonTheme";

const meta: Meta<typeof ButtonTheme> = {
  component: ButtonTheme,
};

export default meta;
type TStory = StoryObj<typeof ButtonTheme>;

export const Primary: TStory = {};
