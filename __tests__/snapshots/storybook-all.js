import initStoryshots from '@storybook/addon-storyshots';
 
initStoryshots({
  storyKindRegex: /^(.*?(\bsnapshot\b)[^$]*)$/
});