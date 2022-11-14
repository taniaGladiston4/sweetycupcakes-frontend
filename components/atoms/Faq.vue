<template>
<div>
  <div class="container mx-auto pb-4">
    <h1 class="fontsweety text-pink-500 text-center text-4xl pb-4">Perguntas Frequentes</h1>
    <div class="w-4/5 mx-auto">
      <button class="accordion bg-pink-500 text-white hover:bg-pink-400">
        Quais as opções de Pagamento?
      </button>
      <div class="panel">
        <div class="p-4">
          <p class="">Cartão de Crédito e Débito em até 12x sem juros</p>
          <p class="">Boleto Bancário</p>
          <p class="">Pix</p>
        </div>
      </div>
      <button class="accordion bg-pink-500 text-white hover:bg-pink-400">
        Quais as opções de Pagamento?
      </button>
      <div class="panel">
       <div class="p-4">
          <p class="">Cartão de Crédito e Débito em até 12x sem juros</p>
          <p class="">Boleto Bancário</p>
          <p class="">Pix</p>
        </div>
      </div>
      <button class="accordion bg-pink-500 text-white hover:bg-pink-400">
        Quais as opções de Pagamento?
      </button>
      <div class="panel">
        <div class="p-4">
          <p class="">Cartão de Crédito e Débito em até 12x sem juros</p>
          <p class="">Boleto Bancário</p>
          <p class="">Pix</p>
        </div>
      </div>
      <button class="accordion bg-pink-500 text-white hover:bg-pink-400">
        Quais as opções de Pagamento?
      </button>
      <div class="panel">
        <div class="p-4">
          <p class="">Cartão de Crédito e Débito em até 12x sem juros</p>
          <p class="">Boleto Bancário</p>
          <p class="">Pix</p>
        </div>
      </div>
      <button class="accordion bg-pink-500 text-white hover:bg-pink-400">
        Quais as opções de Pagamento?
      </button>
      <div class="panel">
        <div class="p-4">
          <p class="">Cartão de Crédito e Débito em até 12x sem juros</p>
          <p class="">Boleto Bancário</p>
          <p class="">Pix</p>
        </div>
      </div>
      <button class="accordion bg-pink-500 text-white hover:bg-pink-400">
        Quais as opções de Pagamento?
      </button>
      <div class="panel">
        <div class="p-4">
          <p class="">Cartão de Crédito e Débito em até 12x sem juros</p>
          <p class="">Boleto Bancário</p>
          <p class="">Pix</p>
        </div>
      </div>
    </div>
  </div>
  <hr>
</div>
</template>

<script>
export default {
  mounted() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  },
};
</script>

<style scoped>
.accordion {
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}
.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}
</style>