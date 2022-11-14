<template>
  <div>
    <div class="container mx-auto py-56 w-1/3">
       <div class="mb-4">
        <div class="text-5xl pb-4 font-bold text-pink-500">
            <h1>Login</h1>
        </div>
      <label class="block text-pink-500 text-sm font-bold mb-2" for="username">
        Usuário
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Usuário">
    </div>
    <div class="mb-6">
      <label class="block text-pink-500 text-sm font-bold mb-2" for="password">
        Senha
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************">
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-600" href="#">
        Esqueceu sua Senha?
      </a>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>