<template>
  <div class="container">
    <a-button @click="test()">test</a-button>
    <a-button @click="test2()">commit</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 'test'
    }
  },
  methods: {
    test() {
      console.log('this', this)
    },
    test2() {
      console.log('this', this.$store.commit('todo/ADD_TO_DO', 'sex'))
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
