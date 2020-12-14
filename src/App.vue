<template>
  <div id="app">
    
    <div class="header">
      
      <h1>Maney</h1>
      
      
      <nav>
        <button v-on:click="getBalance" v-if="is_auth" > Saldo </button>
        <button v-if="is_auth" > Transacción </button>
        <button v-if="is_auth" >Cerrar Sesión</button>
      </nav>
    </div>

    <div class="main-component">
      <img src="/assets/logo.png" alt="logo">

    </div>

    <body>
      <table>
 
      </table>
    </body>
    
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>



  </div>

</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
