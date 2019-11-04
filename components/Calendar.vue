<template>
  <div>
    <h2>CALENDAR</h2>
    <a-calendar @panelChange="onPanelChange" />
    <a-button @click="test">TEST</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      v: 'der'
    }
  },
  methods: {
    onPanelChange(value, mode) {
      // console.log(value, mode)
    },
    test() {
      // console.info('test=>', this.$moment().format('DD MMMM YYYY'))
    }
  }
}
</script>
