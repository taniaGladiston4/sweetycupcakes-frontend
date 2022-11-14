<template>
  <div class="mx-auto container">
    <VueSlickCarousel v-bind="settings">
      <img src="@/assets/cupcake1.png" alt="" class="h-72 cover"/>
      <img src="@/assets/cupcake2.png" alt="" class="h-72 cover"/>
      <img src="@/assets/cupcake3.png" alt="" class="h-72 cover"/>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        autoplay: true,
        arrows: true,
        dots: true,
      },
    };
  },
};
</script> 