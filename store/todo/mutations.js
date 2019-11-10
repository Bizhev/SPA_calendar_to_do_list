export default {
  ADD(state, newToDo) {
    const datetime = newToDo.date + newToDo.time.format(' HH:mm')

    if (
      state.list.filter((e) =>
        this.$moment(e.datetime, 'YYYY-MM-DD HH:mm').isSame(datetime)
      ).length > 0
    ) {
      // eslint-disable-next-line
      console.warn('Уже есть задача на это время...')
      // this.commit('todo/EDIT', { datetime, newToDo })
    } else {
      state.list.push({
        datetime,
        description: newToDo.description,
        name: newToDo.name,
        type: newToDo.type
      })
    }
  },
  EDIT(state, { datetime, newToDo }) {
    const mass = []
    state.list.forEach((e) => {
      if (this.$moment(e.datetime, 'YYYY-MM-DD HH:mm').isSame(datetime)) {
        mass.push({
          datetime,
          description: newToDo.description,
          name: newToDo.name,
          type: newToDo.type
        })
      } else {
        mass.push(e)
      }
    })
    state.list = mass
  },
  DELETE(state, datetime) {
    state.list = state.list.filter(
      (e) => !this.$moment(e.datetime, 'YYYY-MM-DD HH:mm').isSame(datetime)
    )
  },
  SET_LOCALSTORAGE_LIST(state, list) {
    localStorage.setItem('toDoList', JSON.stringify(state.list))
  },
  GET_LOCALSTORAGE_LIST(state, list) {
    state.list = JSON.parse(localStorage.getItem('toDoList'))
  }
}
