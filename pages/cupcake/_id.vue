<template>
  <div class="container mx-auto">
    <div v-for="p in product" :key="p" class="grid grid-cols-2 grid-rows-1">
      <div class="">
        <img :src="takeImage(p.img)" alt="" class="container mx-auto p-20" />
      </div>
      <div class="pt-20">
        <h1 class="fontsweety text-4xl pb-4 text-pink-500">{{ p.title }}</h1>
        <p class="pb-4 text-gray-500">{{ p.description }}</p>
        <div class="pb-4">
          <hr>
        </div>
        <div class="flex">
          <div class="mr-10">
            <h1 class="block text-xl">Preço: </h1>
            <h2 class="fontsweety text-2xl  font-bold text-pink-500"> {{ convertValue(p.price) }} </h2>
            <h3 class="text-xl text-gray-500">12x <p class="inline">R$ 0,91</p></h3>
          </div>
        <div>
          <label class="block text-xl  pb-2" for="quantity">Quantidade:</label>
        <input class="border rounded border-pink-500 h-11 text-center" type="number" id="quantity" name="quantity" min="1" max="5" value="1">
        <button @click="addItem(p.id)" class="text-white font-thin bg-pink-500 rounded p-3 border border-pink-100 hover:bg-pink-200"> <font-awesome-icon icon="fa-solid fa-cart-shopping" /> Adicionar ao Carrinho</button>
        </div>
        </div>
        <div class="pt-4">
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          title: "Cupcake Brigadeiro",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore pariatur, dolores ipsam dignissimos recusandae vel itaque sequi modi voluptate vero necessitatibus asperiores natus veritatis consequatur ad hic ea suscipit.",
          img: "cupcake3.png",
          price: 10.99
        },
      ],
    };
  },
  methods: {
    convertValue(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    takeImage(img) {
      return require(`@/assets/cupcakes/${img}`)
    },
    addItem(id) {
      this.$store.dispatch('addCupcakeToCart', id)
    }
  }
};
</script>

<style>
</style>