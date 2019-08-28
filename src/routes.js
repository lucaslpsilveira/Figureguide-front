import React from "react";

const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Home = React.lazy(() => import("./pages/Home"));

const Routes = [
  { path: '/', exact:true, name: 'Home', component: Home },
  { path: '/signin', exact:true, name: 'SignIn', component: SignIn },
  { path: '/signup', exact:true, name: 'SignUp', component: SignUp }  
];

export default Routes;
