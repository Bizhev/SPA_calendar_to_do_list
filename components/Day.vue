<template>
  <div>
    <!-- :title="date.format('DD MMMM YYYY')" -->
    <a-card style="min-width: 200px;text-align: left">
      <a-date-picker
        v-model="date"
        format="DD MMMM YYYY"
        style="margin-bottom: 20px"
      />
      <a-tooltip>
        <template slot="title">
          add todo
        </template>
        <a-button
          size="small"
          type="primary"
          icon="plus"
          shape="circle"
          @click="addToDo(date)"
        />
      </a-tooltip>
      <p v-for="(task, i) in getToDayTasks" v-bind:key="i">
        <task
          :type="task.type"
          :time="$moment(task.datetime, 'YYYY-MM-DD HH:mm').format('HH:mm')"
          :name="task.name"
        ></task>
        <a-tooltip placement="left">
          <template slot="title">
            edit todo
          </template>
          <a-button
            size="small"
            type="primary"
            icon="edit"
            shape="circle"
            @click="editToDo(task.datetime)"
          />
        </a-tooltip>
        <a-tooltip placement="right">
          <template slot="title">
            remove todo
          </template>
          <a-button
            size="small"
            type="primary"
            icon="minus"
            shape="circle"
            @click="deletingTask(task.datetime)"
          />
        </a-tooltip>
      </p>
    </a-card>
    <a-button @click="test">test</a-button>

    <edit-form-to-do
      :is-form="isShowEditForm"
      :data="{ a: 'a' }"
    ></edit-form-to-do>

    <add-form-to-do
      :is-form="isShowAddForm"
      :data="{ a: 'a' }"
    ></add-form-to-do>
  </div>
</template>
<script>
import Task from '@/components/Task'
import EditFormToDo from '@/components/EditFormToDo'
import AddFormToDo from '@/components/AddFormToDo'
export default {
  data() {
    return {
      date: this.$moment('2019-11-10'),
      isShowEditForm: false,
      isShowAddForm: false
    }
  },
  computed: {
    getToDayTasks() {
      return this.$store.state.todo.list.filter((e) =>
        this.$moment(e.datetime).isSame(this.date, 'day')
      )
    }
  },
  methods: {
    addToDo(date) {
      this.isShowAddForm = true
    },
    editToDo(datetime) {
      this.isShowAddForm = true
    },
    deletingTask(datetime) {
      this.$store.commit('todo/DELETE', datetime)
    },
    test() {
      console.log('getToDayTasks', this.getToDayTasks)
    }
  },
  components: {
    Task,
    EditFormToDo,
    AddFormToDo
  }
}
</script>
