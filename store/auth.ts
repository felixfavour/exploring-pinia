import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  /**
   * @returns object with all properties in state
   */
  state: () => {
    return {
      token: '',
      username: '',
      randomCount: 0,
      rememberMe: false
    }
  },
  /**
   * Getters are basically computed properties in a Pinia store context
   * They make use of the initial state values and can be modified to fit the developer's need.
   * They cannot have similar names as state
   * They are accessed in vue templates just like pinia state.
   */
  getters: {
    modUsername: (state) => {
      const strippedUsername = state.username.toLocaleLowerCase().replaceAll(' ', '_')
      if (strippedUsername) {
        return `${strippedUsername}${Math.ceil(Math.random() * 1000)}`
      }
    },
    doubleRandomCount: (state) => state.randomCount * 2
  },
  /**
   * Actions are similar to mutations if you are coming from a Vuex standpoint.
   * Actions can serve as vuex actions and mutations, this means they can house business logic...
   * ...and they can also make asynchronous/network requests to APIs
   */
  actions: {
    setUsername (value: string) {
      this.username = value
    },
    increaseRandomCount () {
      this.randomCount += 1
    }
  },
  /**
   * State is persisted via Cookies interfacing useCookies composables
   * persist property is not recognized by interface
   */
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: 'strict',
      secure: true,
      httpOnly: true
    }),
  }
})
