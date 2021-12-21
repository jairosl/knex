module.exports = {
    root: true, // Make sure eslint picks up the config at the root of the directory
    parserOptions: {
        ecmaVersion: 2020, // Use the latest ecmascript standard
        sourceType: 'module', // Allows using import/export statements
        ecmaFeatures: {
            jsx: true // Enable JSX since we're using React
        }
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the react version
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src/', 'public']
            }
        }
    },
    env: {
        browser: true, // Enables browser globals like window and document
        amd: true, // Enables require() and define() as global variables as per the amd spec.
        node: true // Enables Node.js global variables and Node.js scoping.
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@next/next/recommended'
    ],
    plugins: ['react-hooks', 'import'],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Use our .prettierrc file as source
        'jsx-a11y/href-no-hash': ['off'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js', '.tsx', '.ts'] }],
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'react/no-danger': 'off',
        'no-return-assign': 'off',
        'no-console': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'warn',
        camelcase: 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
};
