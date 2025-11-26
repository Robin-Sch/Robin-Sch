import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const eslintConfig = [
	{
		ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts', '**/next-env.d.ts', '**/.next/types/**', 'app/types/Api.ts'],
	},
	...compat.extends(
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
		// 'next/core-web-vitals',
		// 'next/typescript'
	),
	{
		plugins: {
			prettier,
			'@typescript-eslint': typescriptEslint,
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},

		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				Atomics: 'readonly',
				SharedArrayBuffer: 'readonly',
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			'prettier/prettier': 2,
			'linebreak-style': 'off',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-explicit-any': 'warn',
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
				},
			],
			// Disable triple slash reference rule for Next.js type files
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
];

export default eslintConfig;
