import Home from "../Page/Home"
import Authentication from "../Page/Authentication";

export const publicRouters = [
  { path: "/authentication", component: Authentication },
  { path: "/", component: Home },
];
export const privateRouters = [
];