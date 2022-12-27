<template>
  <h2>pinia test</h2>
  <div> count : {{ count }} / doubleCount : {{ doubleCount }}/ doubleCount getter in template : {{ store.doubleCount(24) }} </div>
  <button @click="store.increment(5)">Increment</button>
</template>

<script setup>
  import { storeToRefs } from "pinia"
  import { computed } from "vue";
  import { useCounterStore } from './store/counter'
  const store = useCounterStore()
  store.count++
  let { count } = storeToRefs(store)
  count.value++
  // store.$reset()
  store.$patch({
    count: store.count + 100
  })
  const doubleCount = computed(() => store.doubleCount(2))
  // function increment() {
  //   store.increment(5)
  // }
</script>
