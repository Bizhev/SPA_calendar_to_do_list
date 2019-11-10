<template>
  <p>
    <a-badge
      :status="data.type"
      :text="$moment(data.datetime).format('DD.MM.YYYY в HH:mm ') + data.name"
    />
  </p>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          type: 'default',
          datetime: this.$moment().format('YYYY-MM-DD HH:mm'),
          name: '???????? ??????'
        }
      }
    }
  }
}
</script>
