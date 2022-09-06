import Home from "../Page/Home"
import Authentication from "../Page/Authentication";
import ViewTable from "../Components/ViewTable";
import DaskBoard from "../Page/DashBoard";
export const publicRouters = [
  { path: "/authentication", component: Authentication },
  { path: "/", component: Home },
  { path: "/report", component: ViewTable },
  { path: "/daskboard", component: DaskBoard },
];
export const privateRouters = [    
];