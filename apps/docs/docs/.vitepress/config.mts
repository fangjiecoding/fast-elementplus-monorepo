import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "fast-elementplus-components",
	description: "A VitePress Site",
	base: "/",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "首页", link: "/intro/" }],

		sidebar: [
			{
				text: "介绍",
				link: "/intro/",
			},
			{
				text: "快速上手",
				link: "/quickStart/",
			},
			{
				text: "图表选择器",
				link: "/chooseIcon/",
			},
			{
				text: "省市区选择",
				link: "/chooseArea/",
			},
			{
				text: "趋势标记",
				link: "/trend/",
			},
			{
				text: "时间选择",
				link: "/chooseTime/",
			},
			{
				text: "通知菜单",
				link: "/notification/",
			},
			{
				text: "导航菜单",
				link: "/menu/",
			},
			{
				text: "城市选择",
				link: "/chooseCity/",
			},
			{
				text: "进度条",
				link: "/progress/",
			},
			{
				text: "日历",
				link: "/calendar/",
			},
			{
				text: "表单",
				link: "/form/",
			},
			{
				text: "弹出框表单",
				link: "/modalForm/",
			},
			{
				text: "表格",
				link: "/table/",
			},
		],

		socialLinks: [
			{
				icon: "github",
				link: "https://fangjiecoding.github.io/fast-elementplus-components--doc/",
			},
		],
	},
});
