<template>
  <div>
    <div class="flex text-white text-lg" v-if="login">
    <div class="ml-auto">
      <NuxtLink to="login"><h1 class="inline fontsweety text-base text-pink-500"> Login</h1></NuxtLink>
    </div>
  </div>
    <div class="flex text-white text-lg" @click="toggleModal()" v-else>
    <div class="ml-auto">
      <NuxtLink to=""><font-awesome-icon icon="fa-solid fa-cart-shopping" class="text-pink-500 " /> <h1 class="inline fontsweety text-base text-pink-500"> Meu Carrinho</h1></NuxtLink>
    </div>
  </div>
    <div v-if="showModal" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
      <div class="relative w-auto my-6 mx-auto max-w-6xl">
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-3xl font-semibold text-pink-500">
              Carrinho de Compras
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="toggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <div class="grid grid-cols-6 text-lg font-semibold text-pink-500">
                <h1></h1>
                <h1 class="col-span-2">Nome</h1>
                <h2 class="mx-auto">Preço</h2>
                <h3 class="mx-auto">Quantidade</h3>
              </div>
            <div class="grid grid-cols-6 items-center pb-2 text-lg font-semibold text-pink-500" v-for="i in cart" :key="i">
              <img :src="takeImage(i.img)" alt="" class="h-32 rounded mx-auto">
              <div class="flex flex-col col-span-2">
                <h1 class=""> {{ i.name }}</h1>
              </div>
              <div class="pl-5">
                <h1 class="">{{ convertValue(i.oldValue) }} </h1>
              </div>
              <div class="mx-auto">
                <h1 class="">x1</h1>
              </div>
              <div class="mx-auto">
                <button class="bg-pink-500 text-white px-4 py-2 rounded-lg" @click="removeItem(i.id)"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
              </div>
            </div>
          </div>
          <!--footer-->
          <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Fechar
            </button>
            <NuxtLink to="checkout">
            <button class="text-white bg-green-500 h-12 rounded font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="toggleModal()">
              Finalizar Compras
            </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
export default {
  name: "large-modal",
  data() {
    return {
      showModal: false,
      login: false,
    }
  },
  methods: {
    toggleModal: function(){
      this.showModal = !this.showModal;
    },
    convertValue(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    },
    takeImage(img) {
      return require(`@/assets/cupcakes/${img}`)
    },
    removeItem(id) {
      this.$store.dispatch('removeCupcakeFromCart', id)
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart
    }
  },
  created() {
    // this.$store.dispatch('cart')
  }
}
</script>