<template>
  <div class="container">
    <div style="text-align:left">
      <full-data-task
        v-for="(item, i) in $store.state.todo.list"
        :key="i"
        :data="item"
      ></full-data-task>
      <nuxt-link to="/">back </nuxt-link>
    </div>
  </div>
</template>
<script>
import FullDataTask from '@/components/FullDataTask'
export default {
  components: {
    FullDataTask
  },
  data() {
    return {
      a: 'test'
    }
  },
  methods: {
    // test() {
    //   console.log('this', this)
    // },
    // test2() {
    //   console.log('this', this.$store.commit('todo/ADD_TO_DO', 'sex'))
    // }
  }
}
</script>
