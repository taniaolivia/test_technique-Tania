import {createStore} from "vuex"
import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default createStore({
    plugins: [vuexLocal.plugin],
    state: {
        myForm: {}
    },
    mutations: {
        setMyForm(state, myForm){
            state.myForm = myForm
        },
    }
})