import { addDecorator, addParameters  } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  });