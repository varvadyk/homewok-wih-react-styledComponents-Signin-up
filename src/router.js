import React from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

 export const routes=[
    
  {
         path:'/homewok-wih-react-styledComponents-Signin-up/signup',
         component:<SignUp />
     },
     {
        path:'/homewok-wih-react-styledComponents-Signin-up/',
        component:<SignIn />,
         exact: true
    },

  {
    path:'*',
    component: ()=>(<div>page not found</div>),
   
 }
 ];
