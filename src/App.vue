<template>
  <div id="app">
    <div class="header">
      <h1>Maney</h1>

      <nav>
        <button v-on:click="getBalance" v-if="is_auth">Saldo</button>
        <button v-if="is_auth">Transacción</button>
        <button v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>

    <div class="main-component">
      <img src="/src/facebook_cover_photo_1.png" alt="logo" />
    </div>

    <body>
      <table>
        <tr>
          <th scope="row">Total Income</th>
          <td>50000</td>
        </tr>
        <tr>
          <th scope="row">Total Expenses</th>
          <td>50000</td>
        </tr>        
      </table>

      <table>
        <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Value</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td>Salary</td>
          <td>600000</td>
        </tr>
        </tbody>
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
