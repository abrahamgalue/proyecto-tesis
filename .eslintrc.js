// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: ['expo', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto'
			}
		],
		'react-hooks/exhaustive-deps': 'off'
	},
	overrides: [
		{
			files: ['tests/**/*', '**/__tests__/**/*.[jt]s?(x)'],
			env: {
				jest: true
			}
		},
		{
			files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ['plugin:testing-library/react']
		}
	]
}
