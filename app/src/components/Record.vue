<template>
  <div id="create_record">
    <div  class="container">
      <div class="resumen">
      <div class="titulo-tabla"><center>New Record</center></div>
      </div>
      <form v-on:submit.prevent="processCreateRecord" class="nueva_transaccion">
        <div>Type</div>
        <div>
          <select name="Type" id="type" v-model="record_in.tipo" class="form-control" required>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <br />
        <div>Category</div>
        <div>
          <select name="Type" id="category" v-model="record_in.categoria" class="form-control" required>
            <option>Salary</option>
            <option>Food</option>
            <option>Health</option>
            <option>Pet</option>
            <option>Beauty</option>
          </select>
        </div>
        <br />

        <div>Date</div>
        <div>
          <input class="form-control" required
            type="date"
            v-model="record_in.fecha_registro"
            placeholder="Date"
            id="date"
          />
        </div>
        <br />

        <div>Amount</div>
        <div>
          <input class="form-control" required
            type="num"
            v-model="record_in.cantidad"
            placeholder="Amount"
            id="amount"
          />
        </div>
        <br />

        <button type="submit" class="btn btn-primary btn-maney">Add Record</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "create_record",
  data: function () {
    return {
      record_in: {
        categoria: "",
        tipo: "",
        cantidad: "",
        fecha_registro: "",
      },
    };
  },

  methods: {
    processCreateRecord() {
      var self = this;
      axios
        .post("https://maney-app-back.herokuapp.com/record", self.record_in, { headers: {} })
        .then((result) => {
          console.log(result.data)
          alert("Successful registration");
          location.reload();
        })
        .catch(e => console.log('Error creating record: ', e));
    }
  },
};
</script>