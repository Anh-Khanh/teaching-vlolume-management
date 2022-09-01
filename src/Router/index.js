import Home from "../Page/Home"
import Authentication from "../Page/Authentication";
import ViewTable from "../Components/ViewTable";
export const publicRouters = [
  { path: "/authentication", component: Authentication },
  { path: "/", component: Home },
  { path: "/report", component: ViewTable },
];
export const privateRouters = [    
];