<template>
  <div class="flex justify-around">
    <div>
      <h1 class="text-pink-500 text-xl font-bold pb-2">CONTEÚDO</h1>
      <ul>
        <li><NuxtLink to="/help" class="hover:text-pink-300">Ajuda</NuxtLink></li>
        <li>
          <NuxtLink to="/cart" class="hover:text-pink-300"
            >Carrinho de Compras</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/cupcakes" class="hover:text-pink-300">Cupcakes</NuxtLink>
        </li>
        <li><NuxtLink to="/about" class="hover:text-pink-300">Sobre</NuxtLink></li>
      </ul>
    </div>
    <div>
      <h1 class="text-pink-500 text-xl font-bold pb-2">CONTATO</h1>
      <ul>
       <li class="text-base hover:text-pink-300"><h1><font-awesome-icon icon="fa-solid fa-phone" class="text-pink-400" /> Telefone: (22) 3333-3333</h1></li>
       <li class="text-base hover:text-pink-300"><h1><font-awesome-icon icon="fa-brands fa-whatsapp" class="text-pink-400" /> WhatsApp: (22) 3333-3333</h1></li>
       <li class="text-base hover:text-pink-300"><h1><font-awesome-icon icon="fa-solid fa-envelope" class="text-pink-400" /> E-mail: <a href="mailto:atendimento@sweetycupcakes.com.br">atendimento@sweetycupcakes.com.br</a></h1></li>
       <li class="text-base hover:text-pink-300"><h1><font-awesome-icon icon="fa-brands fa-telegram" class="text-pink-400" /> Telegram: (22) 3333-3333</h1></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>