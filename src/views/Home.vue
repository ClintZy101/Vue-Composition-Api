<template>
  <div class="home">
    <div
    :style="{color: store.state.colorCode}"
      class="counter">{{
      store.state.counter
      }}</div>
    <div class="counter-squared">{{ store.state.counter }}
      <sup>2</sup>
      <!-- in vuex counterSquared() is written as counterSquared -->
      = {{ store.getters.counterSquared() }}
      </div>

    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCounter">+</button>
    </div>
    <div>
      <input
      v-model="colorCode"
      placeholder="Enter Color Code"
        type="text">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, inject, computed } from "vue";

export default {
  name: "Home",
  setup() {
    const store = inject("store");

    // Local way of state management:
    // let counter = ref(0)

    // const increaseCounter = () => {
    //   counter.value ++
    // }

    // const decreaseCounter = () => {
    //   counter.value --
    // }

    const colorCode = computed({
      get(){
        return store.state.colorCode
      },
      set(val){
        // console.log(val)
        store.methods.setColorCode(val)
      }

    })

    return {
      store,
      colorCode,
    };
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
  cursor: pointer;
}
input {
  height: 20px;
  margin-top: 10px;
}
</style>