<template>
  <a-modal v-model="isForm" title="Add todo" @ok="addToDo">
    <p>
      <label>
        Название:
        <a-input v-model="newName" placeholder="Type your todo" />
      </label>
    </p>
    <p>
      <label>
        Описание:
        <a-textarea
          v-model="newDescription"
          placeholder="Description todo..."
          :rows="4"
        />
      </label>
    </p>
    <p>
      <label>
        Выбор времени:
        <a-time-picker v-model="newTime" placeholder="" format="HH:mm" />
      </label>
    </p>
    {{ $moment(data.date).format('DD.MM.YYYY') + ' в ' }}
  </a-modal>
</template>

<script>
export default {
  props: {
    isForm: {
      type: Boolean
    },
    data: {
      type: Object
    }
  },
  date() {
    return {
      newName: '',
      newType: '',
      typeOptions: [],
      newDescription: '',
      newTime: null
    }
  },
  mounted() {
    console.log('this.data', this.data)
  },
  methods: {
    addToDo() {
      console.log('this', this)
    }
  }
}
</script>
