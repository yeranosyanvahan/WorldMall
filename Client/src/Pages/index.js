import React from 'react';

const Main = React.lazy(()=> import('./Main.js'))
const Page = React.lazy(()=> import('./Page.js'))
const Signup = React.lazy(()=> import('./Signup.js'))
const Feedback = React.lazy(()=> import('./Feedback.js'))
const Contactus = React.lazy(()=> import('./Contactus.js'))
const Policy = React.lazy(()=> import('./Policy.js'))
const Aboutus = React.lazy(()=>import('./Aboutus.js'))
const Signin = React.lazy(()=>import('./Signin.js'))
const Cart = React.lazy(() => import('./Cart.js'))

export {Main, Aboutus, Page, Signin, Signup, Feedback, Contactus, Policy, Cart};
