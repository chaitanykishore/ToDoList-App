import { createStore } from 'vuex';

const store = createStore({
  state: {
    // Define your application's state here
    user: null,
    isAuthenticated: false
  },
  mutations: {
    // Define mutations to modify the state
    setUser(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    }
  },
  actions: {
    // Define actions to perform asynchronous operations
    loginUser({ commit }, userData) {
      // Example: Call API to authenticate user
      // Upon successful authentication, commit mutation to update user state
      commit('setUser', userData);
    }
  },
  getters: {
    // Define getters to retrieve state or compute derived state
    getUsername(state) {
      return state.user ? state.user.username : 'Guest';
    }
  }
});

export default store;
