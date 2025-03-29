import type { Preview } from "@storybook/react";
import { withThemeProvider } from "./withThemeProvider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true, // 👈 Enables the table of contents (right sidebar)
    },
  },
};

export default preview;

export const decorators = [withThemeProvider];
