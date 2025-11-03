// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	env: {
		browser: true
	},
	extends: ['expo', 'plugin:@tanstack/query/recommended', '../../.eslintrc.js'],
	plugins: ['testing-library'],
	rules: {
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
