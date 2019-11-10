<template>
  <div class="container">
    <div style="text-align:left">
      <full-data-task
        v-for="(item, i) in $store.state.todo.list"
        :key="i"
        :data="item"
      ></full-data-task>
      <nuxt-link to="/">back </nuxt-link>
      <a-button type="default" @click="setData">
        Set your localstorage all to do
      </a-button>
      <a-button type="primary" @click="getData">
        Get your localstorage all to do
      </a-button>
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
    setData() {
      localStorage.setItem(
        'toDoList',
        JSON.stringify(this.$store.state.todo.list)
      )
    },
    getData() {
      this.$store.commit(
        'todo/INSERT',
        JSON.parse(localStorage.getItem('toDoList'))
      )
    }
  }
}
</script>
