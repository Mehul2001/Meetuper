import Vue from 'vue'
import Vuex from 'vuex'

import meetups from './modules/meetups'
import threads from './modules/threads'
import categories from './modules/categories'
import auth from './modules/auth'
import stats from './modules/stats'
<<<<<<< HEAD
=======
import meta from './modules/meta'
>>>>>>> 7affea364b6060f2c8b68c5f77151d6220ba498d

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        meetups,
        categories,
        threads,
        auth,
<<<<<<< HEAD
        stats
=======
        stats,
        meta
>>>>>>> 7affea364b6060f2c8b68c5f77151d6220ba498d
    },
    mutations: {
        setItems(state, { resource, items }) {
            state[resource].items = items
        },
        setItem(state, { resource, item }) {
            state[resource].item = item
        },
        addItemToArray(state, { item, index, resource }) {
            Vue.set(state[resource].items, index, item)
        }
    }
})