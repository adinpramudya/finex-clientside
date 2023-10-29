<template>
  <div>
    <navbar />
    <div class="px-28 bg-textPrimary">
      <vueper-slides
        ref="vueperslides1"
        :touchable="false"
        fade
        :autoplay="false"
        :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
        fixed-height="600px"
      >
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          :title="slide.title"
          :content="slide.content"
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
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.image"
          @click.native="$refs.vueperslides2.goToSlide(i)"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
    <footerVue />
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import galeri1 from '@/assets/images/galeri/galeri-1.jpg'
import galeri2 from '@/assets/images/galeri/galeri-2.jpg'
import galeri3 from '@/assets/images/galeri/galeri-3.jpg'
import galeri4 from '@/assets/images/galeri/galeri-4.jpg'
import galeri5 from '@/assets/images/galeri/galeri-5.jpg'
import navbar from '@/components/navbar.vue'
import footerVue from '@/components/footer.vue'

export default {
  components: { VueperSlides, VueperSlide, navbar, footerVue },
  data: () => ({
    slides: [
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri1
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri2
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri1
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri3
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri3
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri4
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri5
      },
      {
        title: 'Blossoming flower',
        content:
          'This video is autoplayed, played in loop, has no controls and is not reacting to user interactions.',
        image: galeri4
      }
    ]
  })
}
</script>
