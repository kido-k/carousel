<template>
  <div class="carousel">
    <ul
      :style="{width:img_width + 'px',
               height:imgHeight + 'px',
               marginLeft:calcImgMaginLeft + 'px'}"
      class="imagedata"
    >
      <li
        v-for="img in img_list"
        :key="img">
        <img
          :src="`${setOpenedImg(img)}`"
          :alt="`${img}`"
          :style="{height:imgHeight + 'px',
                   width:imgWidth + 'px'}">
      </li>
    </ul>
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
        <ul
          :style="{width:indWidth + 'px',
                   marginLeft:calcIndiMaginLeft + 'px'}"
          class = "indicator">
          <li
            v-for="(img, idx) in img_list"
            :key="img"
            :class="`${position === idx ? 'active dot' : 'dot'}`"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
  min-width: 1020px;
  max-width: 1890px;
  margin: 0;
  background-color: white;
  overflow: hidden;
}
.imagedata {
  display: flex;
  margin: 0;
  padding: 0;
  transition: margin-left 1s ease;
}
.navibar {
  height: 50px;
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
  width: 100%;
  /* padding: 0 30%; */
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 0;
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
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: function() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },
  computed: {
    ...mapGetters({
      transition_name: 'main/getTransitionName',
      position: 'main/getPosition',
      img_list: 'main/getImageList',
      img_width: 'main/getImageWidth',
      img_height: 'main/getImageHight'
    }),
    imgHeight: function() {
      return (
        this.$store.state.main.img_size.height *
        (this.width / (this.$store.state.main.img_size.width / 3))
      )
    },
    imgWidth: function() {
      return this.width
    },
    calcImgMaginLeft: function() {
      return -1 * this.width * this.$store.state.main.position
    },
    calcIndiMaginLeft: function() {
      return this.width * 0.35
    },
    indWidth: function() {
      return this.width * 0.3
    }
  },
  mounted() {
    this.$store.dispatch('main/autoSlide')
  },
  created: function() {
    window.addEventListener('resize', this.handleResize, false)
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize, false)
  },
  methods: {
    ...mapActions('main', ['nextPosition', 'prevPosition', 'autoSlide']),
    setOpenedImg(img) {
      return require('~/assets/img/toppage/' + img + '.png')
    },
    handleResize: function() {
      this.width = window.innerWidth
      this.height = window.innerHeight
    }
  }
}
</script>
