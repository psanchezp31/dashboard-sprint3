<template>
  <div id="app">

     <head>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
  </head>

    <div class="header">
      <div class="banner">
        <img src="./logo2.png" alt="logo" />
      </div>
    </div>

    <body class="cuerpo">
  

      <div class="main-component">
        <TotalSummary />
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
import TotalSummary from './components/TotalSummary';

export default {
  name: "App",
  components:{TotalSummary},
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
  height: 65vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
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

