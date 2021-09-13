import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Message from "element-ui/packages/message/src/main";
// eslint-disable-next-line no-unused-vars
import {clearStore, getStore, setStore} from "../config/store";

Vue.use(Vuex)

export default new Vuex.Store({
  //state就是共享的数据
  state: {
    user: {
      // username: null,
      // password: null,
      // realName: null,
      // id: null,
      // avatar: null,
      // addressList: null,
      // access_token: null,
      // refresh_token: null,
      username:getStore({name:'username'})||'',
      password:getStore({name:'password'})||'',
      realName:getStore({name:'realName'})||'',
      id:getStore({name:'id'})||'',
      avatar:getStore({name:'avatar'})||'',
      address:getStore({name:'address'})||'',
      accessToken:getStore({name:'accessToken'})||'',
      refreshToken:getStore({name:'refreshToken'})||'',
    },
    shopCart:[],
    savedAccount:getStore({name:'savedAccount'})||{save:false,account:{},autoLogin:false}
  },
  //当我们直接调用store.state中的数据时, 会不可避免的产生数据安全的问题, 有时候出了错,我们根本不知道是谁修改了这个数据
  //所以, 我们应该使用get和set, 也就是getters和mutations+actions
  //state中的每一个对象都应该有对应的getter
  getters: {
    userInfo: state => {
      return state.user
    },
    username: state => {
      return state.user.username
    },
    password: state => {
      return state.user.password
    },
    realName: state => {
      return state.user.realName
    },
    id: state => {
      return state.user.id
    },
    avatar: state => {
      return state.user.avatar
    },
    addressList: state => {
      return state.user.addressList
    },
    access_token: state => {
      return state.user.access_token
    },
    refresh_token: state => {
      return state.user.refresh_token
    },
    shopCart: state => {
      return state.shopCart
    }
  },
  //更改store中的数据唯一的方式就是 提交 mutation
  //mutations里面写的是一个个修改数据的方法
  mutations: {
    //每个mutation中的第一参数都应该是state
    SER_USER_INFO(state,userInfo) {
      state.user = userInfo
    },
    SER_USERNAME(state,username) {
      state.user.username = username
      setStore({name:'username',content: state.user.username,type:'session'})
    },
    SER_PASSWORD(state,password) {
      state.user.password = password
      setStore({name:'password',content: state.user.password,type:'session'})
    },
    SET_REAL_NAME(state,realName) {
      state.user.realName = realName
      setStore({name:'realName',content: state.user.realName,type:'session'})
    },
    SET_ID(state,id) {
      state.user.id = id
      setStore({name:'id',content: state.user.id,type:'session'})
    },
    SET_AVATAR(state,avatar) {
      state.user.avatar = avatar
      setStore({name:'avatar',content: state.user.avatar,type:'session'})
    },
    SET_ADDRESS_LIST(state,addressList) {
      state.user.addressList = addressList
      setStore({name:'address',content: state.user.address,type:'session'})
    },
    SET_ACCESS_TOKEN(state,access_token) {
      state.user.access_token = access_token
      setStore({name:'accessToken',content: state.user.accessToken,type:'session'})
    },
    SET_REFRESH_TOKEN(state,refresh_token) {
      state.user.refresh_token = refresh_token
      setStore({name:'refreshToken',content: state.user.refreshToken,type:'session'})
    },
    SET_SHOP_CART(state,shopCart) {
      state.shopCart = shopCart
    },
    SAVE_ACCOUNT(state,savedAccount){
      state.savedAccount=savedAccount
      setStore({name:'savedAccount',content:state.savedAccount,type:'local'})
    },
  },
  //action里面写的是很多mutations的集合
  //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
  //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
  actions: {
    login({ commit},loginForm) {
      //action 是异步的，所以我们发返回一个Promise工厂函数，在promise中有两个参数,
      // resolve是所有被序列化操作执行之后的方法，表示promise正常结束
      //(resolve,reject))reject是被序列化操作出现异常后的一个捕捉，相当于是try catch中的catch
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve,reject) =>{
        setTimeout(() =>{
          axios.post(
              '/api/userInfo',
              {
                username: loginForm.username,
                password: loginForm.password
              }
          ).then((response)=> {
            //response响应对象是ajax异步请求这个操作中的响应对象，其中的成员变量除了数据data之外，
            //其他配置config,请求头headers，请求request，也存在于mock的response请求对象中
            const data = response.data;
            if (data.error_description){
              Message({
                message: data.error_description,
                type: 'error'
              })
            }else {
              commit('SER_USERNAME', data.data.username)
              commit('SER_PASSWORD', data.data.password)
              commit('SET_REAL_NAME', data.data.realName)
              commit('SET_ID', data.data.id)
              commit('SET_AVATAR', data.data.avatar)
              commit('SET_ADDRESS_LIST', data.data.addressList)
              commit('SET_ACCESS_TOKEN', data.data.access_token)
              commit('SET_REFRESH_TOKEN', data.data.refresh_token)
              if(this.state.savedAccount.save){
                let saveAccount={
                  save: this.state.savedAccount.save,
                  account: {username:data.data.username,password:data.data.password},
                  autoLogin: this.state.savedAccount.autoLogin
                }
                commit('SAVE_ACCOUNT',saveAccount)
              }
              Message.success({message: data.success_description,type: 'success'})
            }
            resolve();
          }).catch((err) =>{
            Message.error({message: err,type: 'error'})
          })
          let shopCart = [
              {
                name: '联想ThinkBook 14 酷睿版 14英寸轻薄笔记本电脑 100%sRGB高',
                imgUrl: 'https://img12.360buyimg.com/n5/s54x54_jfs/t1/199280/33/4920/161814/6127123dE49759458/bc535ccb80a0f933.jpg',
                category: 'i5-1135G7 16G 512G 锐炬显卡 14英寸',
                price: '5499.00',
                count: '1',
                checked: false
              },
            {
              name: 'Apple iPad Air 10.9英寸 平板电脑（ 2020年新款 64G WLAN版/A14芯片 ）',
              imgUrl: 'https://img10.360buyimg.com/n0/s80x80_jfs/t1/111952/24/18007/46901/5f616ea4E7891ecc6/11b385fe3e994d05.jpg.dpg',
              category: '天蓝色 WLAN版 64G',
              price: '4799.00',
              count: '1',
              checked: false
            },
            {
              name: 'Apple Pencil 一代手写笔MK0C2CH(适用2020/2019款10.2英）',
              imgUrl: 'https://img30.360buyimg.com/n0/s80x80_jfs/t22261/303/1092680464/16580/fb734e0c/5b1f39c1Ndec00e2f.jpg.dpg',
              category: 'Apple Pencil 一代(适用mini5/Air3/1',
              price: '728.00',
              count: '1',
              checked: false
            }
          ]
          commit('SET_SHOP_CART',shopCart)
        },1300)
      })
    },
    logout({ commit }) {
      return new Promise((resolve) =>{
        setTimeout(() =>{
          commit('SER_USERNAME', '')
          commit('SER_PASSWORD', '')
          commit('SET_REAL_NAME', '')
          commit('SET_ID', '')
          commit('SET_AVATAR', '')
          commit('SET_ADDRESS_LIST', '')
          commit('SET_ACCESS_TOKEN', '')
          commit('SET_REFRESH_TOKEN', '')
          resolve()
        })
      })

    }
  },
  modules: {
  }
})
