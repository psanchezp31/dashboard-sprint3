<template>
  <div id="Balance">
   
    <div class="container">
    <div class="resumen">
      <div class="titulo-tabla"><center>Balance</center></div>
    </div>
    <table class="table table-striped table-sm mt-3">
      <thead>
        <tr class="tr-gray d-flex">
          
          <th scope="col" class="col col-3">Category (Count)</th>
          <th scope="col" class="col col-2 text-center">
            Type
          </th>
          <th scope="col" class="col col-2 text-center">
            Total (COP)
          </th>
          <th scope="col" class="col col-3 text-center">Date</th>
          <th scope="col" class="col col-2 text-center">Action</th>
        </tr>
      </thead>

      <tbody class="dates">
        <tr v-for="row in transacciones" v-bind:key="transacciones.indexOf(row)" class="d-flex">
          <td class="col col-3">{{row.categoria}}</td>
          <td class="col col-2 text-center">{{row.tipo}}</td>
          <td class="col col-2 text-center">{{ new Intl.NumberFormat('es-CO', {style: "currency", currency: "COP"}).format(row.cantidad).replace(',00', '') }}</td>
          <td class="col col-3 text-center">{{row.fecha_registro}}</td>
          <td class="col col-2 text-center"><i class="fas fa-trash-alt cursor-pointer" v-on:click="deleteTransaccion(row.id)"></i></td>
        </tr>
      </tbody>
    </table>
  </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Balance",
  data: function () {
    return {
      transacciones: [],
    };
  },
  
  methods: {
    getData(){
      let self = this;
      axios
      .get("http://maney-app-back.herokuapp.com/records")
      .then((httpResponse) => {       
        for (var registro of httpResponse.data){
          self.transacciones.push(registro);
        }        
      })
      .catch((error) => {
        alert("Error in server");
      });
    },
    deleteTransaccion(id){
      alert("Are you sure you want to delete this record?");
      axios
        .delete("http://maney-app-back.herokuapp.com/record/"+id)
        .then((res)=> {this.transacciones=this.transacciones
        .filter(transacciones=>transacciones.id!==id)
        alert("Record deleted \n           Id: " + id);
        location.reload();
        
      })
      .catch((error) => {
        alert("Error at deleting record \n            id: " + id);
      });
    } 

  },
  mounted () {
    this.getData()
}
}
</script>