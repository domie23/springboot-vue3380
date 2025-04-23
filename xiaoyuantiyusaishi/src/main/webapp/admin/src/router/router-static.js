import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import news from '@/views/modules/news/list'
    import richeng from '@/views/modules/richeng/list'
    import saiduichengji from '@/views/modules/saiduichengji/list'
    import saishi from '@/views/modules/saishi/list'
    import saishibaoming from '@/views/modules/saishibaoming/list'
    import saishifenshu from '@/views/modules/saishifenshu/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySaishi from '@/views/modules/dictionarySaishi/list'
    import dictionarySaishiStatus from '@/views/modules/dictionarySaishiStatus/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShijianduan from '@/views/modules/dictionaryShijianduan/list'
    import saishifenshuAdd from '@/views/modules/saishifenshu/add-or-update'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySaishi',
        name: '赛事类型',
        component: dictionarySaishi
    }
    ,{
        path: '/dictionarySaishiStatus',
        name: '赛事状态',
        component: dictionarySaishiStatus
    }
	,{
	    path: '/saishifenshuAdd',
	    name: '添加成绩',
	    component: saishifenshuAdd
	}
	
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShijianduan',
        name: '时间段',
        component: dictionaryShijianduan
    }


    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/richeng',
        name: '日程信息',
        component: richeng
      }
    ,{
        path: '/saiduichengji',
        name: '赛队成绩',
        component: saiduichengji
      }
    ,{
        path: '/saishi',
        name: '赛事信息',
        component: saishi
      }
    ,{
        path: '/saishibaoming',
        name: '赛事报名',
        component: saishibaoming
      }
    ,{
        path: '/saishifenshu',
        name: '赛事成绩',
        component: saishifenshu
      }
    ,{
        path: '/yonghu',
        name: '运动员',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
