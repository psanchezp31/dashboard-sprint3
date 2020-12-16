<template>
  <div id="app">

     <div class="header">
      <div class ="banner">
        <img src="./logo2.png" alt="logo"/>
      </div>
    </div> 

    <body class = "cuerpo">
      <div class="resumen">
        <h3><center> Summary </center></h3>
      </div>

      <table class ="tabla_balance">
        <tr>
          <th scope="row">Total Income</th>
          <td><b>$</b> 600000</td>
        </tr>
        <tr>
          <th scope="row">Total Expense</th>
          <td><b>$</b> 150000</td>
        </tr>        
      </table>

      <table class = "tabla_lista">
        <thead>
        <tr>
          <th scope="col" class="coltitulo">Status</th>
          <th scope="col" class="coltitulo">Category (Count)</th>
          <th scope="col" class="coltitulo">Value (COP)</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <td class="claro">+</td>
          <td class="claro">Salary</td>
          <td class="claro">600000</td>
        </tr>

        <tr>
          <td class="oscuro">-</td>
          <td class="oscuro">Market</td>
          <td class="oscuro">150000</td>
        </tr>

        </tbody>
      </table>
      <NewRecordForm />   <!-- DAVID -->
    </body>

    <div class="botones">
      <nav>
        <button class="income" v-on:click="getBalance" v-if="is_auth">Add Income</button>
        <button  class="expense" v-on:click="getBalance" v-if="is_auth">Add Expense</button>
      </nav>
    </div>

    <div class="footer">
      <h5>Misión TIC 2022</h5>
    </div>

  </div>
</template>

<script>
import NewRecordForm from './components/NewRecordForm'; // DAVID

export default {
  name: 'App',
  components:{NewRecordForm},
  
  data:function() {
    return {
      is_auth:localStorage.getItem('isAuth') || false
    }
  },
}
</script>

<style>
body{
margin: 0 0 0 0;
}
  .header>.banner img{
    background: #24527A;
    width: 400px;
    height:100%;
    margin:auto;
    display:flex;
    justify-content:center;
  }
  .header{
    background: #24527A;
    display:grig;
    grid-template-columns:1fr;
    grid-gap:100px;
    width: 100%;
  }

  .cuerpo {
    height: 65vh;
    margin: 0%;
    padding: 0%;
    background: #FDFEFE;
  }
  .resumen{
    background: #3b83c2;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px; 
    margin-bottom: 10px; 
    height: 40px;
    font: 17px ubuntu;
  } 

  .resumen h3{
    color: #000000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  } 

  .tabla_balance{
    border: 1px rgb(156, 156, 156) solid;
    border-collapse: collapse;;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    text-align: center;
    font: 15px ubuntu;
  }

  .tabla_balance th,td {
    border-bottom: 1px rgb(156, 156, 156) solid;
    height: 50px;
  }

  .coltitulo{
    background: #a3a3a3;
    height: 30px;
    border-left: 1px rgb(156, 156, 156) solid;
    font: 15px Medium 500 ubuntu;
  }

  .claro{
    background:#ffffff;
    height: 30px;
    border-left: 1px rgb(156, 156, 156) solid;
  }

  .oscuro{
    background:#e0e0e0;
    height: 30px;
    border-left: 1px rgb(156, 156, 156) solid;
  }

  .tabla_lista{
    border: 1px rgb(156, 156, 156) solid;
    border-collapse: collapse;;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    text-align: center;
    margin-top: 50px; 
    margin-bottom: 10px; 
    font: 15px ubuntu;
  }
  
  .tabla_lista th,td {
    border-bottom: 1px rgb(156, 156, 156) solid;
    height: 30px;
  }

  .footer {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50px; 
    background-color: #24527A;
    color: #5DACBD;
    position: fixed;      /* DAVID */
    left: 0;              /* DAVID */
    bottom: 0;            /* DAVID */
  }
  .footer h5 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font: 100% ubuntu;
  }

  .botones nav{
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .income {
    color:  #000000;
    background: #3b83c2;
    border: 1px solid  #3b83c2;
    border-radius: 100px;
    padding: 10px 20px;
    font: 15px ubuntu;
    margin-right: 50px;
    font-weight: 600;
  }

   .expense {
    color: #000000;
    background: #e41313;
    border: 1px solid #e41313;
    border-radius: 100px;
    padding: 10px 20px;
    font: 15px ubuntu;
    margin-left: 50px;
    font-weight: 600;
  }
</style>

