import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../layouts/layout/Layout'

Vue.use(Router)

const _import = file => () => import('@/pages/' + file + '.vue')

export const constantRouterMap = [
  { path: '/login', component: _import('login/index'), hidden: true },
  { path: '/404', component: _import('error/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    hidden: true,
    redirect: '/system/service'
  },
  { path: '*', redirect: '/404', hidden: true },

  {
    path: '/system',
    component: Layout,
    redirect: '/system/service',
    name: 'System',
    meta: {
      title: '系统信息',
    },
    children: [
      {
        path: 'service',
        name: 'service',
        component: _import('system/service'),
        meta: { title: '服务信息/主机信息' }
      },
      {
        path: 'network',
        name: 'network',
        component: _import('system/network'),
        meta: { title: '网络名' }
      },
      {
        path: 'ipSet',
        name: 'ipSet',
        component: _import('system/ipSet'),
        meta: { title: 'IP设置' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    name: 'user',
    redirect: '/user/userManagement',
    meta: {
      title: '用户'
    },
    children: [
      {
        path: 'userManagement',
        name: 'userManagement',
        component: _import('user/userManagement'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: 'userGroup',
        name: 'userGroup',
        component: _import('user/userGroupManagement'),
        meta: {
          title: '用户组管理'
        }
      },
      {
        path: 'workshop',
        name: 'workshop',
        component: _import('user/workshop'),
        meta: {
          title: '共享文件夹管理'
        }
      }
    ]
  },

  {
    path: '/disk',
    name: 'disk',
    component: Layout,
    redirect: 'disk/diskInfo',
    meta: {
      title: '硬盘信息'
    },
    children: [
      {
        path: 'diskInfo',
        name: 'diskInfo',
        component: _import('disk/diskInfo'),
        meta: {
          title: '磁盘信息'
        }
      },
      {
        path: 'smart',
        name: 'smart',
        component: _import('disk/smart'),
        meta: {
          title: 'S.M.A.R.T'
        }
      },
      {
        path: 'raid',
        name: 'raid',
        component: _import('disk/raid'),
        meta: {
          title: 'RAID'
        }
      },
      {
        path: 'file',
        name: 'file',
        component: _import('disk/file'),
        meta: {
          title: '文件系统'
        }
      }
    ]
  },

  {
    path: '/service',
    name: 'service',
    component: Layout,
    redirect: '/service/nfs',
    meta: {
      title: '服务'
    },
    children: [
      {
        path: 'nfs',
        name: 'nfs',
        component: _import('service/nfs'),
        meta: {
          title: 'NFS'
        }
      },
      {
        path: 'samba',
        name: 'samba',
        component: _import('service/samba'),
        meta: {
          title: 'Samba'
        }
      }
    ]
  }

]

export default new Router({
  linkActiveClass: 'active-link',
  mode: 'history',
  routes: constantRouterMap,
})
