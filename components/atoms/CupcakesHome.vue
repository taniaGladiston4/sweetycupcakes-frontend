<template>
  <div class="">
    <h1 class="text-pink-500 text-4xl font-black p-6 fontsweety"> {{ name }} </h1>
    <div class="grid grid-cols-5 place-content-center gap-4 p-6">
    <div v-for="c in cupcakes" :key="c" class="text-center p-4">
      <NuxtLink :to="linkItem(c.id)"><img :src="takeImage(c.img)" alt="Foto Cupcake" class="mx-auto rounded-3xl w-72 h-80" /></NuxtLink>
      <NuxtLink :to="linkItem(c.id)" class="text-black text-lg hover:text-gray-300"> {{ c.name }} </NuxtLink>
      <h2 class="line-through font-bold fontsweety text-gray-500">  {{ convertValue(c.oldValue) }} </h2>
      <h3 class="font-bold text-2xl text-pink-500 fontsweety ">  {{ convertValue(c.newValue) }}</h3>
      <div class="flex flex-row">
    <NuxtLink :to="linkItem(c.id)" class="w-full">
      <button class="text-white font-thin bg-pink-500 rounded p-3 border border-pink-100 hover:bg-pink-400 w-full"> Detalhes</button>
    </NuxtLink>
    <NuxtLink to="">
      <button @click="addItem(c.id)" class="text-white font-thin bg-pink-500 rounded p-3 border border-pink-100 hover:bg-pink-400 h-full"> <font-awesome-icon icon="fa-solid fa-cart-shopping" /></button>
    </NuxtLink>
  </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        name: "Cupcakes",
    };
  },
  created(){
    this.$store.dispatch('getCupcakes')
  },
  computed: {
    cupcakes(){
      return this.$store.getters.cupcakes
    }
  },
  methods: {
    convertValue(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    takeImage(img) {
      return require(`@/assets/cupcakes/${img}`)
    },
    linkItem(id) {
      return `/cupcake/${id}`
    },
    addItem(id) {
      this.$store.dispatch('addCupcakeToCart', id)
    }
  }
};
</script>