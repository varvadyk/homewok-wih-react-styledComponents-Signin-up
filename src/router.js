import React from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

 export const routes=[
    
  {
         path:'/signup',
         component:<SignUp />
     },
     {
        path:'/',
        component:<SignIn />,
         exact: true
    },

  {
    path:'*',
    component: ()=>(<div>page not found</div>),
   
 }
 ];