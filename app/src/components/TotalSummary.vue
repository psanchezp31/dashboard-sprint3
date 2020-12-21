<template>
 <div id="app">
  <div class="container">
    <div class="resumen">
      <div class="titulo-tabla"><center>Total Summary</center></div>
    </div>
      <table class="table table-striped tabla-summary">
        <tbody>
          <tr>
            <td scope="row"><strong>Total Income</strong></td>
            <td>{{ new Intl.NumberFormat('es-CO', {style: "currency", currency: "COP"}).format(total_income).replace(',00', '') }}</td>
          </tr>
          <tr>
            <td scope="row"><strong>Total Expense</strong></td>
            <td>{{ new Intl.NumberFormat('es-CO', {style: "currency", currency: "COP"}).format(total_expense).replace(',00', '') }}</td>
          </tr>
        </tbody>
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