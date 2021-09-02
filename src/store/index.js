import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //state就是共享的数据
  state: {
    user: {
      username: null,
      password: null,
      realName: null,
      id: null,
      avatar: null,
      addressList: null,
      access_token: null,
      refresh_token: null,
    },
    shopCart:[]
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
    },
    SER_PASSWORD(state,password) {
      state.user.password = password
    },
    SET_REAL_NAME(state,realName) {
      state.user.realName = realName
    },
    SET_ID(state,id) {
      state.user.id = id
    },
    SET_AVATAR(state,avatar) {
      state.user.avatar = avatar
    },
    SET_ADDRESS_LIST(state,addressList) {
      state.user.addressList = addressList
    },
    SET_ACCESS_TOKEN(state,access_token) {
      state.user.access_token = access_token
    },
    SET_REFRESH_TOKEN(state,refresh_token) {
      state.user.refresh_token = refresh_token
    },
    SET_SHOP_CART(state,shopCart) {
      state.shopCart = shopCart
    }
  },
  //action里面写的是很多mutations的集合
  //比如用户登录之后,会从后台获得一个用户信息对象, 这个对象包括了用户名,id等基础信息, 和用户的姓名等拓展信息, 以及用户凭证等安全信息
  //这些信息需要每个都set进store中的user对象中, 但是每个信息的修改方法都已经在mustaions里写死了, 我们要做的其实是创建一个新的action,在其中提交多个mutation
  actions: {
    login({ commit }) {
      //action 是异步的，所以我们发返回一个Promise工厂函数，在promise中有两个参数,
      // resolve是所有被序列化操作执行之后的方法，表示promise正常结束
      //(resolve,reject))reject是被序列化操作出现异常后的一个捕捉，相当于是try catch中的catch
      return new Promise((resolve) =>{
        setTimeout(() =>{
          let userInfo = {
            username : "QH",
            password : "abc2000513",
            realName : "QH",
            id: "1147824",
            avatar: "https://video.codeseeding.com/image/default/AE03865608444CB389BA0334CD67F1AC-6-2.jpg",
            addressList:["广东省广州市天河区棠下街道快乐星球","甘肃省兰州市七里河区银光路宝宝花园5-1"],
            access_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal",
            refresh_token: "kjandkawdlawkdbawnodawdlkawldkmawlkdmalwmdawdlal"
          }
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
          commit('SER_USERNAME', userInfo.username)
          commit('SER_PASSWORD', userInfo.password)
          commit('SET_REAL_NAME', userInfo.realName)
          commit('SET_ID', userInfo.id)
          commit('SET_AVATAR', userInfo.avatar)
          commit('SET_ADDRESS_LIST', userInfo.addressList)
          commit('SET_ACCESS_TOKEN', userInfo.access_token)
          commit('SET_REFRESH_TOKEN', userInfo.refresh_token)
          resolve()
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
        },500)
      })

    }
  },
  modules: {
  }
})
