import { renderNotFound } from '@ice/stark-app';
import BasicLayout from '@/layouts/BasicLayout';

import Detail from '@/pages/Detail';
import List from '@/pages/List';

import iceList from '@/pages/iceList';
import storeTest from '@/pages/storeTest';
import customerInformation from '@/pages/customerInformation';
import portrait from '@/pages/portrait';
import createUser from '@/pages/createUser';
import from from '@/pages/from';


const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        exact: true,
        component: iceList,
      },
      // {
      //   path: '/detail',
      //   component: Detail,
      // },
      {
        path: '/List',
        component: List,
      },
      {
        path: '/storeTest',
        component: storeTest,
      },
      {
        path:'/customerInformation',
        component:customerInformation,
      },{
        path:'/portrait',
        component:portrait,

      },{
        path:'/createUser',
        component:createUser,
      },{
        path:'/from',
        component:from,
      }
      // {
      //   path: '*',
      //   component: () => {
      //     return renderNotFound();
      //   },
      // },
    ],
  },
];

export default routerConfig;
