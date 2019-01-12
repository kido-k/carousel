export const state = () => ({
  img_list: ['0_img', '1_img', '2_img'],
  position: 0
})

export const getters = {
  getImageList: state => state.img_list,
  getPosition: state => state.position
}

export const mutations = {
  addImageName(state, { name }) {
    state.name.push(name)
  },
  nextPosition(state) {
    if (state.position < state.img_list.length - 1) {
      state.position++
    }
  },
  prevPosition(state) {
    if (state.position > 0) {
      state.position--
    }
  }
}

export const actions = {
  // async addImage({ commit }, name) {
  //   commit('addImageName', name)
  // },
  // async update({ commit }) {
  //   commit('updatePosition', 1)
  // },
  nextPosition({ commit }) {
    commit('nextPosition')
  },
  prevPosition({ commit }) {
    commit('prevPosition')
  }
}
