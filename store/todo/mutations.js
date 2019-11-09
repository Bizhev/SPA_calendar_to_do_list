export default {
  ADD(state, payload) {
    state.list.push(payload)
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
