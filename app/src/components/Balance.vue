<template>
  <div id="Balance">
   
    <div class="resumen">
      <h3><center>Balance</center></h3>
    </div>
    <table class="table table-striped table-sm mt-3">
      <thead>
        <tr class="tr-gray">
          
          <th scope="col" class="col">Category (Count)</th>
          <th scope="col" class="col">
            Type <i class="fas fa-sort-up sort-symbols"></i>
          </th>
          <th scope="col" class="col">
            Total (COP) <i class="fas fa-sort sort-symbols"></i>
          </th>
          <th scope="col" class="col">Date</th>
          <th scope="col" class="col">Action</th>
        </tr>
      </thead>

      <tbody class="dates">
        <tr v-for="row in transacciones"  v-bind:key = "row">
          <td>{{row.categoria}}</td>
          <td>{{row.tipo}}</td>
          <td>{{row.cantidad}}</td>
          <td>{{row.fecha_registro}}</td>
          <td><i class="fas fa-trash-alt" v-on:click="deleteTransaccion(row.id)"></i></td>
        </tr>
      </tbody>
    </table>
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
      .get("https://maney-app-back.herokuapp.com/records")
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
        .delete("https://maney-app-back.herokuapp.com/record/"+id)
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

.tr-gray {
  background: rgb(192, 192, 192);
  font: 15px ubuntu;
  height: 30px;
}
</style>