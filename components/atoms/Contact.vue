<template>
  <div class="container mx-auto p-4 w-2/3">
    <h1 class="fontsweety text-2xl text-pink-500">Não conseguiu achar o que procurava?</h1>
    <h2 class="text-2xl text-pink-500">Entre em contato</h2>
    <form action="">
        <div class="flex flex-col">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="border border-pink-300 focus:outline-none focus:border-pink-300 p-2 rounded-lg">
        </div>
        <div class="flex flex-col">
            <label for="email">E-mail</label>
            <input type="email" name="email" id="email" class="border border-pink-300 focus:outline-none focus:border-pink-300 p-2 rounded-lg">
        </div>
        <div class="flex flex-col pb-4">
            <label for="message">Mensagem</label>
            <textarea name="message" id="message" cols="30" rows="10" class="border border-pink-300 focus:outline-none focus:border-pink-300 p-2 rounded-lg"></textarea>
        </div>
        <div class="flex justify-center">
            <button class="bg-pink-500 text-white hover:bg-pink-400 p-2 rounded-lg w-40">Enviar</button>
        </div>
    </form>
  </div>
</template>