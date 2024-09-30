export const routes = [
  {
    // meta: {
    //   breadcrumb: ['Apps > Servidores'],
    //   permission: 'listado_servidores',
    //   group: 'Servidores',
    //   icon: 'pi pi-server',
    //   title: 'Listado servidores'
    // },
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue')
  }
]
