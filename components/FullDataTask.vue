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
      type: Object
    }
  }
}
</script>
