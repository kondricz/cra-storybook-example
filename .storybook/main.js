module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs'
    ]
}