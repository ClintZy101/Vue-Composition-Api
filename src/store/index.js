// making the state reactive would make any component that has the state to be updated right away
// next in order to make the store available anywhere: import it to root component: App.vue
// readonly method from vue: it protects the state from any mutations triggered from outside the store


import { reactive, readonly } from 'vue';

const state = reactive({
    counter: 0,
    colorCode: 'red'
})

const methods = {
      increaseCounter() {
      state.counter ++
    },
     decreaseCounter() {
      state.counter --
    },
    setColorCode(val){
        state.colorCode = val
    }
}

const getters = {
    counterSquared() {
        return state.counter * state.counter
    }
}

export default {
    state: readonly(state),
    methods,
    getters,
}