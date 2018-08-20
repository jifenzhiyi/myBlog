const Login = () => import('@/components/login');
const Index = () => import('@/views/Index/index');
// const MeDiv = () => import('@/views/me');

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      login: false,
    },
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      login: true,
    },
  },
];

export default routes;
