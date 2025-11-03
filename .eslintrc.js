module.exports = {
	root: true,
	env: {
		browser: false,
		node: true
	},
	extends: ['prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }]
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx']
		},
		'import/resolver': {
			typescript: {
				project: ['./tsconfig.json', './apps/*/tsconfig.json']
			},
			node: {
				project: ['./tsconfig.json', './apps/*/tsconfig.json']
			}
		}
	}
}
