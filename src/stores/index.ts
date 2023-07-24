import { defineStore, createPinia } from 'pinia'
// import { GlobalState, ThemeConfigProps, AssemblySizeType } from './interface'
// import { DEFAULT_PRIMARY } from '@/config/config'
// import piniaPersistConfig from '@/config/piniaPersist'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { getCommonMenuList } from '@/utils/util'

export const GlobalStore = defineStore("GlobalStore", {
  state: () => {
    return {
      token: "",
      userinfo: {},


    }
  },
  actions: {
    setToken(){
      
    }
  },
  getters: {},

  // 持久化存储
  persist: {
    key: "login",
    paths: ["token", "userinfo",]
  }
})
const store = createPinia()
store.use(piniaPluginPersistedstate)
export default store