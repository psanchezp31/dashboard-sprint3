<template>
  <div id="app">
    <div class="header">
      <div class="banner">
        <img src="./logo2.png" alt="logo" />
      </div>
    </div>

    <body class="cuerpo">
      <div class="resumen">
        <h3><center>Total Summary</center></h3>
      </div>

      <table class="tabla_balance">
        <tr>
          <th scope="row">Total Income</th>
          <td><b>$</b> 600000</td>
        </tr>
        <tr>
          <th scope="row">Total Expense</th>
          <td><b>$</b> 150000</td>
        </tr>
      </table>

      <div class="main-component">
        <div class="links">
          <router-link to="/newrecord">New Record</router-link>
          <router-link to="/records">Balance</router-link>
        </div>
        <router-view></router-view>
      </div>
    </body>

    <div class="footer">
      <h5>Misión TIC 2022</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {}
};
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header > .banner img {
  background: #24527a;
  width: 400px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.header {
  background: #24527a;
  display: grig;
  grid-template-columns: 1fr;
  grid-gap: 100px;
  width: 100%;
}

.cuerpo {
  height: auto;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.resumen {
  background: #3b83c2;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 40px;
  font: 17px ubuntu;
}

.resumen h3 {
  color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabla_balance {
  border: 1px rgb(156, 156, 156) solid;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  text-align: center;
  font: 15px ubuntu;
}

.tabla_balance th,
td {
  border-bottom: 1px rgb(156, 156, 156) solid;
  height: 50px;
}

.coltitulo {
  background: #a3a3a3;
  height: 30px;
  border-left: 1px rgb(156, 156, 156) solid;
  font: 15px Medium 500 ubuntu;
}

.tabla_lista {
  border: 1px rgb(156, 156, 156) solid;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 10px;
  font: 15px ubuntu;
}

.tabla_lista th,
td {
  border-bottom: 1px rgb(156, 156, 156) solid;
  height: 30px;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 50px;
  background-color: #24527a;
  color: #5dacbd;
  padding: 0px;
  left: 0; /* DAVID */
  bottom: 0; /* DAVID */
  position: fixed;
}
.footer h5 {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 100% ubuntu;
  margin: auto;
}

.main-component {
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}

.links {
  text-align: center;
  padding-top: 30px;
}
</style>

