import sapphirePrettierConfig from '@sapphire/prettier-config';

export default {
	...sapphirePrettierConfig,
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: [
				'README.md',
				'docs/Guide/**/*.mdx',
				'docs/Guide/**/*.md',
				'docs/General/**/*.mdx',
				'docs/General/**/*.md',
				'.github/CONTRIBUTING.md'
			],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 120,
				proseWrap: 'always'
			}
		}
	]
};
