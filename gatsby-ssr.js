import React from 'react';
import Terser from 'terser';
import App from './App';
import {
	COLORS,
	COLOR_MODE_KEY,
	INITIAL_COLOR_MODE_CSS_PROP
} from './src/constants/theme';
import './src/css/style.css';

export const wrapPageElement = ({ element }) => {
	return <App>{element}</App>;
};

function setColorsByTheme() {
	let colorMode = 'light';
	let colors = '🌈';
	let colorModeKey = '🔑';
	let colorModeCssProp = '👀';
	const persistedColorPreference = window.localStorage.getItem(colorModeKey);
	const hasPersistedPreference = typeof persistedColorPreference === 'string';

	const mql = window.matchMedia('(prefers-color-scheme: dark)');
	const hasMediaQueryPreference = typeof mql.matches === 'boolean';

	if (hasPersistedPreference) {
		colorMode = persistedColorPreference;
	} else {
		colorMode = hasMediaQueryPreference ? 'dark' : 'light';
	}

	let root = document.documentElement;

	root.style.setProperty(colorModeCssProp, colorMode);

	Object.entries(colors).forEach(([ name, colorByTheme ]) => {
		const cssVarName = `--clr-${name}`;

		root.style.setProperty(cssVarName, colorByTheme[colorMode]);
	});
}

const MagicScriptTag = () => {
	const boundFn = String(setColorsByTheme)
		.replace("'🌈'", JSON.stringify(COLORS))
		.replace('🔑', COLOR_MODE_KEY)
		.replace('👀', INITIAL_COLOR_MODE_CSS_PROP);

	let codeToRunOnClient = `(${boundFn})()`;

	codeToRunOnClient = Terser.minify(codeToRunOnClient).code;

	return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};
export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents(<MagicScriptTag />);
};
