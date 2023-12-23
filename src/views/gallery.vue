<template>
  <div>
    <navbar />
    <div class="lg:px-28 bg-textPrimary">
      <vueper-slides
        ref="vueperslides1"
        :touchable="false"
        fade
        :autoplay="false"
        :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
        fixed-height="900px"
        class="w-full"
      >
        <vueper-slide
          style="background-size: 100%"
          class="max-w-[500px] object-contain size bg-center bg-no-repeat m-auto"
          v-for="(slide, i) in galleries"
          :key="i"
          :image="slide.url"
          :content="slide.caption"
        >
        </vueper-slide>
      </vueper-slides>
      <vueper-slides
        class="no-shadow thumbnails mt-5"
        ref="vueperslides2"
        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
        :visible-slides="3"
        fixed-height="200px"
        :bullets="false"
        :touchable="false"
        :gap="2.5"
        :arrows="false"
      >
        <vueper-slide
          style="
            width: 70px;
            object-fit: contain;
            background-size: 100%;
            background-position: center center;
            background-repeat: no-repeat;
            margin: auto;
            margin-bottom: 0px;
          "
          v-for="(slide, i) in galleries"
          :key="i"
          :image="slide.url"
          @click.native="$refs.vueperslides2.goToSlide(i)"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
    <footerVue />
  </div>
</template>

<style>
.vueperslides__arrow svg {
  stroke: black;
}

.vueperslides--fixed-height.vueperslides--bullets-outside {
  margin-bottom: 0px;
}
.vueperslides {
  z-index: -1;
}
</style>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import navbar from '@/components/navbar.vue'
import footerVue from '@/components/footer.vue'
import { useDataStore } from '../stores/data'

export default {
  components: { VueperSlides, VueperSlide, navbar, footerVue },
  data: () => ({
    slides: []
  }),
  mounted() {
    this.dataStore.retrieveGalleries()
  },
  computed: {
    galleries() {
      return this.dataStore.galeries
    }
  },
  setup() {
    const dataStore = useDataStore()
    return { dataStore }
  }
}
</script>
