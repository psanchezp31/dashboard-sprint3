<template>
  <div id="create_record">
    <div class="cuerpo">
      <div class="resumen">
        <h3><center>New Record</center></h3>
      </div>
      <form v-on:submit.prevent="processCreateRecord" class="nueva_transaccion">
        <div>Type</div>
        <div>
          <select name="Type" id="type" v-model="record_in.tipo">
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
        <br />
        <div>Category</div>
        <div>
          <select name="Type" id="category" v-model="record_in.categoria">
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
          <input
            type="date"
            v-model="record_in.fecha_registro"
            placeholder="Date"
            id="date"
          />
        </div>
        <br />

        <div>Amount</div>
        <div>
          <input
            type="num"
            v-model="record_in.cantidad"
            placeholder="Amount"
            id="amount"
          />
        </div>
        <br />

        <button type="submit">Add Record</button>
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
        .post("http://127.0.0.1:8000/record", self.record_in, { headers: {} })
        .then((result) => {
          alert("Successful registration");
          self.$emit("log-in", self.record_in.id);
        });
    },

    addExpense(e) {
      e.preventDefault();
      const category = document.querySelector("#category").value;
      const amount = document.querySelector("#amount").value;
      const date = document.querySelector("#date").value;
      if (category.trim() === "" || amount === "") {
        return alert("You shoud fill the fields!");
      }
      this.dataTable.push({
        date: date,
        category: "- " + category,
        amount: amount,
      });
    },

    addIncome(e) {
      e.preventDefault();
      const category = document.querySelector("#category").value;
      const amount = document.querySelector("#amount").value;
      const date = document.querySelector("#date").value;
      if (category.trim() === "" || amount === "") {
        return alert("You shoud fill the fields!");
      }
      this.dataTable.push({
        date: date,
        category: "+ " + category,
        amount: amount,
      });
    },
    detail(e) {
      e.preventDefault();
      alert("ok!!");
    },
  },
};
</script>

<style>
body {
  margin: 0 0 0 0;
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

.nueva_transaccion {
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font: 100% ubuntu;
}
</style>