<template>
  <div id="Balance">
    <div class="resumen">
      <h3><center>Balance</center></h3>
    </div>
    <table class="mt-3">
      <thead>
        <tr class="tr-gray">
          <th scope="col" class="col">Id</th>
          <th scope="col" class="col">Category (Count)</th>
          <th scope="col" class="col">
            Type <i class="fas fa-sort-up sort-symbols"></i>
          </th>
          <th scope="col" class="col">
            Total (COP) <i class="fas fa-sort sort-symbols"></i>
          </th>
          <th scope="col" class="col">Date</th>
        </tr>
      </thead>

      <tbody class="dates">
        <tr v-for="res in transacciones">
          <td v-for="item in res">{{ item }}</td>
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

  created: function () {
    let self = this;
    axios
      .get("https://maney-app-back.herokuapp.com/records/")
      .then((httpResponse) => {       
        for (var registro of httpResponse.data){
          self.transacciones.push(registro);
        }        
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
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