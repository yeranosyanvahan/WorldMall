import {lazy} from 'react';
import './page.css'

const Signup    = lazy(() => import('./Forms/Signup.js'))
const Signin    = lazy(() => import('./Forms/Signin.js'))
const Feedback  = lazy(() => import('./Forms/Feedback.js'))

const Contactus = lazy(() => import('./Text/Contactus.js'))
const Policy    = lazy(() => import('./Text/Policy.js'))
const Aboutus   = lazy(() => import('./Text/Aboutus.js'))
const Thanks    = lazy(() => import('./Text/Thanks.js'))
const Sorry     = lazy(() => import('./Text/Sorry.js'))

const Main      = lazy(() => import('./Main.js'))
const Page      = lazy(() => import('./Page.js'))
const Cart      = lazy(() => import('./Cart.js'))
const Checkout  = lazy(() => import('./Checkout.js'))

export {Main, Aboutus, Page, Signin, Signup, Feedback, Contactus, Policy, Cart, Sorry, Thanks, Checkout};
