<template>
  <div class="carousel">
    <div>
      <button
        @click="autoSlide">check</button>
    </div>
    <transition-group
      :name="transition_name"
      class="image"
      tag="div">
      <div
        v-for="(img, idx) in img_list"
        v-show="idx == position"
        :key="img">
        <a
          href="/">
          <img
            :src="`${setOpenedImg(img)}`"
            :alt="img">
        </a>
      </div>
    </transition-group>
    <div class="navibar">
      <div>
        <button
          class="navi left"
          @click="prevPosition">＜</button>
      </div>
      <div>
        <button
          class="navi right"
          @click="nextPosition">＞</button>
      </div>
      <div>
        <transition-group
          tag="ul"
          class = "indicator">
          <li
            v-for="(img, idx) in img_list"
            :key="img"
            :class="`${position === idx ? 'active dot' : 'dot'}`"/>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
  height: 350px;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
}
.image {
  display: flex;
}
img {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
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
  background-color: rgb(255, 147, 147);
}
.next-enter-active,
.next-leave-active,
.prev-enter-active,
.prev-leave-active {
  transition: all 0.4s;
}
.next-enter,
.prev-leave {
  transform: translateX(150%);
}
.next-leave,
.prev-enter {
  transform: translateX(-150%);
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      transition_name: 'main/getTransitionName',
      position: 'main/getPosition',
      img_list: 'main/getImageList'
    })
  },
  methods: {
    ...mapActions('main', ['nextPosition', 'prevPosition', 'autoSlide']),
    setOpenedImg(img) {
      return require('~/assets/img/toppage/' + img + '.png')
    }
  }
}
</script>
