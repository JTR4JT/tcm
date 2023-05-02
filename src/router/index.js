import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Date from "../views/Date.vue"
import Swiper from "../views/swiper.vue"
import Login from "../views/Login.vue"
import Person from "../views/Person.vue"
import PersonDetial from "../views/PersonDetial.vue"
import Cm from "../views/Cm.vue"
import Doctor from "../views/Doctor.vue"
import EchartData from "../views/EchartData.vue"
import AllDoctor from "../views/AllDoctor.vue"
import AllCm from "../views/AllCm.vue"
import Head from "../views/Head.vue"
import CmDetail from "../views/CmDetail.vue"
import DoctorDetail from "../views/DoctorDetail.vue"
import PersonalHealthy from "../views/PersonalHealthy.vue"
import Production from "../views/Production.vue"
import Compare from "../views/echartsview/Compare.vue"
import ComparePie from "../views/echartsview/ComparePie.vue"
import ShopOrder from "../views/ShopOrder.vue"
import Cart from "../views/Cart.vue"
import Reservation from "../views/Reservation.vue"
import CmSearch from "../views/CmSearch.vue"
import DoctorSearch from "../views/DoctorSearch.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/date',
    name: 'date',
    component: Date
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: Swiper
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/person',
    name: 'person',
    component: Person
  },
  {
    path: '/persondetial',
    name: 'persondetial',
    component: PersonDetial
  },
  {
    path: '/cm',
    name: 'cm',
    component: Cm
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: Doctor
  },
  {
    path: '/echartdata',
    name: 'echartdata',
    component: EchartData
  },
  {
    path: '/alldoctor',
    name: 'alldoctor',
    component: AllDoctor
  },
  {
    path: '/allcm',
    name: 'allcm',
    component: AllCm
  },
  {
    path: '/head',
    name: 'head',
    component: Head
  },
  {
    path: '/personalhealthy',
    name: 'personalhealthy',
    component: PersonalHealthy
  },
  {
    path: '/production',
    name: 'production',
    component: Production
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare
  },
  {
    path: '/comparepie',
    name: 'comparepie',
    component: ComparePie
  },
  {
    path: '/cmdetail',
    name: 'cmdetail',
    component: CmDetail
  },
  {
    path: '/doctordetail',
    name: 'doctordetail',
    component: DoctorDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/shoporder',
    name: 'shoporder',
    component: ShopOrder
  },
  {
    path: '/reservation',
    name: 'reservation',
    component: Reservation
  },
  {
    path: '/cmsearch',
    name: 'cmsearch',
    component: CmSearch
  },
  {
    path: '/doctorsearch',
    name: 'doctorsearch',
    component: DoctorSearch
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
