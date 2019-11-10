<template>
  <span>
    <a-badge :status="type" :text="time + ' ' + name" />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
      // success | error | default | processing | warning
    },
    time: {
      type: String,
      default: '00:00'
    },
    name: {
      type: String,
      default: 'Тестовая задача'
    }
  }
}
</script>
