import { global as globalThis } from '@storybook/global';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const first = Object.keys(MINIMAL_VIEWPORTS)[0];

export default {
  component: globalThis.Components.Button,
  args: {
    label: 'Click Me!',
  },
  parameters: {
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
    },
    chromatic: { disable: true },
  },
};

export const Basic = {
  parameters: {},
};

export const Selected = {
  parameters: {
    viewport: {
      defaultViewport: first,
    },
  },
};

export const Orientation = {
  parameters: {
    viewport: {
      defaultViewport: first,
      defaultOrientation: 'landscape',
    },
  },
};

export const Custom = {
  parameters: {
    viewport: {
      defaultViewport: 'phone',
      viewports: {
        phone: {
          name: 'Phone Width',
          styles: {
            height: '600px',
            width: '100vh',
          },
          type: 'mobile',
        },
      },
    },
  },
};

export const Disabled = {
  parameters: {
    viewport: { disable: true },
  },
};
