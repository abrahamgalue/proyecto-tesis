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
	}
}
