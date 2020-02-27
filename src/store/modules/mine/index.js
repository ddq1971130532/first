import Seed from '@/seed.js'

const state = {
  comment: []
}

const mutations = {
  GET_COMMENT (state, comment) {
    console.log('1')
    state.comment = comment
  }
}
const actions = {
  getComment (context) {
    context.commit('GET_COMMENT', Seed.comment)
  }
}

const mineModule = {
  state,
  mutations,
  actions
}

export default mineModule
