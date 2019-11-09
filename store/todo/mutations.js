export default {
  ADD(state, newToDo) {
    const datetime = newToDo.date + newToDo.time.format(' HH:mm')

    if (
      state.list.filter((e) =>
        this.$moment(e.datetime, 'YYYY-MM-DD HH:mm').isSame(datetime)
      ).length > 0
    ) {
      // eslint-disable-next-line
      console.warn('Уже есть задача на это время')
    } else {
      state.list.push({
        datetime,
        description: newToDo.description,
        name: newToDo.name,
        type: newToDo.type
      })
    }
  },
  EDIT(state, payload) {
    state.list.push(payload)
  },
  DELETE(state, datetime) {
    const mass = []

    state.list.forEach((e) => {
      if (!this.$moment(e.datetime, 'YYYY-MM-DD HH:mm').isSame(datetime)) {
        mass.push(e)
      }
    })
    state.list = mass
  }
}
