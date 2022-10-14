import {createRouter, createWebHistory} from "vue-router";

import CalendarView from "./pages/CalenderView";
import TestRouter from "./pages/TestRouter";
import HomeView from "./pages/HomeView";
import MarkdownView from "./pages/MarkdownView"

const routes = [
	{path: "/", component: HomeView},
	{path: "/calendar", component: CalendarView},
	{path: "/test-router", component: TestRouter},
	{path: "/markdown", component: MarkdownView},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;