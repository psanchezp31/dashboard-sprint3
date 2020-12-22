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

    <div class="footer">
      <h5>Misión TIC 2022</h5>
    </div>
      
    </body>
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

