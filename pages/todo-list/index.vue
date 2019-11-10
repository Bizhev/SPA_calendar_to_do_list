<template>
  <div class="container">
    <div style="text-align:left">
      <full-data-task
        v-for="(item, i) in $store.state.todo.list"
        :key="i"
        :data="item"
      ></full-data-task>
      <nuxt-link to="/">back </nuxt-link>
      <a-button
        type="default"
        @click="$store.commit('todo/SET_LOCALSTORAGE_LIST')"
      >
        Set your localstorage all to do
      </a-button>
      <a-button
        type="primary"
        @click="$store.commit('todo/GET_LOCALSTORAGE_LIST')"
      >
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
  }
}
</script>
