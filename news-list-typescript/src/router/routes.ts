import { RouteRecordRaw } from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/news", // 루트 경로로 접근 시 /news로 redirect
  },
  {
    path: "/news",
    name: "news", // name 속성에 "news" 할당
    component: NewsView, // NewsView 컴포넌트를 렌더링
  },
  {
    path: "/ask",
    name: "ask", // name 속성에 "ask" 할당
    component: AskView, // AskView 컴포넌트를 렌더링
  },
  {
    path: "/jobs",
    name: "jobs", // name 속성에 "jobs" 할당
    component: JobsView, // JobsView 컴포넌트를 렌더링
  },
  {
    path: "/user/:id", // 동적 라우팅, :id는 파라미터로 전달됨
    component: UserView, // UserView 컴포넌트를 렌더링
  },
  {
    path: "/item/:id", // 동적 라우팅, :id는 파라미터로 전달됨
    component: ItemView, // ItemView 컴포넌트를 렌더링
  },
];

export default routes;
