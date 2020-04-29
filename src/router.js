import React from 'react';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

 export const routes=[
     {
         path:'/',
         component:<SignIn />,
          exact: true
     },

  {
         path:'/signup',
         component:<SignUp />
     },

  {
    path:'*',
    component: ()=>(<div>page not found</div>),
   
 }
 ];