import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
	namespace: 'mayo-design-system',
	buildEs5: 'prod',
	globalStyle: 'src/global/global.scss',
	outputTargets: [
		{
		type: 'dist',
		esmLoaderPath: '../loader',
		},
		{
		type: 'dist-custom-elements',
		},
		{
		type: 'docs-readme',
		},
		{
		type: 'www',
		serviceWorker: null, // disable service workers
		},
	],
	plugins: [
		sass()
	],
};
