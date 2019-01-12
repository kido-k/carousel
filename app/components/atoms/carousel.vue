<template>
  <div class="carousel">
    <a href="/">
      <img
        :src="`${setOpenedImg(position)}`"
        alt="">
    </a>
    <h3>Position: {{ position }}</h3>
    <div class="navibar">
      <div>
        <transition name="slide">
          <button
            class="navi left"
            @click="prevPosition">＜</button>
        </transition>
      </div>
      <div>
        <button
          class="navi right"
          @click="nextPosition">＞</button>
      </div>
      <div
        class = "indicator">
        <div
          v-for="(img, idx) in img_list"
          :key="idx"
          :class="`${position === idx ? 'active dot' : 'dot'}`"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
  min-width: 1020px;
  max-width: 1890px;
  height: 350px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
}
img {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  height: 300px;
}
.navibar {
  height: 50px;
  width: 30%;
  margin: 0 35% 0 35%;
}
.navi {
  position: absolute;
  font-size: 16px;
}
.right {
  right: 5%;
}
.left {
  left: 5%;
}
.indicator {
  display: flex;
  justify-content: space-between;
}
.dot {
  background-color: lightgray;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 5px 0 0 0;
}
.active {
  background-color: red;
}
/* .v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: opacity 300ms ease-out;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: opacity 300ms ease-out;
} */
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  // data: function() {
  //   return {
  //     image_src: require('~/assets/img/toppage/1_img1.png')
  //   }
  // },
  computed: {
    ...mapGetters({
      position: 'main/getPosition',
      img_list: 'main/getImageList'
    })
  },
  methods: {
    ...mapActions('main', ['nextPosition', 'prevPosition']),
    setOpenedImg(pos) {
      return require('~/assets/img/toppage/' + pos + '_img.png')
    }
  }
}
</script>
