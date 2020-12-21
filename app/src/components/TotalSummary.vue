<template>
 <div id="app">
  <div id="Balance">
    <div class="resumen">
      <h3><center>Total Summary</center></h3>
    </div>
      <table class="tabla_balance">
        <tr>
          <th scope="row">Total Income</th>
          <td><b>$ </b>{{total_income}}</td>
        </tr>
        <tr>
          <th scope="row">Total Expense</th>
          <td><b>$ </b>{{total_expense}}</td>
        </tr>
      </table>
    </div>
  </div>

</template>
<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "app",
  data: function () {
    return {
      total_expense:0,
      total_income :0,
    };
  },
  
  methods: {
    getData(){
      let self = this;
      axios
      .get("http://maney-app-back.herokuapp.com/records")
      .then((httpResponse) => { 
        for (var registro of httpResponse.data){
          if (registro.tipo == "Expense"){
            self.total_expense =self.total_expense + registro.cantidad;
          }else{
            self.total_income =self.total_income + registro.cantidad;
        }        
        }
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
    },

  },
  mounted () {
    this.getData()
}
}
</script>
<style>
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

.mt-3 {
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  border-collapse: collapse;
  border-left: 1px rgb(156, 156, 156) solid;
  font: 15px Medium 500 ubuntu;
  border-collapse: collapse;
}

.tr-gray {
  background: rgb(192, 192, 192);
  font: 15px ubuntu;
  height: 30px;
}
</style>