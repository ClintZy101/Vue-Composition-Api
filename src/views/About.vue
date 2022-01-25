<template>
  <div>Counter Works Anywhere</div>
  <h2>{{ store.state.counter }}</h2>
</template>

<script>
import { inject } from 'vue'
export default {
setup(){
  const store = inject('store')

  return {
    store
  }
}
}
</script>

<style>

</style>