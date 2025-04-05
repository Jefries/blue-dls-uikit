// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
const preview = {
  parameters: {
    // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
    actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;
