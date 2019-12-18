<template>
  <div class="container">
    <div>
      <div class="day">
        <day />
      </div>
      <div class="day">
        <!--        <day />-->
      </div>
      <div>
        <a href="https://github.com/Bizhev/SPA_calendar_to_do_list">
          See code on github,
        </a>
        <p>
          All to do:
          <b>{{ $store.state.todo.list.length }}</b>
          , you can
          <nuxt-link to="/todo-list">see all todo list</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Day from '@/components/Day'
export default {
  components: {
    Day
  },
  mounted() {
    console.log(this.$store.state.todo)
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
.day {
  display: inline-block;
}
</style>
