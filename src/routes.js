import React from "react";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Posts = React.lazy(() => import("./pages/Posts"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Home = React.lazy(() => import("./pages/Home"));

const routes = [
  { path: '/', exact:true, name: 'Home', component: Home },
  { path: '/admin', exact:true, name: 'SignIn', component: Dashboard },
  { path: '/admin/posts', exact:true, name: 'SignIn', component: Posts },
  { path: '/signin', exact:true, name: 'SignIn', component: SignIn },
  { path: '/signup', exact:true, name: 'SignUp', component: SignUp }  
];

export default routes;
