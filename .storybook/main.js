module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false,
			},
		},
		'@storybook/addon-a11y',
		'@storybook/addon-notes/register',
	],
	framework: '@storybook/html',
	features: {
		storyStoreV7: true,
	},
};
