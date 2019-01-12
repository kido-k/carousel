export const state = () => ({
  img_list: ['0_img', '1_img', '2_img'],
  position: 0,
  transition_name: 'next'
})

export const getters = {
  getImageList: state => state.img_list,
  getPosition: state => state.position,
  getTransitionName: state => state.transition_name
}

export const mutations = {
  nextPosition(state) {
    state.transition_name = 'next'
    if (state.position < state.img_list.length - 1) {
      state.position++
    } else {
      state.position = 0
    }
  },
  prevPosition(state) {
    state.transition_name = 'prev'
    if (state.position > 0) {
      state.position--
    } else {
      state.position = state.img_list.length - 1
    }
  }
}

export const actions = {
  nextPosition({ commit }) {
    commit('nextPosition')
  },
  prevPosition({ commit }) {
    commit('prevPosition')
  }
}
