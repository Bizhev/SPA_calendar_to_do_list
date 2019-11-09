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
          @click="showAddToDoForm(date)"
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
    <!-- <a-button @click="test">test</a-button> -->

    <a-modal v-model="isShowAddToDo" title="Add todo" @ok="addToDo">
      <p>
        <label>
          Название:
          <a-input v-model="newToDo.name" placeholder="Type your todo" />
        </label>
      </p>
      <p>
        <label>
          Описание:
          <a-textarea
            v-model="newToDo.description"
            placeholder="Description todo..."
            :rows="4"
          />
        </label>
      </p>
      <p>
        <label>
          Важность:
          <a-select style="width: 150px" v-model="newToDo.type">
            <a-select-option
              v-for="(item, i) in typeOptions"
              v-bind:key="i"
              :value="item.value"
            >
              {{ item.text }}
            </a-select-option>
          </a-select>
        </label>
      </p>
      <p>
        <label>
          Выбор времени:
          <a-time-picker v-model="newToDo.time" placeholder="" format="HH:mm" />
        </label>
      </p>
      {{
        $moment(newToDo.date).format('DD.MM.YYYY') +
          ' в ' +
          newToDo.time.format('HH:mm')
      }}
    </a-modal>
  </div>
</template>
<script>
import Task from '@/components/Task'
export default {
  data() {
    return {
      date: this.$moment('2019-11-10'),
      isShowAddToDo: false,
      newToDo: {
        date: null,
        time: this.$moment(),
        type: 'default',
        name: '',
        description: ''
      },
      typeOptions: [
        {
          text: 'зеленная',
          value: 'success'
        },
        {
          text: 'критичная',
          value: 'error'
        },
        {
          text: 'простая задача',
          value: 'default'
        },
        {
          text: 'уже делаю',
          value: 'processing'
        },
        {
          text: 'не обязательно',
          value: 'warning'
        }
      ]
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
    showAddToDoForm(date) {
      this.newToDo = {
        date: this.date.format('YYYY-MM-DD'),
        time: this.$moment('00:00', 'HH:mm'),
        type: 'processing',
        name: '',
        description: ''
      }
      this.isShowAddToDo = true
    },
    addToDo(date) {
      this.$store.commit('todo/ADD', this.newToDo)
      this.isShowAddToDo = false
    },
    editToDo(datetime) {
      console.log('dd')
    },
    deletingTask(datetime) {
      this.$store.commit('todo/DELETE', datetime)
    },
    test() {
      console.log('getToDayTasks', this.getToDayTasks)
    }
  },
  components: {
    Task
  }
}
</script>
