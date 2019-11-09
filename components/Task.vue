<template>
  <span>
    <a-badge :status="type" :text="time + ' ' + name" />
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String
      // success | error | default | processing | warning
    },
    time: {
      type: String
    },
    name: {
      type: String
    }
  }
}
</script>
