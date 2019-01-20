export const state = () => ({
  param: '',
  img_size: { width: 1890 * 3, height: 300 },
  img_list: ['0_img', '1_img', '2_img'],
  position: 0,
  transition_name: 'next',
  window_size: { width: 0, height: 0 }
})

export const getters = {
  getImageWidth: state => state.img_size.width,
  getImageHight: state => state.img_size.height,
  getImageList: state => state.img_list,
  getPosition: state => state.position,
  getTransitionName: state => state.transition_name
}

export const mutations = {
  setInitParam(param) {
    state.param = param
    console.log(param)
  },
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
  async getInitParam({ commit }) {
    const param = await this.$axios.$get(`/param.json`)
    commit('setInitParam', param)
  },
  nextPosition({ commit }) {
    commit('nextPosition')
  },
  prevPosition({ commit }) {
    commit('prevPosition')
  },
  autoSlide({ commit }) {
    setInterval(() => {
      commit('nextPosition')
    }, 4000)
  }
}
