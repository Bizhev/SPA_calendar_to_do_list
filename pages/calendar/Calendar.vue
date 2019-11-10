<template>
  <div>
    <h2>TO DO LIST IN CALENDAR</h2>
    <a-calendar v-model="date" mode="month">
      <div slot="dateCellRender" slot-scope="value">
        <a-button
          size="small"
          type="primary"
          icon="plus"
          @click="openFormAdd(value)"
        />

        <ul class="events">
          <li v-for="item in getToDoList(value)" :key="item.date">
            <span>
              <a-button
                size="small"
                type="primary"
                icon="edit"
                @click="openFormEdit(item)"
              />
              <a-button
                type="primary"
                icon="minus"
                size="small"
                @click="
                  removeToDo(value.format('YYYY-MM-DD ') + getTime(item.date))
                "
              ></a-button>
              {{ getTime(item.date) + item.name }}
            </span>
          </li>
        </ul>
      </div>
    </a-calendar>

    <!-- ADD TODOLIST -->
    <a-modal v-model="isFormAddToDo" title="Add todo" @ok="saveAddToDo">
      <p>
        <label>
          Название:
          <a-input v-model="newToDoList.name" placeholder="Type your todo" />
        </label>
      </p>
      <p>
        <label>
          Описание:
          <a-textarea
            v-model="newToDoList.description"
            placeholder="Description todo..."
            :rows="4"
          />
        </label>
      </p>
      <p>
        <label>
          Выбор времени:
          <a-time-picker
            v-model="newToDoList.time"
            placeholder=""
            format="HH:mm"
          />
        </label>
      </p>
      {{ $moment(newToDoList.date).format('DD.MM.YYYY') + ' в ' }}
      {{ newToDoList.time.format('HH:mm') }}
    </a-modal>
    <!--//////////  -->

    <!-- EDIT TODOLIST -->
    <a-modal v-model="isFormEditToDo" title="Edit todo" @ok="saveEditToDo">
      <p>
        <label>
          Название:
          <a-input v-model="editToDoList.name" placeholder="Type your todo" />
        </label>
      </p>
      <p>
        <label>
          Описание:
          <a-textarea
            v-model="editToDoList.description"
            placeholder="Description todo..."
            :rows="4"
          />
        </label>
      </p>
      <p>
        <label>
          Выбор времени:
          <a-time-picker
            v-model="editToDoList.time"
            placeholder=""
            format="HH:mm"
          />
        </label>
      </p>
      {{ $moment(editToDoList.date).format('DD.MM.YYYY') + ' в ' }}
      {{ editToDoList.time.format('HH:mm') }}
    </a-modal>
    <!--//////////  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: null,
      isFormAddToDo: false,
      isFormEditToDo: false,
      newToDoList: {
        date: null,
        time: this.$moment(),
        name: '',
        description: ''
      },
      editToDoList: {
        date: null,
        time: this.$moment(),
        name: '',
        description: ''
      },
      toDoList: [
        {
          date: '2019-11-10 13:00',
          name: 'Пойти на митап',
          description: 'Очень полезная инфа по фронт разработке'
        },
        {
          date: '2019-11-10 15:00',
          name: 'Кофебрейк',
          description: 'Очень полезная инфа по фронт разработке'
        },
        {
          date: '2019-11-11 11:00',
          name: 'Зайти на AliExpress 11.11',
          description: 'Большие скидки, нужно технику купить'
        }
      ]
    }
  },
  methods: {
    removeToDo(datetime) {
      this.toDoList = this.toDoList.filter(
        (e) => !this.$moment(e.date, 'YYYY-MM-DD HH:mm').isSame(datetime)
      )
    },
    openFormAdd(val) {
      this.newToDoList.date = val.format('YYYY-MM-DD')
      this.newToDoList.name = ''
      this.newToDoList.description = ''
      this.isFormAddToDo = true
    },
    openFormEdit(toDo) {
      this.editToDoList.date = toDo.date
      this.editToDoList.time = this.$moment(toDo.date, 'YYYY-MM-DD HH:mm')
      this.editToDoList.name = toDo.name
      this.editToDoList.description = toDo.description
      this.isFormEditToDo = true
    },
    saveAddToDo() {
      const newDate =
        this.newToDoList.date + ' ' + this.newToDoList.time.format('HH:mm')

      const oldToDo = this.toDoList.filter((e) =>
        this.$moment(e.date, 'YYYY-MM-DD HH:mm').isSame(newDate)
      )
      if (oldToDo.length > 0) {
        this.$message.warning('На это время уже что то запланировано!')
      } else {
        this.toDoList.push({
          name: this.newToDoList.name,
          description: this.newToDoList.description,
          date: newDate
        })
      }

      this.isFormAddToDo = false
    },
    saveEditToDo() {
      const newDate = this.editToDoList.date
      this.removeToDo(newDate)
      this.toDoList.push({
        name: this.editToDoList.name,
        description: this.editToDoList.description,
        date: newDate
      })
      this.isFormEditToDo = false
    },
    getMonthData(value) {
      if (value.month() === 8) {
        return 1394
      }
    },
    getTime(datetime) {
      return this.$moment(datetime, 'YYYY-MM-DD HH:mm').format('HH:mm') + ' '
    },

    getToDoList(dateTime) {
      return this.toDoList.filter((e) =>
        this.$moment(e.date, 'YYYY-MM-DD').isSame(dateTime, 'day')
      )
    }
  }
}
</script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
