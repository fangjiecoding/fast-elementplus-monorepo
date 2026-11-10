import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import mUI from "fast-elementplus-components";
import "fast-elementplus-components/style.css";

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		app.use(ElementPlus);
		app.use(mUI);
	},
} satisfies Theme;
