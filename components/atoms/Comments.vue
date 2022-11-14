<template>
  <div class="">
    <h1 class="text-pink-500 text-4xl font-black p-6 fontsweety">{{ name }}</h1>
    <div class="grid grid-cols-3 gap-4 p-6">
      <div v-for="i in comments" :key="i" class="text-center p-4">
        <div class="border border-gray-100 p-4">
          <img :src="takeImage(i.img)" alt="Foto dos Clientes" class="border border-white rounded-md h-36 w-40 m-auto object-cover pb-3" />
          <hr>
          <h1 class="fontsweety p-4 text-pink-500">{{ i.name }}</h1>
          <h1 class="text-gray-500">{{ i.message }}</h1>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Avaliações",
      comments: [
        {
          name: "John Doe",
          img: 'profile3.jpg',
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos explicabo ratione voluptatem ut repellendus hic, blanditiis magnam sit perferendis quisquam, sint aspernatur sequi expedita itaque, eaque pariatur molestiae amet!",
        },
        {
          name: "Jane Doe",
          img: 'profile2.jpg',
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos explicabo ratione voluptatem ut repellendus hic, blanditiis magnam sit perferendis quisquam, sint aspernatur sequi expedita itaque, eaque pariatur molestiae amet!",
        },
        {
          name: "Jane Doe",
          img: 'profile1.jpg',
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos explicabo ratione voluptatem ut repellendus hic, blanditiis magnam sit perferendis quisquam, sint aspernatur sequi expedita itaque, eaque pariatur molestiae amet!",
        },
      ],
    };
  },
  methods: {
    takeImage(img) {
      return require(`@/assets/profiles/${img}`)
    },
  }
};
</script>

<style>
</style>