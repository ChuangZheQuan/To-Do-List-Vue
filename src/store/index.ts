import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: ["groceries", "laundry"],
  },
  getters: {
    allTasks: (state) => state.db,
  },
  mutations: {
    deleteTask(state, idx: number) {
      state.db.splice(idx, 1);
    },

    editTask(state, payload) {
      //payload includes index and new edit
      state.db[payload[1]] = payload[0];
    },

    addTask(state, newEdit: string) {
      state.db.push(newEdit);
    },
  },
  actions: {},
  modules: {},
});
