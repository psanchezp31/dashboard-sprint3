<template>
  <div id="app">
      <div class="body-div">

        <table class="table table-striped table-sm mt-3">
          <thead>
            <tr class="tr-gray">
              <th scope="col">Date</th>
              <th scope="col">Category (Count) <i class="fas fa-sort-up sort-symbols"></i></th>
              <th scope="col">Total (COP) <i class="fas fa-sort sort-symbols"></i></th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr class="income-tr">
              <td>+ Salary (1)</td>
              <td>$855.000</td>
            </tr> -->
            <tr v-for="item in dataTable" :key="dataTable.indexOf(item.categ)">
              <td>{{ item.date }}</td>
              <td>{{ item.category }}</td>
              <td>{{ new Intl.NumberFormat('es-CO', {style: "currency", currency: "COP"}).format(item.amount) }}</td>
              <td><i class="fas fa-eye" @click="detail"></i></td>
            </tr>
          </tbody>
        </table>

        <form class="form-2">
          <div class="form-group">

            <legend>New Record</legend>

            <div class="row mt-3">
              <div class="col">
                Category
                <input type="text" class="form-control-plaintext" id="category">
              </div>
              <div class="col">
                Amount
                <input type="number" class="form-control-plaintext" id="amount">
              </div>
            </div>

            <!-- <div class="mt-3">
              <span class="padd-left-15px">Date</span>
              <div class="row">
                <div class="col">
                  <Datepicker/>
                </div>
              </div>
            </div> -->

            <div class="row mt-3">
              <div class="col">
                <button @click="addExpense" class="btn btn-danger btn-add">Add Expense</button>
              </div>
              <div class="col">
                <button @click="addIncome" class="btn btn-success btn-add">Add Income</button>
              </div>
            </div>

          </div>
        </form>
        
        <div class="height-150"></div>

      </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  // import Datepicker from './Datepicker';

  export default {
    // components: { Datepicker },
    name: 'app',
    data () {
      let dataTable = [];
      return {
        dataTable,
      }
    },
    methods: {
      addExpense(e) {
        e.preventDefault();
        const category = document.querySelector('#category').value;
        const amount = document.querySelector('#amount').value;
        if(category.trim() === '' || amount === ''){return alert('You shoud fill the fields!')};
        this.dataTable.push({
          date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(), 
          category: '- ' + category, 
          amount: amount
        })
      },
      addIncome(e) {
        e.preventDefault();
        const category = document.querySelector('#category').value;
        const amount = document.querySelector('#amount').value;
        if(category.trim() === '' || amount === ''){return alert('You shoud fill the fields!')};
        this.dataTable.push({
          date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(), 
          category: '+ ' + category, 
          amount: amount
        })
      },
      detail(e){
        e.preventDefault();
        alert('ok!!');
      }
    },
  }
</script>

<style>
  .header-div, .footer-div {
    background-color: #317022;
    color: white;
    width: 100%;
    height: 70px;
    text-align: center;
  }
  .header-div {
    font-size: 2.5rem;
  }
  .footer-div {
    bottom: 0;
    padding: 20px 0;
  }
  .body-div {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 35px;
    margin-bottom: 35px;
  }
  .sort-symbols, .calendar-icon {
    float: right;
    cursor: pointer; 
    margin-top: 7px;
  }
  .calendar-icon {
    font-size: xx-large;
  }
  .btn-1 {
    margin-left: 30px;
    width: 50%;
  }
  .tr-gray {
    background: rgb(192, 192, 192);
  }
  .income-tr {
    background-color: #92c299 !important;
  }
  #amount, #category {
    border-bottom: 1px solid;
  }
  #date {
    width: 90%;
    display: inline;
  }
  .btn-add {
    width: 100%;
  }
  .form-2 {
    padding: 15px;
    border: 1px solid;
  }
  .padd-left-15px {
    padding-left: 15px;
  }
  .height-150 {
    height: 150px;
  }
</style>