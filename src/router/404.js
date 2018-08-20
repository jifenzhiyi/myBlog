const NotFound = () => import('@/components/404');

const routes = [
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
    meta: {
      login: false,
    },
  },
];

export default routes;
